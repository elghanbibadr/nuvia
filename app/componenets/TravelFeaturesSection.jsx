'use client'
import React from 'react'
import Image from 'next/image'
import Card from './Card';
import earth from "@/public/earthicon.png"
import perfectperso from "@/public/perfectperso.png"
import support from "@/public/support.png"
import coordination from "@/public/coordination.png"
import timing from "@/public/timing.png"
import savemoney from "@/public/savemoney.png"
import eliminatestress from "@/public/eliminatestress.png"
import { useTranslations } from 'next-intl';

const TravelFeaturesSection = () => {
  const t = useTranslations('Benefits');
  
  const features = [
    {
      id: 1,
      icon: earth,
      key: 'seamlessExperience',
      title: t('features.seamlessExperience.title'),
      description: t('features.seamlessExperience.description')
    },
    {
      id: 2,
      icon: perfectperso,
      key: 'perfectPersonalization',
      title: t('features.perfectPersonalization.title'),
      description: t('features.perfectPersonalization.description')
    },
    {
      id: 3,
      icon: support,
      key: 'aiSupport',
      title: t('features.aiSupport.title'),
      description: t('features.aiSupport.description')
    },
    {
      id: 4,
      icon: coordination,
      key: 'guaranteedCoordination',
      title: t('features.guaranteedCoordination.title'),
      description: t('features.guaranteedCoordination.description')
    },
    {
      id: 5,
      icon: timing,
      key: 'saveTime',
      title: t('features.saveTime.title'),
      description: t('features.saveTime.description')
    },
    {
      id: 6,
      icon: savemoney,
      key: 'saveMoney',
      title: t('features.saveMoney.title'),
      description: t('features.saveMoney.description')
    },
    {
      id: 7,
      icon: eliminatestress,
      key: 'eliminateStress',
      title: t('features.eliminateStress.title'),
      description: t('features.eliminateStress.description')
    }
  ];

  return (
    <div id='benefits' className='w-full my-28 '>
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="mb-4 max-w-5xl text-center mx-auto">
          {t('header')}
        </h2>
        <p className="subheading-paragprah text-[#FFFFFFCC] md:w-[70%] text-center mx-auto">
          {t('subheader')}
        </p>
      </div>
       
      {/* Features Container */}
      <div className="flex flex-col gap-3 md:gap-6">
        
        {/* Top Row - 2 columns on mobile, flex on desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-6">
          {/* Seamless Experience */}
          <Card className="rounded-[32px] bg-[#18232D] p-2 md:p-6 flex flex-col md:flex-1">
            <div className="mx-auto mb-4">
              <Image src={features[0].icon} alt={features[0].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-sm sm:text-lg font-semibold mb-3 flex-shrink-0'>
              {features[0].title}
            </h4>
            <p className='text-white/70 !font-raleway text-xs sm:text-sm leading-relaxed flex-1'>
              {features[0].description}
            </p>
          </Card>

          {/* Perfect Personalization */}
          <Card 
            className="rounded-[32px] bg-[#18232D] p-2 md:p-6 flex flex-col md:w-[440px]"
            style={{ 
              flexBasis: '440px',
              flexGrow: 0,
              flexShrink: 0
            }}
          >
            <div className="mx-auto mb-4">
              <Image src={features[1].icon} alt={features[1].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-sm sm:text-lg font-semibold mb-3 flex-shrink-0'>
              {features[1].title}
            </h4>
            <p className='text-white/70 !font-raleway text-xs sm:text-sm leading-relaxed flex-1'>
              {features[1].description}
            </p>
          </Card>

          {/* Guaranteed Coordination */}
          <Card className="rounded-[32px] bg-[#18232D] p-2 md:p-6 flex flex-col md:flex-1">
            <div className="mx-auto mb-4">
              <Image src={features[3].icon} alt={features[3].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-sm sm:text-lg font-semibold mb-3 flex-shrink-0'>
              {features[3].title}
            </h4>
            <p className='text-white/70 !font-raleway text-xs sm:text-sm leading-relaxed flex-1'>
              {features[3].description}
            </p>
          </Card>

          {/* 24/7 AI Support */}
          <Card className="rounded-[32px] bg-[#18232D] p-2 md:p-6 flex flex-col md:flex-1">
            <div className="mx-auto mb-4">
              <Image src={features[2].icon} alt={features[2].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-sm sm:text-lg font-semibold mb-3 flex-shrink-0'>
              {features[2].title}
            </h4>
            <p className='text-white/70 !font-raleway text-xs sm:text-sm leading-relaxed flex-1'>
              {features[2].description}
            </p>
          </Card>
        </div>

        {/* Bottom Row - 2 columns on mobile, flex on desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-6">
          {/* Save Massive Time */}
          <Card 
            className="rounded-[32px] bg-[#18232D] p-2 md:p-6 flex flex-col md:w-auto"
            style={{ 
              flexBasis: '280px',
              flexGrow: 0,
              flexShrink: 0
            }}
          >
            <div className="mx-auto mb-4">
              <Image src={features[4].icon} alt={features[4].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-sm sm:text-lg font-semibold mb-3 flex-shrink-0'>
              {features[4].title}
            </h4>
            <p className='text-white/70 !font-raleway text-xs sm:text-sm leading-relaxed flex-1'>
              {features[4].description}
            </p>
          </Card>

          {/* Save Significant Money */}
          <Card className="rounded-[32px] bg-[#18232D] p-2 md:p-6 flex flex-col md:flex-grow">
            <div className="mx-auto mb-4">
              <Image src={features[5].icon} alt={features[5].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-sm sm:text-lg font-semibold mb-3 flex-shrink-0'>
              {features[5].title}
            </h4>
            <p className='text-white/70 !font-raleway text-xs sm:text-sm leading-relaxed flex-1'>
              {features[5].description}
            </p>
          </Card>

          {/* Eliminate Stress - Full width on mobile, fixed width on desktop */}
          <Card 
            className="rounded-[32px] bg-[#18232D] p-2 md:p-6 flex flex-col col-span-2 md:col-span-1 md:w-auto"
            style={{ 
              flexBasis: '440px',
              flexGrow: 0,
              flexShrink: 0
            }}
          >
            <div className="mx-auto mb-4">
              <Image src={features[6].icon} alt={features[6].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-sm sm:text-lg font-semibold mb-3 flex-shrink-0'>
              {features[6].title}
            </h4>
            <p className='text-white/70 !font-raleway text-xs sm:text-sm leading-relaxed flex-1'>
              {features[6].description}
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TravelFeaturesSection