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

  const RenderPerspectiveLeft = () => {
    if(isCreateQuestionsOpen){
      return (
        <motion.div
        initial={{
          opacity:100
        }}
        animate={{
          opacity:0,
          display:'none'
        }}
        transition={{
          delay:0.96
        }}
        >
                  <motion.div
        initial={{
          overflow:'hidden',
          marginLeft:'0%'
        }}
        animate={{
          overflow:'hidden',
          marginLeft:'100%'
        }}
        transition={{
          duration:0.96,
          type:'tween',
          ease:'easeInOut'
        }}
        style={{
          // width:770
          // transform: 'scale(1.45)',
        }}
        className='' >
         <CreateQuestions/>
         
          </motion.div>
        </motion.div>
    
      )
    }else{
      return (
        <motion.div
        initial={{
          opacity:100
        }}
        animate={{
          opacity:0,
          display:'none'
        }}
        transition={{
          delay:0.96
        }}
        >
                  <motion.div
        initial={{
          overflow:'hidden',
          marginLeft:'0%'
        }}
        animate={{
          overflow:'hidden',
          marginLeft:'100%'
        }}
        transition={{
          duration:0.96,
          type:'tween',
          ease:'easeInOut'
        }}
        style={{
          // width:770
          // transform: 'scale(1.45)',
        }}
        className='' >
          <QuestionsHome/>
         
           </motion.div>
        </motion.div>
    
      )
    }
  }

  const RenderComponentCon = () => {
    if(isCreateQuestionsOpen){
      return <motion.div
      initial={{
        transform: 'translateX(-100%)',
        overflow:'auto'
      }} 
      animate={ {
        transform: 'translateX(0%)',
        overflow:'auto'
      }}
      transition={{
        duration:0.93,
    type:'tween',
    ease:'easeInOut'
      }}
      className=' w-full' >
        <CreateQuestions/>
      </motion.div>
    }else{
      return   <motion.div
      initial={{
        transform: 'translateX(-100%)',
        overflow:'auto'
      }} 
      animate={ {
        transform: 'translateX(0%)',
        overflow:'auto'
      }}
      transition={{
        duration:0.93,
    type:'tween',
    ease:'easeInOut'
      }}
      className=' w-full' >
        <QuestionsHome/>
      </motion.div>
    }
  }

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
    className='flex mt-4 justify-center relative'>
     
      <div
      style={{
        height:570,
        top: '-95px'

      }}
      className='relative z-10 w-3/12 bg-amber-800 flex '>
        
 <div 
style={{
  //  textShadow:'-moz-initial',
  left: isCreateQuestionsOpen?-208: -195,
  top:'96px',
  // right:200,
  transform: isCreateQuestionsOpen?'scale(1.46)': 'scale(1.45)',
}}
className={`${!isCreateQuestionsOpen?'absolute':'absolute'}   z-10 wrapper `} >
    <div className='inner  font-header6 text-stone-300 '>
      <RenderPerspectiveLeft/>
      {/* <motion.div
      initial={{
        overflow:'hidden',
        marginLeft:'0%'
      }}
      animate={{
        overflow:'hidden',
        marginLeft:'100%'
      }}
      transition={{
        duration:0.96,
        type:'tween',
        ease:'easeInOut'
      }}
      style={{
        // width:770
        // transform: 'scale(1.45)',
      }}
      className='' >
        <QuestionsHome/>
       
      </motion.div> */}
    </div>
  </div>


      </div>

      <div style={{
          // width:900
        }} className={`${!isCreateQuestionsOpen?' block':''}  flex   border-r w-6/12 h-full `}>
        <div className={`font-header6 justify-self-center  ${!isCreateQuestionsOpen?'':''} font-extralight  text-stone-300  `} >
        <RenderComponentCon/>
        </div>   
    </div>

    <div className='z-20 relative w-3/12  '>
    <div  >
        x
</div>
      </div>
    </div>
  
  )
}

export default assesment