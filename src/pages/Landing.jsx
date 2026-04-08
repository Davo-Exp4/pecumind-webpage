import Header from '../components/Header';
import Hero from '../components/Hero';
import DownloadBeta from '../components/DownloadBeta';
import Banks from '../components/Banks';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-20 flex-grow">
        <Hero />
        <DownloadBeta />
        <Banks />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
