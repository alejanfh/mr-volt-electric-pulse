
import { weeklyNews } from "@/data/newsData";

export const MenuSection = () => {
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
          {weeklyNews.map((item, index) => (
            <div 
              key={item.id}
              className="bg-gradient-to-br from-[#55C2F5]/10 to-[#1477C3]/10 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#55C2F5]/20 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1477C3] to-[#55C2F5] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0A2C4F] mb-2 font-[Rubik] leading-tight">
                {item.menuTitle}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.menuDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
