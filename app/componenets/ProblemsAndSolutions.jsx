'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import aiicon from "@/public/ai.png"
import alarm from "@/public/alarm.png"
import mouseicon from "@/public/mouse.png"
import Intelligent from "@/public/intelligence.png"
import earthicon from "@/public/earthicon.png"
import paper from "@/public/paper.png"
import money from "@/public/mney.png"
import piece from "@/public/piece.png"
import recycle from "@/public/recycle.png"
import time from "@/public/timing.png"



import Image from 'next/image';

// Your existing icon components remain the same...
const FragmentationIcon = () => (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 48.86H48V0.86H0V48.86Z" fill="white"/>
</svg>
);

// ... (keep all your other icon components)

const PROBLEMS_DATA = [
  {
    id: 'fragmentation',
    icon: piece,
    title: "Fragmentation",
    description: "Separate platforms for flights, hotels, transfers, activities, and insurance"
  },
  {
    id: 'time-consuming',
    icon: time,
    title: "Time Consuming", 
    description: "Hours spent researching, comparing, and booking each component"
  },
  {
    id: 'hidden-costs',
    icon: money,
    title: "Hidden Costs",
    description: "Unexpected fees discovered only at checkout"
  },
  {
    id: 'coordination',
    icon: recycle,
    title: "Lack of Coordination",
    description: "Bookings that don't align, creating gaps and conflicts in your itinerary"
  },
  {
    id: 'generic',
    icon:paper,
    title: "Generic Recommendations",
    description: "One-size-fits-all suggestions that ignore your unique preferences"
  }
];

const SOLUTIONS_DATA = [
  {
    id: 'ai-concierge',
    icon: aiicon,
    title: "AI Travel Concierge",
    description: "Your personal assistant that learns your preferences and handles all planning"
  },
  {
    id: 'unified-platform',
    icon:earthicon,
    title: "Unified Booking Platform", 
    description: "Flights, hotels, transfers, activities, insurance, and more in one place"
  },
  {
    id: 'optimization',
    icon: Intelligent,
    title: "Intelligent Optimization",
    description: "AI finds the best combinations of services for your budget and schedule"
  },
  {
    id: 'one-click',
    icon:mouseicon,
    title: "One-Click Purchase",
    description: "Complete your entire trip booking with a single button press"
  },
  {
    id: 'real-time',
    icon: alarm,
    title: "Real-Time Coordination",
    description: "All bookings are synchronized and optimized for seamless travel flow"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Updated Section component with fixed card heights
const Section = ({ title, data, variant, gradientStyle }) => (
  <div 
    className='p-2 md:p-6 rounded-[32px]' 
    style={{ background: gradientStyle }}
  >
    <h3 className="text-3xl font-bold text-white mb-8 text-center !font-raleway">
      {title}
    </h3>
    
    <div className="space-y-4">
      {/* First Row */}
      <motion.div 
        className="grid grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data.slice(0, 2).map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Card className="rounded-[32px] bg-white/5 h-[290px] md:h-[250px] flex flex-col">
              <div className=" mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <Image src={item.icon.src} height={40} width={40} alt={item.title} />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-white !font-raleway text-lg font-semibold mb-3 flex-shrink-0">
                  {item.title}
                </h4>
                <p className="text-white/70 !font-raleway text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Second Row */}
      <motion.div 
        className="grid grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data.slice(2, 4).map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Card className="rounded-[32px] bg-white/5 h-[290px] md:h-[250px] flex flex-col">
               <div className=" mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <Image src={item.icon.src} height={40} width={40} alt={item.title} />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-white !font-raleway text-lg font-semibold mb-3 flex-shrink-0">
                  {item.title}
                </h4>
                <p className="text-white/70 !font-raleway text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Third Row - Single centered item */}
      <motion.div 
        className="flex justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="w-full max-w-md">
          <Card className="rounded-[32px] bg-white/5 h-[290px] md:h-[250px] flex flex-col">
              <div className=" mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <Image src={data[4].icon.src} height={40} width={40} alt={data[4].title} />
              </div>
            <div className="flex-1 flex flex-col">
              <h4 className="text-white !font-raleway text-lg font-semibold mb-3 flex-shrink-0">
                {data[4].title}
              </h4>
              <p className="text-white/70 !font-raleway text-sm leading-relaxed flex-1">
                {data[4].description}
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

const ProblemsAndSolutions = () => {
  return (
    <section className="min-h-screen py-16 px-2">
      <div className="max-w-7xl mx-auto">
        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 48.86H48V0.86H0V48.86Z" fill="white"/>
</svg>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="">
            Tired of Travel Planning Chaos?
          </h2>
          <p className="subheading-paragprah text-[#FFFFFFCC] md:w-[70%] text-center mx-auto">
            Planning a trip means juggling multiple sites, endless options, and separate bookings, with hidden fees and constant stress.
            
            Nüvia's AI transforms this chaos into one simple conversation, tailoring and coordinating your entire trip seamlessly.
          </p>
        </motion.div>

        {/* Main Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-0 relative">
            
            {/* Problems Section */}
            <Section 
              title="Problems"
              data={PROBLEMS_DATA}
              variant="problem"
              gradientStyle="radial-gradient(80.46% 104.31% at 50% 0%, #132436 0%, #070B0F 84.83%)"
            />

            {/* Solutions Section */}
            <Section 
              title="Solutions"
              data={SOLUTIONS_DATA}
              variant="solution"
              gradientStyle="radial-gradient(81.76% 105.99% at 50% -5.99%, #0076FF 0%, #012E62 100%)"
            />

            {/* Vertical Divider Line */}
            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/20 transform -translate-x-0.5 hidden lg:block"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;