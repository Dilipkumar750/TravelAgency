import React from 'react'
import Hero from './Hero'
import Top from './Top'
import Offers from './Offers'
import Type from './Type'
import Travel from './Travel'
import Search from './Search'
import Connection from './Connection'
import Test from './Test'
import Visafree from './visafree'
import TestimonialSlider from './TestimonialSlider'
import TestimonialCarousel from './Test'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Top/>
      <Offers/>
      <Type/>
      <Visafree/>
      <Travel/>
      {/* <Test/> */}
      <TestimonialSlider/>
      <Connection/>
      {/* <Search/> */}
    </div>
  )
}

export default Home
