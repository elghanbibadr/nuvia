import React from 'react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "Tallinn, Estonia", href: "#" },
      { name: "Email", href: "#" },
      { name: "info@nuvia.travel", href: "mailto:info@nuvia.travel" }
    ],
    quickLinks: [
      { name: "Request a Solution", href: "#" },
      { name: "AI Features", href: "#" },
      { name: "Benefits", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Settings", href: "#" }
    ]
  };

  return (
    <footer className='bg-[#18232D] pt-16 pb-8 px-8'>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Logo/Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">NÜVIA</h3>
            <div className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <div key={index}>
                  {link.href.startsWith('mailto:') ? (
                    <a 
                      href={link.href}
                      className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <p className="text-slate-300 text-sm">{link.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <div className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Empty column for spacing */}
          <div className="md:col-span-1"></div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              © 2025 NÜVIA. Revolutionizing travel through artificial intelligence. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;