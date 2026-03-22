import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Star Wars Crawl - Perspective Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center perspective-[1000px] overflow-hidden">
        <motion.div
          initial={{ rotateX: 35, y: "150%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          className="crawl-content w-[60%] max-w-lg text-center opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        >
          <div className="h-[30vh]" /> {/* Larger spacer for cleaner intro */}
          <p className="glow-text-gold crawl-title">
            EPISODE I: THE RISE OF MEGH PATEL
          </p>
          <div className="text-accent-gold/90 text-sm md:text-lg font-bold space-y-8 uppercase tracking-[0.1em] text-justify">
            <p>
              It is a period of digital transformation. Megh Patel, a visionary developer and strategist, 
              has emerged from the depths of the technological galaxy.
            </p>
            <p>
              Armed with mastery over Python, C++, and the mystical arts of JavaScript, 
              he builds digital empires and unravels the secrets of Data Science.
            </p>
            <p>
              As he navigates through the treacherous realms of algorithms and 
              entrepreneurship, his mission is clear: to create innovative 
              products that blend cutting-edge technology with real-world utility.
            </p>
            <p>
              Guided by the light of logic and the power of strategic thinking, 
              the saga continues...
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Branding Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 2, ease: "easeOut" }}
        className="relative z-20 text-center px-4 flex flex-col items-center gap-8"
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-tight">
          <span className="glow-text-red">Megh</span> <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Patel</span>
        </h1>
        <div className="flex items-center justify-center gap-4 text-xs md:text-base text-white/40 tracking-[0.4em] font-medium uppercase">
          <span>Developer</span>
          <span className="w-1.5 h-1.5 bg-accent-red rounded-full shadow-[0_0_10px_#ff003c]" />
          <span>Entrepreneur</span>
        </div>
      </motion.div>
      
      {/* Informative Header Overlay */}
      <div className="fixed top-12 right-12 text-right pointer-events-none z-30">
        <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase mb-2">Sector: Outer Rim - 3D</p>
        <p className="text-xs tracking-[0.2em] font-bold text-accent-red uppercase shadow-glow mb-1">
          HOME BASE - DEATH STAR
        </p>
        <div className="w-32 h-0.5 bg-gradient-to-l from-accent-red to-transparent ml-auto mt-2" />
      </div>

      {/* Ambiance shadow for depth */}
      <div className="absolute inset-0 bg-radial-gradient-fade z-10 pointer-events-none" />
    </div>
  );
};

export default HeroSection;
