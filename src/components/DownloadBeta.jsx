export default function DownloadBeta() {
  return (
    <section className="relative py-24 flex items-center justify-center overflow-hidden" id="download-beta">
      <div className="absolute -z-10 w-[80%] h-[80%] bg-secondary/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold tracking-widest uppercase mb-6">
          <span className="material-symbols-outlined text-sm">science</span>
          Acceso Exclusivo
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-6 tracking-tight text-on-surface">
          Obtén la Versión <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Beta</span>
        </h2>
        
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Sé uno de los primeros en experimentar el futuro de las finanzas. Descarga la beta y ayúdanos a probar el flujo de OAuth y perfilar la herramienta financiera definitiva.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* iOS Button */}
          <a
            href="/downloads/pecumind-beta-ios.ipa"
            download
            className="group flex items-center gap-4 bg-surface-container-high border border-white/10 text-on-surface px-8 py-4 rounded-2xl hover:bg-surface-container-highest hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-primary/10 w-full sm:w-auto"
          >
            <div className="p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
              <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold opacity-70">Descargar para</div>
              <div className="text-xl font-bold font-headline">iOS Beta</div>
            </div>
          </a>

          {/* Android Button */}
          <a
            href="/downloads/pecumind-beta-android.apk"
            download
            className="group flex items-center gap-4 bg-secondary/10 border border-secondary/30 text-on-surface px-8 py-4 rounded-2xl hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 shadow-lg hover:shadow-secondary/20 w-full sm:w-auto"
          >
            <div className="p-2 bg-secondary/20 rounded-xl group-hover:bg-secondary/30 transition-colors">
              <svg className="w-8 h-8 fill-current text-secondary" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M420.2 92.9c-13.7-11.1-39.2-11.1-52.9 0l-31.4 25.5C310.9 110.1 284 105.7 256 105.7s-54.9 4.4-79.9 12.8l-31.4-25.5c-13.7-11.1-39.2-11.1-52.9 0-13.3 11.2-13.3 29.8 0 41L121 161.4c-42.6 31.4-71.1 79.5-78.2 135.5h486.3c-7.1-55.9-35.5-104.1-78.2-135.5l29.2-27.3c13.3-11.2 13.3-29.8 0-41zM213.3 224.5c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm149.3 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM21.3 328.5C9.6 328.5 0 338.1 0 349.9v101.4c0 11.7 9.6 21.3 21.3 21.3h42.7v-144H21.3zm533.3 0h-42.7v144h42.7c11.7 0 21.3-9.6 21.3-21.3V349.9c0-11.7-9.6-21.3-21.3-21.3zM106.7 482.1c0 16.5 13.5 29.9 29.9 29.9h298.7c16.5 0 29.9-13.5 29.9-29.9v-153.6H106.7v153.6z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold opacity-70">Descargar para</div>
              <div className="text-xl font-bold font-headline text-secondary">Android Beta</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
