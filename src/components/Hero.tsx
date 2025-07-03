
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-[#0A2C4F] via-[#1477C3] to-[#55C2F5] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rotate-45"></div>
      </div>

      {/* Logo and branding */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/0844df4b-62e9-4931-bfb3-3861b8983495.png" 
            alt="Mr. Volt Logo" 
            className="w-64 h-64 md:w-80 md:h-80 object-contain filter drop-shadow-2xl"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-[Bungee] leading-tight">
          Las noticias eléctricas
          <br />
          <span className="text-[#55C2F5]">que te mueven</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          La mejor newsletter semanal sobre movilidad eléctrica. Novedades, lanzamientos, cargadores, innovación y más.
        </p>

        {/* Week selector with improved UX */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#0A2C4F] hover:border-white hover:shadow-lg rounded-full p-3 transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </Button>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 border border-white/30 shadow-lg">
            <span className="text-lg font-bold text-white">
              Semana del 30 Dic - 5 Ene 2025
            </span>
          </div>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#0A2C4F] hover:border-white hover:shadow-lg rounded-full p-3 transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </Button>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
