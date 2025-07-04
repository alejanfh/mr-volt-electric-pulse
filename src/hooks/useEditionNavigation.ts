import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { addWeeks, subWeeks } from "date-fns";

export function useEditionNavigation() {
  const [editionDate, setEditionDate] = useState<Date>(new Date());

  const { data, isLoading } = useQuery({
    queryKey: ["weekly_edition", editionDate.toISOString()],
    queryFn: async () => {
      const res = await fetch(
        `/api/weekly-edition?date=${editionDate.toISOString().split("T")[0]}`
      );
      return res.json();
    },
  });

  // Consulta para saber si existe semana anterior/siguiente
  const { data: hasPrevious } = useQuery({
    queryKey: ["has_previous_week", editionDate.toISOString()],
    queryFn: async () => {
      const res = await fetch(
        `/api/has-previous-week?date=${editionDate.toISOString().split("T")[0]}`
      );
      const json = await res.json();
      return json.exists; // boolean
    },
  });

  const { data: hasNext } = useQuery({
    queryKey: ["has_next_week", editionDate.toISOString()],
    queryFn: async () => {
      const res = await fetch(
        `/api/has-next-week?date=${editionDate.toISOString().split("T")[0]}`
      );
      const json = await res.json();
      return json.exists; // boolean
    },
  });

  return {
    currentEdition: data ?? { edition_date: editionDate.toISOString() },
    isLoading,
    goToPreviousWeek: () => setEditionDate((prev) => subWeeks(prev, 1)),
    goToNextWeek: () => setEditionDate((prev) => addWeeks(prev, 1)),
    hasPreviousWeek: hasPrevious ?? false,
    hasNextWeek: hasNext ?? false,
  };
}
