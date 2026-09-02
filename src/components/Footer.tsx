import React from 'react';

export const Footer: React.FC<{ className?: string }> = React.memo(({ className }) => {
  return (
    <footer className={`py-12 px-6 md:px-12 bg-light-bg dark:bg-dark-bg ${className || ''}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-lg mb-1 opacity-100">Luxora Global</span>
          <span>Wholesale products for modern retailers.</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#home" className="hover:opacity-100 transition-opacity">Home</a>
          <a href="#products" className="hover:opacity-100 transition-opacity">Products</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#process" className="hover:opacity-100 transition-opacity">Process</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
        
        <div className="text-center md:text-right">
          © 2026 Luxora Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
});
