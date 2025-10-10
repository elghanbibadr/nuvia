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
   <div className='w-full my-20 px-4'>
     <div className='max-w-[1792px] mx-auto md:grid md:grid-cols-4 grid-rows- gap-4 items-stretch'>
       
       {/* LEFT COLUMN - 3 cards stacked */}
       <div className='w-full  flex flex-col gap-4 flex-shrink-0'>
         <div className='flex-1  '>
           <IternaryCard className=""/>
         </div>
         
         <div className='flex-1'>
           <RecommandationCard className="h-full"/>
         </div>
         
         <div className='flex-1'>
           <Card className="dark-gradient2 h-full flex items-center justify-center">
             <div className='bg-[#162538] w-full rounded-full p-3'>
               <div className='one-tap-buy-gradient p-3 rounded-full flex items-center justify-center'>
                 <h6 className='text-white text-sm md:text-xl'>One Tap Buy</h6>
               </div>
             </div>
           </Card>
         </div>
       </div>
      
       {/* CENTER COLUMN - SVG */}
        <div className='flex-grow flex items-center col-span-2 justify-center my-2 md:my-0 md:min-h-[700px]'>
         <Image 
           src="/intersactionmobile.svg"
           alt='NUVIA Integration Diagram'
           width={416}
           height={641}
           className='w-full h-auto object-contain md:hidden'
         />
         
         <Image 
           src="/intersaction.svg"
           alt='NUVIA Integration Diagram'
           width={416}
           height={641}
           className='hidden md:block w-auto h-full object-contain'
         />
       </div>
      
       {/* RIGHT COLUMN - 3 cards stacked */}
       <div className='w-full  flex flex-col gap-4 flex-shrink-0'>
         <div className='flex-1'>
           <Card className="dark-gradient2 h-[100px] flex items-center">
             <div className='bg-[#162538] w-full flex items-center justify-between rounded-full p-2'>
               <div className='pl-6'>
                 <span className='text-white text-sm md:text-lg'>Batch</span>
               </div>
               <div className='green-gradient px-8 shadow-[0_0_10px_2px_rgba(121,202,56,0.3)] py-3 rounded-full'>
                 <h6 className='text-white text-sm md:text-lg'>Realtime</h6>
               </div>
             </div>
           </Card>
         </div>
         
         <div className='flex-1'>
           <DynamicPriceMonitoring className="h-full"/>
         </div>
         
         <div className='flex-1'>
           <ConversationalTipCard className="h-full"/>
         </div>
       </div>
       
     </div>
   </div>
  )
}

export default EffortlessTravel