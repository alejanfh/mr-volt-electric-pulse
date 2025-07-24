import { chargers } from "@/data/featuredChargers";
import { ChargerCard } from "@/components/ChargerCard";
import { Link } from "react-router-dom";

const FeaturedChargers = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-[#0A2C4F] via-[#1477C3] to-[#55C2F5] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-4 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rotate-45" />
      </div>
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white font-[Bungee] leading-tight">
          ⚡ Guía MrVolt de Cargadores
          <br />
          <span className="text-[#55C2F5]">5 Rayos</span>
        </h1>
        <p className="text-lg font-[Bungee] text-white/90 max-w-2xl mx-auto">
          Selección semanal de los mejores puntos de carga en España por
          ubicación, potencia y accesibilidad.
        </p>
      </div>
      <div className="my-4">
        <Link
          to="/"
          className="inline-block relative bg-white/20 border border-white/50 px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-[#0A2C4F] transition duration-300 shadow-lg z-[9999]"
        >
          ← Volver a las noticias
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {chargers.map((charger, index) => (
          <ChargerCard key={index} charger={charger} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedChargers;
