-- Eliminar la noticia de Colmenar Viejo
DELETE FROM public.news_items 
WHERE title = 'Colmenar Viejo elimina la gratuidad de los cargadores municipales para vehículos eléctricos';

-- Actualizar las URLs de imágenes para las noticias actuales
UPDATE public.news_items 
SET image_url = 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=600&h=400&fit=crop'
WHERE title = 'Hyundai lanza el Ioniq 6 N';

UPDATE public.news_items 
SET image_url = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop'
WHERE title = 'Piden ampliar el Moves III';

UPDATE public.news_items 
SET image_url = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
WHERE title = 'Proponen Moves IV';

UPDATE public.news_items 
SET image_url = 'https://images.unsplash.com/photo-1549399810-16ded4c24258?w=600&h=400&fit=crop'
WHERE title = 'Bajan precios de EV usados';

UPDATE public.news_items 
SET image_url = 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop'
WHERE title = 'Llegan los EV baratos';