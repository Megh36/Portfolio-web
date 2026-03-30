import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants/projects';
import type { Project } from '../constants/projects';
import { ExternalLink } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; index: number; featured?: boolean }> = ({
  project,
  index,
  featured,
}) => (
  <motion.a
    layout
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.12, duration: 0.7 }}
    whileHover={{ scale: 1.02 }}
    className={`group relative block rounded-sm overflow-hidden transition-all duration-500 cursor-pointer
      ${featured
        ? 'bg-black/60 border border-accent-red/30 hover:border-accent-red shadow-[0_0_30px_rgba(255,0,60,0.08)] hover:shadow-[0_0_40px_rgba(255,0,60,0.2)]'
        : 'bg-black/50 border border-white/[0.06] hover:border-accent-blue/40 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(0,224,255,0.1)]'
      }`}
  >
    {/* Scan-line decoration */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-red/[0.03] to-transparent animate-scan-line" />
    </div>

    <div className="relative p-7 md:p-10 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1.5">
          <p className={`text-[11px] md:text-xs tracking-[0.5em] font-black uppercase
            ${featured ? 'text-accent-red/60' : 'text-accent-blue/50'}`}>
            {project.codename}
          </p>
          <h3 className={`text-2xl md:text-3xl font-black tracking-tight
            ${featured ? 'glow-text-red' : 'text-white group-hover:text-accent-blue transition-colors'}`}>
            {project.title}
          </h3>
        </div>
        <ExternalLink
          size={16}
          className="text-white/20 group-hover:text-accent-red transition-colors shrink-0 mt-1"
        />
      </div>

      {/* Description */}
      <p className="text-white/50 text-base md:text-lg leading-relaxed group-hover:text-white/70 transition-colors">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-10">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`text-xs tracking-[0.15em] font-bold uppercase px-3 py-1.5 rounded-sm border transition-colors
              ${featured
                ? 'border-accent-red/20 text-accent-red/70 bg-accent-red/[0.05] group-hover:border-accent-red/40'
                : 'border-white/[0.06] text-white/40 bg-white/[0.02] group-hover:border-accent-blue/30 group-hover:text-accent-blue/70'
              }`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Footer */}
      <div className="pt-2 flex items-center gap-3">
        <span className={`w-2 h-2 rounded-full shadow-lg
          ${featured
            ? 'bg-accent-red shadow-[0_0_8px_#ff003c] group-hover:animate-ping'
            : 'bg-accent-blue shadow-[0_0_8px_#00e0ff] group-hover:animate-ping'
          }`} />
        <span className={`text-xs tracking-[0.3em] font-bold uppercase transition-colors
          ${featured ? 'text-accent-red/50 group-hover:text-accent-red' : 'text-white/30 group-hover:text-accent-blue'}`}>
          ACCESS PROJECT DATA
        </span>
      </div>
    </div>
  </motion.a>
);

const ProjectSection: React.FC = () => {
  const featured = PROJECTS.filter((p) => p.featured);
  const standard = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-y-auto custom-scrollbar">
      <div className="max-w-5xl w-full px-8 md:px-20 pt-24 md:pt-32 pb-16">
        {/* Page Header */}
        <header className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black glow-text-red tracking-[0.15em] uppercase mb-4"
          >
            PROJECT INVENTORY
          </motion.h2>
          <div className="flex items-center justify-center gap-10 text-xs tracking-[0.6em] text-white/25 uppercase font-bold">
            <span className="w-16 h-px bg-accent-red/20" />
            Tatooine System — Mos Eisley Outpost
            <span className="w-16 h-px bg-accent-red/20" />
          </div>
        </header>

        {/* Featured Missions */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-red shadow-[0_0_12px_#ff003c] animate-pulse" />
          <h3 className="text-sm md:text-base tracking-[0.5em] text-accent-red/70 font-black uppercase">
            Featured Missions
          </h3>
          <span className="flex-1 h-px bg-gradient-to-r from-accent-red/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 items-start mb-16">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} featured />
          ))}
        </div>

        {/* Standard Inventory */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_12px_#00e0ff]" />
          <h3 className="text-sm md:text-base tracking-[0.5em] text-accent-blue/60 font-black uppercase">
            System Modules
          </h3>
          <span className="flex-1 h-px bg-gradient-to-r from-accent-blue/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 items-start mb-24">
          {standard.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + featured.length} />
          ))}
        </div>

        {/* Footer Spacer for bottom bar clearance */}
        <div className="h-24" />
      </div>

      {/* Information Header Overlay */}
      <div className="fixed top-12 right-12 text-right pointer-events-none z-30">
        <p className="text-[11px] tracking-[0.4em] text-white/30 uppercase mb-2">
          Sector: Arkanis — Tatooine
        </p>
        <p className="text-sm tracking-[0.2em] font-bold text-accent-red uppercase shadow-glow mb-1">
          ARCHIVE: MISSION LOGS
        </p>
        <div className="w-40 h-0.5 bg-gradient-to-l from-accent-red to-transparent ml-auto mt-2" />
      </div>
    </div>
  );
};

export default ProjectSection;
