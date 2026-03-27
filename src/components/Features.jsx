export default function Features() {
  return (
    <>
      <section className="py-32 px-6 bg-surface-container-lowest" id="como-funciona">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight">Tres pasos al control total</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto font-light">Diseñamos el flujo más sencillo para que el dinero deje de ser un misterio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group relative p-10 rounded-[3rem] bg-surface-container border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-4xl" data-icon="upload_file">upload_file</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-6">1. Conecta</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">Sube tus capturas o PDFs de recibos bancarios. Soportamos todos los bancos principales de Ecuador.</p>
              <div className="absolute bottom-6 right-10 text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors">01</div>
            </div>
            <div className="group relative p-10 rounded-[3rem] bg-surface-container border border-white/5 hover:border-secondary/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-3xl bg-secondary/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-500">
                <span className="material-symbols-outlined text-secondary text-4xl" data-icon="psychology">psychology</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-6">2. Nuestra IA Analiza</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">Nuestra IA clasifica inteligentemente tus movimientos. Entiende el contexto local de tus gastos.</p>
              <div className="absolute bottom-6 right-10 text-6xl font-black text-white/5 group-hover:text-secondary/10 transition-colors">02</div>
            </div>
            <div className="group relative p-10 rounded-[3rem] bg-surface-container border border-white/5 hover:border-tertiary/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-3xl bg-tertiary/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-tertiary/20 transition-all duration-500">
                <span className="material-symbols-outlined text-tertiary text-4xl" data-icon="analytics">analytics</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-6">3. Visualiza</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">Accede a dashboards intuitivos. Presupuestos que se adaptan a tu realidad financiera en tiempo real.</p>
              <div className="absolute bottom-6 right-10 text-6xl font-black text-white/5 group-hover:text-tertiary/10 transition-colors">03</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6" id="beneficios">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 p-12 rounded-[3.5rem] obsidian-panel border border-white/5 flex flex-col justify-between overflow-hidden relative group">
              <div className="z-10 max-w-lg">
                <h2 className="text-5xl font-extrabold font-headline mb-8 leading-tight">Automatización Total, Sin Excusas</h2>
                <p className="text-on-surface-variant text-xl leading-relaxed mb-10">Elimina el error humano. Nuestra tecnología procesa cientos de transacciones en segundos mientras te enfocas en lo que importa.</p>
                <div className="inline-flex items-center gap-4 bg-secondary/10 px-6 py-3 rounded-full border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary" data-icon="check_circle" data-weight="fill">check_circle</span>
                  <span className="font-bold text-secondary">90% menos tiempo en contabilidad</span>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-colors"></div>
              <div className="mt-20 z-10 hidden lg:flex gap-4">
                <div className="h-1 w-24 bg-primary rounded-full"></div>
                <div className="h-1 w-12 bg-white/10 rounded-full"></div>
                <div className="h-1 w-12 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="md:col-span-4 p-12 rounded-[3.5rem] bg-primary/5 border border-primary/10 flex flex-col items-center text-center justify-center hover:bg-primary/10 transition-colors">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 ring-8 ring-primary/5">
                <span className="material-symbols-outlined text-primary text-5xl" data-icon="verified_user">verified_user</span>
              </div>
              <h3 className="text-3xl font-bold font-headline mb-6">Alta Precisión</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">Potenciado por Inteligencia Artificial para entender la jerga financiera de Ecuador.</p>
            </div>
            <div className="md:col-span-4 p-12 rounded-[3.5rem] bg-surface-container-high border border-white/5 hover:border-white/10 transition-all">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-8" data-icon="shield_lock">shield_lock</span>
              <h3 className="text-3xl font-bold font-headline mb-6">Seguridad Radical</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">No pedimos tus claves bancarias. Trabajamos sobre tus comprobantes. Tu privacidad es innegociable.</p>
            </div>
            <div className="md:col-span-8 p-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-[3.5rem]">
              <div className="h-full w-full bg-surface rounded-[3.4rem] p-12 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
                <div className="md:w-3/5 z-10">
                  <h3 className="text-4xl font-bold font-headline mb-6 tracking-tight">Ecosistema Multiplataforma</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">Tus finanzas no tienen por qué estar atadas a un solo lugar. Sincronización impecable en todo momento.</p>
                </div>
                <div className="md:w-2/5 flex justify-center gap-8 z-10">
                  <div className="flex flex-col items-center gap-4">
                    <span className="material-symbols-outlined text-6xl text-primary" data-icon="smartphone">smartphone</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Mobile</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-3xl text-secondary animate-pulse" data-icon="sync">sync</span>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <span className="material-symbols-outlined text-6xl text-primary" data-icon="tablet_mac">tablet_mac</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Tablet</span>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
                  <span className="material-symbols-outlined text-[20rem]" data-icon="cloud_sync">cloud_sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative bg-surface-container-low/30" id="ecosistema">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-24">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Omnicanal</span>
            <h2 className="text-5xl md:text-7xl font-extrabold font-headline mb-8 tracking-tighter">Tu asistente, en todas partes</h2>
            <p className="text-on-surface-variant text-xl max-w-3xl mx-auto font-light leading-relaxed">Garantizamos que la experiencia sea igual de fluida e intuitiva sin importar el dispositivo que utilices.</p>
          </div>
          <div className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/5 obsidian-panel shadow-[0_60px_120px_rgba(0,0,0,0.7)] group">
            <img alt="Financial Ecosystem" className="w-full h-full object-cover opacity-20 scale-105 group-hover:scale-100 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPlCj4lapkJX5hOiTBdFfXYCDoMBsm57QtYgRLKC7rwjjI2A4dSxmuk0h33yrStMDgO1T1Dq6g4eFjgUuNfBd0uhw_FgpQGX5XQFu74uLV3rOltdHrBU8jLmkrCHm5Kp9PBDCpktur1Ise9hx1QWTM3GXl9CMmmUd7AzT6B1ozlhMCcLheyFeCtZQZ6hrhPzTmTF9fdIi-lD6zu-deVp9akhbIWKrDM5I6fwt5aXfA-3--1bixMvD2zmrbUrUrp1zQcxqgZyTa9SY" />
            <div className="absolute inset-0 flex items-center justify-center flex-col p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div className="max-w-4xl text-center z-10">
                <div className="flex justify-center gap-12 mb-12">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-primary-container border-primary-container/20">
                      <span className="material-symbols-outlined text-3xl" data-icon="smartphone">smartphone</span>
                    </div>
                    <span className="text-xs font-bold opacity-60">Mobile</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-secondary border-secondary/20">
                      <span className="material-symbols-outlined text-3xl" data-icon="tablet_mac">tablet_mac</span>
                    </div>
                    <span className="text-xs font-bold opacity-60">Tablet</span>
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-8 font-headline leading-tight">Diseñado para la eficiencia</h3>
                <p className="text-xl text-on-surface/80 max-w-2xl mx-auto font-light leading-relaxed">Analiza tus reportes profundos en tu tablet y toma decisiones rápidas desde tu móvil mientras estás en movimiento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[4rem] bg-gradient-to-br from-primary to-primary-container p-1 text-center">
          <div className="bg-surface rounded-[3.9rem] py-24 px-12">
            <h2 className="text-5xl md:text-6xl font-extrabold font-headline mb-8 tracking-tighter">Únete a la revolución financiera</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12 leading-relaxed">Sé de los primeros en experimentar el futuro del manejo de dinero en Ecuador.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input className="flex-1 bg-surface-container border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tu correo electrónico" type="email" />
              <button className="bg-primary text-on-primary-container font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform">
                Inscribirme
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
