import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full pt-20 pb-20 px-4 md:px-10 overflow-hidden flex flex-col justify-center border-t border-black/10">
      
      {/* Background Elements - Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-desi-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-desi-pink rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        
        {/* Left Column: Text Stack */}
        <div className="lg:col-span-7 flex flex-col z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <h2 className="font-mono text-desi-pink font-bold mb-4 tracking-widest">THE MISSION</h2>
            <h1 className="font-poster text-[18vw] leading-[0.8] lg:text-[160px] uppercase text-black tracking-tighter">
              Street<br />
              <span className="text-desi-blue">Level</span><br />
              <span className="text-transparent" style={{ WebkitTextStroke: '3px #000' }}>Power</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-body text-xl md:text-2xl mt-8 max-w-md font-bold bg-white/60 backdrop-blur-sm p-4 border-l-8 border-desi-blue shadow-hard-sm"
          >
            The anti-corruption revolution begins on your phone. Report. Track. Change. 
          </motion.p>
        </div>

        {/* Right Column: Visual Collage */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-auto flex items-center justify-center mt-10 lg:mt-0">
          {/* Sticker 1 */}
          <motion.div 
            className="absolute top-0 right-0 md:right-20 z-20 rotate-12"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, rotate: 12 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <div className="bg-desi-green text-white font-poster text-4xl px-6 py-3 border-2 border-black shadow-hard -rotate-2">
              FIX IT NOW
            </div>
          </motion.div>

          {/* Image Container with Pencil Border Effect */}
          <motion.div 
            className="relative w-full max-w-md aspect-[3/4] border-4 border-black bg-desi-yellow p-2 shadow-hard-xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <img 
               src="https://images.unsplash.com/photo-1564669941166-8e1563d496e0?q=80&w=1000&auto=format&fit=crop" 
               alt="Broken Indian Streetlight and Wires" 
               className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply"
             />
             
             {/* Overlay Graphics */}
             <div className="absolute bottom-4 left-4 bg-white border-2 border-black p-2 flex items-center gap-2">
                <MapPin className="text-desi-pink" />
                <span className="font-mono font-bold text-sm">MUMBAI, MH</span>
             </div>
             
             {/* Swoosh Element */}
             <svg className="absolute -bottom-10 -right-10 w-32 h-32 text-desi-pink animate-bounce" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50,0 L65,35 L100,50 L65,65 L50,100 L35,65 L0,50 L35,35 Z" />
             </svg>
          </motion.div>
        </div>

      </div>

      {/* Decorative Tape */}
      <div className="absolute top-1/3 left-0 w-40 h-12 bg-desi-orange/90 -rotate-45 transform -translate-x-10 backdrop-blur-sm border-2 border-black flex items-center justify-center">
         <span className="font-mono font-bold text-white text-xs">WORK IN PROGRESS</span>
      </div>
    </section>
  );
};