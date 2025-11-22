import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
        <div className="backdrop-blur-md bg-white/30 border-2 border-white/50 px-6 py-2 rounded-full shadow-lg">
          <span className="font-poster text-2xl tracking-tighter text-desi-blue italic transform -skew-x-12 block">
            INDIZEN <span className="text-xs align-top not-italic font-body text-desi-pink">'26</span>
          </span>
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="bg-desi-yellow border-2 border-black p-3 shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          <Menu size={24} className="text-black" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-0 z-[60] bg-desi-pink flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 bg-white border-2 border-black p-3 shadow-hard hover:shadow-none transition-all"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col space-y-8 text-center">
              {['MANIFESTO', 'THE APP', 'IMPACT', 'JOIN US'].map((item) => (
                <span 
                  key={item} 
                  className="font-poster text-6xl md:text-8xl text-transparent text-stroke-black hover:text-desi-yellow transition-colors duration-300 cursor-default select-none"
                  style={{ WebkitTextStroke: '2px black' }}
                >
                  {item}
                </span>
              ))}
            </div>
            
            <div className="absolute bottom-10 text-white font-retro tracking-widest text-center px-4">
              UNDER CONSTRUCTION • LAUNCHING 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};