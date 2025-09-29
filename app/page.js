import React from 'react'

import Hero from './componenets/Hero'
import ProblemsAndSolutions from './componenets/ProblemsAndSolutions'
import EffortlessTravel from './componenets/EffortlessTravel'
import TravelFeaturesSection from './componenets/TravelFeaturesSection'
import Roadmap from './componenets/Roadmap'


const page = () => {
  return (
  <>
   {/* <HeaderNavigation/> */}
   <Hero/>
   <ProblemsAndSolutions/>
   <EffortlessTravel/>
   <TravelFeaturesSection/>
   <Roadmap/>
  </>
  )
}

export default page