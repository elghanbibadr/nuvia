"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const HeaderNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#', isActive: false },
    { name: 'Problem & Solution', href: '#', isActive: false },
    { name: 'AI Features', href: '#', isActive: true },
    { name: 'Benefits', href: '#', isActive: false },
    { name: 'Roadmap', href: '#', isActive: false }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block bg-[#82868A] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="text-white font-bold text-xl">
              NÜVIA
            </div>

            {/* Navigation Items */}
            <nav className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    item.isActive 
                      ? 'text-white' 
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"></div>
                  )}
                </a>
              ))}
            </nav>

            {/* Join Button */}
            <button className="bg-white text-slate-800 font-semibold px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors duration-200">
              Join
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden bg-slate-600/80 backdrop-blur-sm">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <div className="text-white font-bold text-xl">
              NÜVIA
            </div>

            {/* Join Button */}
            <button className="bg-white text-slate-800 font-semibold px-4 py-2 rounded-full text-sm">
              Join
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-800/95 backdrop-blur-sm z-50 md:hidden">
          <div className="p-6">
            
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-white font-bold text-xl">
                NÜVIA
              </div>
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <nav className="space-y-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block text-lg font-medium transition-colors duration-200 ${
                    item.isActive 
                      ? 'text-white border-l-4 border-yellow-400 pl-4' 
                      : 'text-slate-200 hover:text-white pl-4'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderNavigation;