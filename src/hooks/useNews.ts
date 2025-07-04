
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

      return data;
    }
  });
};
