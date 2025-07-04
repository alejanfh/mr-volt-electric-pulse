
import { useLatestEdition, getMenuData } from "@/hooks/useNews";
import { Loader2 } from "lucide-react";

export const MenuSection = () => {
  const { data: editionData, isLoading, error } = useLatestEdition();

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2C4F] mb-4 font-[Bungee]">
              Menú de la semana
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Las 5 noticias más importantes que necesitas saber esta semana
            </p>
          </div>
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-[#1477C3]" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !editionData || editionData.length === 0) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2C4F] mb-4 font-[Bungee]">
              Menú de la semana
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Las 5 noticias más importantes que necesitas saber esta semana
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              No hay edición semanal disponible en este momento.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2C4F] mb-4 font-[Bungee]">
            Menú de la semana
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Las 5 noticias más importantes que necesitas saber esta semana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {editionData.map((item) => {
            const menuData = getMenuData(item.title);
            return (
              <div 
                key={item.news_id}
                className="bg-gradient-to-br from-[#55C2F5]/10 to-[#1477C3]/10 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#55C2F5]/20 cursor-pointer group"
                onClick={() => window.open(item.source_url, '_blank')}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1477C3] to-[#55C2F5] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">
                    {item.display_order}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0A2C4F] mb-2 font-[Rubik] leading-tight">
                  {menuData.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {menuData.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
