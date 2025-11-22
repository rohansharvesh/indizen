import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

export const VisionHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] w-full pt-32 pb-20 px-6 md:px-12 bg-[#FFFCF2] overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-10 left-10 opacity-20 animate-spin-slow">
         <Sun size={120} className="text-desi-orange" />
      </div>
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full border-[1px] border-desi-pink opacity-20 mix-blend-multiply blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-desi-yellow rounded-full opacity-30 blur-2xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto z-10"
      >
        <span className="inline-block py-1 px-3 border border-black rounded-full text-xs font-mono tracking-widest mb-6 hover:bg-black hover:text-white transition-colors cursor-default">
            PROJECT INDIZEN • 2026
        </span>

        <h1 className="font-retro text-6xl md:text-8xl lg:text-9xl text-black mb-8 leading-tight">
          The India <br/>
          <span className="italic text-desi-blue">We Deserve.</span>
        </h1>

        <p className="font-body text-lg md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12">
          Imagine streets that sing, infrastructure that works, and a system that listens. 
          We are building the digital bridge to a corruption-free, beautiful Bharat.
        </p>

        <div className="relative inline-block group">
            <div className="absolute inset-0 bg-desi-orange translate-y-2 translate-x-2 transition-transform group-hover:translate-y-3 group-hover:translate-x-3"></div>
            <div className="relative bg-white border-2 border-black px-8 py-4 font-poster text-xl md:text-2xl tracking-wide uppercase">
                Coming 2026
            </div>
        </div>
      </motion.div>

      {/* Artistic Illustration Representation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 w-full h-32 md:h-48 opacity-60"
      >
         {/* Abstract landscape vector */}
         <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path fill="#FF007F" fillOpacity="0.1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fill="#FFEB3B" fillOpacity="0.3" d="M0,96L80,122.7C160,149,320,203,480,208C640,213,800,171,960,160C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
         </svg>
      </motion.div>
    </section>
  );
};