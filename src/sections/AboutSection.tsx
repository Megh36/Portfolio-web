import React from 'react';
import HolographicCard from '../components/HolographicCard';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl w-full">
        <HolographicCard title="ABOUT ME" subtitle="Millennium Falcon - Corellian YT-1300">
          <div className="space-y-6 text-white/90 leading-relaxed text-sm md:text-lg">
            <p>
              Hi, I'm <span className="glow-text-red font-bold">Megh Patel</span>, a passionate and versatile developer 
              with a deep interest in full-stack development, AI/ML solutions, and strategic business systems.
            </p>
            <p>
              Currently, I love building innovative products that blend cutting-edge technology with 
              real-world utility. My journey into tech is driven by curiosity and a desire to solve 
              complex problems with elegant solutions.
            </p>
            <p>
              Beyond technology, I explore creativity through strategic thinking and entrepreneurial 
              pursuits. I take pride in building communities and fostering environments where 
              innovation can thrive.
            </p>
            <div className="pt-6">
               <a 
                href="https://raw.githubusercontent.com/Megh36/Resume_megh/main/Megh_s_resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-accent-red/40 hover:bg-accent-red/20 hover:border-accent-red transition-all duration-300 rounded-sm text-xs font-bold tracking-[0.3em] group shadow-inner uppercase"
              >
                ACCESS RESUME DATA
                <span className="w-2.5 h-2.5 rounded-full bg-accent-red group-hover:animate-ping shadow-[0_0_10px_#ff003c]" />
              </a>
            </div>
          </div>
        </HolographicCard>

        {/* Decorative Scene Element - Original Freighter Asset */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="hidden md:flex flex-col items-center justify-center relative select-none pointer-events-none"
        >
          <img 
            src="https://atheeq-ahmed-portfolio.vercel.app/Images/Milinium-Falcon.png" 
            alt="Millennium Falcon"
            className="w-[450px] mix-blend-screen drop-shadow-[0_20px_50px_rgba(0,0,0,1)] brightness-110 contrast-125"
          />
          <div className="absolute -bottom-16 text-center space-y-1">
            <p className="text-[10px] tracking-[0.6em] text-white/20 uppercase font-black">CORELLIAN ENGINEERING CORP</p>
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase font-bold">LEGENDARY YT-1300 FREIGHTER</p>
            <div className="w-24 h-0.5 bg-accent-red/20 mx-auto mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Information Header Overlay */}
      <div className="fixed top-12 right-12 text-right pointer-events-none z-30">
        <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase mb-2">Location: Hangar 94 - Mos Eisley</p>
        <p className="text-xs tracking-[0.2em] font-bold text-accent-red uppercase shadow-glow mb-1">
           MISSION: RECRUITMENT & DATA TRANSMISSION
        </p>
        <div className="w-32 h-0.5 bg-gradient-to-l from-accent-red to-transparent ml-auto mt-2" />
      </div>
    </div>
  );
};

export default AboutSection;
