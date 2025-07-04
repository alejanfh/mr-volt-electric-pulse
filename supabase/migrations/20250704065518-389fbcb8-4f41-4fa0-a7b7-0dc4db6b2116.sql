
-- Insertar las 5 noticias de la semana del 28 de junio al 4 de julio de 2025

INSERT INTO public.news_items (title, summary, source_url, image_url, published_at, selected_for_edition) VALUES
(
  'Récord histórico: España supera las 11.000 matriculaciones de coches eléctricos en junio',
  'España ha alcanzado un hito en la movilidad eléctrica al superar por primera vez las 11.000 matriculaciones mensuales de coches eléctricos. En junio de 2025, se registraron 11.514 unidades, lo que representa un aumento del 104% respecto al mismo mes del año anterior. Este crecimiento se atribuye a las ayudas gubernamentales, como el Plan Reinicia Auto+, y al incremento del poder adquisitivo de los consumidores. Los vehículos eléctricos puros y los híbridos enchufables ya representan más del 20% de las ventas totales de turismos en el país. Sin embargo, el sector solicita una agilización en la entrega de las ayudas del programa MOVES III y una mayor financiación para mantener esta tendencia positiva.',
  'https://cincodias.elpais.com',
  'https://images.unsplash.com/photo-1593941707570-4b32a97b8db1?w=400&h=240',
  '2025-07-01T10:00:00Z',
  true
),
(
  'Colmenar Viejo elimina la gratuidad de los cargadores municipales para vehículos eléctricos',
  'El Ayuntamiento de Colmenar Viejo ha decidido poner fin al servicio gratuito de carga para vehículos eléctricos en sus estaciones municipales, una iniciativa que comenzó en 2017 para promover la movilidad sostenible. Desde su implementación, se instalaron tres puntos de carga gratuita y se distribuyeron 750 tarjetas para usuarios. En el último año, se realizaron 3.150 recargas, suministrando 62.235 kWh. El gobierno local justifica la medida en base a un informe técnico que señala que la oferta gratuita podría distorsionar el mercado privado de recarga. En los próximos días, los puntos serán retirados y las plazas de estacionamiento reasignadas para uso general.',
  'https://cadenaser.com',
  'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=240',
  '2025-07-03T14:30:00Z',
  true
),
(
  'Nuevas señales de tráfico en España: más claras y adaptadas a la movilidad eléctrica',
  'El 1 de julio de 2025 entró en vigor un nuevo Reglamento General de Circulación en España, que introduce una actualización integral del catálogo de señales de tráfico. La reforma incluye alrededor de 90 nuevas señales, más de 20 modificaciones y la eliminación progresiva de nueve señales obsoletas. Esta renovación responde a la necesidad de adaptar la señalización a los cambios en la movilidad, como la aparición de vehículos eléctricos y personales, el incremento de zonas de bajas emisiones y la importancia de mejorar la seguridad vial. Las nuevas señales son más claras, visibles, inclusivas y sostenibles, e incorporan símbolos sin connotaciones de género y con lenguaje visual comprensible universalmente.',
  'https://cadenaser.com',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240',
  '2025-07-03T09:15:00Z',
  true
),
(
  'Incertidumbre sobre la puesta en marcha de los TRAM eléctricos en Castellón este verano',
  'La Generalitat Valenciana no puede asegurar que los nuevos convoyes eléctricos del TRAM de Castellón, destinados a conectar la ciudad con la playa del Gurugú, estén en funcionamiento durante el verano de 2025. A pesar de una inversión de más de 3 millones de euros, estos vehículos llevan más de diez meses sin operar debido a problemas en la infraestructura de recarga. Aunque ya disponen de corriente eléctrica, aún faltan piezas específicas que debe suministrar un proveedor. Las autoridades locales expresan su deseo de que los TRAM entren en servicio "cuanto antes", pero no ofrecen una fecha concreta.',
  'https://cadenaser.com',
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=240',
  '2025-07-01T16:45:00Z',
  true
),
(
  'El Gobierno lanza nuevos programas MOVES con 200 millones en ayudas para la movilidad eléctrica',
  'El Ejecutivo español ha activado nuevos fondos europeos para impulsar la movilidad eléctrica, con incentivos destinados a la renovación de flotas y al despliegue de puntos de recarga en todo el país. Estos programas, que forman parte del ecosistema MOVES, contemplan hasta 200 millones de euros en ayudas para la compra de vehículos eléctricos y la instalación de infraestructuras de recarga. La iniciativa busca fomentar la electrificación del parque automovilístico y acelerar la transición hacia una movilidad más sostenible.',
  'https://lasexta.com',
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240',
  '2025-06-24T11:20:00Z',
  true
);

-- Crear la edición semanal del 28 de junio al 4 de julio de 2025
INSERT INTO public.weekly_editions (edition_date, intro_text) VALUES
(
  '2025-07-04',
  'Las 5 noticias más importantes de la semana sobre movilidad eléctrica en España'
);

-- Obtener el ID de la edición recién creada y los IDs de las noticias
-- Insertar las relaciones en edition_items
WITH latest_edition AS (
  SELECT id FROM public.weekly_editions WHERE edition_date = '2025-07-04'
),
news_ordered AS (
  SELECT 
    id,
    ROW_NUMBER() OVER (ORDER BY published_at DESC) as order_num
  FROM public.news_items 
  WHERE selected_for_edition = true 
  AND published_at >= '2025-06-24T00:00:00Z'
  AND published_at <= '2025-07-04T23:59:59Z'
)
INSERT INTO public.edition_items (edition_id, news_id, display_order)
SELECT 
  (SELECT id FROM latest_edition),
  no.id,
  no.order_num
FROM news_ordered no
WHERE no.order_num <= 5;
