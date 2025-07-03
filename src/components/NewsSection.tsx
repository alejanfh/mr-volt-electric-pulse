
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const featuredNews = [
  {
    title: "Tesla Model Y actualizado: nuevas mejoras en autonomía",
    summary: "El fabricante estadounidense presenta mejoras significativas en la eficiencia energética de su SUV más popular.",
    date: "2 Ene 2025",
    category: "Lanzamientos",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=240"
  },
  {
    title: "Red de supercargadores: 500 nuevos puntos en España",
    summary: "La infraestructura de carga rápida se expande con una inversión récord para 2025.",
    date: "1 Ene 2025", 
    category: "Infraestructura",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240"
  },
  {
    title: "Comparativa: BMW iX vs Mercedes EQS SUV",
    summary: "Analizamos los dos SUV eléctricos premium más esperados del año en una prueba exhaustiva.",
    date: "30 Dic 2024",
    category: "Comparativas", 
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=240"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredNews.map((news, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#55C2F5]/20 bg-white"
            >
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
              <CardHeader className="pb-2">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {news.date}
                </div>
                <CardTitle className="text-lg text-[#0A2C4F] font-bold leading-tight">
                  {news.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {news.summary}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-[#1477C3] text-[#1477C3] hover:bg-[#1477C3] hover:text-white transition-all duration-300"
                >
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#1477C3] to-[#55C2F5] hover:from-[#0A2C4F] hover:to-[#1477C3] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Ver todas las noticias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
