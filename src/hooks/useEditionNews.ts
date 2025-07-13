// hooks/useEditionNews.ts
import { useQuery } from "@tanstack/react-query";
import { getFallbackNewsForWeek } from "@/data/fallbackNews";

export const useEditionNews = (editionDate: string) => {
  return useQuery({
    queryKey: ["edition-news", editionDate],
    queryFn: async () => {
      return getFallbackNewsForWeek(editionDate);
    },
    enabled: !!editionDate,
  });
};
