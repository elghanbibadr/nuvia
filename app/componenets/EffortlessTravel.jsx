import React from 'react'
import Image from 'next/image'
import inter from "@/public/intersaction.svg"
import IternaryCard from './IternaryCard'
import RecommandationCard from './RecommandationCard'
import Card from './Card'
import DynamicPriceMonitoring from './DynamicPriceMonitoring'
import ConversationalTipCard from './ConversationalTipCard'
import intersactionmobile from "@/public/intersactionmobile.svg"

const EffortlessTravel = () => {
  return (
   <div className='w-full my-20 '>
     <div className=' mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4'>
       
       {/* LEFT COLUMN - Takes 3 columns */}
       <div className='lg:col-span-3 flex flex-col gap-4'>
         <IternaryCard/>
         <RecommandationCard/>
         <Card className="dark-gradient2">
           <div className='bg-[#162538] h-full rounded-full p-3'>
             <div className='one-tap-buy-gradient p-3 rounded-full flex items-center justify-center'>
               <h6 className='text-white text-sm md:text-xl'>One Tap Buy</h6>
             </div>
           </div>
         </Card>
       </div>
      
       {/* CENTER COLUMN - Takes 6 columns */}
     <div className='lg:col-span-6 flex items-stretch justify-center'>
  {/* Mobile version */}
  <Image
    src="/intersactionmobile.svg"
    alt='NUVIA Integration Diagram'
    width={416}
    height={641}
    className='w-full h-auto object-contain md:hidden'
  />
  
  {/* Desktop version */}
  <Image 
    src="/intersaction.svg"
    alt='NUVIA Integration Diagram'
    width={416}
    height={641}
    className='hidden md:block w-full h-full object-fill'
  />
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
  )
}

export default EffortlessTravel