import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants/achievements';
import type { Achievement } from '../constants/achievements';

const AchievementCard: React.FC<{ achievement: Achievement; index: number }> = ({
  achievement,
  index,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'text-accent-blue shadow-[0_0_10px_#00e0ff] border-accent-blue';
      case 'COMPLETED': return 'text-accent-red shadow-[0_0_10px_#ff003c] border-accent-red';
      case 'VERIFIED': return 'text-accent-gold shadow-[0_0_10px_#ffe81f] border-accent-gold';
      default: return 'text-white border-white';
    }
  };

  const statusColor = getStatusColor(achievement.status);
  const isAcademic = achievement.category === 'ACADEMIC';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className={`relative group bg-black/60 border ${isAcademic ? 'border-accent-gold/20' : 'border-white/10'} p-8 rounded-sm overflow-hidden transition-all duration-500 hover:border-accent-blue/50 hover:shadow-[0_0_30px_rgba(0,224,255,0.15)] flex flex-col h-full`}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className={isAcademic ? 'text-accent-gold' : 'text-white'}>
          <path d="M10 10 h 80 v 80 h -80 Z" fill="none" strokeWidth="2" stroke="currentColor" />
          <circle cx="50" cy="50" r="30" fill="none" strokeWidth="1" stroke="currentColor" />
          <line x1="50" y1="10" x2="50" y2="90" strokeWidth="1" stroke="currentColor" />
          <line x1="10" y1="50" x2="90" y2="50" strokeWidth="1" stroke="currentColor" />
        </svg>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.03] to-transparent animate-scan-line" />
      </div>

      {/* Header Area */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="space-y-1">
          <p className="text-[10px] tracking-[0.4em] font-bold text-white/40 uppercase">
            CATEGORY: {achievement.category}
          </p>
          <h3 className={`text-2xl font-black ${isAcademic ? 'glow-text-gold' : 'text-white group-hover:glow-text-blue'} uppercase tracking-wider transition-colors`}>
            {achievement.title}
          </h3>
        </div>
        <div className={`px-2 py-1 border rounded-sm text-[8px] font-black tracking-widest uppercase flex items-center gap-2 ${statusColor}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {achievement.status}
        </div>
      </div>

      {/* Metrics Area (if applicable) */}
      {achievement.metrics && (
        <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
          {achievement.metrics.map(metric => (
            <div key={metric.label} className="bg-white/[0.03] border border-white/10 p-4 rounded-sm flex flex-col items-center justify-center text-center group-hover:border-accent-gold/40 transition-colors">
              <span className="text-[9px] tracking-[0.3em] font-bold text-white/40 mb-2">{metric.label}</span>
              <span className="text-3xl font-black text-accent-gold drop-shadow-[0_0_15px_rgba(255,232,31,0.5)]">{metric.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Bullet Points */}
      <div className="space-y-4 relative z-10 flex-1">
        {achievement.points.map((point, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className={`text-[12px] mt-0.5 ${isAcademic ? 'text-accent-gold' : 'text-accent-blue'} font-black`}>::</span>
            <p className="text-sm text-white/60 leading-relaxed font-medium">
              {point}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative Bottom Line */}
      <div className="w-full h-0.5 mt-8 bg-gradient-to-r from-transparent via-white/20 group-hover:via-accent-blue/50 to-transparent transition-colors" />
    </motion.div>
  );
};

const AchievementsSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-y-auto custom-scrollbar">
      <div className="max-w-6xl w-full px-8 md:px-16 pt-24 md:pt-32 pb-16">

        {/* Page Header */}
        <header className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black glow-text-red tracking-[0.15em] uppercase mb-4"
          >
            PERFORMANCE METRICS
          </motion.h2>
          <div className="flex items-center justify-center gap-10 text-[10px] tracking-[0.6em] text-white/25 uppercase font-bold">
            <span className="w-16 h-px bg-accent-red/20" />
            System Achievements & Records
            <span className="w-16 h-px bg-accent-red/20" />
          </div>
        </header>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Academic Card spans full width on top or fits in grid depending on design. Here we'll let it flow naturally in the grid, but if it's the first one, it might look good taking full width if we wanted. For now, grid. */}
          {ACHIEVEMENTS.map((ach, i) => (
            <div key={ach.id} className={ach.category === 'ACADEMIC' ? 'md:col-span-2' : 'col-span-1'}>
              <AchievementCard achievement={ach} index={i} />
            </div>
          ))}
        </div>

        {/* Footer Spacer */}
        <div className="h-32" />
      </div>

      {/* Information Header Overlay */}
      <div className="fixed top-12 right-12 text-right pointer-events-none z-30 hidden md:block">
        <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase mb-2">
          Sector: Command Bridge
        </p>
        <p className="text-xs tracking-[0.2em] font-bold text-accent-red uppercase shadow-glow mb-1">
          DATA TERMINAL: METRICS
        </p>
        <div className="w-32 h-0.5 bg-gradient-to-l from-accent-red to-transparent ml-auto mt-2" />
      </div>
    </div>
  );
};

export default AchievementsSection;
