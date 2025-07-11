import { Footer } from "@/components/Footer";

const PoliticaCookies = () => {
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
            <span className="text-4xl mb-4 block">🍪</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Cookies</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800 font-medium">
                ✅ <strong>Buenas noticias:</strong> Mr. Volt NO utiliza cookies de analítica ni publicitarias.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">¿Qué cookies utilizamos?</h2>
            <p className="mb-4 text-gray-700">
              En Mr. Volt solo empleamos <strong>cookies técnicas imprescindibles</strong> para el funcionamiento básico de la web, tales como:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
              <li>Cookies de sesión para el equilibrio de carga del servidor</li>
              <li>Cookies de preferencia de idioma (si aplicable)</li>
              <li>Cookies de funcionamiento básico del sitio web</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">¿Necesitas dar tu consentimiento?</h2>
            <p className="mb-4 text-gray-700">
              <strong>No.</strong> Según el artículo 22.2 de la LSSI-CE (Ley de Servicios de la Sociedad de la Información), las cookies técnicas necesarias para el funcionamiento de la web no requieren tu consentimiento previo.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">¿Qué NO hacemos?</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <ul className="list-disc list-inside text-red-800 ml-4">
                <li>NO utilizamos cookies de Google Analytics, Google Ads o similares</li>
                <li>NO insertamos códigos de seguimiento publicitario</li>
                <li>NO compartimos datos con redes publicitarias</li>
                <li>NO creamos perfiles de usuario para marketing</li>
                <li>NO instalamos cookies de terceros sin tu conocimiento</li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Enlaces a sitios externos</h2>
            <p className="mb-4 text-gray-700">
              Mr. Volt incluye enlaces a medios de comunicación externos (El País, El Mundo, Cadena SER, etc.) para ampliar información sobre las noticias. <strong>Al hacer clic en estos enlaces, abandonas nuestro sitio</strong> y se aplicarán las políticas de cookies de cada medio respectivo.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">¿Cómo deshabilitar cookies?</h2>
            <p className="mb-4 text-gray-700">
              Aunque nuestras cookies son técnicas y necesarias, puedes deshabilitarlas desde la configuración de tu navegador:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web</li>
              <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                ⚠️ <strong>Advertencia:</strong> Deshabilitar las cookies técnicas puede afectar al funcionamiento normal del sitio web.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Cambios en el futuro</h2>
            <p className="mb-4 text-gray-700">
              Si en el futuro decidimos implementar cookies de analítica o cualquier otro tipo de seguimiento, actualizaremos esta política y solicitaremos tu consentimiento cuando sea legalmente requerido.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Contacto</h2>
            <p className="mb-4 text-gray-700">
              Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos en: <a href="mailto:animalitoemprendedor@gmail.com" className="text-blue-600 hover:text-blue-800">animalitoemprendedor@gmail.com</a>
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

export default PoliticaCookies;