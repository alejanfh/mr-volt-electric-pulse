-- First, let's add a weekly edition for the current week (July 7-13, 2025) which should be 2025-07-07 as Monday
INSERT INTO weekly_editions (edition_date, intro_text) 
VALUES ('2025-07-07', 'Las noticias más relevantes de la movilidad eléctrica esta semana')
ON CONFLICT (edition_date) DO NOTHING;

-- Add edition for June 30 - July 6 (2025-06-30 as Monday)  
INSERT INTO weekly_editions (edition_date, intro_text)
VALUES ('2025-06-30', 'Resumen semanal de movilidad eléctrica')
ON CONFLICT (edition_date) DO NOTHING;

-- Insert news for current week (July 7-13)
INSERT INTO news_items (title, summary, source_url, image_url, published_at) VALUES
('Hyundai Ioniq 6 N debut', 'Hyundai presenta la versión deportiva del Ioniq 6 con 650 CV de potencia y tecnología N.', 'https://example.com/hyundai-ioniq6n', 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800', '2025-07-10 10:00:00+00'),
('Subaru Uncharted EV', 'Subaru revela su estrategia para vehículos eléctricos con nuevos modelos para 2026.', 'https://example.com/subaru-ev', 'https://images.unsplash.com/photo-1606611881852-ec2dd440f201?w=800', '2025-07-09 14:30:00+00'),
('Nuevo Nissan Leaf', 'Nissan anuncia la nueva generación del Leaf con mayor autonomía y carga rápida.', 'https://example.com/nissan-leaf', 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800', '2025-07-08 09:15:00+00'),
('Moves III agotado', 'El programa MOVES III agota su presupuesto antes de lo previsto por la alta demanda.', 'https://example.com/moves-agotado', 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', '2025-07-11 16:45:00+00'),
('Récord de ventas EV', 'España bate récord de matriculaciones de vehículos eléctricos en julio.', 'https://example.com/record-ventas', 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800', '2025-07-12 11:20:00+00')
ON CONFLICT (title) DO NOTHING;

-- Insert news for previous week (June 30 - July 6)
INSERT INTO news_items (title, summary, source_url, image_url, published_at) VALUES
('Tesla Model Y actualizado', 'Tesla lanza la versión actualizada del Model Y con mejoras en autonomía.', 'https://example.com/tesla-model-y', 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800', '2025-07-02 12:00:00+00'),
('Volkswagen ID.7 llegada', 'Volkswagen confirma la llegada del ID.7 a España en el tercer trimestre.', 'https://example.com/vw-id7', 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', '2025-07-01 08:30:00+00'),
('BMW iX3 renovado', 'BMW presenta las mejoras del iX3 con nueva tecnología de carga.', 'https://example.com/bmw-ix3', 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', '2025-06-30 15:45:00+00'),
('Ayudas regionales EV', 'Nuevas ayudas regionales complementan al plan MOVES para vehículos eléctricos.', 'https://example.com/ayudas-regionales', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', '2025-07-04 10:15:00+00'),
('Estaciones carga rápida', 'Iberdrola anuncia 500 nuevos puntos de carga rápida en autopistas.', 'https://example.com/iberdrola-carga', 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800', '2025-07-03 14:20:00+00')
ON CONFLICT (title) DO NOTHING;