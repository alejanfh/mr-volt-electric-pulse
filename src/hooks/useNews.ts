
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source_url: string;
  image_url: string | null;
  published_at: string;
  selected_for_edition: boolean;
}

export interface EditionItem {
  edition_id: string;
  edition_date: string;
  intro_text: string | null;
  news_id: string;
  title: string;
  summary: string;
  source_url: string;
  image_url: string | null;
  published_at: string;
  display_order: number;
}

export const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('news_items')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(50);

      if (error) {
        throw new Error(error.message);
      }

      return data as NewsItem[];
    }
  });
};

export const useLatestEdition = () => {
  return useQuery({
    queryKey: ['latest-edition'],
    queryFn: async () => {
      const { data, error } = await supabase
        .rpc('get_latest_edition');

      if (error) {
        throw new Error(error.message);
      }

      return data as EditionItem[];
    }
  });
};

// Helper function para obtener el título y descripción del menú basado en el título completo
export const getMenuData = (title: string) => {
  const menuMap: Record<string, { title: string; description: string }> = {
    'Récord histórico: España supera las 11.000 matriculaciones de coches eléctricos en junio': {
      title: 'Récord de ventas EV',
      description: 'España supera las 11.000 matriculaciones de coches eléctricos en un mes'
    },
    'Colmenar Viejo elimina la gratuidad de los cargadores municipales para vehículos eléctricos': {
      title: 'Fin a la carga gratuita',
      description: 'Colmenar Viejo retira los puntos de carga gratuitos para vehículos eléctricos'
    },
    'Nuevas señales de tráfico en España: más claras y adaptadas a la movilidad eléctrica': {
      title: 'Señales actualizadas',
      description: 'Nuevas señales de tráfico adaptadas a la movilidad eléctrica en España'
    },
    'Incertidumbre sobre la puesta en marcha de los TRAM eléctricos en Castellón este verano': {
      title: 'TRAM en espera',
      description: 'Los nuevos TRAM eléctricos de Castellón podrían no estar operativos este verano'
    },
    'El Gobierno lanza nuevos programas MOVES con 200 millones en ayudas para la movilidad eléctrica': {
      title: 'Nuevas ayudas MOVES',
      description: 'El Gobierno destina 200 millones de euros para fomentar la movilidad eléctrica'
    }
  };

  return menuMap[title] || { 
    title: title.substring(0, 30) + '...', 
    description: 'Noticia destacada de la semana' 
  };
};
