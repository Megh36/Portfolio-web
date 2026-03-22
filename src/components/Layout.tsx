import React from 'react';
import Starfield from './Starfield';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import { AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeSection, setActiveSection }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 3D Galaxy Background */}
      <Starfield />

      {/* Global UI Overlays */}
      <Sidebar setActiveSection={setActiveSection} />
      <BottomBar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Dynamic Content Area */}
      <main className="relative z-10 w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>

      {/* Atmospheric Overlays */}
      <div className="scanlines" />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black opacity-40 z-[5]" />
    </div>
  );
};

export default Layout;
