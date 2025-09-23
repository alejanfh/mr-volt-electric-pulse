// hooks/useEditionNews.ts
import { useQuery } from "@tanstack/react-query";

export const useEditionNews = (editionDate: string) => {
  return useQuery({
    queryKey: ["edition-news", editionDate],
    queryFn: async () => {
      return fetchNewsForWeek(editionDate);
    },
    enabled: !!editionDate,
  });
};

type NewsItem = {
  id: string;
  title: string;
  summary: string;
  detail_summary: string;
  source_url: string;
  image_url: string;
  published_at: string;
  display_order: number;
};

type EditionData = {
  edition_date: string;
  news: NewsItem[];
};

const fetchNewsForWeek = async (editionDate: string): Promise<NewsItem[]> => {
  const urlFromGithub =
    "https://raw.githubusercontent.com/alejanfh/mr-volt-electric-pulse/main/src/data/news.json";

  const response = await fetch(urlFromGithub);
  if (!response.ok) throw new Error("Error al cargar news.json");

  const allEditions: EditionData[] = await response.json();
  const edition = allEditions.find((ed) => ed.edition_date === editionDate);

  return edition ? edition.news : [];
};
