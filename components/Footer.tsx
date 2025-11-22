import React from 'react';
import { Instagram, Twitter, Mail, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t-8 border-desi-pink">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end border-b border-white/30 pb-10 mb-10">
        <div>
          <h1 className="font-poster text-[15vw] leading-none text-transparent stroke-text hover:text-white transition-all duration-500 cursor-default select-none" style={{ WebkitTextStroke: '2px white' }}>
            INDIZEN
          </h1>
        </div>
        <div className="flex gap-6 mb-4 md:mb-8">
           <a href="https://www.instagram.com/shackholmes/" target="_blank" rel="noreferrer" className="hover:text-desi-pink transition-colors transform hover:scale-110"><Instagram size={32}/></a>
           <a href="https://github.com/rohansharvesh/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors transform hover:scale-110"><Github size={32}/></a>
           <a href="mailto:rohansharvesh@gmail.com" className="hover:text-desi-yellow transition-colors transform hover:scale-110"><Mail size={32}/></a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-sm text-gray-400">
        <div>
          <p>© 2026 Indizen Foundation.</p>
          <p>Building for Bharat.</p>
        </div>
        <div className="md:text-center">
          <a href="https://rohansharvesh.github.io/" target="_blank" rel="noreferrer" className="hover:text-desi-yellow underline decoration-dotted">
            Developed by Rohan Sharvesh
          </a>
        </div>
        <div className="md:text-right">
          <p>Made with ❤️ and Rage</p>
          <p>Mumbai • Delhi • Bangalore</p>
        </div>
      </div>
    </footer>
  );
};