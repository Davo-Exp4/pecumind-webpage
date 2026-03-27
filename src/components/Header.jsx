import { Link } from 'react-router-dom';
import logo from '../assets/Logo_blanco.png';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl border-b border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <img src={logo} alt="Pecumind Logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
          <span className="text-2xl font-bold bg-gradient-to-br from-[#adc6ff] to-[#4d8eff] bg-clip-text text-transparent font-headline tracking-tight">Pecumind</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-primary font-bold border-b-2 border-primary pb-1 font-headline text-sm tracking-wide">Inicio</Link>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-headline text-sm tracking-wide" href="/#como-funciona">¿Cómo funciona?</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-headline text-sm tracking-wide" href="/#beneficios">Beneficios</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-headline text-sm tracking-wide" href="/#ecosistema">Ecosistema</a>
        </nav>
        <div className="flex items-center gap-6">
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-3 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
