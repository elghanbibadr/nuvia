import React from 'react'
import ConversationalTipCard from './componenets/ConversationalTipCard'
import DynamicPriceMonitoring from './componenets/DynamicPriceMonitoring'
import TravelFeaturesSection from './componenets/TravelFeaturesSection'
import WaitlistSection from './componenets/WaitlistSection'
import Footer from './componenets/Footer'
import HeaderNavigation from './componenets/HeaderNavigation'
import { NoviaHero } from './componenets/NaviaHero'
import Hero from './componenets/Hero'
import ProblemsAndSolutions from './componenets/ProblemsAndSolutions'


const page = () => {
  return (
  <>
   {/* <HeaderNavigation/> */}
   <Hero/>
   <ProblemsAndSolutions/>
  </>
  )
}

export default page