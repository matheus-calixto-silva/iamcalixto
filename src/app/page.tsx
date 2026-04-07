import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <>
      {/* Global Background Glow */}
      <div className='fixed inset-0 pointer-events-none z-0'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(230,57,70,0.04),transparent_60%)]' />
      </div>

      <Navbar />

      <main className='relative z-10'>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
      </main>

      <Footer />
    </>
  );
}
