import pichincha from '../assets/banks/banco_pichincha.png';
import guayaquil from '../assets/banks/banco_guayaquil.png';
import produbanco from '../assets/banks/produbanco.png';
import pacifico from '../assets/banks/banco_pacifico.png';
import internacional from '../assets/banks/banco_internacional.png';
import ruminahui from '../assets/banks/banco_general_ruminahui.png';
import banecuador from '../assets/banks/banecuador.png';
import de_una from '../assets/banks/de_una.png';
import diners_club from '../assets/banks/diners_club.png';

export default function Banks() {
  const banks = [
    { name: 'Pichincha', logo: pichincha },
    { name: 'Guayaquil', logo: guayaquil },
    { name: 'Produbanco', logo: produbanco },
    { name: 'Pacífico', logo: pacifico },
    { name: 'Internacional', logo: internacional },
    { name: 'Rumiñahui', logo: ruminahui },
    { name: 'BanEcuador', logo: banecuador },
    { name: 'De Una', logo: de_una },
    { name: 'Diners Club', logo: diners_club },
  ];

  return (
    <section className="py-24 px-6 border-b border-t border-white/5 bg-surface/50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold font-headline mb-4 tracking-tight">Entidades Compatibles</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto font-light mb-12">
          Leemos y categorizamos comprobantes de las principales instituciones financieras de Ecuador. 
          <span className="block mt-2 text-sm opacity-80 italic">
            *Aclaración: No tenemos asociación directa ni integración con estas entidades. Nuestros algoritmos analizan los documentos de transacciones o reportes descargados por el usuario.
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {banks.map((bank, index) => (
            <div key={index} className="w-24 md:w-32 hover:scale-105 transition-transform">
              <img src={bank.logo} alt={`Logo ${bank.name}`} className="w-full h-auto object-contain drop-shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
