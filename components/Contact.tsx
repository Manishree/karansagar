
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-5xl mb-6">LET'S CREATE <br /><span className="text-amber-500">SOMETHING EPIC</span></h2>
          <p className="text-zinc-400 mb-8 max-w-md">
            I'm currently looking for internships and assistant roles in filmmaking. If you're looking for someone eager, experienced, and hard-working, let's talk.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-lg text-amber-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Email Me</p>
                <a href="mailto:Sagarocean533@gmail.com" className="text-lg font-medium hover:text-amber-500 transition-colors">Sagarocean533@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-lg text-amber-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Call Me</p>
                <a href="tel:+918353932004" className="text-lg font-medium hover:text-amber-500 transition-colors">+91 8353932004</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-lg text-amber-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Location</p>
                <p className="text-lg font-medium">New Delhi, Okhla Phase I</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[40px]"></div>
          
          <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase">Name</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase">Email</label>
                <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500" placeholder="Email Address" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-zinc-500 uppercase">Subject</label>
              <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500" placeholder="Internship Enquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-zinc-500 uppercase">Message</label>
              <textarea rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500" placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="w-full bg-amber-500 text-zinc-950 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
