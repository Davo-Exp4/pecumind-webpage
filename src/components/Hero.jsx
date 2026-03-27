import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden hero-glow">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="text-left z-10 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            IA Financiera en Ecuador
          </div>
          <h1 className="text-6xl md:text-[5rem] font-extrabold font-headline leading-[1] mb-8 tracking-tighter text-on-surface">
            Tus finanzas, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-container">automatizadas</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant mb-12 max-w-xl leading-relaxed font-light">
            Leemos tus recibos bancarios y los categorizamos con precisión quirúrgica. La libertad financiera comienza con claridad absoluta.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary text-on-primary-container font-extrabold text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] hover:shadow-primary/40 active:scale-95 transition-all">
              Próximamente
            </button>
            <div className="flex gap-4">
              <button className="p-4 rounded-2xl glass-card hover:bg-white/5 transition-all group" title="iOS App">
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform" data-icon="apple">apple</span>
              </button>
              <button className="p-4 rounded-2xl glass-card hover:bg-white/5 transition-all group" title="Android App">
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform" data-icon="android">android</span>
              </button>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-8 border-t border-white/5 pt-8">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-surface-container border-2 border-surface flex items-center justify-center text-[10px] font-bold">JD</div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-surface flex items-center justify-center text-[10px] font-bold">MS</div>
              <div className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-surface flex items-center justify-center text-[10px] font-bold">AL</div>
            </div>
            <p className="text-sm text-on-surface-variant font-medium">+500 usuarios en lista de espera</p>
          </div>
        </div>
        <div className="relative hidden lg:flex justify-center items-center">
          <div className="absolute -z-10 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="relative w-full max-w-[600px] aspect-[4/3] obsidian-panel rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden group">
            <div className="absolute top-0 w-full h-12 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
            </div>
            <div className="p-8 pt-20 grid grid-cols-12 gap-6 h-full">
              <div className="col-span-8 space-y-6">
                <div className="h-32 rounded-3xl bg-primary/10 border border-primary/20 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-primary font-bold">Balance Total</span>
                    <span className="material-symbols-outlined text-primary text-xl" data-icon="trending_up">trending_up</span>
                  </div>
                  <div className="text-4xl font-bold font-headline">$4,280.00</div>
                </div>
                <div className="h-48 rounded-3xl bg-white/5 border border-white/5 p-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-medium opacity-60">Gastos Mensuales</span>
                    <span className="text-xs font-bold text-secondary">Categorizado</span>
                  </div>
                  <div className="flex items-end gap-2 h-20">
                    <div className="flex-1 bg-secondary/20 h-[40%] rounded-t-lg"></div>
                    <div className="flex-1 bg-secondary/40 h-[60%] rounded-t-lg"></div>
                    <div className="flex-1 bg-secondary h-[90%] rounded-t-lg"></div>
                    <div className="flex-1 bg-secondary/50 h-[50%] rounded-t-lg"></div>
                    <div className="flex-1 bg-secondary/30 h-[70%] rounded-t-lg"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 space-y-6">
                <div className="aspect-square rounded-3xl bg-white/5 border border-white/5 p-4 flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-3xl text-primary mb-2" data-icon="receipt_long">receipt_long</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Analizados</span>
                  <span className="text-2xl font-bold">142</span>
                </div>
                <div className="flex-1 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent border border-white/5 p-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-2 opacity-60">IA Tip</div>
                  <p className="text-[11px] leading-relaxed">Ahorraste un 15% más que el mes pasado en servicios.</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-[240px] h-[480px] bg-black rounded-[2.5rem] border-[6px] border-[#222] shadow-2xl rotate-6 transition-transform group-hover:rotate-3 duration-700 hidden xl:block">
              <img alt="Mobile Dashboard" className="w-full h-full object-cover rounded-[2rem] opacity-90" src={heroImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
