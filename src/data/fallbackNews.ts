export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source_url: string;
  image_url: string;
  published_at: string;
  display_order: number;
}

export interface WeeklyEdition {
  edition_date: string;
  news: NewsItem[];
}

export const fallbackNewsData: WeeklyEdition[] = [
  {
    edition_date: "2025-07-07",
    news: [
      {
        id: "1",
        title: "Hyundai Ioniq 6 N debut",
        summary: "Hyundai presenta la versión deportiva del Ioniq 6 con 650 CV de potencia y tecnología N.",
        source_url: "https://example.com/hyundai-ioniq6n",
        image_url: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
        published_at: "2025-07-10T10:00:00Z",
        display_order: 1
      },
      {
        id: "2",
        title: "Subaru Uncharted EV",
        summary: "Subaru revela su estrategia para vehículos eléctricos con nuevos modelos para 2026.",
        source_url: "https://example.com/subaru-ev",
        image_url: "https://images.unsplash.com/photo-1606611881852-ec2dd440f201?w=800",
        published_at: "2025-07-09T14:30:00Z",
        display_order: 2
      },
      {
        id: "3",
        title: "Nuevo Nissan Leaf",
        summary: "Nissan anuncia la nueva generación del Leaf con mayor autonomía y carga rápida.",
        source_url: "https://example.com/nissan-leaf",
        image_url: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
        published_at: "2025-07-08T09:15:00Z",
        display_order: 3
      },
      {
        id: "4",
        title: "Moves III agotado",
        summary: "El programa MOVES III agota su presupuesto antes de lo previsto por la alta demanda.",
        source_url: "https://example.com/moves-agotado",
        image_url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800",
        published_at: "2025-07-11T16:45:00Z",
        display_order: 4
      },
      {
        id: "5",
        title: "Récord de ventas EV",
        summary: "España bate récord de matriculaciones de vehículos eléctricos en julio.",
        source_url: "https://example.com/record-ventas",
        image_url: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800",
        published_at: "2025-07-12T11:20:00Z",
        display_order: 5
      }
    ]
  },
  {
    edition_date: "2025-06-30",
    news: [
      {
        id: "6",
        title: "Tesla Model Y actualizado",
        summary: "Tesla lanza la versión actualizada del Model Y con mejoras en autonomía.",
        source_url: "https://example.com/tesla-model-y",
        image_url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800",
        published_at: "2025-07-02T12:00:00Z",
        display_order: 1
      },
      {
        id: "7",
        title: "Volkswagen ID.7 llegada",
        summary: "Volkswagen confirma la llegada del ID.7 a España en el tercer trimestre.",
        source_url: "https://example.com/vw-id7",
        image_url: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
        published_at: "2025-07-01T08:30:00Z",
        display_order: 2
      },
      {
        id: "8",
        title: "BMW iX3 renovado",
        summary: "BMW presenta las mejoras del iX3 con nueva tecnología de carga.",
        source_url: "https://example.com/bmw-ix3",
        image_url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        published_at: "2025-06-30T15:45:00Z",
        display_order: 3
      },
      {
        id: "9",
        title: "Ayudas regionales EV",
        summary: "Nuevas ayudas regionales complementan al plan MOVES para vehículos eléctricos.",
        source_url: "https://example.com/ayudas-regionales",
        image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        published_at: "2025-07-04T10:15:00Z",
        display_order: 4
      },
      {
        id: "10",
        title: "Estaciones carga rápida",
        summary: "Iberdrola anuncia 500 nuevos puntos de carga rápida en autopistas.",
        source_url: "https://example.com/iberdrola-carga",
        image_url: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800",
        published_at: "2025-07-03T14:20:00Z",
        display_order: 5
      }
    ]
  }
];

export const getWeekStartDate = (date: Date): string => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  const monday = new Date(date.setDate(diff));
  return monday.toISOString().split('T')[0];
};

export const getFallbackNewsForWeek = (weekStart: string): NewsItem[] => {
  const edition = fallbackNewsData.find(ed => ed.edition_date === weekStart);
  return edition ? edition.news : [];
};