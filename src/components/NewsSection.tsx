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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2C4F] mb-4 font-[Bungee]">
            Últimas noticias eléctricas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantente al día con las novedades más importantes del mundo EV
          </p>
        </div>

        <div className="space-y-8">
          {news.slice(0, 5).map((item) => (
            <Card
              key={item.id}
              className="border border-[#55C2F5]/20 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="md:flex h-full">
                {item.image_url && (
                  <div className="w-full md:w-64 h.48 md:h-auto flex shrink-0 overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(new Date(item.published_at), "d MMM yyyy", {
                      locale: es,
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2C4F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4 whitespace-pre-line">
                    {item.summary}
                  </p>
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#1477C3] text-[#1477C3] hover:bg-[#1477C3] hover:text-white"
                      onClick={() => window.open(item.source_url, "_blank")}
                    >
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
