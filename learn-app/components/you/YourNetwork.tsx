import React from 'react'
import { DuttonAlt } from '../GeneralPurpose/dutton'

const YourNetwork = () => {
  return (
    <div className='flex justify-center font-header12'>
      <div 
      style={{
        height:500
      }}
      className='w-8/12 relative'>
        <div className='bg-amber-900 absolute w-full h-full  py-2 opacity-50 text-transparent'>x</div>

        <div className='relative z-10'>
<div>
          <DuttonAlt
          icon={'Copy Link'}
          handleClick={()=>console.log('jack ')}
          />
        </div>
        <div className=' flex '>
          <div 
          style={{
            opacity:'60%',
            height:400
          }}
          className='text-7xl p-4 z-10 w-full h-full opacity-50 text-transparent border-b border-l border-black  absolute bg-amber-700'>
          Y
          </div>

          
          <div className='z-20 p-4 text-7xl text-stone-300 relative'>
          You Are Connected To....
          <div>
            Nobody
          </div>
          </div>

          <div>
          jack
          </div>
          <div>
          jack
          </div>
          <div>
          jack
          </div>
            
        </div>
        YourNetwork
      </div>


        </div>
       
    </div>
  )
}

export default YourNetwork