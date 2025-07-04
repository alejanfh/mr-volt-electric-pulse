
-- Crear tabla para almacenar noticias individuales
CREATE TABLE public.news_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  source_url TEXT NOT NULL,
  image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL,
  selected_for_edition BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para ediciones semanales
CREATE TABLE public.weekly_editions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  edition_date DATE NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  intro_text TEXT
);

-- Crear tabla de relación entre ediciones y noticias
CREATE TABLE public.edition_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  edition_id UUID NOT NULL REFERENCES public.weekly_editions(id) ON DELETE CASCADE,
  news_id UUID NOT NULL REFERENCES public.news_items(id) ON DELETE CASCADE,
  display_order INTEGER NOT NULL,
  UNIQUE(edition_id, news_id),
  UNIQUE(edition_id, display_order)
);

-- Habilitar Row Level Security (todo público para esta aplicación)
ALTER TABLE public.news_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_editions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.edition_items ENABLE ROW LEVEL SECURITY;

-- Políticas para hacer todo público (sin autenticación requerida)
CREATE POLICY "Allow public read access to news_items" 
  ON public.news_items FOR SELECT 
  USING (true);

CREATE POLICY "Allow public read access to weekly_editions" 
  ON public.weekly_editions FOR SELECT 
  USING (true);

CREATE POLICY "Allow public read access to edition_items" 
  ON public.edition_items FOR SELECT 
  USING (true);

-- Políticas para permitir inserción/actualización con token (para n8n)
CREATE POLICY "Allow insert to news_items" 
  ON public.news_items FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow insert to weekly_editions" 
  ON public.weekly_editions FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow insert to edition_items" 
  ON public.edition_items FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow update to news_items" 
  ON public.news_items FOR UPDATE 
  USING (true);

-- Crear índices para mejorar performance
CREATE INDEX idx_news_items_published_at ON public.news_items(published_at DESC);
CREATE INDEX idx_weekly_editions_date ON public.weekly_editions(edition_date DESC);
CREATE INDEX idx_edition_items_edition_order ON public.edition_items(edition_id, display_order);

-- Función para obtener la última edición con sus noticias
CREATE OR REPLACE FUNCTION public.get_latest_edition()
RETURNS TABLE(
  edition_id UUID,
  edition_date DATE,
  intro_text TEXT,
  news_id UUID,
  title TEXT,
  summary TEXT,
  source_url TEXT,
  image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  display_order INTEGER
)
LANGUAGE SQL
STABLE
AS $$
  SELECT 
    we.id as edition_id,
    we.edition_date,
    we.intro_text,
    ni.id as news_id,
    ni.title,
    ni.summary,
    ni.source_url,
    ni.image_url,
    ni.published_at,
    ei.display_order
  FROM public.weekly_editions we
  LEFT JOIN public.edition_items ei ON we.id = ei.edition_id
  LEFT JOIN public.news_items ni ON ei.news_id = ni.id
  WHERE we.edition_date = (
    SELECT MAX(edition_date) FROM public.weekly_editions
  )
  ORDER BY ei.display_order;
$$;
