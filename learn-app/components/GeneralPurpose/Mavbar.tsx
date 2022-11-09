import React from 'react'

const Mavbar = () => {
  return (
    
        <div className='relative xl:w-7/12 lg:w-9/12 w-11/12' >
                <div
                style={{opacity:'20%'}}
                className='nylon2 text-xl flex justify-between px-3 py-2 rounded   absolute w-full  z-10 text-2xl text-transparent'>
                      [c]
                </div>
                <div 
                style={{
                
                    // border:'solid 4px #89ABD0',
               
                  // backgroundImage: `url(../image/nylon.png)`,
                  backgroundSize: 'cover',
                 background:'radial-gradient(circle, rgba(235,225,225,1) 18%, rgba(215,218,222,1) 26%, rgba(206,210,217,1) 39%, rgba(235,237,241,1) 49%, rgba(204,204,214,0.9876283276982668) 64%, rgba(167,159,159,1) 90%)'
                }}
                className='text-xl flex justify-between px-3 py-2 rounded  font-header9 border-4 border-black'>
                  <div>courses/createCourse</div>

                  <div className='font-header8 text-2xl flex items-center' >[
                    <span className='font-header9 px-4 text-base' >X</span>
                    ]</div>

                 
                  
                  
                  
                  </div>
                </div>
 
  )
}

export default Mavbar