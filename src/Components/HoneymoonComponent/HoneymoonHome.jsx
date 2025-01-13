import React from 'react'
import HoneymoonHero from './HoneymoonHero'
import HoneymoonPackage from './HoneymoonPackage'
import Honeymoonguide from './Honeymoonguide'
import Basicdetails from './Basicdetails'

const HoneymoonHome = () => {
  return (
    <div>
      <HoneymoonHero/>
      <Basicdetails/>
      <HoneymoonPackage/>
      {/* <Honeymoonguide/> */}
    </div>
  )
}

export default HoneymoonHome
