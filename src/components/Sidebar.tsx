import React from 'react';
import { Home, Mail, FileText, Github, Linkedin, Share2 } from 'lucide-react';

interface SidebarProps {
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection }) => {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-10">
      {/* Primary Navigation Actions */}
      <div className="flex flex-col gap-6 p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
        <button 
          onClick={() => setActiveSection('home')}
          className="text-white/40 hover:text-accent-red hover:scale-125 transition-all duration-300 group relative"
          title="Home Base"
        >
          <Home size={28} />
          <span className="absolute left-12 scale-0 group-hover:scale-100 transition-all bg-accent-red text-white text-xs px-3 py-1.5 rounded-sm uppercase tracking-widest font-bold">Home</span>
        </button>
        <a 
          href="https://raw.githubusercontent.com/Megh36/Resume_megh/main/Megh_s_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-accent-red hover:scale-125 transition-all duration-300 group relative"
          title="Access Data Records"
        >
          <FileText size={28} />
          <span className="absolute left-12 scale-0 group-hover:scale-100 transition-all bg-accent-red text-white text-xs px-3 py-1.5 rounded-sm uppercase tracking-widest font-bold">C.V.</span>
        </a>
        <a 
          href="mailto:meghptl3606@gmail.com"
          className="text-white/40 hover:text-accent-red hover:scale-125 transition-all duration-300 group relative"
        >
          <Mail size={28} />
          <span className="absolute left-12 scale-0 group-hover:scale-100 transition-all bg-accent-red text-white text-xs px-3 py-1.5 rounded-sm uppercase tracking-widest font-bold">Contact</span>
        </a>
      </div>
      
      {/* Social Transmission Lines */}
      <div className="flex flex-col gap-6 p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
        <a href="https://github.com/Megh36" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent-red hover:scale-125 transition-all duration-300">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/MeghPatel" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent-red hover:scale-125 transition-all duration-300">
          <Linkedin size={28} />
        </a>
        <button className="text-white/40 hover:text-accent-red hover:scale-125 transition-all duration-300">
          <Share2 size={28} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
