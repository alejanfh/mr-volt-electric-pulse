
export interface NewsItem {
  id: number;
  title: string;
  short_title: string;
  short_description: string;
  headline: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  sourceUrl: string;
}

export const weeklyNews: NewsItem[] = [
  {
    id: 1,
    title: "Hyundai lanza el Ioniq 6 N",
    short_title: "Hyundai lanza el Ioniq 6 N",
    short_description: "Hyundai presenta su nuevo coche eléctrico deportivo.",
    headline: "Hyundai revoluciona el EV deportivo con su nuevo Ioniq 6 N de 650 CV",
    summary: "Hyundai ha presentado el Ioniq 6 N, una versión radical de su sedán eléctrico con 650 CV, aceleración brutal y sonido artificial para una experiencia deportiva total.",
    date: "11 Jul 2025",
    category: "Lanzamientos",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=240",
    sourceUrl: "https://forococheselectricos.com/noticias/hyundai-presenta-ioniq-6-n-20250711-37668.html"
  },
  {
    id: 2,
    title: "Piden ampliar el Moves III",
    short_title: "Piden ampliar el Moves III",
    short_description: "Madrid agota fondos y reclaman más ayuda al eléctrico.",
    headline: "Industria exige más dinero para el Moves III tras agotarse en Madrid",
    summary: "La patronal del automóvil pide ampliar urgentemente el Plan Moves III, cuyos fondos ya están agotados en Madrid, clave para seguir impulsando las ventas de eléctricos.",
    date: "10 Jul 2025",
    category: "Política",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240",
    sourceUrl: "https://cincodias.elpais.com/companias/2025-07-10/la-automocion-reclama-mas-partidas-para-el-plan-moves-es-la-unica-solucion-para-mantener-la-demanda-a-corto-plazo.html"
  },
  {
    id: 3,
    title: "Proponen Moves IV",
    short_title: "Proponen Moves IV",
    short_description: "El Congreso quiere nuevas ayudas más directas.",
    headline: "El Plan Moves IV propone IVA reducido y descuentos instantáneos",
    summary: "Una propuesta en el Congreso plantea el Moves IV: descuentos directos, deducciones fiscales y reducción del IVA para facilitar la compra de coches eléctricos en España.",
    date: "9 Jul 2025",
    category: "Política",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=240",
    sourceUrl: "https://www.motorbikemag.es/plan-moves-iv-posibles-cambios-congreso/"
  },
  {
    id: 4,
    title: "Bajan precios de EV usados",
    short_title: "Bajan precios de EV usados",
    short_description: "El mercado de ocasión baja un 12 % en un año.",
    headline: "El coche eléctrico usado se desploma: 12 % más barato en un año",
    summary: "El precio de los eléctricos de segunda mano ha caído un 12 % debido al aumento de oferta, descuentos de fabricantes y menor demanda de modelos premium.",
    date: "8 Jul 2025",
    category: "Mercado",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=240",
    sourceUrl: "https://ganvam.es/el-precio-del-coche-electrico-de-ocasion-cae-un-121-a-cierre-del-primer-trimestre-de-2025/"
  },
  {
    id: 5,
    title: "Llegan los EV baratos",
    short_title: "Llegan los EV baratos",
    short_description: "Auge de eléctricos por debajo de los 20.000 €.",
    headline: "Los coches eléctricos baratos llegan a España: desde 16.000 €",
    summary: "Fabricantes como BYD, MG, Citroën o Renault lanzan modelos eléctricos asequibles por debajo de 20.000 €, marcando el inicio de una nueva era de movilidad eléctrica accesible.",
    date: "26 May 2025",
    category: "Lanzamientos",
    image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=400&h=240",
    sourceUrl: "https://cincodias.elpais.com/companias/2025-05-26/el-automovil-calienta-la-batalla-por-el-electrico-barato-el-mercado-suma-varios-modelos-en-torno-a-16000-euros.html"
  }
];
