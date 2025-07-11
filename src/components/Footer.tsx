
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-[#0A2C4F] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/0844df4b-62e9-4931-bfb3-3861b8983495.png" 
              alt="Mr. Volt Logo" 
              className="w-12 h-12 mr-3"
            />
            <div>
              <h3 className="text-xl font-bold font-[Bungee]">Mr. Volt</h3>
              <p className="text-blue-200 text-sm">Noticias eléctricas</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/aviso-legal" className="hover:text-[#55C2F5] transition-colors duration-300">
              Aviso Legal
            </a>
            <a href="/politica-privacidad" className="hover:text-[#55C2F5] transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="/politica-cookies" className="hover:text-[#55C2F5] transition-colors duration-300">
              Política de Cookies
            </a>
            <a href="mailto:animalitoemprendedor@gmail.com" className="hover:text-[#55C2F5] transition-colors duration-300">
              Contacto
            </a>
          </div>
        </div>

        <Separator className="bg-blue-800 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-blue-200">
          <p>© 2025 Mr. Volt. Una newsletter independiente sobre movilidad eléctrica.</p>
          <p className="mt-2 md:mt-0">
            Hecho con ⚡ para entusiastas de los vehículos eléctricos
          </p>
        </div>
      </div>
    </footer>
  );
};
