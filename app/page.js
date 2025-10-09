import React from 'react'

import Hero from './componenets/Hero'
import ProblemsAndSolutions from './componenets/ProblemsAndSolutions'
import EffortlessTravel from './componenets/EffortlessTravel'
import TravelFeaturesSection from './componenets/TravelFeaturesSection'
import Roadmap from './componenets/Roadmap'
import WaitlistSection from './componenets/WaitlistSection'
import Footer from './componenets/Footer'


const page = () => {
  return (
  <>
   <Hero/>
   <div className='p-3 md:p-4 max-w-[1300px] mx-auto'>
     <ProblemsAndSolutions/>
     <EffortlessTravel/>
     <TravelFeaturesSection/>
     <Roadmap/>
     <WaitlistSection/>
     <Footer/>
   </div>
  </>
  )
}

export default page