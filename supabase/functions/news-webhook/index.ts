
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (req.method === 'POST') {
      const { title, summary, source_url, image_url, published_at } = await req.json()

      // Validar datos requeridos
      if (!title || !summary || !source_url || !published_at) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields: title, summary, source_url, published_at' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      // Insertar nueva noticia
      const { data, error } = await supabaseClient
        .from('news_items')
        .insert({
          title,
          summary,
          source_url,
          image_url,
          published_at: new Date(published_at).toISOString(),
          selected_for_edition: false
        })
        .select()

      if (error) {
        console.error('Error inserting news:', error)
        return new Response(
          JSON.stringify({ error: 'Failed to insert news item' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      return new Response(
        JSON.stringify({ message: 'News item created successfully', data }),
        { 
          status: 201, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    if (req.method === 'GET') {
      // Obtener todas las noticias ordenadas por fecha
      const { data, error } = await supabaseClient
        .from('news_items')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(50)

      if (error) {
        console.error('Error fetching news:', error)
        return new Response(
          JSON.stringify({ error: 'Failed to fetch news items' }),
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
    console.error('Error in news-webhook:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
