import React from 'react';
import { motion } from 'framer-motion';

interface HolographicCardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ children, title, subtitle, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className={`holographic-panel p-8 rounded-lg ${className}`}
    >
      {/* Dynamic Header */}
      {title && (
        <div className="mb-8 border-b border-white/5 pb-6">
          <h2 className="glow-text-red text-xl md:text-2xl font-black tracking-[0.1em] uppercase">{title}</h2>
          {subtitle && <p className="text-white/30 text-[9px] uppercase tracking-[0.4em] font-medium mt-2">{subtitle}</p>}
        </div>
      )}
      
      {/* Content Area */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Premium Decorative Accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent-red/20 rounded-tl-sm pointer-events-none" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent-red/20 rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent-red/20 rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent-red/20 rounded-br-sm pointer-events-none" />
      
      {/* Scanning laser line effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-red/20 to-transparent animate-scan-line pointer-events-none" />
    </motion.div>
  );
};

export default HolographicCard;
