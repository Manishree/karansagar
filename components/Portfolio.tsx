
import React from 'react';

const Portfolio: React.FC = () => {
  const works = [
    {
      id: '1',
      title: 'Commercial Production - Anjan TV',
      category: 'Television & Media',
      youtubeId: 'oCt64rr-m5E'
    },
    {
      id: '2',
      title: 'Cinematic Visuals',
      category: 'Freelance Work',
      youtubeId: 'DzJlA3OhdYs'
    },
    {
      id: '3',
      title: 'Pre-Wedding Highlight',
      category: 'Events',
      youtubeId: 'k0oOogf60HA'
    },
    {
      id: '4',
      title: 'Documentary/Personal Project',
      category: 'Creative Direction',
      youtubeId: 'E_mzj20hyp8'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="font-heading text-4xl mb-4">SELECTED WORKS</h2>
          <div className="h-1 w-20 bg-amber-500"></div>
        </div>
        <p className="text-zinc-400 mt-4 md:mt-0 max-w-md">
          A showcase of various projects ranging from TV production at Anjan TV to personal freelance shoots.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map((work) => (
          <div key={work.id} className="group flex flex-col">
            <div className="relative aspect-video bg-zinc-800 overflow-hidden rounded-lg mb-4">
              <iframe
                className="absolute inset-0 w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                src={`https://www.youtube.com/embed/${work.youtubeId}`}
                title={work.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="font-bold text-lg text-zinc-100 group-hover:text-amber-500 transition-colors">
                  {work.title}
                </h3>
                <span className="text-xs text-zinc-500 uppercase tracking-widest">{work.category}</span>
              </div>
              <a 
                href={`https://youtu.be/${work.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-zinc-500 text-sm mb-4">More than 6 years of consistent growth and high-quality deliverables.</p>
        <div className="inline-flex space-x-2">
          {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>)}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
