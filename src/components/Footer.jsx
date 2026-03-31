import { Link } from 'react-router-dom';
import logo from '../assets/Logo_blanco.png';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-24 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="Pecumind Logo" className="h-10 w-auto" />
            <span className="text-2xl font-black text-on-surface font-headline tracking-tighter">Pecumind</span>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-xs font-light">
            Redefiniendo el control financiero en Ecuador con Inteligencia Artificial de vanguardia.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-xl" data-icon="share">share</span>
            </a>
            <a className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-xl" data-icon="language">language</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-on-surface font-bold mb-8 font-headline text-sm uppercase tracking-widest">Legal</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-base" to="/privacidad">Política de Privacidad</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-base" to="/terminos">Términos y Condiciones</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-base" to="/privacidad">Cookies</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-on-surface font-bold mb-8 font-headline text-sm uppercase tracking-widest">Recursos</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-base" href="#">Guía Tributaria</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-base" href="#">Blog Financiero</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-base" href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="text-on-surface font-bold mb-8 font-headline text-sm uppercase tracking-widest">Boletín</h4>
          <p className="text-on-surface-variant text-sm mb-6 font-light">Recibe consejos de ahorro e IA mensualmente.</p>
          <div className="flex gap-2">
            <input className="bg-surface-container border-white/5 rounded-xl text-sm focus:ring-primary w-full px-4 py-3 outline-none" placeholder="Tu email" type="email" />
            <button className="bg-primary text-on-primary-container p-3 rounded-xl hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined" data-icon="send">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-on-surface-variant text-sm font-light">© 2026 Pecumind Ecuador. Todos los derechos reservados.</span>
        <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Sistema Activo</span>
          <span>Versión 0.9.2 (Beta)</span>
        </div>
      </div>
    </footer>
  );
}
