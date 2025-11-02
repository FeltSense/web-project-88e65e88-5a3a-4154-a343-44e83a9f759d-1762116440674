'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo & Brand */}
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
            <span className="text-white font-bold text-xl">OG</span>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">OG's Resto</span>
          <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Authentic Flavors</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <a 
          href="#home" 
          className="px-4 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 relative group"
        >
          Home
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-3/4 transition-all duration-300"></span>
        </a>
        <a 
          href="#services" 
          className="px-4 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 relative group"
        >
          Services
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-3/4 transition-all duration-300"></span>
        </a>
        <a 
          href="#pricing" 
          className="px-4 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 relative group"
        >
          Pricing
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-3/4 transition-all duration-300"></span>
        </a>
        <a 
          href="#contact" 
          className="px-4 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 relative group"
        >
          Contact
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-3/4 transition-all duration-300"></span>
        </a>
      </div>

      {/* CTA & Mobile Menu */}
      <div className="flex items-center space-x-4">
        <button className="hidden sm:flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300">
          <span>Reserve Table</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu Dropdown */}
  <div className="md:hidden border-t border-slate-200/60 bg-white/98 backdrop-blur-md">
    <div className="px-4 py-4 space-y-2">
      <a 
        href="#home" 
        className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
      >
        Home
      </a>
      <a 
        href="#services" 
        className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
      >
        Services
      </a>
      <a 
        href="#pricing" 
        className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
      >
        Pricing
      </a>
      <a 
        href="#contact" 
        className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
      >
        Contact
      </a>
      <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 mt-2">
        <span>Reserve Table</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  </div>
</nav>
  );
}