import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { addWeeks, subWeeks, startOfWeek } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { getFallbackNewsForWeek } from "@/data/fallbackNews";

const getWeekStartDate = (date: Date): Date => {
  return startOfWeek(date, { weekStartsOn: 1 }); // Monday = 1
};

export function useEditionNavigation() {
  // Start with Monday of current week
  const [editionDate, setEditionDate] = useState<Date>(() => getWeekStartDate(new Date()));

  const { data: currentEdition, isLoading } = useQuery({
    queryKey: ["weekly_edition", editionDate.toISOString().split("T")[0]],
    queryFn: async () => {
      const dateStr = editionDate.toISOString().split("T")[0];
      const { data, error } = await supabase
        .from("weekly_editions")
        .select("*")
        .eq("edition_date", dateStr)
        .maybeSingle();

      if (error || !data) {
        return { edition_date: dateStr };
      }
      return data;
    },
  });

  // Check if there are news for previous week (either in Supabase or fallback)
  const { data: hasPrevious } = useQuery({
    queryKey: ["has_previous_week", editionDate.toISOString()],
    queryFn: async () => {
      const prevWeek = subWeeks(editionDate, 1).toISOString().split("T")[0];
      
      // Check Supabase first
      try {
        const { data, error } = await supabase
          .from("weekly_editions")
          .select("id, edition_items(id)")
          .eq("edition_date", prevWeek)
          .maybeSingle();

        if (!error && data && data.edition_items && data.edition_items.length > 0) {
          return true;
        }
      } catch (error) {
        console.warn("Error checking previous week in Supabase:", error);
      }

      // Check fallback data
      const fallbackNews = getFallbackNewsForWeek(prevWeek);
      return fallbackNews.length > 0;
    },
  });

  const { data: hasNext } = useQuery({
    queryKey: ["has_next_week", editionDate.toISOString()],
    queryFn: async () => {
      const nextWeek = addWeeks(editionDate, 1).toISOString().split("T")[0];
      
      // Check Supabase first
      try {
        const { data, error } = await supabase
          .from("weekly_editions")
          .select("id, edition_items(id)")
          .eq("edition_date", nextWeek)
          .maybeSingle();

        if (!error && data && data.edition_items && data.edition_items.length > 0) {
          return true;
        }
      } catch (error) {
        console.warn("Error checking next week in Supabase:", error);
      }

      // Check fallback data
      const fallbackNews = getFallbackNewsForWeek(nextWeek);
      return fallbackNews.length > 0;
    },
  });

  return {
    currentEdition: currentEdition ?? { edition_date: editionDate.toISOString() },
    isLoading,
    goToPreviousWeek: () => setEditionDate((prev) => getWeekStartDate(subWeeks(prev, 1))),
    goToNextWeek: () => setEditionDate((prev) => getWeekStartDate(addWeeks(prev, 1))),
    hasPreviousWeek: hasPrevious ?? false,
    hasNextWeek: hasNext ?? false,
  };
}
