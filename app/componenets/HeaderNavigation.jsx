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
      <header className="hidden w-[60%] mx-auto md:block bg-[#0E141C80] rounded-4xl backdrop-blur-sm">
        <div className="max-w-7xl mx-auto pl-6 pr-2 py-3">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
           <svg xmlns="http://www.w3.org/2000/svg" width="74" height="22" viewBox="0 0 74 22" fill="none">
  <path d="M57.1672 21.7037L62.5459 5.255H68.6212L73.9999 21.7037H68.9067L68.0502 18.4322H63.1169L62.2604 21.7037H57.1672ZM65.5379 9.17625L64.0077 15.0239H67.1595L65.6293 9.17625H65.5379Z" fill="white"/>
  <path d="M50.8408 21.7037V5.255H55.6828V21.7037H50.8408Z" fill="white"/>
  <path d="M38.0279 21.7037L33.0718 5.255H38.5532L41.1684 17.1213H41.2597L43.8748 5.255H49.3563L44.4002 21.7037H38.0279Z" fill="white"/>
  <path d="M21.5949 4.04663C20.3958 4.04663 19.4823 3.12332 19.4823 2.01762C19.4823 0.923316 20.3958 0 21.5949 0C22.8054 0 23.719 0.923316 23.719 2.01762C23.719 3.12332 22.8054 4.04663 21.5949 4.04663ZM27.065 4.04663C25.8545 4.04663 24.9409 3.12332 24.9409 2.01762C24.9409 0.923316 25.8545 0 27.065 0C28.264 0 29.1776 0.923316 29.1776 2.01762C29.1776 3.12332 28.264 4.04663 27.065 4.04663ZM24.3128 22C19.9619 22 17.0613 19.5948 17.0613 15.8446V5.25492H21.9032V15.3658C21.9032 17.0984 22.7483 18.056 24.3242 18.056C25.9002 18.056 26.7452 17.0984 26.7452 15.3658V5.25492H31.5872V15.8446C31.5872 19.572 28.7208 22 24.3128 22Z" fill="white"/>
  <path d="M0 21.7037V5.255H4.03117L9.85523 13.6674H9.93517V5.255H14.7771V21.7037H10.7916L4.9219 13.1545H4.84197V21.7037H0Z" fill="white"/>
</svg>

            {/* Navigation Items */}
            <nav className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm text-white font-normal transition-colors duration-200`}
                >
                  {item.name}
               
                </a>
              ))}
            </nav>

            {/* Join Button */}
            <button className="bg-white text-black font-normal px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors duration-200">
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