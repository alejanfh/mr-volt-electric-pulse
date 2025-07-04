import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useEditionNews = (date: string) => {
  return useQuery({
    queryKey: ["edition-news", date],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("weekly_editions")
        .select(
          `
          id,
          edition_date,
          edition_items (
            display_order,
            news_items (
              id,
              title,
              summary,
              source_url,
              image_url,
              published_at
            )
          )
        `
        )
        .eq("edition_date", date)
        .maybeSingle();

      if (error) throw new Error(error.message);
      if (!data) return [];

      return data.edition_items
        .sort((a, b) => a.display_order - b.display_order)
        .map((item) => ({
          ...item.news_items,
          display_order: item.display_order,
        }));
    },
    enabled: !!date,
  });
};
