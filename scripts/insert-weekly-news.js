
// Script para insertar las noticias de la semana manualmente
// Ejecutar con: node scripts/insert-weekly-news.js

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nyreibhwxcgdpaydtiur.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55cmVpYmh3eGNnZHBheWR0aXVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTUzODgyMiwiZXhwIjoyMDY3MTE0ODIyfQ.7Z8wQd0TcVYQZUpbDnE4zXlRIVXWsOhFt3EB2Mz9-nQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const newsItems = [
  {
    title: 'Récord histórico: España supera las 11.000 matriculaciones de coches eléctricos en junio',
    summary: 'España ha alcanzado un hito en la movilidad eléctrica al superar por primera vez las 11.000 matriculaciones mensuales de coches eléctricos. En junio de 2025, se registraron 11.514 unidades, lo que representa un aumento del 104% respecto al mismo mes del año anterior. Este crecimiento se atribuye a las ayudas gubernamentales, como el Plan Reinicia Auto+, y al incremento del poder adquisitivo de los consumidores. Los vehículos eléctricos puros y los híbridos enchufables ya representan más del 20% de las ventas totales de turismos en el país.',
    source_url: 'https://cincodias.elpais.com',
    image_url: 'https://images.unsplash.com/photo-1593941707570-4b32a97b8db1?w=400&h=240',
    published_at: '2025-07-01T10:00:00Z',
    selected_for_edition: true
  },
  {
    title: 'Colmenar Viejo elimina la gratuidad de los cargadores municipales para vehículos eléctricos',
    summary: 'El Ayuntamiento de Colmenar Viejo ha decidido poner fin al servicio gratuito de carga para vehículos eléctricos en sus estaciones municipales, una iniciativa que comenzó en 2017 para promover la movilidad sostenible. Desde su implementación, se instalaron tres puntos de carga gratuita y se distribuyeron 750 tarjetas para usuarios. En el último año, se realizaron 3.150 recargas, suministrando 62.235 kWh.',
    source_url: 'https://cadenaser.com',
    image_url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=240',
    published_at: '2025-07-03T14:30:00Z',
    selected_for_edition: true
  },
  {
    title: 'Nuevas señales de tráfico en España: más claras y adaptadas a la movilidad eléctrica',
    summary: 'El 1 de julio de 2025 entró en vigor un nuevo Reglamento General de Circulación en España, que introduce una actualización integral del catálogo de señales de tráfico. La reforma incluye alrededor de 90 nuevas señales, más de 20 modificaciones y la eliminación progresiva de nueve señales obsoletas. Esta renovación responde a la necesidad de adaptar la señalización a los cambios en la movilidad.',
    source_url: 'https://cadenaser.com',
    image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240',
    published_at: '2025-07-03T09:15:00Z',
    selected_for_edition: true
  },
  {
    title: 'Incertidumbre sobre la puesta en marcha de los TRAM eléctricos en Castellón este verano',
    summary: 'La Generalitat Valenciana no puede asegurar que los nuevos convoyes eléctricos del TRAM de Castellón, destinados a conectar la ciudad con la playa del Gurugú, estén en funcionamiento durante el verano de 2025. A pesar de una inversión de más de 3 millones de euros, estos vehículos llevan más de diez meses sin operar debido a problemas en la infraestructura de recarga.',
    source_url: 'https://cadenaser.com',
    image_url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=240',
    published_at: '2025-07-01T16:45:00Z',
    selected_for_edition: true
  },
  {
    title: 'El Gobierno lanza nuevos programas MOVES con 200 millones en ayudas para la movilidad eléctrica',
    summary: 'El Ejecutivo español ha activado nuevos fondos europeos para impulsar la movilidad eléctrica, con incentivos destinados a la renovación de flotas y al despliegue de puntos de recarga en todo el país. Estos programas, que forman parte del ecosistema MOVES, contemplan hasta 200 millones de euros en ayudas para la compra de vehículos eléctricos y la instalación de infraestructuras de recarga.',
    source_url: 'https://lasexta.com',
    image_url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240',
    published_at: '2025-06-24T11:20:00Z',
    selected_for_edition: true
  }
];

async function insertWeeklyNews() {
  try {
    console.log('🚀 Insertando noticias de la semana...');
    
    // Insertar noticias
    const { data: insertedNews, error: newsError } = await supabase
      .from('news_items')
      .insert(newsItems)
      .select();

    if (newsError) {
      console.error('❌ Error insertando noticias:', newsError);
      return;
    }

    console.log('✅ Noticias insertadas correctamente:', insertedNews.length);

    // Crear edición semanal
    const { data: edition, error: editionError } = await supabase
      .from('weekly_editions')
      .insert({
        edition_date: '2025-07-04',
        intro_text: 'Las 5 noticias más importantes de la semana sobre movilidad eléctrica en España'
      })
      .select()
      .single();

    if (editionError) {
      console.error('❌ Error creando edición:', editionError);
      return;
    }

    console.log('✅ Edición semanal creada:', edition.id);

    // Crear items de edición
    const editionItems = insertedNews.map((news, index) => ({
      edition_id: edition.id,
      news_id: news.id,
      display_order: index + 1
    }));

    const { error: itemsError } = await supabase
      .from('edition_items')
      .insert(editionItems);

    if (itemsError) {
      console.error('❌ Error creando items de edición:', itemsError);
      return;
    }

    console.log('✅ Items de edición creados correctamente');
    console.log('🎉 Newsletter semanal lista y disponible en la web!');

  } catch (error) {
    console.error('❌ Error general:', error);
  }
}

insertWeeklyNews();
