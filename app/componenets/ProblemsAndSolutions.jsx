'use client';

import { motion } from 'framer-motion';

const ProblemsAndSolutions = () => {
  const problems = [
    {
      icon: "🧩",
      title: "Fragmentation",
      description: "Separate platforms for flights, hotels, transfers, activities, and insurance"
    },
    {
      icon: "⏳",
      title: "Time Consuming", 
      description: "Hours spent researching, comparing, and booking each component"
    },
    {
      icon: "💰",
      title: "Hidden Costs",
      description: "Unexpected fees discovered only at checkout"
    },
    {
      icon: "🔀",
      title: "Lack of Coordination",
      description: "Bookings that don't align, creating gaps and conflicts in your itinerary"
    },
    {
      icon: "📄",
      title: "Generic Recommendations",
      description: "One-size-fits-all suggestions that ignore your unique preferences"
    }
  ];

  const solutions = [
    {
      icon: "🤖",
      title: "AI Travel Concierge",
      description: "Your personal assistant that learns your preferences and handles all planning"
    },
    {
      icon: "🌐",
      title: "Unified Booking Platform", 
      description: "Flights, hotels, transfers, activities, insurance, and more in one place"
    },
    {
      icon: "🧠",
      title: "Intelligent Optimization",
      description: "AI finds the best combinations of services for your budget and schedule"
    },
    {
      icon: "⚪",
      title: "One-Click Purchase",
      description: "Complete your entire trip booking with a single button press"
    },
    {
      icon: "🕐",
      title: "Real-Time Coordination",
      description: "All bookings are synchronized and optimized for seamless travel flow"
    }
  ];

  return (
    <section className="min-h-screen p-4 flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=""
      >
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Tired of Travel Planning Chaos?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed"
          >
            Planning a trip is juggling sites, options, and bookings, with hidden fees and stress.
            <br />
            Nuvia's AI turns it into one simple conversation, tailoring and coordinating your trip seamlessly.
          </motion.p>
        </div>

        {/* Main Container with border */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative rounded-2xl  overflow-hidde shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 " >
            
            {/* Problems Section */}
<div 
  className='p-4' 
  style={{
    background: "radial-gradient(80.46% 104.31% at 50% 0%, #132436 0%, #070B0F 84.83%)"
  }}
>
              <h3 className="text-3xl font-bold text-white mb-12 text-center">
                Problems
              </h3>
              
              <div className="space-y-3">
                {/* First Row */}
                <div className="grid  grid-cols-2 gap-6">
                  {problems.slice(0, 2).map((problem, index) => (
                    <motion.div
                      key={problem.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="rounded-xl bg-[#FFFFFF0D] border-[32px] border-transparent p-2 text-center transition-colors"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">{problem.icon}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        {problem.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-2 gap-6">
                  {problems.slice(2, 4).map((problem, index) => (
                    <motion.div
                      key={problem.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                      viewport={{ once: true }}
                      className="bg-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-700/70 transition-colors"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">{problem.icon}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        {problem.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Third Row - Single centered item */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gray-700/50 rounded-xl p-6 text-center max-w-xs hover:bg-gray-700/70 transition-colors"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">{problems[4].icon}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {problems[4].title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {problems[4].description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Solutions Section */}
          <div 
  className='p-4' 
  style={{
    background: `
      radial-gradient(81.76% 105.99% at 50% -5.99%, #0076FF 0%, #012E62 100%)
    `
  }}
>
              <h3 className="text-3xl font-bold text-white mb-12 text-center">
                Solutions
              </h3>
              
              <div className="space-y-2">
                {/* First Row */}
                <div className="grid grid-cols-2 gap-3">
                  {solutions.slice(0, 2).map((solution, index) => (
                    <motion.div
                      key={solution.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors border border-white/10"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">{solution.icon}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        {solution.title}
                      </h4>
                      <p className="text-blue-100/90 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-2 gap-3">
                  {solutions.slice(2, 4).map((solution, index) => (
                    <motion.div
                      key={solution.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors border border-white/10"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">{solution.icon}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        {solution.title}
                      </h4>
                      <p className="text-blue-100/90 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Third Row - Single centered item */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center max-w-xs hover:bg-white/15 transition-colors border border-white/10"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">{solutions[4].icon}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {solutions[4].title}
                    </h4>
                    <p className="text-blue-100/90 text-sm leading-relaxed">
                      {solutions[4].description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          
          {/* Vertical Divider Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-0.5 hidden lg:block"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemsAndSolutions;