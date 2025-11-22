import React from 'react';
import { motion } from 'framer-motion';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-32 bg-off-white border-y-8 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative">
          <motion.div 
            className="absolute -top-20 -left-20 w-40 h-40 bg-desi-green rounded-full blur-3xl opacity-50" 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <h2 className="font-poster text-5xl md:text-8xl leading-tight uppercase text-justify tracking-tight">
            We are tired of <span className="bg-black text-white px-2 decoration-wavy underline decoration-desi-pink">waiting</span>. 
            The infrastructure is broken. The system is slow. 
            <br /><br />
            <span className="text-desi-orange">Indizen</span> is not just an app. It is a 
            <span className="relative inline-block mx-4">
               <span className="relative z-10 italic font-serif">digital weapon</span>
               <span className="absolute bottom-1 left-0 w-full h-4 bg-desi-yellow/80 -z-0 transform -skew-x-12"></span>
            </span>
            for the common citizen. 
          </h2>
          
          <div className="mt-20 flex flex-wrap gap-6 items-center justify-center md:justify-start">
             <div className="w-32 h-32 bg-desi-pink rounded-full flex items-center justify-center border-4 border-black animate-spin-slow p-2">
                <div className="text-center font-mono font-bold text-xs">
                  EST.<br/>2026<br/>IND
                </div>
             </div>
             <p className="font-body text-xl max-w-md font-bold border-l-8 border-desi-orange pl-6">
                By aggregating millions of micro-reports, we create undeniable datasets that force bureaucratic action.
             </p>
          </div>

          {/* Decorative Sketch Lines */}
          <svg className="absolute top-0 right-0 w-64 h-full pointer-events-none opacity-40" viewBox="0 0 200 800">
             <path d="M10,10 Q50,200 10,400 T10,800" fill="none" stroke="#FF007F" strokeWidth="4" strokeDasharray="10,5"/>
             <path d="M30,10 Q70,200 30,400 T30,800" fill="none" stroke="#FF6B00" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </section>
  );
};