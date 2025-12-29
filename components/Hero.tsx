
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with abstract camera element overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-900 to-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-8 relative">
          <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-amber-500/30 p-1">
            <img 
              src="https://picsum.photos/seed/karan/400/400" 
              alt="Karan Sagar" 
              className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
            Eager to Learn
          </div>
        </div>

        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl tracking-tight mb-4">
          KARAN <span className="text-amber-500">SAGAR</span>
        </h1>
        <p className="text-amber-500/80 font-medium tracking-[0.2em] text-sm sm:text-lg mb-8 uppercase">
          Cinematography & Production Specialist
        </p>
        
        <p className="max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed mb-10">
          Creative and passionate Cinematographer & Producer with 6+ years of experience in visual storytelling. 
          Expertise in TV production, weddings, music videos, and aerial cinematography.
          <span className="block mt-4 text-zinc-300 italic font-medium">Currently seeking Internship or Assistant DOP opportunities to further sharpen skills.</span>
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#portfolio" 
            className="px-8 py-3 bg-zinc-100 text-zinc-950 font-bold rounded hover:bg-amber-500 transition-colors duration-300"
          >
            VIEW PORTFOLIO
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-zinc-700 text-zinc-100 font-bold rounded hover:bg-zinc-800 transition-colors duration-300"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* Viewfinder elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-t-2 border-l-2 border-zinc-800 pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-20 h-20 border-t-2 border-r-2 border-zinc-800 pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border-b-2 border-l-2 border-zinc-800 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border-b-2 border-r-2 border-zinc-800 pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-zinc-700 font-mono animate-pulse">
        REC • 4K 60FPS
      </div>
    </div>
  );
};

export default Hero;
