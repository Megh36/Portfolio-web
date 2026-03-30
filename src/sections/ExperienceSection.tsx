import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants/experience';
import type { Experience } from '../constants/experience';

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({
  experience,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: index * 0.15, duration: 0.7 }}
    className="relative group w-full"
  >
    {/* Connection line for timeline effect */}
    <div className="absolute left-0 top-0 bottom-[-64px] w-px bg-white/10 group-last:bg-transparent" />
    
    {/* Glowing node on the timeline */}
    <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-accent-red shadow-[0_0_12px_#ff003c] transition-all duration-500 group-hover:scale-150 group-hover:bg-accent-blue group-hover:shadow-[0_0_15px_#00e0ff]" />

    <div className="pl-12 md:pl-16 relative">
      <div className="bg-black/50 border border-white/[0.06] p-7 md:p-10 rounded-sm relative overflow-hidden transition-all duration-500 group-hover:border-accent-blue/40 hover:shadow-[0_0_30px_rgba(0,224,255,0.08)]">
        
        {/* Scan-line decoration */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.03] to-transparent animate-scan-line" />
        </div>

        <div className="relative flex flex-col gap-6">
          {/* Header */}
          <div className="space-y-2">
            <p className="text-xs tracking-[0.5em] font-black uppercase text-accent-red/60 group-hover:text-accent-blue/60 transition-colors">
              {experience.role}
            </p>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white group-hover:glow-text-blue transition-all">
              {experience.title}
            </h3>
          </div>

          {/* Description */}
          <div className="space-y-3">
            {experience.description.map((desc, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-white/20 mt-1.5 font-mono text-sm">»</span>
                <p className="text-white/50 text-base md:text-lg leading-relaxed group-hover:text-white/70 transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-[0.15em] font-bold uppercase px-3 py-1.5 rounded-sm border border-white/[0.06] text-white/40 bg-white/[0.02] transition-colors group-hover:border-accent-blue/30 group-hover:text-accent-blue/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-y-auto custom-scrollbar">
      <div className="max-w-5xl w-full px-8 md:px-20 pt-24 md:pt-32 pb-16">
        
        {/* Page Header */}
        <header className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black glow-text-red tracking-[0.15em] uppercase mb-4"
          >
            MISSION EXPERIENCE
          </motion.h2>
          <div className="flex items-center justify-center gap-10 text-[10px] tracking-[0.6em] text-white/25 uppercase font-bold">
            <span className="w-16 h-px bg-accent-red/20" />
            Galactic Senate Records — Coruscant
            <span className="w-16 h-px bg-accent-red/20" />
          </div>
        </header>

        {/* Section Title */}
        <div className="flex items-center gap-3 mb-16 pl-4 md:pl-8 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-accent-red">
          <h3 className="text-sm tracking-[0.5em] text-white/60 font-black uppercase">
            Operational Logs
          </h3>
          <span className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative flex flex-col gap-16 ml-4 md:ml-8">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} />
          ))}
        </div>

        {/* Footer Spacer for bottom bar clearance */}
        <div className="h-48" />
      </div>

      {/* Information Header Overlay */}
      <div className="fixed top-12 right-12 text-right pointer-events-none z-30">
        <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase mb-2">
          Sector: Core Worlds — Coruscant
        </p>
        <p className="text-xs tracking-[0.2em] font-bold text-accent-red uppercase shadow-glow mb-1">
          CLEARANCE: LEVEL 5
        </p>
        <div className="w-32 h-0.5 bg-gradient-to-l from-accent-red to-transparent ml-auto mt-2" />
      </div>
    </div>
  );
};

export default ExperienceSection;
