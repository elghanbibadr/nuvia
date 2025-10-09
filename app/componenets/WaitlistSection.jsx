import React from 'react';
import Card from './Card';
import Link from 'next/link';
import earth from "@/public/earthicon.png"
import perfectperso from "@/public/perfectperso.png"
import support from "@/public/support.png"
import coordination from "@/public/coordination.png"
import timing from "@/public/timing.png"
import savemoney from "@/public/savemoney.png"
import eliminatestress from "@/public/eliminatestress.png"
import Image from 'next/image';
const waitlistFeatures = [
  {
    id: 1,
    icon:earth,
    title: "Early Access",
    description: "Be among the very first to experience Nüvia's revolutionary AI travel planning platform"
  },
  {
    id: 2,
    icon: perfectperso,
    title: "Exclusive Discounts",
    description: "Receive special pricing and offers available only to whitelist members"
  },
  {
    id: 3,
    icon: support,
    title: "Testing Opportunities",
    description: "Help shape the future of AI travel technology by providing feedback on new features"
  },
  {
    id: 4,
    icon: coordination,
    title: "Priority Support",
    description: "Get direct access to our dedicated support team for any questions or assistance"
  }
];

const WaitlistSection = () => {
  return (
    <div className='my-20 '>
      
      {/* Header Section */}
      <div className="text-center mb-16 mx-auto">
        <h2 className=" mb-6">
          Experience the Future of Travel Planning. Secure Your Spot.
        </h2>
        <div className="space-y-2">
          <p className="subheading-paragprah text-[#FFFFFFCC] md:w-[70%] text-center mx-auto">
            Join thousands of travelers who are ready to experience AI-powered trip planning.
       
            Get early access, exclusive benefits, and be part of the travel revolution.
          
            This is your chance to be among the first to simplify your adventures.
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
                Join Waitlist Now
              </button>
     </Link>
      </div>
    </div>
  )
}

export default WaitlistSection;