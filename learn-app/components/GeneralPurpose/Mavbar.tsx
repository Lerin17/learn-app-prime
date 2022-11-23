import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext'

import { Iassesmentcontext } from '../../types/context/assesmentcontext'

const Mavbar = () => {
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen} = React.useContext(AssesmentContext) as Iassesmentcontext


  return (
    
        <div className='relative xl:w-8/12 lg:w-9/12 w-11/12' >
                {/* <div
                style={{opacity:'20%'}}
                className=' text-xl flex justify-between px-3  rounded   absolute w-full py-1  z-10 text-2xl text-transparent border'> nylon2
                      [c]
                </div> */}
                <div 
                style={{
                
                    // border:'solid 4px #89ABD0',
               
                //   backgroundImage: `url(../image/nylon.png)`,
                //   backgroundSize: 'cover',
                //  background:'radial-gradient(circle, rgba(235,225,225,1) 18%, rgba(215,218,222,1) 26%, rgba(206,210,217,1) 39%, rgba(235,237,241,1) 49%, rgba(204,204,214,0.9876283276982668) 64%, rgba(167,159,159,1) 90%)'
                }}
                className='text-xl flex  border justify-between px-3 py-1 rounded  font-header9 text-gray-900 z-20'>
                  <div>courses/createCourse</div>

                  <div onClick={()=>{setisCreateQuestionsOpen(false)}} className='font-header8 text-2xl flex items-center cursor-pointer' >[
                    <span className='font-header9 px-4 text-base' >X</span>
                    ]</div>

                 
                  
                  
                  
                  </div>
                </div>
 
  )
}

export default Mavbar