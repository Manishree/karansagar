
import React from 'react';

const Resume: React.FC = () => {
  const experiences = [
    {
      role: "Cameraman & Producer",
      company: "Anjan TV",
      period: "2023 - Present",
      description: [
        "Managed camera operations, lighting setups, and multi-camera shoots.",
        "Produced programs from concept to final broadcast.",
        "Worked with anchors, reporters, and editors for high-quality TV content."
      ]
    },
    {
      role: "Cinematographer",
      company: "Freelance",
      period: "2019 - 2023",
      description: [
        "Directed and shot weddings, pre-weddings, documentaries, and music videos.",
        "Delivered cinematic aerial shots using drone cameras.",
        "Worked on All India stock shoots for multiple clients."
      ]
    }
  ];

  const skills = [
    { name: "Camera Operation", level: 95, detail: "Sony FX9, Mirrorless Systems" },
    { name: "Drone Cinematography", level: 90, detail: "Aerial Handling & Operations" },
    { name: "Video Editing", level: 85, detail: "Adobe Premiere Pro, Final Cut Pro" },
    { name: "Lighting & Framing", level: 90, detail: "Visual Aesthetics & Set Design" },
    { name: "Production Mgmt", level: 80, detail: "Pre to Post Production Flow" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Experience & Education */}
        <div className="lg:col-span-7 space-y-16">
          <div>
            <h2 className="font-heading text-4xl mb-12 flex items-center space-x-4">
              <span className="text-amber-500">01.</span>
              <span>EXPERIENCE</span>
            </h2>
            
            <div className="space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-amber-500"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
                  </div>
                  <h4 className="text-amber-500 font-medium mb-4">{exp.company}</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 text-zinc-600">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-4xl mb-12 flex items-center space-x-4">
              <span className="text-amber-500">02.</span>
              <span>EDUCATION</span>
            </h2>
            
            <div className="space-y-8 pl-8 border-l border-zinc-800">
              <div className="relative">
                <div className="absolute left-[-36px] top-1.5 w-2 h-2 rounded-full bg-zinc-700"></div>
                <h3 className="text-xl font-bold">BJMC - 2nd Year</h3>
                <p className="text-amber-500 font-medium">Chandigarh University</p>
                <p className="text-sm text-zinc-500 mt-1">Bachelor of Journalism and Mass Communication</p>
              </div>
              <div className="relative">
                <div className="absolute left-[-36px] top-1.5 w-2 h-2 rounded-full bg-zinc-700"></div>
                <h3 className="text-lg font-bold">12th & 10th</h3>
                <p className="text-zinc-400">J.N.K Inter College, Kanpur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Skills & Technical Info */}
        <div className="lg:col-span-5 space-y-16">
          <div>
            <h2 className="font-heading text-4xl mb-12 flex items-center space-x-4">
              <span className="text-amber-500">03.</span>
              <span>TECHNICAL</span>
            </h2>
            
            <div className="space-y-8">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <h4 className="font-bold text-zinc-200">{skill.name}</h4>
                      <p className="text-xs text-zinc-500 uppercase">{skill.detail}</p>
                    </div>
                    <span className="text-xs font-mono text-amber-500">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/80 p-8 rounded-xl border border-zinc-800">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Mirrorless Cameras', 'Sony PXW-FX9', 'Drone Handling', 'Post Production', 'Color Grading', 'Lighting Design', 'Team Leadership', 'Creative Vision'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;
