import React from 'react'
import Card from './Card'
import Image from 'next/image'
import priceMonitoring from "@/public/priceMonitoring.svg"

const DynamicPriceMonitoring = () => {
  return (
    <Card >
      <h4>Dynamic Price Monitoring</h4>
      <p className='text-white/70 text-center font-normal text-[15px] leading-normal'>
 Price tracking ensures the best deals with alerts for drops and optimal booking times
      </p>
      
      <Image className='mx-auto mt-10' src={priceMonitoring} height={300} width={300} alt=''  />
    </Card>
  )
}

export default DynamicPriceMonitoring