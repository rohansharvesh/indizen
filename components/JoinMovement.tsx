import React from 'react';
import { ArrowUpRight, Github, Globe } from 'lucide-react';

export const JoinMovement: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative bg-desi-yellow">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}>
      </div>

      <div className="w-full max-w-5xl">
        <div className="bg-off-white border-[8px] border-black p-4 md:p-0 shadow-hard-xl relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
          
          <div className="flex flex-col md:flex-row">
             
             {/* Left Side: The Info */}
             <div className="flex-1 p-8 md:p-16 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
                <span className="font-mono text-desi-blue font-bold tracking-widest mb-4 bg-desi-blue/10 inline-block w-fit px-2">EST. 2026</span>
                <h2 className="font-poster text-7xl md:text-8xl mb-6 leading-[0.85]">
                  RECLAIM<br/>YOUR<br/>CITY
                </h2>
                <p className="font-body text-xl mb-8 font-bold text-gray-800">
                  Indizen is currently in active development. We are building the tools for a transparent Bharat.
                </p>
                
                <div className="flex flex-wrap gap-3">
                    <div className="bg-black text-white font-mono px-4 py-2 rounded-full text-sm">Anti-Corruption</div>
                    <div className="bg-black text-white font-mono px-4 py-2 rounded-full text-sm">Civic-Tech</div>
                    <div className="bg-black text-white font-mono px-4 py-2 rounded-full text-sm">Open Data</div>
                </div>
             </div>

             {/* Right Side: The Builder */}
             <div className="flex-1 bg-desi-pink p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
                {/* Decorative Circle */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-black/10 rounded-full"></div>

                <h3 className="font-poster text-4xl text-white mb-2">ARCHITECTED BY</h3>
                <h2 className="font-retro text-5xl md:text-6xl text-black mb-8 underline decoration-white decoration-4 underline-offset-4">
                    ROHAN<br/>SHARVESH
                </h2>

                <a 
                  href="https://rohansharvesh.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white border-4 border-black p-6 shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-between"
                >
                    <div>
                        <span className="block font-poster text-2xl">VISIT PORTFOLIO</span>
                        <span className="block font-mono text-xs text-gray-500">rohansharvesh.github.io</span>
                    </div>
                    <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform duration-300" />
                </a>

                <div className="mt-8 flex gap-4 justify-center md:justify-start">
                    <a href="https://github.com/rohansharvesh" target="_blank" className="bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition-colors border-2 border-black">
                        <Github size={24} />
                    </a>
                    <a href="https://rohansharvesh.github.io/" target="_blank" className="bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition-colors border-2 border-black">
                        <Globe size={24} />
                    </a>
                </div>
             </div>
          </div>
        </div>
        
        <div className="text-center mt-12 font-mono font-bold">
            <p>MADE IN BHARAT 🇮🇳</p>
        </div>
      </div>
    </section>
  );
};