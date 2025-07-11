-- Añadir nuevas columnas a la tabla news_items
ALTER TABLE public.news_items 
ADD COLUMN short_title TEXT,
ADD COLUMN short_description TEXT,
ADD COLUMN headline TEXT;

-- Actualizar la columna summary para que pueda ser nullable temporalmente
ALTER TABLE public.news_items 
ALTER COLUMN summary DROP NOT NULL;

-- Insertar las 5 nuevas noticias con la estructura actualizada
INSERT INTO public.news_items (
  title, 
  short_title, 
  short_description, 
  headline, 
  summary, 
  source_url, 
  published_at, 
  selected_for_edition
) VALUES
(
  'Hyundai lanza el Ioniq 6 N',
  'Hyundai lanza el Ioniq 6 N',
  'Hyundai presenta su nuevo coche eléctrico deportivo.',
  'Hyundai revoluciona el EV deportivo con su nuevo Ioniq 6 N de 650 CV',
  'Hyundai ha presentado el Ioniq 6 N, una versión radical de su sedán eléctrico con 650 CV, aceleración brutal y sonido artificial para una experiencia deportiva total.',
  'https://forococheselectricos.com/noticias/hyundai-presenta-ioniq-6-n-20250711-37668.html',
  '2025-07-11T10:00:00Z',
  true
),
(
  'Piden ampliar el Moves III',
  'Piden ampliar el Moves III',
  'Madrid agota fondos y reclaman más ayuda al eléctrico.',
  'Industria exige más dinero para el Moves III tras agotarse en Madrid',
  'La patronal del automóvil pide ampliar urgentemente el Plan Moves III, cuyos fondos ya están agotados en Madrid, clave para seguir impulsando las ventas de eléctricos.',
  'https://cincodias.elpais.com/companias/2025-07-10/la-automocion-reclama-mas-partidas-para-el-plan-moves-es-la-unica-solucion-para-mantener-la-demanda-a-corto-plazo.html',
  '2025-07-10T14:30:00Z',
  true
),
(
  'Proponen Moves IV',
  'Proponen Moves IV',
  'El Congreso quiere nuevas ayudas más directas.',
  'El Plan Moves IV propone IVA reducido y descuentos instantáneos',
  'Una propuesta en el Congreso plantea el Moves IV: descuentos directos, deducciones fiscales y reducción del IVA para facilitar la compra de coches eléctricos en España.',
  'https://www.motorbikemag.es/plan-moves-iv-posibles-cambios-congreso/',
  '2025-07-09T16:45:00Z',
  true
),
(
  'Bajan precios de EV usados',
  'Bajan precios de EV usados',
  'El mercado de ocasión baja un 12 % en un año.',
  'El coche eléctrico usado se desploma: 12 % más barato en un año',
  'El precio de los eléctricos de segunda mano ha caído un 12 % debido al aumento de oferta, descuentos de fabricantes y menor demanda de modelos premium.',
  'https://ganvam.es/el-precio-del-coche-electrico-de-ocasion-cae-un-121-a-cierre-del-primer-trimestre-de-2025/',
  '2025-07-08T11:20:00Z',
  true
),
(
  'Llegan los EV baratos',
  'Llegan los EV baratos',
  'Auge de eléctricos por debajo de los 20.000 €.',
  'Los coches eléctricos baratos llegan a España: desde 16.000 €',
  'Fabricantes como BYD, MG, Citroën o Renault lanzan modelos eléctricos asequibles por debajo de 20.000 €, marcando el inicio de una nueva era de movilidad eléctrica accesible.',
  'https://cincodias.elpais.com/companias/2025-05-26/el-automovil-calienta-la-batalla-por-el-electrico-barato-el-mercado-suma-varios-modelos-en-torno-a-16000-euros.html',
  '2025-05-26T09:30:00Z',
  true
);

-- Crear nueva edición semanal para las noticias actuales
INSERT INTO public.weekly_editions (edition_date, intro_text) VALUES
(
  '2025-07-11',
  'Las 5 noticias más importantes de esta semana sobre el futuro de la movilidad eléctrica en España'
);

-- Crear items de edición para las nuevas noticias
WITH latest_edition AS (
  SELECT id FROM public.weekly_editions WHERE edition_date = '2025-07-11'
),
recent_news AS (
  SELECT 
    id,
    ROW_NUMBER() OVER (ORDER BY published_at DESC) as order_num
  FROM public.news_items 
  WHERE selected_for_edition = true 
  AND published_at >= '2025-05-26T00:00:00Z'
  AND published_at >= (
    SELECT MAX(published_at) - INTERVAL '30 days' 
    FROM public.news_items
  )
  ORDER BY published_at DESC
  LIMIT 5
)
INSERT INTO public.edition_items (edition_id, news_id, display_order)
SELECT 
  (SELECT id FROM latest_edition),
  rn.id,
  rn.order_num
FROM recent_news rn;