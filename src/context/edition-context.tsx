// context/EditionContext.tsx
import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { addDays, addWeeks, subWeeks } from "date-fns";
import {
  getWeekStartDate,
  getFallbackNewsForWeek,
  getAdjustedWeekStartDatePlusOne,
} from "@/data/fallbackNews";

type EditionContextType = {
  editionDate: string;
  setEditionDate: (date: string) => void;
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
  hasPreviousWeek: boolean;
  hasNextWeek: boolean;
};

const EditionContext = createContext<EditionContextType | undefined>(undefined);

export function EditionProvider({ children }: { children: ReactNode }) {
  const [editionDate, setEditionDate] = useState(() =>
    getWeekStartDate(new Date())
  );

  const previousWeekDate = subWeeks(editionDate, 1);
  const previousWeek = getAdjustedWeekStartDatePlusOne(previousWeekDate);

  const nextWeek = getWeekStartDate(addWeeks(editionDate, 1));

  const value = useMemo(() => {
    return {
      editionDate,
      setEditionDate,
      goToPreviousWeek: () => setEditionDate(previousWeek),
      goToNextWeek: () => setEditionDate(nextWeek),
      hasPreviousWeek: !!getFallbackNewsForWeek(previousWeek).length,
      hasNextWeek: !!getFallbackNewsForWeek(nextWeek).length,
    };
  }, [editionDate]);

  return (
    <EditionContext.Provider value={value}>{children}</EditionContext.Provider>
  );
}

export function useEdition() {
  const context = useContext(EditionContext);
  if (!context) {
    throw new Error("useEdition must be used within EditionProvider");
  }
  return context;
}
