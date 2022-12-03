import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext'

import { Iassesmentcontext } from '../../types/context/assesmentcontext'
import { DuttonSmall } from './dutton'
import Text from './Text'


const Mavbar = () => {
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen,    isQuestionHome, setisQuestionHome, setisQuestionList} = React.useContext(AssesmentContext) as Iassesmentcontext

  return (
    <div
    style={{
      overflow:'hidden'
  }}
    className='relative xl:w-9/12 lg:w-9/12 w-11/12  z-40 shadow' >


<div 
            style={{
              // overflow:'hidden'
                // border:'solid 4px #89ABD0',
           
            //   backgroundImage: `url(../image/nylon.png)`,
            //   backgroundSize: 'cover',
            //  background:'radial-gradient(circle, rgba(235,225,225,1) 18%, rgba(215,218,222,1) 26%, rgba(206,210,217,1) 39%, rgba(235,237,241,1) 49%, rgba(204,204,214,0.9876283276982668) 64%, rgba(167,159,159,1) 90%)'
            }}
            className='text-lg flex   justify-between px-3 py-1   font-header10 text-gray-300 z-30 bg-transparent rounded  absolute w-full '>
             
                <Text
                isAnimate={isQuestionHome}
                />
    
              <div className='' >courses/createCourse</div>

              <DuttonSmall
              icon={<div className='text-gray-300 '> 
            <svg className='fill-current text-gray-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
              </div>}
              handleClick={()=>{
                setisCreateQuestionsOpen(false)
                setisQuestionList(false)
                setisQuestionHome(true)}}
              color='gray'
              />

              {/* <div onClick={()=>{setisCreateQuestionsOpen(false)}} className='font-header8 text-2xl flex cursor-pointer items-center' > [
                <span className='font-header9 mx-3 text-base bg-gray-300 text-black px-1' >X</span>
                ]</div> */}
              </div>

            <div
            style={{opacity:'30%',
            // overflow:'hidden'
          }}
            className=' text-xl flex justify-between px-3  rounded grid  absolute w-full py-1 z-20 text-2xl text-transparent'> 
                  {/* [c] */}[c]
            </div>


            <div
            style={{opacity:'100',
            // overflow:'hidden'
          }}
            className=' text-xl flex justify-between px-3 rounded relative w-full py-1 grid  z-10 text-2xl text-transparent vortex'> 
                  {/* [c] */}[c]
            </div>

           
            </div>

)
}

export default Mavbar