import React from 'react'
import Card from './Card'
import ConversationalTip from "@/public/ConversationalTip.svg"
import Image from 'next/image'
const ConversationalTipCard = () => {
  return (
      <Card  className="dark-gradient2" >
      <h4>Conversational Trip Planning</h4>
      <p className='text-white/70 text-center font-normal text-[15px] leading-normal'>
     Describe your dream trip, and our AI instantly builds the perfect itinerary
      </p>
      
      <Image className='mx-auto' src={ConversationalTip} height={300} width={300} alt=''  />
    </Card>
  )
}

export default ConversationalTipCard