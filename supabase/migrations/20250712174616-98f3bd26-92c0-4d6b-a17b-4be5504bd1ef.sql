-- Insert the 5 new news items with the JSON structure provided
INSERT INTO public.news_items (
  title, short_title, short_description, headline, summary, 
  source_url, published_at, image_url, selected_for_edition
) VALUES 
(
  'Hyundai Ioniq 6 N debut',
  'Hyundai Ioniq 6 N debut', 
  'Hyundai desvela su sedán eléctrico de 650 CV.',
  'Hyundai revoluciona el EV deportivo con el Ioniq 6 N y sus 650 CV',
  'Presentado en Goodwood, el Ioniq 6 N acelera de 0‑100 km/h en 3,2 s, ofrece 650 CV y un modo ''N e‑Shift'' que simula marchas para una conducción más emocionante.',
  'https://www.hyundai.com/worldwide/en/newsroom/detail/hyundai-motor-ioniq-6-n-debuts-at-goodwood-festival-of-speed%252C-setting-new-benchmark-for-high-performance-evs-0000000981',
  '2025-07-10'::date,
  'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=600&h=400&fit=crop',
  true
),
(
  'Subaru Uncharted EV',
  'Subaru Uncharted EV',
  'Subaru anuncia un nuevo SUV eléctrico.',
  'Subaru sorprende con el ''Uncharted'', su crossover eléctrico global para 2026',
  'El 17 de julio Subaru presentará el Uncharted, un SUV 100 % eléctrico que refuerza la alianza con Toyota y llegará a Europa y EE. UU. en 2026.',
  'https://www.prnewswire.com/news-releases/subaru-announces-global-debut-of-all-new-all-electric-2026-subaru-uncharted-on-july-17-302502459.html',
  '2025-07-10'::date,
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
  true
),
(
  'Nuevo Nissan Leaf',
  'Nuevo Nissan Leaf',
  'Leaf 2025 gana autonomía y tech.',
  'Nissan renueva el Leaf: hasta 604 km y carga rápida en 30 minutos',
  'El Leaf 2025 estrena diseño aerodinámico, batería de alta densidad y sistema ProPILOT Assist, apuntando a 604 km de autonomía WLTP.',
  'https://www.automotiveworld.com/news-releases/driving-the-future-how-nissan-engineered-the-all-new-leaf/',
  '2025-07-03'::date,
  'https://images.unsplash.com/photo-1593941707570-4b32a97b8db1?w=600&h=400&fit=crop',
  true
),
(
  'Moves III agotado',
  'Moves III agotado',
  'Madrid se queda sin ayudas EV.',
  'La industria urge más fondos: el Moves III se agota en Madrid y peligra la demanda',
  'Las ayudas del Moves III se agotaron antes de lo previsto en la Comunidad de Madrid, que concentra casi la mitad del mercado EV, y el sector exige una ampliación inmediata.',
  'https://cincodias.elpais.com/companias/2025-07-10/la-automocion-reclama-mas-partidas-para-el-plan-moves-es-la-unica-solucion-para-mantener-la-demanda-a-corto-plazo.html',
  '2025-07-10'::date,
  'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
  true
),
(
  'Récord de ventas EV',
  'Récord de ventas EV',
  '27 207 electrificados en junio.',
  'España bate récord: 27 207 ventas de electrificados y 11 243 eléctricos puros en junio',
  'Las matriculaciones de vehículos electrificados suben un 133 % y ya suponen el 19 % del mercado total; los eléctricos puros superan por primera vez las 11 000 unidades en un mes.',
  'https://anfac.com/los-vehiculos-electrificados-logran-27-207-ventas-en-junio/',
  '2025-07-01'::date,
  'https://images.unsplash.com/photo-1599912027806-cffc3ecaabcc?w=600&h=400&fit=crop',
  true
);

-- Create weekly edition for current week (July 12, 2025) 
INSERT INTO public.weekly_editions (edition_date, intro_text) 
VALUES ('2025-07-12', 'Las 5 noticias más importantes de esta semana sobre el futuro de la movilidad eléctrica en España');

-- Add last week news for navigation (July 5, 2025)
INSERT INTO public.weekly_editions (edition_date, intro_text) 
VALUES ('2025-07-05', 'Las 5 noticias más importantes de la semana pasada sobre movilidad eléctrica en España');

-- Update existing news to add published_at for older news that don't have it
UPDATE public.news_items 
SET published_at = '2025-07-11'::date 
WHERE title = 'Hyundai lanza el Ioniq 6 N' AND published_at IS NULL;

UPDATE public.news_items 
SET published_at = '2025-07-10'::date 
WHERE title = 'Piden ampliar el Moves III' AND published_at IS NULL;

UPDATE public.news_items 
SET published_at = '2025-07-09'::date 
WHERE title = 'Proponen Moves IV' AND published_at IS NULL;

UPDATE public.news_items 
SET published_at = '2025-07-08'::date 
WHERE title = 'Bajan precios de EV usados' AND published_at IS NULL;

UPDATE public.news_items 
SET published_at = '2025-05-26'::date 
WHERE title = 'Llegan los EV baratos' AND published_at IS NULL;