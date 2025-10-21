'use client'
import React from 'react';
import Card from './Card';
import Link from 'next/link';
import earth from "@/public/earthicon.png"
import perfectperso from "@/public/perfectperso.png"
import support from "@/public/support.png"
import coordination from "@/public/coordination.png"
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const WaitlistSection = () => {
  const t = useTranslations('Waitlist2');
  
  const waitlistFeatures = [
    {
      id: 1,
      icon: earth,
      key: 'earlyAccess',
      title: t('features.earlyAccess.title'),
      description: t('features.earlyAccess.description')
    },
    {
      id: 2,
      icon: perfectperso,
      key: 'exclusiveDiscounts',
      title: t('features.exclusiveDiscounts.title'),
      description: t('features.exclusiveDiscounts.description')
    },
    {
      id: 3,
      icon: support,
      key: 'testingOpportunities',
      title: t('features.testingOpportunities.title'),
      description: t('features.testingOpportunities.description')
    },
    {
      id: 4,
      icon: coordination,
      key: 'prioritySupport',
      title: t('features.prioritySupport.title'),
      description: t('features.prioritySupport.description')
    }
  ];

  return (
    <div className='my-20 '>
      
      {/* Header Section */}
      <div className="text-center mb-16 mx-auto">
        <h2 className=" mb-6">
          {t('header')}
        </h2>
        <div className="space-y-2">
          <p className="subheading-paragprah text-[#FFFFFFCC] md:w-[70%] text-center mx-auto">
            {t('subheader')}
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 ">
        {waitlistFeatures.map((feature) => (
          <Card 
            key={feature.id}
            className="rounded-[32px] bg-[#18232D]  flex flex-col"
          >
            <Image className='mx-auto mb-4' src={feature.icon} alt={feature.title} width={30} height={30} />
            <h4 className='text-white !font-raleway text-lg font-semibold mb-3 flex-shrink-0'>{feature.title}</h4>
            <p className='text-white/70 !font-raleway text-sm leading-relaxed flex-1'>{feature.description}</p>
          </Card>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Link href="/waitlist">
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium text-base hover:bg-gray-100 transition-colors shadow-lg ">
            {t('cta')}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default WaitlistSection;