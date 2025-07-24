import { chargers } from "@/data/featuredChargers";
import { ChargerCard } from "@/components/ChargerCard";
import { Link } from "react-router-dom";

const FeaturedChargers = () => {
  return (
    <div className="bg-gradient-to-br from-[#0d4f94] via-[#308cd9] to-[#6bbdf3] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-4">
          ⚡ Guía MrVolt de Cargadores 5 Rayos
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Selección semanal de los mejores puntos de carga en España por
          ubicación, potencia y accesibilidad.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {chargers.map((charger, index) => (
          <ChargerCard key={index} charger={charger} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/"
          className="text-sm font-medium text-white hover:text-gray-100 transition"
        >
          ← Volver a las noticias
        </Link>
      </div>
    </div>
  );
};

export default FeaturedChargers;
