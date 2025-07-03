
import { Car, Battery, Bolt, MapPin, Zap } from "lucide-react";

const menuItems = [
  {
    icon: Car,
    title: "Novedades EV",
    description: "Los últimos lanzamientos y modelos eléctricos"
  },
  {
    icon: Battery, 
    title: "Pruebas reales",
    description: "Análisis profundos de autonomía y rendimiento"
  },
  {
    icon: Bolt,
    title: "Guías de carga",
    description: "Todo sobre cargadores y puntos de recarga"
  },
  {
    icon: MapPin,
    title: "Comparativas",
    description: "Enfrentamos los mejores modelos del mercado"
  },
  {
    icon: Zap,
    title: "Innovación",
    description: "Tecnología y avances en movilidad eléctrica"
  }
];

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
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#55C2F5]/10 to-[#1477C3]/10 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#55C2F5]/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1477C3] to-[#55C2F5] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2C4F] mb-2 font-[Rubik]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
