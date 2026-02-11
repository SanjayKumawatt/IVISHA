import React from 'react'
import Hero from '../Components/Hero'
import Philosophy from '../Components/Philoshopy'
import WhatWeEngineer from '../Components/WhatWeEngineer'
import WhyWorkWithUs from '../Components/WhyWorkWithUs'
import AboutCompany from '../Components/AboutCompany'
import ServicesCapabilities from '../Components/ServiceCapabilites'
import StrategicOutlook from '../Components/StragicOutlook'
import CTA from '../Components/CTA'

const Home = () => {
  return (
    <div>
        <Hero/>
        
        <Philosophy/>
        <AboutCompany/>
        <WhatWeEngineer/>
        <ServicesCapabilities/>
        <WhyWorkWithUs/>
        <StrategicOutlook/>
        <CTA/>
    </div>
  )
}

export default Home