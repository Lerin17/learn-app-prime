import { NextPage } from 'next'
import React from 'react'
// import CreateQuestions from '../components/assesment/QuestionsHome'
import QuestionsHome from '../components/assesment/QuestionsHome'
import CreateQuestions from '../components/assesment/CreateQuestions'
import { AssesmentContext } from '../context/AssesmentContext'

import { Iassesmentcontext } from '../types/context/assesmentcontext'
import { AnimatePresence, motion, usePresence } from 'framer-motion'
import zIndex from '@mui/material/styles/zIndex'
import Rawinput from '../components/assesment/Rawinput'



const assesment:NextPage = () => {

  const {isCreateQuestionsOpen, setisCreateQuestionsOpen} = React.useContext(AssesmentContext) as Iassesmentcontext

  console.log(isCreateQuestionsOpen, 'dam')

  // React.useEffect(() => {
  //   if(!isCreateQuestionsOpen){
  //     setTimeout(() => {
  //     setisCreateQuestionsOpen(true)
  //     }, 300);
  //   }
 
  // }, [isCreateQuestionsOpen]);

  const Item = {
    visible: {  scale: 1,
      x:0,
      y:0,
      opacity:1,
      // backgroundColor:'',
      // opacity:1,
      color:'#d6d3d1',
      display:'block',
      // skewX:0,
      perspective:'',
    
    
      transition:{
        duration:0.6,
        type:'spring',
        stiffness:50,
        delay:0.63,
        delayChildren: 0.3
    
       }},


    hidden: { 
      // scale:0.3,
      x:300,
     y:180,
     opacity:0.5,
     display:'none',
    //  skewX:-30,
     perspective:100
     },

  }
  
  const item = {
    visible: { opacity: 1, },
    hidden: { opacity: 0.5 },
  }

  return (
    <div
    style={{
      // backgroundColor:'#DD9D29'
    }}
    // xl:px-16 lg:px-10 
    className='flex mt-4 relative '>
     
      <div
      style={{
        height:400
        // top:-38
      }}
      className='-top-24  relative bg-amber-600  z-10 w-2/12 scale-125 flex'>
        
{!isCreateQuestionsOpen && <div 
style={{
  left:-450
}}
className={`${!isCreateQuestionsOpen?'wrapper':'hidden'} absolute  top-24 `} >
    <div className='inner  font-header6 text-stone-300 '>
      <div className='innerx' >
        <QuestionsHome/>
      </div>
    </div>
  </div>
  }


  {/* <div className=' h-full  z-10' >
s
  </div> */}
      </div>

        <div style={{
          // width:900
        }} className={`${!isCreateQuestionsOpen?'center block':'hidden'} w-8/12 justify-self-center   h-full `}>
        <div className={`font-header6 ${!isCreateQuestionsOpen?'':''} font-extralight  text-stone-300 w-full`} >


  <div className='flex justify-center' >

  <QuestionsHome/>
  </div>



        {/* <QuestionsHome/> */}
        
        </div>
    
       
    </div>

    <div>
    <div className='z-20 relative w-3/12' >
{isCreateQuestionsOpen && <div className={`${isCreateQuestionsOpen?'wrapper':'hidden'} `} >
    <div className='inner innerx '>
    <CreateQuestions/>
    </div>
  </div>

  }
</div>
      </div>
    </div>
  
  )
}

export default assesment