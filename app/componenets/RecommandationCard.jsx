import React from 'react'
import Card from './Card'
import RecommandationIcon from "@/public/RecommandationIcon.svg"
import Image from 'next/image'
const RecommandationCard = () => {
  return (
    <Card  className="dark-gradient2">
      <h4>Personalized Recommendations</h4>
      <p className='text-white/70 text-center font-normal text-[15px] leading-normal'>
Our AI adapts to your preferences, giving ever more accurate, delightful suggestions.      </p>
      
      <Image className='mx-auto' src={RecommandationIcon} height={300} width={300} alt=''  />
    </Card>
  )
}

export default RecommandationCard