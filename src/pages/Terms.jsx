import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-32 pb-24 px-6 flex-grow max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-widest uppercase mb-8">
            Versión 1.0 | Vigente desde: Marzo 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6 tracking-tight text-on-surface">Política de Privacidad</h1>
          <p className="text-xl text-on-surface-variant leading-relaxed font-light">
            En Pecumind, la privacidad es un derecho fundamental y la base de la confianza de nuestros usuarios. 
            Nuestra arquitectura permite que mantengas el control absoluto de tu información financiera en todo momento.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="p-4 rounded-2xl bg-surface-container border border-white/5 text-sm text-on-surface-variant/80 flex-grow">
              <p><strong>Ubicación:</strong> Quito, Ecuador</p>
              <p><strong>Contacto:</strong> privacidad@pecumind.com</p>
            </div>
            <a 
              href="/Pecumind_Politica_Privacidad_v1.pdf" 
              download 
              className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all font-bold text-sm"
            >
              <span className="material-symbols-outlined">download</span>
              Descargar PDF Oficial
            </a>
          </div>
        </div>

        <div className="space-y-12">
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">gavel</span>
              1. Identidad del Responsable
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed font-light">
              <p>El responsable del tratamiento es Pecumind, una aplicación de gestión financiera personal con domicilio en Quito, Ecuador.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Correo de contacto: <strong>privacidad@pecumind.com</strong></li>
                <li>Delegado de Protección de Datos: <strong>dpo@pecumind.com</strong></li>
              </ul>
            </div>
          </section>

          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-secondary flex items-center gap-3">
              <span className="material-symbols-outlined">database</span>
              2. Datos que Recopilamos
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed font-light">
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-2">2.1 Datos proporcionados directamente</h3>
                <p>Nombre, correo electrónico para la gestión de la cuenta, y contraseña (almacenada con cifrado hash bcrypt).</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-2">2.2 Sincronización de correos</h3>
                <p>El acceso se realiza mediante OAuth 2.0; Pecumind nunca conoce ni almacena la contraseña de su correo. Se aplica un filtrado local: solo se procesan correos de entidades financieras y comercios verificados. Cualquier correo personal es descartado directamente en su dispositivo.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-2">2.3 Datos de transacciones</h3>
                <p>Monto, comercio, fecha, categoría y un fragmento textual mínimo para trazabilidad del usuario.</p>
              </div>
            </div>
          </section>

          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-tertiary flex items-center gap-3">
              <span className="material-symbols-outlined">memory</span>
              3. Inteligencia Artificial y Seguridad
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed font-light">
              <p>Utilizamos modelos avanzados de IA exclusivamente para la extracción de datos estructurados bajo estrictas medidas de seguridad:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tránsito:</strong> Cifrado TLS 1.3 de nivel bancario.</li>
                <li><strong>Almacenamiento:</strong> Base de datos con cifrado AES-256 en reposo.</li>
                <li><strong>Privacidad de IA:</strong> Los datos <strong>no</strong> se utilizan para entrenar modelos de IA públicos ni de terceros. El contenido original se elimina inmediatamente tras el análisis.</li>
              </ul>
            </div>
          </section>

          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary-container flex items-center gap-3">
              <span className="material-symbols-outlined">person_pin</span>
              4. Tus Derechos
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed font-light">
              <p>Usted puede ejercer sus derechos de forma gratuita escribiendo a <strong>privacidad@pecumind.com</strong>:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-surface/40 rounded-xl"><strong>Acceso:</strong> Copia de tus datos.</div>
                <div className="p-4 bg-surface/40 rounded-xl"><strong>Rectificación:</strong> Corregir información.</div>
                <div className="p-4 bg-surface/40 rounded-xl"><strong>Olvido:</strong> Eliminación en máx. 30 días.</div>
                <div className="p-4 bg-surface/40 rounded-xl"><strong>Portabilidad:</strong> Datos en JSON/CSV.</div>
              </div>
            </div>
          </section>

          <div className="rounded-3xl p-8 bg-gradient-to-br from-primary/10 to-transparent border border-white/5">
            <p className="text-on-surface-variant text-sm font-light text-center leading-relaxed">
              Pecumind cumple con la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador.
              Si tienes preguntas, contáctanos en <a href="mailto:privacidad@pecumind.com" className="text-primary font-bold hover:underline">privacidad@pecumind.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
