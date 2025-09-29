import React from 'react'
import Card from './Card'
import Image from 'next/image'
import iternaryIcon from "@/public/iternary.svg"
const IternaryCard = () => {
  return (
       <Card className="dark-gradient2" >
      <h4>Smart Itinerary Optimization</h4>
      <p className='text-white/70 text-center font-normal text-[15px] leading-normal'>
      Our AI finds the best schedule and route in real time for efficiency and enjoyment
      </p>
      <Image className='mx-auto' src={iternaryIcon} height={300} width={300} alt=''  />
    </Card>
  )
}

export default IternaryCard