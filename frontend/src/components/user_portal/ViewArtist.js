import React from 'react'
import { Link } from 'react-router-dom'

const ViewArtist = () => {
  return (
    <div className='w-3/12  p-5'>
      <div className='w-full  '>
      <div className="w-9/12 flex justify-center p-1 items-start -ml-1   ">
         <Link to={"/"}>  <span className="text-4xl text-[#e80c14] font-semibold">Albumify</span></Link>
     </div>
      </div>
      
    </div>
  )
}

export default ViewArtist
