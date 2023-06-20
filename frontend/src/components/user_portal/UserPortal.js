import React from 'react'
import ViewArtist from './ViewArtist'
import SharePosts from './SharePosts'
import RecomendedArea from './RecomendedArea'

const ShareAndViewPosts = () => {
  return (
    <div className='w-full h-5/6 flex  '>
      <ViewArtist/>
      <SharePosts/>
      <RecomendedArea/>
    </div>
  )
}

export default ShareAndViewPosts
