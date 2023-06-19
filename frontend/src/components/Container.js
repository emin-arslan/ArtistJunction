 import React from 'react'
import HomePageLeft from './HomePageLeft'
import HomePageRight from './HomePageRight'

const Container = () => {
  return (
    <div className='h-5/6 w-full flex sm:block sm:mt-5'>
      <HomePageLeft/>
      <HomePageRight/>
    </div>
  )
}

export default Container
