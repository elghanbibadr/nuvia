import Image from 'next/image'
import React from 'react'
import roadmapMobile from "@/public/roadmapMobile.svg"
import roadmapDesktop from "@/public/roadmpaDesktop.svg"



const Roadmap = () => {
  return (
    <div className='my-20 '>
   <Image height={400} width={400} src={roadmapMobile}  className="md:hidden" alt='' />
   <Image height={900} width={900} src={roadmapDesktop}  className="hidden w-full md:block" alt='' />


  


    </div>
  )
}

export default Roadmap