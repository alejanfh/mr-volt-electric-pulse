
export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  sourceUrl: string;
  menuTitle: string;
  menuDescription: string;
}

export const weeklyNews: NewsItem[] = [
  {
    id: 1,
    title: "Tesla Model Y actualizado: nuevas mejoras en autonomía",
    summary: "El fabricante estadounidense ha presentado una actualización significativa para su SUV más popular, el Model Y, incorporando mejoras en la eficiencia energética que prometen extender la autonomía hasta en un 15%. Las mejoras incluyen una nueva gestión térmica de la batería, aerodinámica optimizada y actualizaciones en el software de gestión de energía. Estas mejoras llegan en un momento crucial para Tesla, ya que la competencia en el segmento de SUV eléctricos se intensifica con nuevos modelos de BMW, Mercedes y Audi entrando al mercado.",
    date: "2 Ene 2025",
    category: "Lanzamientos",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=240",
    sourceUrl: "https://electrek.co/tesla-model-y-updates",
    menuTitle: "Tesla Model Y+",
    menuDescription: "Nuevas mejoras que extienden la autonomía"
  },
  {
    id: 2,
    title: "Red de supercargadores: 500 nuevos puntos en España",
    summary: "La infraestructura de carga rápida experimenta una expansión sin precedentes con una inversión récord de 200 millones de euros para 2025. Los nuevos supercargadores, con potencias de hasta 350 kW, se distribuirán estratégicamente en autopistas, centros comerciales y áreas urbanas. Esta iniciativa forma parte del plan nacional de electromovilidad y cuenta con el respaldo de fondos europeos Next Generation. Se espera que esta expansión reduzca significativamente los tiempos de espera y mejore la experiencia de carga para los usuarios de vehículos eléctricos.",
    date: "1 Ene 2025", 
    category: "Infraestructura",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240",
    sourceUrl: "https://www.expansion.com/empresas/energia/supercargadores-espana",
    menuTitle: "500 cargadores nuevos",
    menuDescription: "Expansión masiva de la red en España"
  },
  {
    id: 3,
    title: "Comparativa: BMW iX vs Mercedes EQS SUV",
    summary: "Hemos puesto a prueba los dos SUV eléctricos premium más esperados del año en una comparativa exhaustiva que incluye pruebas de autonomía real, comportamiento dinámico, calidad interior y tecnología. El BMW iX destaca por su deportividad y sistema de infoentretenimiento, mientras que el Mercedes EQS SUV sobresale en confort y refinamiento. Ambos ofrecen más de 400 km de autonomía real y tiempos de carga competitivos. La elección entre ambos dependerá del perfil del conductor: más deportivo para el BMW, más lujoso para el Mercedes.",
    date: "30 Dic 2024",
    category: "Comparativas", 
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=240",
    sourceUrl: "https://www.motorpasion.com/pruebas/bmw-ix-vs-mercedes-eqs-suv",
    menuTitle: "BMW iX vs Mercedes EQS",
    menuDescription: "Duelo de SUV premium eléctricos"
  },
  {
    id: 4,
    title: "BYD revoluciona el mercado con nueva batería LFP",
    summary: "El gigante chino BYD ha presentado su nueva tecnología de batería LFP (Litio Ferro Fosfato) de tercera generación, prometiendo revolucionar el mercado de vehículos eléctricos con mejoras significativas en densidad energética, velocidad de carga y vida útil. La nueva batería Blade 2.0 ofrece una densidad energética un 20% superior a la generación anterior, manteniendo la seguridad característica de la tecnología LFP. Esta innovación podría reducir significativamente el coste de los vehículos eléctricos y acelerar la adopción masiva de la electromovilidad a nivel global.",
    date: "29 Dic 2024",
    category: "Tecnología",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=240",
    sourceUrl: "https://www.hybrid.tv/byd-nueva-bateria-lfp-revolucion",
    menuTitle: "BYD Blade 2.0",
    menuDescription: "Nueva generación de baterías LFP"
  },
  {
    id: 5,
    title: "Volkswagen ID.7 Tourer: familiar eléctrica llega a España",
    summary: "Volkswagen amplía su gama ID con la llegada del ID.7 Tourer, la versión familiar de su berlina eléctrica premium. Con un maletero de 605 litros y hasta 545 km de autonomía WLTP, esta familiar eléctrica busca convencer a las familias que aún dudan del cambio eléctrico. Incorpora la última versión del software ID OS 4.0, con mejoras significativas en la interfaz de usuario y nuevas funcionalidades de conectividad. Los precios en España arrancan desde 54.990 euros, posicionándose como una alternativa directa al BMW i4 Touring y el Mercedes EQE Estate.",
    date: "28 Dic 2024",
    category: "Lanzamientos",
    image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=400&h=240",
    sourceUrl: "https://www.autobild.es/noticias/volkswagen-id7-tourer-espana-precios",
    menuTitle: "VW ID.7 Tourer",
    menuDescription: "La familiar eléctrica llega a España"
  }
];
