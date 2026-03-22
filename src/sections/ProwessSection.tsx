import React from 'react';
import HolographicCard from '../components/HolographicCard';
import { SKILLS } from '../constants/skills';
import { motion } from 'framer-motion';

const ProwessSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start p-10 md:p-24 overflow-y-auto custom-scrollbar pt-32">
      <div className="max-w-7xl w-full">
        <header className="mb-16 text-center space-y-2">
          <h2 className="text-5xl font-black glow-text-blue tracking-[0.2em] uppercase">PROWESS INVENTORY</h2>
          <div className="flex items-center justify-center gap-4 text-xs tracking-[0.6em] text-white/30 uppercase font-bold">
            <span className="w-16 h-0.5 bg-accent-blue/20" />
            Hoth System - Echo Base Data Bank
            <span className="w-16 h-0.5 bg-accent-blue/20" />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <HolographicCard title={category.title} className="h-full border-accent-blue/20 group-hover:border-accent-blue/50 transition-colors">
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-4 text-sm md:text-base text-white/70 group-hover:text-white transition-colors leading-tight">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue shadow-[0_0_10px_#00e0ff] shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </HolographicCard>
            </motion.div>
          ))}
        </div>
      </div>

       {/* Information Header Overlay */}
       <div className="fixed top-12 right-12 text-right pointer-events-none z-30">
        <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase mb-2">System: Hoth - Rebel Base</p>
        <p className="text-xs tracking-[0.2em] font-bold text-accent-blue uppercase shadow-glow mb-1">
          UNIT: TECHNICAL DATA ARCHIVE
        </p>
        <div className="w-32 h-0.5 bg-gradient-to-l from-accent-blue to-transparent ml-auto mt-2" />
      </div>
    </div>
  );
};

export default ProwessSection;
