-- First, let's add a weekly edition for the current week (July 7-13, 2025) which should be 2025-07-07 as Monday
INSERT INTO weekly_editions (edition_date, intro_text) 
VALUES ('2025-07-07', 'Las noticias más relevantes de la movilidad eléctrica esta semana');

-- Add edition for June 30 - July 6 (2025-06-30 as Monday)  
INSERT INTO weekly_editions (edition_date, intro_text)
VALUES ('2025-06-30', 'Resumen semanal de movilidad eléctrica');

-- Link current week news to July 7 edition
WITH july_7_edition AS (
  SELECT id FROM weekly_editions WHERE edition_date = '2025-07-07'
),
current_news AS (
  SELECT id, title FROM news_items 
  WHERE title IN ('Hyundai Ioniq 6 N debut', 'Subaru Uncharted EV', 'Nuevo Nissan Leaf', 'Moves III agotado', 'Récord de ventas EV')
)
INSERT INTO edition_items (edition_id, news_id, display_order)
SELECT 
  july_7_edition.id,
  current_news.id,
  CASE current_news.title
    WHEN 'Hyundai Ioniq 6 N debut' THEN 1
    WHEN 'Subaru Uncharted EV' THEN 2  
    WHEN 'Nuevo Nissan Leaf' THEN 3
    WHEN 'Moves III agotado' THEN 4
    WHEN 'Récord de ventas EV' THEN 5
  END
FROM july_7_edition, current_news;

-- Insert and link news for previous week (June 30 - July 6)
INSERT INTO news_items (title, summary, source_url, image_url, published_at) VALUES
('Tesla Model Y actualizado', 'Tesla lanza la versión actualizada del Model Y con mejoras en autonomía.', 'https://example.com/tesla-model-y', 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800', '2025-07-02 12:00:00+00'),
('Volkswagen ID.7 llegada', 'Volkswagen confirma la llegada del ID.7 a España en el tercer trimestre.', 'https://example.com/vw-id7', 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', '2025-07-01 08:30:00+00'),
('BMW iX3 renovado', 'BMW presenta las mejoras del iX3 con nueva tecnología de carga.', 'https://example.com/bmw-ix3', 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', '2025-06-30 15:45:00+00'),
('Ayudas regionales EV', 'Nuevas ayudas regionales complementan al plan MOVES para vehículos eléctricos.', 'https://example.com/ayudas-regionales', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', '2025-07-04 10:15:00+00'),
('Estaciones carga rápida', 'Iberdrola anuncia 500 nuevos puntos de carga rápida en autopistas.', 'https://example.com/iberdrola-carga', 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800', '2025-07-03 14:20:00+00');

-- Link previous week news to June 30 edition
WITH june_30_edition AS (
  SELECT id FROM weekly_editions WHERE edition_date = '2025-06-30'
),
prev_news AS (
  SELECT id, title FROM news_items 
  WHERE title IN ('Tesla Model Y actualizado', 'Volkswagen ID.7 llegada', 'BMW iX3 renovado', 'Ayudas regionales EV', 'Estaciones carga rápida')
)
INSERT INTO edition_items (edition_id, news_id, display_order)
SELECT 
  june_30_edition.id,
  prev_news.id,
  CASE prev_news.title
    WHEN 'Tesla Model Y actualizado' THEN 1
    WHEN 'Volkswagen ID.7 llegada' THEN 2  
    WHEN 'BMW iX3 renovado' THEN 3
    WHEN 'Ayudas regionales EV' THEN 4
    WHEN 'Estaciones carga rápida' THEN 5
  END
FROM june_30_edition, prev_news;