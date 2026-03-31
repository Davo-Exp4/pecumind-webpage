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
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6 tracking-tight text-on-surface">PECUMIND | Términos y Condiciones</h1>
          <p className="text-xl text-on-surface-variant leading-relaxed font-light">
            Al utilizar Pecumind, aceptas las condiciones de uso de nuestra plataforma integral de inteligencia financiera personal.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="p-4 rounded-2xl bg-surface-container border border-white/5 text-sm text-on-surface-variant/80 flex-grow">
              <p><strong>Ubicación:</strong> Quito, Ecuador</p>
              <p><strong>Contacto:</strong> contacto@pecumind.com</p>
            </div>
            {/* Si tienes un PDF de Términos y Condiciones, puedes agregarlo aquí */}
            {/* <a href="/Pecumind_Terminos_Condiciones_v1.pdf" download className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all font-bold text-sm">
              <span className="material-symbols-outlined">download</span>
              Descargar PDF Oficial
            </a> */}
          </div>
        </div>

        <div className="space-y-12">
          {/* Preámbulo */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">gavel</span>
              1. Aceptación de los Términos
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Al acceder, descargar o usar la aplicación móvil Pecumind (iOS o Android) o cualquier servicio asociado, se establece un acuerdo legal vinculante entre tú ("el usuario") y Pecumind. Si no estás de acuerdo con estos términos y condiciones en su totalidad, no utilices nuestros servicios.
            </p>
          </section>

          {/* 2. Descripción */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-secondary flex items-center gap-3">
              <span className="material-symbols-outlined">account_balance_wallet</span>
              2. Descripción del Servicio
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light mb-4">
              Pecumind es una plataforma tecnológica concebida para brindar herramientas avanzadas de inteligencia y gestión financiera, incluyendo, entre otros:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant leading-relaxed font-light mb-4">
              <li>Análisis, extracción y categorización automática de transacciones financieras utilizando algoritmos de Inteligencia Artificial.</li>
              <li>Soporte interactivo y personalizado mediante nuestro Asistente Financiero embebido.</li>
              <li>Funciones de sincronización y visualización del gasto y ahorro a través de tableros de control y gráficas especializadas.</li>
            </ul>
            <p className="text-on-surface-variant leading-relaxed font-light">
              <strong className="text-on-surface">Importante:</strong> Pecumind funciona como una herramienta de consolidación y organización; no somos un banco ni entidad financiera autorizada, y la información otorgada no debe interpretarse como asesoría legal, contable ni fiscal acreditada.
            </p>
          </section>

          {/* 3. Registro */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-tertiary flex items-center gap-3">
              <span className="material-symbols-outlined">manage_accounts</span>
              3. Registro y Cuentas de Usuario
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed font-light">
              <p>
                Para disfrutar de todos los beneficios de la aplicación, es necesario crear una cuenta de usuario, comprometiéndose a lo siguiente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ser mayor de 18 años, con capacidad completa de ejercicio según la legislación ecuatoriana y/o jurisdicciones en los que se opere la aplicación.</li>
                <li>Otorgar información de registro veraz y mantenerla actualizada frente a cambios.</li>
                <li>Ser responsable de resguardar adecuadamente su credenciales de acceso. Cualquier actividad ejecutada mediante tu cuenta se presume bajo tu entera responsabilidad.</li>
              </ul>
            </div>
          </section>

          {/* 4. Uso Aceptable */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">block</span>
              4. Uso Aceptable y Restricciones
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light mb-4">
              Estás de acuerdo en abstenerte de ejecutar cualquiera de las siguientes prácticas prohibidas al utilizar Pecumind:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant leading-relaxed font-light">
              <li>Llevar a cabo acciones fraudulentas, perjudiciales o ilegales.</li>
              <li>Afectar, sobrecargar, vulnerar u orientar cualquier vector de ataque a la seguridad y estabilidad de la infraestructura en servidores (incluyendo vulnerabilidades e ingeniería inversa a base de código o Modelos de Lenguaje).</li>
              <li>Intentar lucrar rentando o accediendo a Pecumind sin autorización expresa de las partes involucradas.</li>
            </ul>
          </section>

          {/* 5. Propiedad Intelectual */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary-container flex items-center gap-3">
              <span className="material-symbols-outlined">copyright</span>
              5. Propiedad Intelectual
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Todos los derechos de propiedad intelectual, marcas comerciales, código de aplicación, algoritmos y diseño gráfico son de exclusiva titularidad de Pecumind (y/o sus licenciatarios). Al descargar o utilizar la aplicación, obtienes un derecho no exclusivo, estrictamente personal, temporal y revocable para interactuar con la interfaz del usuario. Pecumind reconoce la propiedad sobre los datos transaccionales, que gestionaremos conforme lo establecido en la <a href="/privacidad" className="text-primary hover:underline">Política de Privacidad</a>.
            </p>
          </section>

          {/* 6. Limitación Responsabilidad */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-secondary flex items-center gap-3">
              <span className="material-symbols-outlined">gpp_maybe</span>
              6. Limitación de Responsabilidad y Exención
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Pecumind no ofrece una garantía incondicional sobre la exactitud inmediata frente a variaciones de conectividad (ej. con servidores del servicio de correo). Declinamos cualquier responsabilidad en torno a pérdidas de ganancias, utilidades o por interrupciones atribuibles a eventos de fuerza mayor. Así como no certificamos una absoluta "inmunidad" pese a aplicar los mayores estándares en el manejo perimetral del ciberespacio.
            </p>
          </section>

          {/* 7. Alteraciones */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-2xl font-bold font-headline mb-6 text-tertiary flex items-center gap-3">
              <span className="material-symbols-outlined">update</span>
              7. Actualizaciones al Término de Uso
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Nos reservamos el derecho de modificar estos Términos en cualquier etapa. De existir revisiones importantes (especialmente respecto a funcionalidad pagada u operación limitante), emitiremos un aviso claro en la plataforma al menos 15 días previos a la entrada en vigor del ajuste pertinente.
            </p>
          </section>

          {/* 8. Leyes */}
          <section className="p-8 rounded-[2.5rem] bg-surface-container border border-white/5">
            <h2 className="text-xl font-bold font-headline mb-6 text-on-surface">8. Ley Aplicable y Disputas</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed font-light">
              El presente contrato por uso de servicios informáticos se regirá según la normativa vigente de la República del Ecuador. Ante desavenencias relativas a la interpretación o cumplimiento o uso del sistema, se dirimirán preferiblemente mediante mediación o arbitraje y, finalmente, si hiciese falta, ante los tribunales competentes de la ciudad de Quito.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed font-light mt-4">
              <strong>Última actualización:</strong> Marzo de 2026.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
