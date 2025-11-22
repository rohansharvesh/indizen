import React from 'react';
import { motion } from 'framer-motion';

const locations = [
  { top: '30%', left: '30%', city: 'New Delhi' },
  { top: '45%', left: '25%', city: 'Mumbai' },
  { top: '60%', left: '40%', city: 'Bangalore' },
  { top: '35%', left: '70%', city: 'Kolkata' },
  { top: '55%', left: '45%', city: 'Hyderabad' },
  { top: '25%', left: '35%', city: 'Chandigarh' },
  { top: '70%', left: '38%', city: 'Chennai' },
  { top: '40%', left: '35%', city: 'Bhopal' },
  { top: '50%', left: '20%', city: 'Pune' },
  { top: '15%', left: '32%', city: 'Srinagar' },
  { top: '42%', left: '65%', city: 'Ranchi' },
  { top: '52%', left: '55%', city: 'Bhubaneswar' },
];

export const LiveMap: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden min-h-[80vh] flex flex-col items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20" 
        style={{
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-white">
            <div className="inline-block bg-desi-pink text-black px-4 py-1 font-poster text-lg transform -rotate-2 mb-6">
                LIVE DATA • 2026 PREVIEW
            </div>
            <h2 className="font-retro text-5xl md:text-7xl mb-6 leading-tight text-desi-yellow">
                SEE THE <br/> 
                <span className="text-transparent text-stroke-white" style={{WebkitTextStroke: '1px white'}}>CORRUPTION</span>
            </h2>
            <p className="font-body text-gray-300 text-xl mb-8 border-l-4 border-desi-green pl-4">
                Every red dot is a citizen report. A pothole, a bribe, a broken streetlamp. 
                When we visualize the problem, we can force the solution.
            </p>
            
            <div className="flex gap-4">
                <div className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-lg">
                    <div className="text-desi-pink font-poster text-4xl">24,301</div>
                    <div className="text-xs font-mono text-gray-400 uppercase">Reports Today</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-lg">
                    <div className="text-desi-green font-poster text-4xl">89%</div>
                    <div className="text-xs font-mono text-gray-400 uppercase">Verification Rate</div>
                </div>
            </div>
        </div>

        {/* Map Visualization */}
        <div className="flex-1 relative w-full max-w-md aspect-[3/4] md:aspect-square">
            {/* Abstract India Map Shape (Simplified CSS/SVG) */}
            <div className="w-full h-full relative opacity-80">
               <svg viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <path d="M130,10 L180,20 L220,60 L280,80 L350,120 L320,180 L280,200 L250,280 L200,400 L150,440 L100,380 L50,250 L20,180 L80,120 L100,50 Z" 
                        fill="#1a1a1a" stroke="#333" strokeWidth="2" />
               </svg>

               {/* Pulsating Dots */}
               {locations.map((loc, index) => (
                 <motion.div
                    key={index}
                    className="absolute w-4 h-4"
                    style={{ top: loc.top, left: loc.left }}
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.2,
                        ease: "easeInOut"
                    }}
                 >
                    <div className="absolute inset-0 bg-red-600 rounded-full blur-sm"></div>
                    <div className="relative w-full h-full bg-red-500 rounded-full border border-white shadow-[0_0_10px_#ff0000]"></div>
                    
                    {/* Tooltip on hover (simulated) */}
                    <div className="absolute left-6 top-0 bg-black/80 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none border border-white/20">
                        {loc.city} • ALERT
                    </div>
                 </motion.div>
               ))}
            </div>
        </div>

      </div>
    </section>
  );
};