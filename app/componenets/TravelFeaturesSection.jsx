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

const features = [
  {
    id: 1,
    icon: earth,
    title: "Seamless Experience",
    description: "From visa assistance to local transport, every aspect of your trip flows seamlessly through one orchestrated by our intelligent AI"
  },
  {
    id: 2,
    icon: perfectperso,
    title: "Perfect Personalization", 
    description: "Every trip is uniquely tailored to your specific preferences, travel style, and budget, ensuring an experience that truly resonates with you"
  },
  {
    id: 3,
    icon: support,
    title: "24/7 AI Support",
    description: "Your AI Assistant is available anytime for changes, questions, or emergency assistance, providing unparalleled peace of mind"
  },
  {
    id: 4,
    icon: coordination,
    title: "Guaranteed Coordination",
    description: "All bookings are synchronized and managed by Nüvia so you never have to worry about planning your time on the ground"
  },
  {
    id: 5,
    icon: timing,
    title: "Save Massive Time",
    description: "Plan complex multi-destination trips in minutes instead of days or weeks. Our AI handles the heavy lifting"
  },
  {
    id: 6,
    icon: savemoney,
    title: "Save Significant Money",
    description: "AI optimization and our aggregated purchasing power reduce costs by up to 40% on your overall travel expenses"
  },
  {
    id: 7,
    icon: eliminatestress,
    title: "Eliminate Stress",
    description: "No more juggling multiple bookings, comparing endless tabs, or worrying about coordination. Nüvia takes care of everything"
  }
];

const TravelFeaturesSection = () => {
  return (
    <div className='w-full p-4'>
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="mb-4">
          More Time Exploring,* Less Time Planning. Travel Without Complexity.
        </h2>
        <p className="subheading-paragprah text-[#FFFFFFCC] md:w-[70%] text-center mx-auto">
          Nüvia removes travel planning stress, letting you focus on enjoying your journey
        </p>
      </div>
       
      {/* Features Container */}
      <div className="flex flex-col gap-6">
        
        {/* Top Row - 2 columns on mobile, flex on desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-6">
          {/* Seamless Experience */}
          <Card className="rounded-[32px] bg-[#18232D] p-6 flex flex-col md:flex-1">
            <div className="mx-auto mb-4">
              <Image src={features[0].icon} alt={features[0].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-lg font-semibold mb-3 text-center'>
              {features[0].title}
            </h4>
            <p className='text-white/70 !font-raleway text-sm leading-relaxed text-center'>
              {features[0].description}
            </p>
          </Card>

          {/* Perfect Personalization */}
          <Card 
            className="rounded-[32px] bg-[#18232D] p-6 flex flex-col md:w-[440px]"
            style={{ 
              flexBasis: '440px',
              flexGrow: 0,
              flexShrink: 0
            }}
          >
            <div className="mx-auto mb-4">
              <Image src={features[1].icon} alt={features[1].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-lg font-semibold mb-3 text-center'>
              {features[1].title}
            </h4>
            <p className='text-white/70 !font-raleway text-sm leading-relaxed text-center'>
              {features[1].description}
            </p>
          </Card>

          {/* Guaranteed Coordination */}
          <Card className="rounded-[32px] bg-[#18232D] p-6 flex flex-col md:flex-1">
            <div className="mx-auto mb-4">
              <Image src={features[3].icon} alt={features[3].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-lg font-semibold mb-3 text-center'>
              {features[3].title}
            </h4>
            <p className='text-white/70 !font-raleway text-sm leading-relaxed text-center'>
              {features[3].description}
            </p>
          </Card>

          {/* 24/7 AI Support */}
          <Card className="rounded-[32px] bg-[#18232D] p-6 flex flex-col md:flex-1">
            <div className="mx-auto mb-4">
              <Image src={features[2].icon} alt={features[2].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-lg font-semibold mb-3 text-center'>
              {features[2].title}
            </h4>
            <p className='text-white/70 !font-raleway text-sm leading-relaxed text-center'>
              {features[2].description}
            </p>
          </Card>
        </div>

        {/* Bottom Row - 2 columns on mobile, flex on desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-6">
          {/* Save Massive Time */}
          <Card 
            className="rounded-[32px] bg-[#18232D] p-6 flex flex-col md:w-auto"
            style={{ 
              flexBasis: '280px',
              flexGrow: 0,
              flexShrink: 0
            }}
          >
            <div className="mx-auto mb-4">
              <Image src={features[4].icon} alt={features[4].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-lg font-semibold mb-3 text-center'>
              {features[4].title}
            </h4>
            <p className='text-white/70 !font-raleway text-sm leading-relaxed text-center'>
              {features[4].description}
            </p>
          </Card>

          {/* Save Significant Money */}
          <Card className="rounded-[32px] bg-[#18232D] p-6 flex flex-col md:flex-grow">
            <div className="mx-auto mb-4">
              <Image src={features[5].icon} alt={features[5].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-lg font-semibold mb-3 text-center'>
              {features[5].title}
            </h4>
            <p className='text-white/70 !font-raleway text-sm leading-relaxed text-center'>
              {features[5].description}
            </p>
          </Card>

          {/* Eliminate Stress - Full width on mobile, fixed width on desktop */}
          <Card 
            className="rounded-[32px] bg-[#18232D] p-6 flex flex-col col-span-2 md:col-span-1 md:w-auto"
            style={{ 
              flexBasis: '440px',
              flexGrow: 0,
              flexShrink: 0
            }}
          >
            <div className="mx-auto mb-4">
              <Image src={features[6].icon} alt={features[6].title} width={30} height={30} />
            </div>
            <h4 className='text-white !font-raleway text-lg font-semibold mb-3 text-center'>
              {features[6].title}
            </h4>
            <p className='text-white/70 !font-raleway text-sm leading-relaxed text-center'>
              {features[6].description}
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TravelFeaturesSection