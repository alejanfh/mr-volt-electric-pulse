
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import { useNews } from "@/hooks/useNews";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const NewsSection = () => {
  const { data: news, isLoading, error } = useNews();

  if (isLoading) {
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
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-[#1477C3]" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2C4F] mb-4 font-[Bungee]">
              Últimas noticias eléctricas
            </h2>
            <p className="text-lg text-red-600">
              Error al cargar las noticias. Por favor, inténtalo más tarde.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!news || news.length === 0) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2C4F] mb-4 font-[Bungee]">
              Últimas noticias eléctricas
            </h2>
            <p className="text-lg text-gray-600">
              No hay noticias disponibles en este momento.
            </p>
          </div>
        </div>
      </section>
    );
  }

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
          {news.slice(0, 5).map((newsItem) => (
            <div key={newsItem.id}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#55C2F5]/20 bg-white h-full flex flex-col group">
                <div className="relative overflow-hidden">
                  <img 
                    src={newsItem.image_url || "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=240"} 
                    alt={newsItem.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1477C3] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Noticias
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2 flex-grow">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(new Date(newsItem.published_at), "d MMM yyyy", { locale: es })}
                  </div>
                  <CardTitle className="text-lg text-[#0A2C4F] font-bold leading-tight group-hover:text-[#1477C3] transition-colors duration-300">
                    {newsItem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-4">
                    {newsItem.summary}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-[#1477C3] text-[#1477C3] hover:bg-[#1477C3] hover:text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    onClick={() => window.open(newsItem.source_url, '_blank')}
                  >
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
