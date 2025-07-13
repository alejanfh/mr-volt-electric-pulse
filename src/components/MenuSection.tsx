// components/MenuSection.tsx
import { useEditionNavigation } from "@/hooks/useEditionNavigation";
import { useEditionNews } from "@/hooks/useEditionNews";
import { Loader2 } from "lucide-react";

export const MenuSection = () => {
  const { currentEdition } = useEditionNavigation();
  const date = currentEdition.edition_date;
  const { data: editionData, isLoading } = useEditionNews(date);

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-white text-center w-full flex justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-[#1477C3]" />
      </section>
    );
  }

  if (!editionData?.length) {
    return (
      <section className="py-16 px-4 bg-white text-center">
        <p className="text-gray-600">
          No hay noticias disponibles para esta semana.
        </p>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2C4F] mb-4 font-[Bungee]">
          Menú de la semana
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Las 5 noticias más importantes que necesitas saber esta semana
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {editionData.map((item) => (
            <div
              key={item.id}
              onClick={() => window.open(item.source_url, "_blank")}
              className="bg-gradient-to-br from-[#55C2F5]/10 to-[#1477C3]/10 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#55C2F5]/20 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1477C3] to-[#55C2F5] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">
                  {item.display_order}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0A2C4F] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
