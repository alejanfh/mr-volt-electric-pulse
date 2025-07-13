-- Get the IDs of weekly editions for July 12 and July 5
-- Link the new news to July 12 edition
WITH july_12_edition AS (
  SELECT id FROM weekly_editions WHERE edition_date = '2025-07-12'
),
new_news AS (
  SELECT id, title FROM news_items 
  WHERE title IN ('Hyundai Ioniq 6 N debut', 'Subaru Uncharted EV', 'Nuevo Nissan Leaf', 'Moves III agotado', 'Récord de ventas EV')
)
INSERT INTO public.edition_items (edition_id, news_id, display_order)
SELECT 
  july_12_edition.id,
  new_news.id,
  CASE new_news.title
    WHEN 'Hyundai Ioniq 6 N debut' THEN 1
    WHEN 'Subaru Uncharted EV' THEN 2  
    WHEN 'Nuevo Nissan Leaf' THEN 3
    WHEN 'Moves III agotado' THEN 4
    WHEN 'Récord de ventas EV' THEN 5
  END
FROM july_12_edition, new_news;

-- Link some previous news to July 5 edition for last week 
WITH july_5_edition AS (
  SELECT id FROM weekly_editions WHERE edition_date = '2025-07-05'
),
old_news AS (
  SELECT id, title FROM news_items 
  WHERE title IN (
    'Nuevas señales de tráfico en España: más claras y adaptadas a la movilidad eléctrica',
    'Incertidumbre sobre la puesta en marcha de los TRAM eléctricos en Castellón este verano', 
    'Récord histórico: España supera las 11.000 matriculaciones de coches eléctricos en junio',
    'El Gobierno lanza nuevos programas MOVES con 200 millones en ayudas para la movilidad eléctrica',
    'Llegan los EV baratos'
  )
)
INSERT INTO public.edition_items (edition_id, news_id, display_order)
SELECT 
  july_5_edition.id,
  old_news.id,
  CASE old_news.title
    WHEN 'Nuevas señales de tráfico en España: más claras y adaptadas a la movilidad eléctrica' THEN 1
    WHEN 'Incertidumbre sobre la puesta en marcha de los TRAM eléctricos en Castellón este verano' THEN 2
    WHEN 'Récord histórico: España supera las 11.000 matriculaciones de coches eléctricos en junio' THEN 3
    WHEN 'El Gobierno lanza nuevos programas MOVES con 200 millones en ayudas para la movilidad eléctrica' THEN 4
    WHEN 'Llegan los EV baratos' THEN 5
  END
FROM july_5_edition, old_news
ON CONFLICT (edition_id, news_id) DO NOTHING;