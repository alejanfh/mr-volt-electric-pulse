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
    edition_date: "2025-07-21",
    news: [
      {
        id: "1",
        title: "¿Por qué Tesla cuesta 28 000 € en China y 40 000 € en Europa?",
        summary: "Gran diferencia de precio del Tesla en dos mercados clave.",
        detail_summary:
          "Análisis del porqué Model 3 cuesta 28 000 € en China pero 40 000 € en Europa; factores como aranceles, logística y demanda intervienen.",
        source_url:
          "https://forococheselectricos.com/noticias/por-que-tesla-cuesta-28000-euros-china-y-40000-euros-en-europa-20250723-37788.html",
        image_url:
          "https://images.forococheselectricos.com/2025/07/23/tesla-precios-china-europa.jpg",
        published_at: "2025-07-23T08:00:00Z",
        display_order: 1,
      },
      {
        id: "2",
        title: "Elon Musk adelanta su Tesla más barato",
        summary: "Musk revela diseño del coche más económico de Tesla.",
        detail_summary:
          "Elon Musk describe el próximo Tesla 'Low Cost', indicando prestaciones ajustadas y precio inferior al Model 3; expectativas renovadas.",
        source_url:
          "https://www.hibridosyelectricos.com/coches/elon-musk-desvela-como-sera-coche-mas-barato-tesla-es-bastante-decepcionante_81400_102.html",
        image_url:
          "https://www.hibridosyelectricos.com/uploads/s1/11/16/83/1/tesla_4_1000x563.jpeg",
        published_at: "2025-07-24T10:30:00Z",
        display_order: 2,
      },
      {
        id: "3",
        title: "Proyecto eléctrico del Puerto de Sevilla",
        summary: "Endesa y Puerto amplían subestación para impulsar carga.",
        detail_summary:
          "El Puerto de Sevilla y Endesa invertirán 5 M€ para una subestación de 40 MW destinada a cargadores EV, OPS para cruceros y parque solar antes de 2028.",
        source_url:
          "https://www.puertodesevilla.com/comunicacion/actualidad/el-puerto-de-sevilla-y-endesa-presentan-la-nueva-infraestructura-electrica-que-impulsara-el-distrito-urbano-portuario-y-los-desarrollos-de-la-margen-izquierda",
        image_url:
          "https://www.puertodesevilla.com/templates/yootheme/cache/9e/RafaelCarmonaRafaelSanchez-9e4d1d8e.webp",
        published_at: "2025-07-21T12:30:00Z",
        display_order: 3,
      },
      {
        id: "4",
        title: "Subaru lanza nueva familia eléctrica",
        summary: "Uncharted, Solterra y E‑Outback desembarcan en Europa.",
        detail_summary:
          "Subaru presenta en EEUU su gama eléctrica europea: el crossover Uncharted, la actualización del Solterra y el E‑Outback, basados en plataformas Toyota.",
        source_url:
          "https://forococheselectricos.com/noticias/subaru-nueva-gama-electrica-europa-uncharted-solterra-e-outback-20250718-37745.html",
        image_url:
          "https://images.forococheselectricos.com/image/l/1100w/editorial/cc569cccd16d0beb37b3f8cd0e6a11ddad090639497c712856210751a442d30d.jpeg",
        published_at: "2025-07-21T11:29:00Z",
        display_order: 4,
      },
      {
        id: "5",
        title: "MG presenta los EV IM5 e IM6 en Goodwood",
        summary: "MG revela dos eléctricos con hasta 655 km de autonomía.",
        detail_summary:
          "En Goodwood, MG anuncia sus IM5 e IM6 para Europa, con hasta 655 km WLTP, grandes pantallas y conducción asistida Momenta.",
        source_url:
          "https://forococheselectricos.com/noticias/mg-im5-im6-nuevos-coches-electricos-avanzados-europa-20250711-37672.html",
        image_url:
          "https://images.forococheselectricos.com/image/l/1100w/editorial/2f2f1797ff20f242043232d8fa01c40631cc835d94b38cc01b5bbbbebad0086e.jpeg",
        published_at: "2025-07-22T10:46:00Z",
        display_order: 5,
      },
      {
        id: "6",
        title: "España vende 11 334 EV en junio, récord",
        summary: "España bate récord de matriculaciones EV en junio.",
        detail_summary:
          "Con 11 334 eléctricos vendidos en junio (＋104 % vs 2024), España marca un récord histórico, impulsado por ayudas del Plan Reinicia Auto+ y MOVES III.",
        source_url:
          "https://cincodias.elpais.com/companias/2025-07-01/las-ventas-de-coches-electricos-en-espana-superan-las-10000-unidades-por-primera-vez.html",
        image_url:
          "https://imagenes.elpais.com/resizer/v2/APEJ272O7NF6LLMUPSHQBTWJ5I.JPG?auth=cba7a6094a2f10a25a61c46fc7a8a83f9b74f62456c189bbfc0543fef42de887&width=1200",
        published_at: "2025-07-23T12:41:12Z",
        display_order: 6,
      },
      {
        id: "7",
        title: "Estudio: baterías EV duran >12 años",
        summary: "Las baterías mantienen >80 % de capacidad tras 12 años.",
        detail_summary:
          "Un estudio con 10 000 EV muestra una degradación del 1,8 % anual; la mayoría conserva más del 80 % de capacidad tras 12 años, incluso con carga rápida.",
        source_url:
          "https://www.hibridosyelectricos.com/coches/cuantos-dura-bateria-coche-electrico-estudio-10000-vehiculos-tiene-respuesta_81310_102.html",
        image_url:
          "https://www.hibridosyelectricos.com/uploads/s1/11/11/88/1/bateria-coche-electrico-volkswagen_4_1000x563.jpeg",
        published_at: "2025-07-18T14:20:00Z",
        display_order: 7,
      },
    ],
  },
  {
    edition_date: "2025-07-14",
    news: [
      {
        id: "1",
        title: "Cupra Raval será el urbano eléctrico de 2025",
        summary:
          "Cupra confirma el lanzamiento del Raval, su EV urbano en 2025.",
        detail_summary:
          "Cupra ha presentado el Raval, derivado del concept UrbanRebel, que llegará en 2025 como su primer urbano 100 % eléctrico con 226 CV, hasta 440 km de autonomía y fabricación en Martorell bajo PERTE VEC.",
        source_url:
          "https://es.motor1.com/news/761677/cupra-raval-debut-septiembre-lanzamiento/",
        image_url:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
        published_at: "2025-06-10T14:00:00Z",
        display_order: 1,
      },
      {
        id: "2",
        title: "Ventas Tesla Model Y suben +61 % en España",
        summary: "Ventas del Model Y crecen un 61 % en junio en España.",
        detail_summary:
          "Tesla ha registrado un aumento del 61 % en las ventas del Model Y en España durante junio 2025, con 2 632 unidades matriculadas, impulsadas por la renovada versión y fuerte demanda europea.",
        source_url:
          "https://www.reuters.com/business/retail-consumer/new-tesla-sales-spain-rise-61-june-2025-07-01/",
        image_url:
          "https://images.unsplash.com/photo-1676969535152-e05370c6d108?w=800",
        published_at: "2025-07-01T08:00:00Z",
        display_order: 2,
      },
      {
        id: "3",
        title: "España supera 10.000 EV vendidos en junio",
        summary: "España rompe 10 000 ventas mensuales de eléctricos.",
        detail_summary:
          "En junio de 2025, España superó por primera vez las 10 000 matriculaciones de coches eléctricos en un mes (11 334 unidades), un 104 % más que el año anterior, gracias a ayudas del Plan Reinicia Auto+ y MOVES III.",
        source_url:
          "https://cincodias.elpais.com/companias/2025-07-01/las-ventas-de-coches-electricos-en-espana-superan-las-10000-unidades-por-primera-vez.html",
        image_url:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        published_at: "2025-07-01T12:41:12Z",
        display_order: 3,
      },
      {
        id: "4",
        title: "Estudio: baterías EV duran más de 12 años",
        summary:
          "Geotab analiza 10 000 EV y concluye que la mayoría mantiene >80 % de capacidad a 12 años.",
        detail_summary:
          "Un estudio de Geotab con datos de 10 000 vehículos eléctricos revela que la degradación media anual es del 1,8 %, significativamente menor que hace cinco años, y que la mayoría de baterías supera la vida útil del propio coche, conservando más del 80 % tras 12 años, incluso en flotas y con uso de carga rápida.",
        source_url:
          "https://www.hibridosyelectricos.com/coches/cuantos-dura-bateria-coche-electrico-estudio-10000-vehiculos-tiene-respuesta_81310_102.html",
        image_url:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        published_at: "2025-07-18T14:20:00Z",
        display_order: 4,
      },
      {
        id: "5",
        title: "Iberdrola anuncia 500 cargadores rápidos",
        summary: "Iberdrola instalará 500 puntos de carga en autopistas.",
        detail_summary:
          "Iberdrola planea instalar 500 cargadores rápidos en autopistas y áreas estratégicas de España, reforzando la infraestructura de recarga para vehículos eléctricos y mejorando la cobertura nacional.",
        source_url:
          "https://forococheselectricos.com/noticias/iberdrola-500-cargadores-rapidos-2025/",
        image_url:
          "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
        published_at: "2025-07-03T12:00:00Z",
        display_order: 5,
      },
      {
        id: "6",
        title: "Subaru lanzará tres nuevos eléctricos en Europa",
        summary: "Subaru anuncia nuevos modelos EV para 2025 y 2026 en Europa.",
        detail_summary:
          "Subaru ha presentado su estrategia eléctrica para Europa con el nuevo Solterra 2025, el concept Uncharted, y el futuro e-Outback. El Solterra se actualiza con más autonomía y acabados. El Uncharted adelanta un SUV urbano, y el e-Outback será el primero 100 % eléctrico de gran tamaño de la marca japonesa.",
        source_url:
          "https://www.carwow.es/subaru/noticias/5910/subaru-electricos-solterra-uncharted-eoutback-precio-lanzamiento-medidas#gref",
        image_url:
          "https://carwow-es-wp-2.imgix.net/uncharted-mini.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800",
        published_at: "2025-07-16T10:00:00Z",
        display_order: 6,
      },
      {
        id: "7",
        title: "Rivian se alía con Uber para lanzar robotaxis",
        summary:
          "Uber usará SUVs eléctricos de Rivian para robotaxis en EE.UU.",
        detail_summary:
          "Rivian ha anunciado una alianza con Uber para integrar sus futuros SUV eléctricos autónomos en servicios de robotaxis en EE. UU. Esta colaboración incluye el uso de la plataforma Rivian RCV, y promete reducir costes y emisiones, situando a Rivian como fuerte rival de Tesla en movilidad autónoma.",
        source_url:
          "https://www.hibridosyelectricos.com/coches/mayor-rival-tesla-se-asocia-con-uber-sumarse-robotaxis-usara-el-mejor-suv-electrico-mundo_81316_102.html",
        image_url:
          "https://www.hibridosyelectricos.com/uploads/s1/11/12/25/8/mayor-rival-tesla-uber-robotaxi-mejor-suv-electrico-del-mundo3_4_1000x563.jpeg",
        published_at: "2025-07-18T11:15:00Z",
        display_order: 7,
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
