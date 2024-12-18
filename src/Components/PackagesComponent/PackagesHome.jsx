import React from 'react'
import PackagesHero from './PackagesHero'
import PackageList from './PackageList'
import RecentView from './RecentView'
import Popular from './Popular'

const PackagesHome = () => {
  return (
    <div>
      <PackagesHero/>
      <PackageList/>
      <Popular/>
      <RecentView/>
    </div>
  )
}

export default PackagesHome
