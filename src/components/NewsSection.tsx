
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const featuredNews = [
  {
    title: "Tesla Model Y actualizado: nuevas mejoras en autonomía",
    summary: "El fabricante estadounidense ha presentado una actualización significativa para su SUV más popular, el Model Y, incorporando mejoras en la eficiencia energética que prometen extender la autonomía hasta en un 15%. Las mejoras incluyen una nueva gestión térmica de la batería, aerodinámica optimizada y actualizaciones en el software de gestión de energía. Estas mejoras llegan en un momento crucial para Tesla, ya que la competencia en el segmento de SUV eléctricos se intensifica con nuevos modelos de BMW, Mercedes y Audi entrando al mercado.",
    date: "2 Ene 2025",
    category: "Lanzamientos",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=240",
    sourceUrl: "https://electrek.co/tesla-model-y-updates"
  },
  {
    title: "Red de supercargadores: 500 nuevos puntos en España",
    summary: "La infraestructura de carga rápida experimenta una expansión sin precedentes con una inversión récord de 200 millones de euros para 2025. Los nuevos supercargadores, con potencias de hasta 350 kW, se distribuirán estratégicamente en autopistas, centros comerciales y áreas urbanas. Esta iniciativa forma parte del plan nacional de electromovilidad y cuenta con el respaldo de fondos europeos Next Generation. Se espera que esta expansión reduzca significativamente los tiempos de espera y mejore la experiencia de carga para los usuarios de vehículos eléctricos.",
    date: "1 Ene 2025", 
    category: "Infraestructura",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240",
    sourceUrl: "https://www.expansion.com/empresas/energia/supercargadores-espana"
  },
  {
    title: "Comparativa: BMW iX vs Mercedes EQS SUV",
    summary: "Hemos puesto a prueba los dos SUV eléctricos premium más esperados del año en una comparativa exhaustiva que incluye pruebas de autonomía real, comportamiento dinámico, calidad interior y tecnología. El BMW iX destaca por su deportividad y sistema de infoentretenimiento, mientras que el Mercedes EQS SUV sobresale en confort y refinamiento. Ambos ofrecen más de 400 km de autonomía real y tiempos de carga competitivos. La elección entre ambos dependerá del perfil del conductor: más deportivo para el BMW, más lujoso para el Mercedes.",
    date: "30 Dic 2024",
    category: "Comparativas", 
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=240",
    sourceUrl: "https://www.motorpasion.com/pruebas/bmw-ix-vs-mercedes-eqs-suv"
  },
  {
    title: "BYD revoluciona el mercado con nueva batería LFP",
    summary: "El gigante chino BYD ha presentado su nueva tecnología de batería LFP (Litio Ferro Fosfato) de tercera generación, prometiendo revolucionar el mercado de vehículos eléctricos con mejoras significativas en densidad energética, velocidad de carga y vida útil. La nueva batería Blade 2.0 ofrece una densidad energética un 20% superior a la generación anterior, manteniendo la seguridad característica de la tecnología LFP. Esta innovación podría reducir significativamente el coste de los vehículos eléctricos y acelerar la adopción masiva de la electromovilidad a nivel global.",
    date: "29 Dic 2024",
    category: "Tecnología",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=240",
    sourceUrl: "https://www.hybrid.tv/byd-nueva-bateria-lfp-revolucion"
  },
  {
    title: "Volkswagen ID.7 Tourer: familiar eléctrica llega a España",
    summary: "Volkswagen amplía su gama ID con la llegada del ID.7 Tourer, la versión familiar de su berlina eléctrica premium. Con un maletero de 605 litros y hasta 545 km de autonomía WLTP, esta familiar eléctrica busca convencer a las familias que aún dudan del cambio eléctrico. Incorpora la última versión del software ID OS 4.0, con mejoras significativas en la interfaz de usuario y nuevas funcionalidades de conectividad. Los precios en España arrancan desde 54.990 euros, posicionándose como una alternativa directa al BMW i4 Touring y el Mercedes EQE Estate.",
    date: "28 Dic 2024",
    category: "Lanzamientos",
    image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=400&h=240",
    sourceUrl: "https://www.autobild.es/noticias/volkswagen-id7-tourer-espana-precios"
  }
];

export const NewsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2C4F] mb-4 font-[Bungee]">
            Últimas noticias eléctricas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantente al día con las novedades más importantes del mundo EV
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredNews.map((news, index) => (
            <div key={index} className={`${index >= 3 ? 'md:col-span-2 lg:col-span-1 xl:col-span-1' : ''}`}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#55C2F5]/20 bg-white h-full flex flex-col">
                <div className="relative">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1477C3] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {news.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2 flex-grow">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {news.date}
                  </div>
                  <CardTitle className="text-lg text-[#0A2C4F] font-bold leading-tight">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-4">
                    {news.summary}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-[#1477C3] text-[#1477C3] hover:bg-[#1477C3] hover:text-white transition-all duration-300"
                    onClick={() => window.open(news.sourceUrl, '_blank')}
                  >
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
