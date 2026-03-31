import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-32 pb-24 px-6 flex-grow max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-widest uppercase mb-8">
            Versión 1.0 | Vigente desde: Marzo 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6 tracking-tight text-on-surface">PECUMIND | Política de Privacidad</h1>
          <p className="text-xl text-on-surface-variant leading-relaxed font-light">
            Tu inteligencia financiera personal. La arquitectura de Pecumind permite que el usuario mantenga el control absoluto de su información financiera en todo momento.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="p-4 rounded-2xl bg-surface-container border border-white/5 text-sm text-on-surface-variant/80 flex-grow">
              <p><strong>Ubicación:</strong> Quito, Ecuador</p>
              <p><strong>Contacto:</strong> privacidad@pecumind.com</p>
              <p><strong>Delegado de Protección de Datos:</strong> dpo@pecumind.com</p>
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
          {/* Preámbulo */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">info</span>
              Preámbulo
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light">
              En Pecumind, la privacidad es un derecho fundamental y la base de la confianza de nuestros usuarios. Esta política detalla los datos recopilados, su procesamiento, con quién se comparten y los derechos de los titulares, en un lenguaje comprensible para todos.
            </p>
          </section>

          {/* 1. Responsable */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">gavel</span>
              1. Identidad del Responsable del Tratamiento
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light">
              El responsable del tratamiento es Pecumind, una aplicación de gestión financiera personal con domicilio en Quito, Ecuador.
            </p>
          </section>

          {/* 2. Ámbito */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">public</span>
              2. Ámbito de Aplicación
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Esta política aplica a todos los usuarios de la aplicación móvil (iOS y Android) y servicios asociados. Cumple con la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador y con los principios del RGPD para usuarios en la Unión Europea.
            </p>
          </section>

          {/* 3. Datos que Recopilamos */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-secondary flex items-center gap-3">
              <span className="material-symbols-outlined">database</span>
              3. Datos que Recopilamos
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed font-light">
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">3.1 Datos proporcionados directamente</h3>
                <p>Nombre, correo electrónico, contraseña (hash bcrypt) y preferencias de configuración.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">3.2 Sincronización de correos</h3>
                <p>Acceso mediante OAuth 2.0 (Pecumind nunca conoce su contraseña). Filtrado local en el dispositivo: solo se procesan remitentes autorizados. Los correos seleccionados se envían cifrados para extracción de datos y el original se elimina tras el análisis.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">3.3 Datos estructurados e interacción</h3>
                <p>Monto, comercio, fecha, hora y categoría. Los mensajes del Chatbot se almacenan exclusivamente de forma cifrada para tu consulta y no entrenan modelos públicos.</p>
              </div>
            </div>
          </section>

          {/* 4. Finalidades */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-tertiary flex items-center gap-3">
              <span className="material-symbols-outlined">task_alt</span>
              4. Finalidades del Tratamiento
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-on-surface-variant border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 font-bold font-headline">Finalidad</th>
                    <th className="py-4 font-bold font-headline">Base Legal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-3">Gestión de la cuenta</td><td className="py-3">Ejecución de contrato</td></tr>
                  <tr><td className="py-3">Categorización transaccional</td><td className="py-3">Consentimiento explícito</td></tr>
                  <tr><td className="py-3">Asistente financiero</td><td className="py-3">Ejecución de contrato</td></tr>
                  <tr><td className="py-3">Seguridad y fraude</td><td className="py-3">Interés legítimo</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm italic opacity-70">Nota: Los datos no se usan para entrenar modelos de IA públicos ni comerciales.</p>
          </section>

          {/* 5. IA y Proveedores */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary-container flex items-center gap-3">
              <span className="material-symbols-outlined">memory</span>
              5. Inteligencia Artificial y Proveedores
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Utilizamos IA avanzada exclusivamente para extracción de datos estructurados bajo transmisión cifrada TLS/SSL y eliminación inmediata tras el análisis. Pecumind no vende ni arrienda datos personales para fines publicitarios.
            </p>
          </section>

          {/* 6. Seguridad */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">shield_locked</span>
              6. Medidas de Seguridad
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-on-surface-variant leading-relaxed font-light">
              <li><strong>Cifrado:</strong> TLS 1.3 en tránsito y AES-256 en reposo.</li>
              <li><strong>Infraestructura:</strong> Supabase con estrictos controles de acceso.</li>
              <li><strong>Privacidad por Diseño:</strong> Filtrado local para asegurar que correos personales nunca lleguen al servidor.</li>
            </ul>
          </section>

          {/* 7. Derechos */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-secondary flex items-center gap-3">
              <span className="material-symbols-outlined">person_pin</span>
              7. Derechos del Usuario
            </h2>
            <p className="mb-6 text-on-surface-variant font-light">Respuesta en un máximo de 15 días hábiles sobre:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-surface/40 rounded-xl"><strong>Acceso y Rectificación</strong></div>
              <div className="p-4 bg-surface/40 rounded-xl"><strong>Supresión ("Olvido")</strong> en máx 30 días.</div>
              <div className="p-4 bg-surface/40 rounded-xl"><strong>Portabilidad (JSON/CSV)</strong></div>
              <div className="p-4 bg-surface/40 rounded-xl"><strong>Revocación de Consentimiento</strong></div>
            </div>
          </section>

          {/* 8-12 Secciones finales agrupadas */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-xl font-bold font-headline mb-6 text-on-surface">Consideraciones Adicionales</h2>
            <div className="space-y-6 text-on-surface-variant text-sm leading-relaxed font-light">
              <p><strong>8. Retención:</strong> Transacciones mientras la cuenta esté activa. Logs técnicos por 90 días.</p>
              <p><strong>10. Menores:</strong> Exclusivo para mayores de 18 años.</p>
              <p><strong>11. Cookies:</strong> Solo identificadores técnicos y de diagnóstico anonimizados. Sin tracking comercial.</p>
              <p><strong>12. Reclamaciones:</strong> Ante la Autoridad de Protección de Datos Personales del Ecuador (APDP).</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
