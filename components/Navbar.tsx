
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-500 flex items-center justify-center rounded">
            <span className="text-zinc-950 font-bold text-lg">KS</span>
          </div>
          <span className="font-heading text-xl tracking-wider hidden sm:block">KARAN SAGAR</span>
        </div>
        
        <div className="flex space-x-6 sm:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                activeSection === item.id ? 'text-amber-500' : 'text-zinc-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
