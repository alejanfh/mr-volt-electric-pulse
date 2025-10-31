import { addDays } from "date-fns";
import newsData from "@/data/news.json";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  detail_summary: string;
  source_url: string;
  image_url: string;
  published_at: string;
  display_order: number;
}

export interface WeeklyEdition {
  edition_date: string;
  news: NewsItem[];
}

export const getWeekStartDate = (date: Date): string => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  const monday = new Date(date.setDate(diff));
  return monday.toISOString().split("T")[0];
};

export const getAdjustedWeekStartDatePlusOne = (date: Date): string => {
  const day = new Date(date);
  const dayPlusOne = addDays(day, 0); // siempre sumamos 1 día
  return dayPlusOne.toISOString().split("T")[0];
};

export const getFallbackNewsForWeek = (weekStart: string): NewsItem[] => {
  const edition = newsData.find((ed) => ed.edition_date === weekStart);
  return edition ? edition.news : [];
};
