import React from 'react'

import VideoPlayer from '../components/liveClasses/VideoPlayer'
import VideoOptions from '../components/liveClasses/VideoOptions'
// import Options from '../components/liveClasses/Options'

 const liveclasses = () => {
  return (
    <div className='text-white h-full relative' >
      {/* liveclasses */}

      <div  className='px-10 h-full relative flex flex-col' >
        <div className='relative' >
         <VideoPlayer/>
        </div>
  
      </div>
    </div>
  )
}

export default liveclasses