import Image from 'next/image'
import React from 'react'
import roadmapMobile from "@/public/roadmapMobile.svg"
import roadmapDesktop from "@/public/roadmpaDesktop.svg"
import roadmapDesktopestonian from "@/public/roadmapDesktopestonian.svg"
import roadmapMobileestonian from "@/public/roadmapMobileestonian.svg"

import { useLocale } from 'next-intl'






const Roadmap = () => {
      const locale = useLocale(); // This gets the current locale (en or et)
  
  return (
    <div id='roadmap' className='my-20 '>

  { locale==="es" ? <>
   <Image height={400} width={400} src={roadmapMobileestonian}  className="md:hidden" alt='' />
   <Image height={900} width={900} src={roadmapDesktopestonian}  className="hidden w-full md:block" alt='' />
  </>
   : <>
     <Image height={400} width={400} src={roadmapMobile}  className="md:hidden" alt='' />
   <Image height={900} width={900} src={roadmapDesktop}  className="hidden w-full md:block" alt='' />
   </>
   }


  


    </div>
  )
}

export default Roadmap