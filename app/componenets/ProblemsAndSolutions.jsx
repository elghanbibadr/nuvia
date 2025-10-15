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
import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
  <div id='solution'
    className=' rounded-[32px] p-2 md:p-6' 
    style={{ background: gradientStyle }}
  >
    <h3 className="text-3xl font-bold text-white mb-8 text-center !font-raleway">
      {title}
    </h3>
    
    <div className="space-y-4">
      {/* First Row */}
      <motion.div 
        className="grid grid-cols-2 gap-2 md:gap-4 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data.slice(0, 2).map((item) => (
          <motion.div key={item.key} variants={itemVariants}>
            <Card className="rounded-[32px] !pt-6 justify-center items-center  bg-white/5 h-[200px] self-stretch flex flex-col">
              <div className=" mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <Image src={item.icon.src} height={30} width={30} alt={item.title} />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-white !font-raleway text-sm sm:text-lg font-semibold mb-3 flex-shrink-0">
                  {item.title}
                </h4>
                <p className="text-white/70 !font-raleway text-xs sm:text-sm leading-relaxed flex-1">
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
          <motion.div key={item.key} variants={itemVariants}>
            <Card className="rounded-[32px] !pt-6 justify-center items-center  bg-white/5 h-[200px] self-stretch flex flex-col">
               <div className=" mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <Image src={item.icon.src} height={30} width={30} alt={item.title} />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-white !font-raleway text-sm sm:text-lg font-semibold mb-3 flex-shrink-0">
                  {item.title}
                </h4>
                <p className="text-white/70 !font-raleway text-xs sm:text-sm leading-relaxed flex-1">
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
            <Card className="rounded-[32px] !pt-6 justify-center items-center  bg-white/5 h-[200px] self-stretch flex flex-col">
              <div className=" mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <Image src={data[4].icon.src} height={30} width={30} alt={data[4].title} />
              </div>
          <div className="flex-1 flex flex-col">
                <h4 className="text-white !font-raleway text-sm sm:text-lg font-semibold mb-3 flex-shrink-0">
                  {data[4].title}
                </h4>
                <p className="text-white/70 !font-raleway text-xs sm:text-sm leading-relaxed flex-1">
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
  const t = useTranslations('ProblemsAndSolutions');

  const PROBLEMS_DATA = [
    {
      key: 'fragmentation',
      icon: piece,
      title: t('problems.fragmentation.title'),
      description: t('problems.fragmentation.description')
    },
    {
      key: 'timeConsuming',
      icon: time,
      title: t('problems.timeConsuming.title'),
      description: t('problems.timeConsuming.description')
    },
    {
      key: 'hiddenCosts',
      icon: money,
      title: t('problems.hiddenCosts.title'),
      description: t('problems.hiddenCosts.description')
    },
    {
      key: 'coordination',
      icon: recycle,
      title: t('problems.coordination.title'),
      description: t('problems.coordination.description')
    },
    {
      key: 'generic',
      icon: paper,
      title: t('problems.generic.title'),
      description: t('problems.generic.description')
    }
  ];

  const SOLUTIONS_DATA = [
    {
      key: 'aiConcierge',
      icon: aiicon,
      title: t('solutions.aiConcierge.title'),
      description: t('solutions.aiConcierge.description')
    },
    {
      key: 'unifiedPlatform',
      icon: earthicon,
      title: t('solutions.unifiedPlatform.title'),
      description: t('solutions.unifiedPlatform.description')
    },
    {
      key: 'optimization',
      icon: Intelligent,
      title: t('solutions.optimization.title'),
      description: t('solutions.optimization.description')
    },
    {
      key: 'oneClick',
      icon: mouseicon,
      title: t('solutions.oneClick.title'),
      description: t('solutions.oneClick.description')
    },
    {
      key: 'realTime',
      icon: alarm,
      title: t('solutions.realTime.title'),
      description: t('solutions.realTime.description')
    }
  ];

  return (
    <section className="my-20">
      <div className="">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="">
            {t('header')}
          </h2>
          <p className="subheading-paragprah text-[#FFFFFFCC] md:w-[70%] text-center mx-auto">
            {t('subheader')}
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
          <div className="grid lg:grid-cols-2 gap-2 md:gap-6 relative">
            
            {/* Problems Section */}
            <Section 
              title={t('problemsTitle')}
              data={PROBLEMS_DATA}
              variant="problem"
              gradientStyle="radial-gradient(80.46% 104.31% at 50% 0%, #132436 0%, #070B0F 84.83%)"
            />

            {/* Solutions Section */}
            <Section 
              title={t('solutionsTitle')}
              data={SOLUTIONS_DATA}
              variant="solution"
              gradientStyle="radial-gradient(81.76% 105.99% at 50% -5.99%, #0076FF 0%, #012E62 100%)"
            />

            {/* Vertical Divider Line */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;