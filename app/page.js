import React from 'react'
import ConversationalTipCard from './componenets/ConversationalTipCard'
import DynamicPriceMonitoring from './componenets/DynamicPriceMonitoring'
import TravelFeaturesSection from './componenets/TravelFeaturesSection'
import WaitlistSection from './componenets/WaitlistSection'
import Footer from './componenets/Footer'
import HeaderNavigation from './componenets/HeaderNavigation'
import { NoviaHero } from './componenets/NaviaHero'
import Hero from './componenets/Hero'
import ProblemsAndSolutions from './componenets/ProblemsAndSolutions'
import Image from 'next/image'
import inter from "@/public/intersaction.svg"
import IternaryCard from './componenets/IternaryCard'
import RecommandationCard from './componenets/RecommandationCard'
import Card from './componenets/Card'

const page = () => {
  return (
  <>
   {/* <HeaderNavigation/> */}
   <Hero/>
   <ProblemsAndSolutions/>
   
   {/* Bento Grid Layout */}
   <div className='w-full px-4 py-8'>
     <div className='max-w-[1792px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-min'>
       
       {/* LEFT COLUMN - Takes 3 columns */}
       <div className='lg:col-span-3 flex flex-col gap-4'>
         <IternaryCard/>
         <RecommandationCard/>
         <Card className="dark-gradient2">
           <div className='bg-[#162538] rounded-full p-3'>
             <div className='one-tap-buy-gradient p-3 rounded-full flex items-center justify-center'>
               <h6 className='text-white text-sm md:text-xl'>One Tap Buy</h6>
             </div>
           </div>
         </Card>
       </div>
      
       {/* CENTER COLUMN - Takes 6 columns (larger) */}
       <div className='lg:col-span-6 flex items-center justify-center min-h-[600px]'>
         <div className='w-full h-full flex items-center justify-center'>
           <Image 
             className='w-full h-auto max-w-full' 
             src={inter} 
             width={800} 
             height={800} 
             alt='NUVIA Integration Diagram'
             priority
           />
         </div>
       </div>
      
       {/* RIGHT COLUMN - Takes 3 columns */}
       <div className='lg:col-span-3 flex flex-col gap-4'>
         <Card className="dark-gradient2">
           <div className='bg-[#162538] flex items-center justify-between rounded-full p-2'>
             <div className='pl-6'>
               <span className='text-white text-sm md:text-lg'>Batch</span>
             </div>
             <div className='green-gradient px-8 shadow-[0_0_10px_2px_rgba(121,202,56,0.3)] py-3 rounded-full'>
               <h6 className='text-white text-sm md:text-lg'>Realtime</h6>
             </div>
           </div>
         </Card>
         <DynamicPriceMonitoring/>
         <ConversationalTipCard/>
       </div>
       
     </div>
   </div>
  </>
  )
}

export default page