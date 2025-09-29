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
    <footer className='bg-[#18232D] pt-16 pb-8 px-4 md:px-8'>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-5 gap-12 md:gap-8 mb-12">
          
          {/* Company Logo/Info - Left Column */}
          <div className='text-center md:text-left md:col-span-3'>
            <span className="blended  block mb-5 w-fit mx-auto md:mx-0">
                     <svg width="108" height="32" viewBox="0 0 108 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g >
<path d="M82.9183 31.5689L90.7199 7.64355H99.5318L107.333 31.5689H99.9459L98.7036 26.8104H91.5481L90.3058 31.5689H82.9183ZM95.0596 13.3472L92.84 21.8529H97.4116L95.1921 13.3472H95.0596Z" fill="#30465A"/>
<path d="M73.7419 31.5689V7.64355H80.765V31.5689H73.7419Z" fill="#30465A"/>
<path d="M55.1574 31.5689L47.9688 7.64355H55.9194L59.7125 24.9037H59.845L63.6381 7.64355H71.5887L64.4 31.5689H55.1574Z" fill="#30465A"/>
<path d="M31.3222 5.88601C29.583 5.88601 28.2579 4.54301 28.2579 2.93472C28.2579 1.34301 29.583 0 31.3222 0C33.0779 0 34.403 1.34301 34.403 2.93472C34.403 4.54301 33.0779 5.88601 31.3222 5.88601ZM39.2562 5.88601C37.5004 5.88601 36.1753 4.54301 36.1753 2.93472C36.1753 1.34301 37.5004 0 39.2562 0C40.9954 0 42.3205 1.34301 42.3205 2.93472C42.3205 4.54301 40.9954 5.88601 39.2562 5.88601ZM35.2643 32C28.9535 32 24.7463 28.5016 24.7463 23.0466V7.64352H31.7694V22.3503C31.7694 24.8705 32.9951 26.2632 35.2809 26.2632C37.5667 26.2632 38.7924 24.8705 38.7924 22.3503V7.64352H45.8155V23.0466C45.8155 28.4684 41.658 32 35.2643 32Z" fill="#30465A"/>
<path d="M0 31.5689V7.64355H5.84701L14.2945 19.8798H14.4105V7.64355H21.4335V31.5689H15.6528L7.13899 19.1337H7.02304V31.5689H0Z" fill="#30465A"/>
</g>
</svg>
            </span>
            


            <div className="space-y-2 text-center md:text-left md:w-fit">
              <p className="text-slate-300 md:text-left text-base">Tallinn, Estonia</p>
              <p className="text-slate-300 md:text-left text-base mt-4">Email</p>
              <a 
                href="mailto:info@nuvia.travel"
                className="block text-slate-300 mx-auto  hover:text-white transition-colors duration-200 text-base"
              >
                info@nuvia.travel
              </a>
            </div>
          </div>

          {/* Quick Links - Middle Column */}
          <div className=' w-fit mx-auto text-center md:text-left'>
            <h4 className="text-white/70 md:text-left font-normal mb-4 md:mb-6 text-lg">Quick Links</h4>
            <div className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-white hover:text-white transition-colors duration-200 text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Legal - Right Column */}
          <div className=' w-fit mx-auto text-center md:text-left'>
            <h4 className="text-white/70 md:text-left font-normal mb-4 md:mb-6 text-lg">Legal</h4>
            <div className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-white hover:text-white transition-colors duration-200 text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Copyright */}
          <div className="flex items-center justify-between">
            {/* Logo circle on left */}
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            
            {/* Copyright text centered */}
            <p className="text-slate-400 text-sm text-center flex-1">
              © 2025 NÜVIA. Revolutionizing travel through artificial intelligence. All rights reserved.
            </p>
            
            {/* Empty space for balance */}
            <div className="w-10"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;