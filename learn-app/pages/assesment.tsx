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
    className='flex justify-center mt-4  xl:px-16 lg:px-10 '>
      <div>
        dd
      </div>
        <div className='xl:w-8/12 lg:w-9/12 w-11/12 bg-sky-300'>
        <div className='font-header6 font-extralight  text-stone-300 ' >

        <AnimatePresence >
          {!isCreateQuestionsOpen &&
          <motion.div 
          // className='border'
          transition={{
            duration:0.6,
            type:'tween',   
            ease:'easeIn'   
          }}


      

         exit=  {{
            scale:1.6,
            x:-570,
            y:-480,
            opacity:0.5
             }}

             initial={{
              x:0,
              y:0
             }}
             >
            <motion.div 
            initial='hidden'
            animate='visible'
            variants={Item}
          //         initial={{
          //           scale:0.3,
          //              x:300,
          //             y:180,
          //             opacity:0.5,
          //             display:'none'
          //         }}

          // animate={ {
          //   scale: 1,
          //   x:0,
          //   y:0,
          //   // backgroundColor:'',
          //   opacity:1,
          //   color:'#d6d3d1',
          //   display:'block'
          // }}

          // transition={!isCreateQuestionsOpen? {
          //   duration:0.6,
          //   type:'spring',
          //   stiffness:50,
          //   delay:0.63
        
            
          // }:{
          //   // duration:0.4,
          //   // delay:0.8
          //   // delay: 0.4 
          // }}
            
            >
              <motion.div 

              className=''
              variants={item} >
                <QuestionsHome/>
              </motion.div> 
            </motion.div>
         
         </motion.div>         
          }
          </AnimatePresence>


<AnimatePresence>

          
{isCreateQuestionsOpen &&

<motion.div

style={{
  perspective:'200px'
}}
className='slant'
 exit=  {{
  scale:1.3,
            x:-770,
            y:-559,
            opacity:0.3,
  // display:'absolute'
  
   }}

   initial={{
    x:0,
    y:0
   }}

   transition={{
    duration:0.6,
    type:'tween',
    ease:'easeIn'  
  }}


>
  <motion.div
        initial={{
          scale:0.2,
x:300,
y:180,
// backgroundColor:'gray',
opacity:0.5,
color:'#92400e',
display:'none'
// backgroundColor:'#d6d3d1'
        }}

animate={ {
  scale: 1,
  x:0,
  y:0,
  // backgroundColor:'',
  opacity:1,
  color:'#d6d3d1',
  display:'block',
  perspective:1
}}

transition={ {
  duration:0.4,
  type:'spring',
  stiffness:50,
  delay:0.63,
  // delayChildren:0.3

  
}}

className='wrapper'
  >
  <motion.div className='inner'



  initial={{
    opacity:0.5
  }}
  animate={{
    opacity:1
  }}
  >
      <CreateQuestions/> 
  </motion.div>
  </motion.div>

</motion.div>
 
}
      </AnimatePresence>
  
        {/* <QuestionsHome/> */}
        
        </div>
     
        {/* <div style={{
          // backgroundColor:'#BFD5ED'
        }}>
             assesment
        </div> */}
       
    </div>
    <div>
        dd
      </div>
    </div>
  
  )
}

export default assesment