import React from 'react'
import Card from './Card'
import RecommandationIcon from "@/public/RecommandationIcon.svg"
import Image from 'next/image'
const RecommandationCard = () => {
  return (
    <Card >
      <h4>Smart Itinerary Optimization</h4>
      <p className='text-white/70 text-center font-normal text-[15px] leading-normal'>
      Our AI finds the best schedule and route in real time for efficiency and enjoyment
      </p>
      
      <Image className='mx-auto' src={RecommandationIcon} height={300} width={300} alt=''  />
    </Card>
  )
}

export default RecommandationCard