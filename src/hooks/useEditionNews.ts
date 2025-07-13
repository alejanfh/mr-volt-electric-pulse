import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { getFallbackNewsForWeek, getWeekStartDate } from "@/data/fallbackNews";

export const useEditionNews = (date: string) => {
  return useQuery({
    queryKey: ["edition-news", date],
    queryFn: async () => {
      try {
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

        if (error) {
          console.warn("Supabase error, using fallback data:", error.message);
          return getFallbackNewsForWeek(date);
        }

        if (!data || !data.edition_items || data.edition_items.length === 0) {
          console.log("No Supabase data found, using fallback data");
          return getFallbackNewsForWeek(date);
        }

        return data.edition_items
          .sort((a, b) => a.display_order - b.display_order)
          .map((item) => ({
            ...item.news_items,
            display_order: item.display_order,
          }));
      } catch (error) {
        console.warn("Failed to fetch from Supabase, using fallback:", error);
        return getFallbackNewsForWeek(date);
      }
    },
    enabled: !!date,
  });
};
