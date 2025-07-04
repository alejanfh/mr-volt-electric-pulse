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
    // keepPreviousData: true,
  });

  const goToPreviousWeek = () => setEditionDate((prev) => subWeeks(prev, 1));
  const goToNextWeek = () => setEditionDate((prev) => addWeeks(prev, 1));

  return {
    currentEdition: data ?? { edition_date: editionDate.toISOString() },
    isLoading,
    goToPreviousWeek,
    goToNextWeek,
  };
}
