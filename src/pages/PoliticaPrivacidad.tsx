import { Footer } from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
              ← Volver a Mr. Volt
            </a>
          </div>

          <div className="text-center mb-8">
            <span className="text-4xl mb-4 block">🔒</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Responsable del tratamiento</h2>
            <p className="mb-4 text-gray-700">
              <strong>Responsable:</strong> animalitoemprendedor<br />
              <strong>Contacto:</strong> <a href="mailto:animalitoemprendedor@gmail.com" className="text-blue-600 hover:text-blue-800">animalitoemprendedor@gmail.com</a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">2. Datos que se recogen</h2>
            <p className="mb-4 text-gray-700">
              Mr. Volt es un sitio web puramente informativo que no requiere registro de usuarios. El servidor registra de forma automática únicamente:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
              <li>Dirección IP del visitante</li>
              <li>Fecha y hora de acceso</li>
              <li>Tipo de navegador utilizado</li>
              <li>Sistema operativo</li>
              <li>Páginas visitadas dentro del sitio</li>
            </ul>
            <p className="mb-4 text-gray-700">
              <strong>No solicitamos datos personales</strong> mediante formularios de contacto, suscripciones o cualquier otro medio, ya que no ofrecemos servicios que requieran registro de usuarios.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">3. Finalidad y base jurídica</h2>
            <p className="mb-4 text-gray-700">
              Los datos de navegación se recogen únicamente para:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
              <li>Garantizar la seguridad técnica del sitio web</li>
              <li>Obtener estadísticas anónimas de visitas y uso</li>
              <li>Mejorar la experiencia de navegación</li>
            </ul>
            <p className="mb-4 text-gray-700">
              La base jurídica es el interés legítimo (art. 6.1.f RGPD) para el mantenimiento y mejora del servicio informativo.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">4. Conservación de datos</h2>
            <p className="mb-4 text-gray-700">
              Los registros de acceso (logs) se conservan durante un período máximo de 12 meses, tras el cual se eliminan automáticamente. No se almacenan datos personales identificables de forma permanente.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">5. Cesiones y encargados de tratamiento</h2>
            <p className="mb-4 text-gray-700">
              Los únicos terceros que pueden acceder a datos técnicos son:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
              <li><strong>Proveedor de alojamiento web:</strong> Opera bajo contrato de tratamiento de datos conforme al RGPD</li>
              <li><strong>Fuentes de noticias:</strong> Cuando haces clic en enlaces externos, sales de nuestro sitio y se aplican sus respectivas políticas</li>
            </ul>
            <p className="mb-4 text-gray-700">
              No realizamos transferencias internacionales de datos ni compartimos información con terceros para fines publicitarios o comerciales.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">6. Derechos de los usuarios</h2>
            <p className="mb-4 text-gray-700">
              Aunque no almacenamos datos personales identificables, tienes derecho a:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
              <li>Solicitar información sobre qué datos técnicos se registran</li>
              <li>Solicitar la eliminación de registros de acceso</li>
              <li>Oponerte al tratamiento de datos de navegación</li>
              <li>Presentar una reclamación ante la Agencia Española de Protección de Datos</li>
            </ul>
            <p className="mb-4 text-gray-700">
              Para ejercer estos derechos, contacta con nosotros en: <a href="mailto:animalitoemprendedor@gmail.com" className="text-blue-600 hover:text-blue-800">animalitoemprendedor@gmail.com</a>. Responderemos en un máximo de 30 días.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">7. Medidas de seguridad</h2>
            <p className="mb-4 text-gray-700">
              Implementamos medidas técnicas y organizativas apropiadas para proteger los datos contra acceso no autorizado, alteración, divulgación o destrucción. El sitio utiliza conexiones seguras HTTPS para todas las comunicaciones.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">8. Cookies y tecnologías similares</h2>
            <p className="mb-4 text-gray-700">
              Para información detallada sobre el uso de cookies, consulta nuestra <a href="/politica-cookies" className="text-blue-600 hover:text-blue-800">Política de Cookies</a>.
            </p>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Última actualización:</strong> 11 de julio de 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;