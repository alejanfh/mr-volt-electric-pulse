// hooks/useEditionNavigation.ts
import { useState } from "react";
import { addWeeks, subWeeks } from "date-fns";
import { getFallbackNewsForWeek, getWeekStartDate } from "@/data/fallbackNews";

export function useEditionNavigation() {
  const [editionDate, setEditionDate] = useState(() =>
    getWeekStartDate(new Date())
  );

  const hasPreviousWeek = !!getFallbackNewsForWeek(
    getWeekStartDate(subWeeks(new Date(editionDate), 1))
  ).length;

  const hasNextWeek = !!getFallbackNewsForWeek(
    getWeekStartDate(addWeeks(new Date(editionDate), 1))
  ).length;

  return {
    currentEdition: { edition_date: editionDate },
    goToPreviousWeek: () =>
      setEditionDate((prev) => getWeekStartDate(subWeeks(new Date(prev), 1))),
    goToNextWeek: () =>
      setEditionDate((prev) => getWeekStartDate(addWeeks(new Date(prev), 1))),
    hasPreviousWeek,
    hasNextWeek,
    isLoading: false,
  };
}
