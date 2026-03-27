import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-32 pb-24 px-6 flex-grow max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-widest uppercase mb-8">
            Última actualización: Noviembre 2024
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6 tracking-tight text-on-surface">Términos de Servicio y Privacidad</h1>
          <p className="text-xl text-on-surface-variant leading-relaxed font-light">
            En Pecumind, tratamos tus datos financieros con el mismo rigor que un banco suizo. No vendemos tu información. 
            Nuestra IA analiza tus gastos, pero tú mantienes el control absoluto.
          </p>
        </div>

        <div className="space-y-16">
          <section className="p-10 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">data_usage</span>
              1. Recopilación de Datos
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed font-light">
              <p>
                Recopilamos la información que usted proporciona directamente al usar Pecumind, incluyendo, entre otros, 
                capturas de pantalla, archivos PDF y textos relacionados con transacciones financieras ("Datos del Usuario").
              </p>
              <p>
                <strong>No requerimos sus credenciales de acceso directo a sus cuentas bancarias online.</strong> Todo el análisis
                se realiza basándose en la documentación que usted carga en nuestra plataforma.
              </p>
            </div>
          </section>

          <section className="p-10 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-secondary flex items-center gap-3">
              <span className="material-symbols-outlined">memory</span>
              2. Uso de Inteligencia Artificial (Gemini)
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed font-light">
              <p>
                Pecumind utiliza la API de Google Gemini para procesar, extraer y categorizar la información financiera
                presente en los Datos del Usuario.
              </p>
              <p>
                Al usar nuestro servicio, usted consiente que sus documentos financieros sean procesados por modelos de IA 
                estrictamente para el propósito de categorización y análisis personal. Implementamos medidas para anonimizar 
                identificadores personales críticos antes del procesamiento.
              </p>
            </div>
          </section>

          <section className="p-10 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-tertiary flex items-center gap-3">
              <span className="material-symbols-outlined">shield_locked</span>
              3. Seguridad y Almacenamiento
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed font-light">
              <p>
                Sus datos son encriptados en tránsito (TLS/SSL) y en reposo. Utilizamos infraestructura de nube segura 
                (Firebase/Google Cloud) que cumple con los estándares de la industria (SOC 2, ISO 27001).
              </p>
              <p>
                Usted puede solicitar la eliminación permanente de su cuenta y de todos los registros financieros asociados 
                en cualquier momento desde la configuración de su perfil.
              </p>
            </div>
          </section>

          <section className="p-10 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary-container flex items-center gap-3">
              <span className="material-symbols-outlined">gavel</span>
              4. Limitación de Responsabilidad
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed font-light">
              <p>
                Pecumind es una herramienta de asistencia y análisis tecnológico. <strong>No somos asesores financieros 
                certificados</strong> ni constituimos una entidad bancaria.
              </p>
              <p>
                Cualquier decisión de inversión o gasto basada en nuestro dashboard es bajo su propio riesgo. Pecumind no 
                se hace responsable por pérdidas financieras derivadas de la malinterpretación de las sugerencias generadas.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
          <p className="text-on-surface-variant font-medium mb-4">
            Si tienes dudas sobre el tratamiento de tus datos, contáctanos:
          </p>
          <a href="mailto:privacidad@pecumind.ec" className="text-primary font-bold hover:underline">privacidad@pecumind.ec</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
