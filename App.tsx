
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Assistant from './components/Assistant';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="portfolio" className="py-20 bg-zinc-900/50">
          <Portfolio />
        </section>

        <section id="resume" className="py-20">
          <Resume />
        </section>

        <section id="contact" className="py-20 bg-zinc-900/50">
          <Contact />
        </section>
      </main>

      <footer className="py-10 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Karan Sagar Portfolio. All Rights Reserved.</p>
        <p className="mt-2">New Delhi, India</p>
      </footer>

      {/* Floating AI Assistant */}
      <Assistant />
    </div>
  );
};

export default App;
