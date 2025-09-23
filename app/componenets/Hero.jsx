"use client"
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import sky from "@/public/sky.png"
import rockWithMan from "@/public/rock.png"

const ParallaxHero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Title zoom out effect - starts bigger and scales down
  const titleScale = useTransform(scrollY, [0, 500], [1.5, 1]);
  
  // Rock slides up from bottom and becomes visible
  const rockY = useTransform(scrollY, [100, 500], [100, 0]);
  const rockOpacity = useTransform(scrollY, [100, 500], [0, 1]);
  
  // Text appears last while everything else stays visible
  const textOpacity = useTransform(scrollY, [400, 700], [0, 1]);
  
  return (
    <div className="relative">
      {/* Fixed viewport for the parallax sequence */}
      <div 
        ref={containerRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Sky background - always visible */}
        <div className="absolute inset-0 w-full h-full z-10">
          <Image 
            src={sky} 
            alt="Sky with mountains" 
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* NUVIA SVG Logo - zooms out as you scroll, BEHIND the rock */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{ scale: titleScale }}
        >
          <div className="text-center">
            <svg width="240" height="72" viewBox="0 0 561 168" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
              <g style={{mixBlendMode: 'overlay'}}>
                <path d="M433.504 165.22L474.244 40.4058H520.26L561 165.22H522.423L515.935 140.396H478.569L472.082 165.22H433.504ZM496.906 70.1606L485.316 114.533H509.189L497.598 70.1606H496.906Z" fill="white"/>
                <path d="M385.585 165.22V40.4058H422.26V165.22H385.585Z" fill="white"/>
                <path d="M288.536 165.22L250.996 40.4058H292.515L312.322 130.449H313.014L332.822 40.4058H374.34L336.801 165.22H288.536Z" fill="white"/>
                <path d="M164.068 31.2371C154.985 31.2371 148.066 24.2309 148.066 15.8408C148.066 7.5371 154.985 0.530884 164.068 0.530884C173.236 0.530884 180.156 7.5371 180.156 15.8408C180.156 24.2309 173.236 31.2371 164.068 31.2371ZM205.499 31.2371C196.331 31.2371 189.411 24.2309 189.411 15.8408C189.411 7.5371 196.331 0.530884 205.499 0.530884C214.582 0.530884 221.501 7.5371 221.501 15.8408C221.501 24.2309 214.582 31.2371 205.499 31.2371ZM184.654 167.469C151.699 167.469 129.729 149.218 129.729 120.761V40.4058H166.403V117.128C166.403 130.276 172.804 137.541 184.74 137.541C196.677 137.541 203.078 130.276 203.078 117.128V40.4058H239.752V120.761C239.752 149.045 218.041 167.469 184.654 167.469Z" fill="white"/>
                <path d="M0.502686 165.22V40.4058H31.0359L75.1492 104.24H75.7546V40.4058H112.429V165.22H82.2419L37.7827 100.348H37.1772V165.22H0.502686Z" fill="white"/>
              </g>
            </svg>
            
          </div>
        </motion.div>

        {/* Rock with man - slides up from bottom, OVER the title */}
        <motion.div
          style={{ 
            opacity: rockOpacity,
            y: rockY
          }}
          className="absolute inset-0 w-full h-full z-30"
        >
          <Image 
            src={rockWithMan} 
            alt="Rock with man" 
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Button appears with text - compact layout */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-40"
        >
            <p className="text-lg md:text-xl text-white font-medium mb-4" style={{ textShadow: '2px 2px 20px rgba(0,0,0,0.8)' }}>
              Future of Travel
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto px-4"
               style={{ textShadow: '1px 1px 15px rgba(0,0,0,0.8)' }}>
              Experience the future of personalized, seamless travel.<br />
              Nuvia's AI assembles your perfect journey and lets you<br />
              book everything with one click
            </p>
          <button className="px-8 py-3 bg-white/90 text-gray-900 rounded-full font-medium text-lg hover:bg-white transition-colors shadow-lg backdrop-blur-sm">
            Join Waitlist Now
          </button>
        </motion.div>
      </div>
      
      {/* This creates the scroll height for the parallax effect */}
      <div className="h-[200vh]"></div>
      
      {/* Normal content continues after the parallax sequence */}
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <h2 className="text-4xl text-white">Continue scrolling normally</h2>
      </div>
    </div>
  );
};

export default ParallaxHero;