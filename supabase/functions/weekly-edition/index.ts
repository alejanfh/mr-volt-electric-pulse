
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (req.method === 'POST') {
      const { edition_date, intro_text, news_ids } = await req.json()

      if (!edition_date || !news_ids || !Array.isArray(news_ids)) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields: edition_date, news_ids (array)' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      // Crear nueva edición semanal
      const { data: editionData, error: editionError } = await supabaseClient
        .from('weekly_editions')
        .insert({
          edition_date,
          intro_text
        })
        .select()
        .single()

      if (editionError) {
        console.error('Error creating edition:', editionError)
        return new Response(
          JSON.stringify({ error: 'Failed to create weekly edition' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      // Crear items de la edición
      const editionItems = news_ids.map((news_id: string, index: number) => ({
        edition_id: editionData.id,
        news_id,
        display_order: index + 1
      }))

      const { error: itemsError } = await supabaseClient
        .from('edition_items')
        .insert(editionItems)

      if (itemsError) {
        console.error('Error creating edition items:', itemsError)
        return new Response(
          JSON.stringify({ error: 'Failed to create edition items' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      // Marcar noticias como seleccionadas
      await supabaseClient
        .from('news_items')
        .update({ selected_for_edition: true })
        .in('id', news_ids)

      return new Response(
        JSON.stringify({ 
          message: 'Weekly edition created successfully', 
          edition: editionData 
        }),
        { 
          status: 201, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    if (req.method === 'GET') {
      // Obtener última edición con sus noticias usando la función SQL
      const { data, error } = await supabaseClient
        .rpc('get_latest_edition')

      if (error) {
        console.error('Error fetching latest edition:', error)
        return new Response(
          JSON.stringify({ error: 'Failed to fetch latest edition' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      return new Response(
        JSON.stringify({ data }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in weekly-edition:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
