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

export const fallbackNewsData: WeeklyEdition[] = [
  {
    edition_date: "2025-07-14",
    news: [
      {
        id: "1",
        title: "Cupra Raval será el urbano eléctrico de 2025",
        summary:
          "Cupra confirma el lanzamiento del Raval, su EV urbano en 2025.",
        detail_summary:
          "Cupra ha confirmado que el Raval, derivado del concept UrbanRebel, llegará en 2025 como su primer urbano totalmente eléctrico, con 226 CV y una autonomía de hasta 440 km, fabricado en Martorell.",
        source_url: "https://www.cupraofficial.com/concept-cars/urbanrebel",
        image_url:
          "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
        published_at: "2025-07-10T09:00:00Z",
        display_order: 1,
      },
      {
        id: "2",
        title: "Tesla Model Y impulsa ventas en España",
        summary: "Ventas del Model Y crecen +61 % en junio vs año anterior.",
        detail_summary:
          "Tesla ha registrado un aumento del 61 % en ventas del Model Y en España durante junio 2025 (2 632 unidades), gracias al modelo actualizado y fuerte demanda en mercado europeo.",
        source_url:
          "https://www.reuters.com/business/retail-consumer/new-tesla-sales-spain-rise-61-june-2025-07-01/",
        image_url:
          "https://images.unsplash.com/photo-1676969535152-e05370c6d108?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        published_at: "2025-07-01T08:00:00Z",
        display_order: 2,
      },
      {
        id: "3",
        title: "Skoda inicia producción del Elroq",
        summary: "Comienza la fabricación en serie del nuevo SUV Elroq.",
        detail_summary:
          "Škoda ha iniciado la producción del Elroq, un SUV compacto 100 % eléctrico, en su planta de Mladá Boleslav, con capacidad de 600 unidades/día y más de 20 000 pedidos registrados.",
        source_url:
          "https://www.skoda-storyboard.com/en/press-releases/skoda-elroq-czech-carmaker-powers-up-production-of-its-most-affordable-all-electric-model/",
        image_url:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
        published_at: "2025-01-22T07:00:00Z",
        display_order: 3,
      },
      {
        id: "4",
        published_at: "2025-07-10T13:00:00Z",
        title: "España lidera crecimiento EV en Europa",
        summary: "España encabeza el crecimiento eléctrico en junio.",
        detail_summary:
          "España lidera el crecimiento de ventas de coches eléctricos entre los grandes mercados europeos, con un aumento del 15,3 % gracias al plan MOVES III y mayor demanda.",
        source_url:
          "https://autovista24.autovistagroup.com/news/spain-leads-european-new-car-markets-with-impressive-ev-growth/",
        image_url:
          "https://images.unsplash.com/photo-1751355356724-7df0dda28b2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        display_order: 4,
      },
      {
        id: "5",
        title: "Iberdrola instalará 500 cargadores rápidos",
        summary: "Iberdrola desplegará 500 puntos de carga en autopistas.",
        detail_summary:
          "La compañía eléctrica Iberdrola ha anunciado un plan para instalar 500 cargadores rápidos de alto rendimiento en autopistas y áreas estratégicas de España, acelerando la infraestructura EV.",
        source_url:
          "https://forococheselectricos.com/noticias/iberdrola-500-cargadores-rapidos-2025/",
        image_url:
          "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
        published_at: "2025-07-03T12:00:00Z",
        display_order: 5,
      },
    ],
  },
  {
    edition_date: "2025-07-07",
    news: [
      {
        id: "1",
        title: "Hyundai Ioniq 6 N debut",
        summary:
          "Hyundai presenta la versión deportiva del Ioniq 6 con 650 CV y tecnología N.",
        detail_summary:
          "Hyundai ha desvelado la versión N del Ioniq 6, con 650 CV, mejoras en chasis, frenos y aerodinámica, posicionándolo como rival de los deportivos eléctricos.",
        source_url:
          "https://forococheselectricos.com/noticias/hyundai-ioniq-6-n-20250711-37668.html",
        image_url:
          "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
        published_at: "2025-07-10T10:00:00Z",
        display_order: 1,
      },
      {
        id: "2",
        title: "Subaru Uncharted EV",
        summary: "Subaru revela su estrategia EV y nuevos modelos para 2026.",
        detail_summary:
          "Subaru ha anunciado su entrada en el mercado eléctrico con una serie de modelos nuevos para 2026, marcando un cambio de rumbo en su catálogo hacia vehículos sostenibles.",
        source_url:
          "https://movilidadelectrica.com/2025/07/09/subaru-unveils-first-electric-models-2026/",
        image_url:
          "https://images.unsplash.com/photo-1606611881852-ec2dd440f201?w=800",
        published_at: "2025-07-09T14:30:00Z",
        display_order: 2,
      },
      {
        id: "3",
        title: "Nuevo Nissan Leaf",
        summary: "Nissan anuncia nueva generación del Leaf con más autonomía.",
        detail_summary:
          "Nissan ha presentado el nuevo Leaf, con mejoras en batería y carga rápida, alcanzando hasta 500 km de autonomía real, ideal para conducción urbana y viajes.",
        source_url:
          "https://www.elmundo.es/motor/2025/07/08/6863b663fdddff2a028b4594.html",
        image_url:
          "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
        published_at: "2025-07-08T09:15:00Z",
        display_order: 3,
      },
      {
        id: "4",
        title: "Moves III agotado",
        summary:
          "El plan MOVES III se agota antes de lo previsto por demanda alta.",
        detail_summary:
          "El programa de ayudas MOVES III ha agotado su presupuesto en pocas semanas, lo que genera incertidumbre sobre continuidad o ampliación del plan enfocado a la movilidad eléctrica.",
        source_url:
          "https://forococheselectricos.com/noticias/moves-iii-presupuesto-agotado-2025/",
        image_url:
          "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800",
        published_at: "2025-07-11T16:45:00Z",
        display_order: 4,
      },
      {
        id: "5",
        title: "Récord de ventas EV",
        summary: "España bate récord de matriculaciones EV en julio.",
        detail_summary:
          "España ha superado las 11 000 matriculaciones de coches eléctricos en un solo mes por primera vez, impulsada por ayudas y mayor oferta de modelos.",
        source_url:
          "https://forococheselectricos.com/noticias/espana-supera-11000-matriculaciones-ev-junio-2025/",
        image_url:
          "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800",
        published_at: "2025-07-12T11:20:00Z",
        display_order: 5,
      },
    ],
  },
  {
    edition_date: "2025-06-30",
    news: [
      {
        id: "6",
        title: "Tesla Model Y actualizado",
        summary:
          "Tesla lanza la versión actualizada del Model Y con más autonomía.",
        detail_summary:
          "Tesla ha presentado el nuevo Model Y Refresh con batería de mayor capacidad, mejor eficiencia y opciones de mejora en aceleración y asistencia de conducción.",
        source_url:
          "https://forococheselectricos.com/noticias/tesla-model-y-refresh-2025/",
        image_url:
          "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800",
        published_at: "2025-07-02T12:00:00Z",
        display_order: 1,
      },
      {
        id: "7",
        title: "Volkswagen ID.7 llegada",
        summary: "VW confirma llegada del ID.7 a España en Q3.",
        detail_summary:
          "Volkswagen ha confirmado que el nuevo sedán eléctrico ID.7 llegará a España en el tercer trimestre, con versiones de alta autonomía y acabados premium.",
        source_url:
          "https://www.motorpasion.com/vehiculos-electricos/volkswagen-id7-llegada-espana-2025",
        image_url:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
        published_at: "2025-07-01T08:30:00Z",
        display_order: 2,
      },
      {
        id: "8",
        title: "BMW iX3 renovado",
        summary: "BMW presenta mejoras del iX3 con carga rápida.",
        detail_summary:
          "BMW ha renovado el iX3, añadiendo sistemas de carga de hasta 150 kW, nuevos asistentes de conducción y un interior actualizado con más conectividad.",
        source_url:
          "https://www.bmwblog.com/2025/06/30/bmw-ix3-facelift-electric-suv/",
        image_url:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        published_at: "2025-06-30T15:45:00Z",
        display_order: 3,
      },
      {
        id: "9",
        title: "Ayudas regionales EV",
        summary: "Regiones lanzan ayudas complementarias al MOVES.",
        detail_summary:
          "Varias comunidades han lanzado líneas de ayudas locales para coches eléctricos, sumándose al MOVES y ampliando incentivos en compra y punto de carga.",
        source_url:
          "https://forococheselectricos.com/noticias/ayudas-regionales-ev-2025/",
        image_url:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        published_at: "2025-07-04T10:15:00Z",
        display_order: 4,
      },
      {
        id: "10",
        title: "Estaciones carga rápida Iberdrola",
        summary: "Iberdrola anuncia 500 nuevos puntos de carga rápida.",
        detail_summary:
          "La eléctrica Iberdrola ha comunicado que instalará 500 nuevos puntos de recarga rápida en autopistas y áreas estratégicas, acelerando la infraestructura EV.",
        source_url:
          "https://forococheselectricos.com/noticias/iberdrola-500-cargadores-rapidos-2025/",
        image_url:
          "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800",
        published_at: "2025-07-03T14:20:00Z",
        display_order: 5,
      },
    ],
  },
];

export const getWeekStartDate = (date: Date): string => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  const monday = new Date(date.setDate(diff));
  return monday.toISOString().split("T")[0];
};

export const getFallbackNewsForWeek = (weekStart: string): NewsItem[] => {
  const edition = fallbackNewsData.find((ed) => ed.edition_date === weekStart);
  return edition ? edition.news : [];
};
