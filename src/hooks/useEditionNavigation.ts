import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { addWeeks, subWeeks } from "date-fns";
import { supabase } from "@/integrations/supabase/client";

export function useEditionNavigation() {
  const [editionDate, setEditionDate] = useState<Date>(new Date());

  const { data: currentEdition, isLoading } = useQuery({
    queryKey: ["weekly_edition", editionDate.toISOString().split("T")[0]],
    queryFn: async () => {
      const dateStr = editionDate.toISOString().split("T")[0];
      const { data, error } = await supabase
        .from("weekly_editions")
        .select("*")
        .eq("edition_date", dateStr)
        .maybeSingle();

      if (error) throw error;
      return data ?? { edition_date: dateStr };
    },
  });

  // Consulta para saber si existe semana anterior
  const { data: hasPrevious } = useQuery({
    queryKey: ["has_previous_week", editionDate.toISOString()],
    queryFn: async () => {
      const prevWeek = subWeeks(editionDate, 1).toISOString().split("T")[0];
      const { data, error } = await supabase
        .from("weekly_editions")
        .select("id")
        .eq("edition_date", prevWeek)
        .maybeSingle();

      if (error) throw error;
      return !!data;
    },
  });

  const { data: hasNext } = useQuery({
    queryKey: ["has_next_week", editionDate.toISOString()],
    queryFn: async () => {
      const nextWeek = addWeeks(editionDate, 1).toISOString().split("T")[0];
      const { data, error } = await supabase
        .from("weekly_editions")
        .select("id")
        .eq("edition_date", nextWeek)
        .maybeSingle();

      if (error) throw error;
      return !!data;
    },
  });

  return {
    currentEdition: currentEdition ?? { edition_date: editionDate.toISOString() },
    isLoading,
    goToPreviousWeek: () => setEditionDate((prev) => subWeeks(prev, 1)),
    goToNextWeek: () => setEditionDate((prev) => addWeeks(prev, 1)),
    hasPreviousWeek: hasPrevious ?? false,
    hasNextWeek: hasNext ?? false,
  };
}
