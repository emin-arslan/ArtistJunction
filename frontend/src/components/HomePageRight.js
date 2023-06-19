import React from 'react'
import albumPhoto from "../assets/albums.jpg"
const HomePageRight = () => {
  return (
    <div className='w-7/12 sm:w-full  p-2 pl-4 sm:centered-items xl:w-6/12 lg:w-6/12 md:w-6/12 '>
      <img src={albumPhoto} alt='albums' className='w-fit sm:w-9/12 '></img>
    </div>
  )
}

export default HomePageRight
