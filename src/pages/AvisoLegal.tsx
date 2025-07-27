import { Footer } from "@/components/Footer";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Volver a Mr. Volt
            </a>
          </div>

          <div className="text-center mb-8">
            <span className="text-4xl mb-4 block">📄</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Aviso Legal
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Datos identificativos
            </h2>
            <p className="mb-4 text-gray-700">
              <strong>Titular del sitio:</strong> animalitoemprendedor
              <br />
              <strong>Dominio:</strong> mr-volt.vercel.app
              <br />
              <strong>Correo de contacto:</strong>{" "}
              <a
                href="mailto:animalitoemprendedor@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                animalitoemprendedor@gmail.com
              </a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
              2. Finalidad
            </h2>
            <p className="mb-4 text-gray-700">
              Mr. Volt está dedicado a ofrecer, de forma gratuita, las noticias
              más relevantes sobre movilidad eléctrica y coches eléctricos en
              España. No se venden productos ni servicios a través de esta web,
              siendo únicamente un medio informativo.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
              3. Objeto
            </h2>
            <p className="mb-4 text-gray-700">
              El presente aviso legal regula el uso del sitio web
              mr-volt.vercel.app, propiedad de animalitoemprendedor. La
              navegación por el sitio web atribuye la condición de usuario del
              mismo e implica la aceptación plena y sin reservas de todas y cada
              una de las disposiciones incluidas en este Aviso Legal.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
              4. Condiciones de uso
            </h2>
            <p className="mb-4 text-gray-700">
              El acceso a este sitio web es completamente gratuito. Los usuarios
              pueden acceder a todos los contenidos informativos sin necesidad
              de registro ni suscripción. El sitio incluye enlaces a medios
              externos (como El País, El Mundo, Cadena SER, etc.) para ampliar
              información sobre las noticias presentadas.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
              5. Propiedad intelectual
            </h2>
            <p className="mb-4 text-gray-700">
              Todos los contenidos del sitio web, incluyendo textos, iconos,
              tecnología, software, así como su diseño gráfico y códigos fuente,
              constituyen una obra cuya propiedad pertenece a
              animalitoemprendedor. Los contenidos informativos se basan en
              fuentes públicas debidamente citadas.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
              6. Responsabilidad
            </h2>
            <p className="mb-4 text-gray-700">
              animalitoemprendedor no se hace responsable de los daños y
              perjuicios que pudieran derivarse del uso incorrecto de este sitio
              web. En ningún caso animalitoemprendedor será responsable de las
              pérdidas, daños o perjuicios de cualquier tipo que surjan por el
              acceso, navegación y el uso del sitio web. La información
              contenida en Mr. Volt tiene carácter meramente informativo.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
              7. Enlaces externos
            </h2>
            <p className="mb-4 text-gray-700">
              El sitio web puede contener enlaces a sitios web de terceros.
              animalitoemprendedor no controla ni se responsabiliza del
              contenido de estos sitios externos. Los enlaces se proporcionan
              únicamente para facilitar el acceso a información adicional sobre
              movilidad eléctrica.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
              8. Modificaciones
            </h2>
            <p className="mb-4 text-gray-700">
              animalitoemprendedor se reserva el derecho de efectuar sin previo
              aviso las modificaciones que considere oportunas en su portal,
              pudiendo cambiar, suprimir o añadir tanto los contenidos y
              servicios que se presten a través de la misma como la forma en la
              que éstos aparezcan presentados o localizados en su servidor.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
              9. Legislación aplicable
            </h2>
            <p className="mb-4 text-gray-700">
              La relación entre animalitoemprendedor y el usuario se regirá por
              la normativa española vigente y cualquier controversia se someterá
              a los Juzgados y tribunales de la ciudad de residencia del
              titular.
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

export default AvisoLegal;
