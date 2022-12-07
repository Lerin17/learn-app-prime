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
import QuestionsList from '../components/assesment/QuestionsList'



const assesment:NextPage = () => {

  const {isCreateQuestionsOpen, setisCreateQuestionsOpen,isQuestionList,    isQuestionHome} = React.useContext(AssesmentContext) as Iassesmentcontext

  console.log(isCreateQuestionsOpen, 'dam')

  // React.useEffect(() => {
  //   if(!isCreateQuestionsOpen){
  //     setTimeout(() => {
  //     setisCreateQuestionsOpen(true)
  //     }, 300);
  //   }
 
  // }, [isCreateQuestionsOpen]);

  return (
    <div
    style={{
      // backgroundColor:'#DD9D29'
    }}
    className='flex justify-center mt-4  xl:px-16 lg:px-10 '>
        <div className='xl:w-8/12 lg:w-9/12 w-11/12 '>
        <div className='font-header6 font-extralight  text-stone-300 ' >

        <AnimatePresence >
          {isQuestionHome &&
          <motion.div 
          // className='border'
          transition={{
            duration:0.5,
            type:'tween',   
            ease:'easeIn',
            delay:0.2
          }}


      

         exit=  {{
            scale:1.6,
            // border:'solid brown 1px',
            // marginLeft:'100px',
            // zIndex:'-1',
            x:-570,
            y:-480,
            opacity:0.1
             }}

             initial={{
              x:0,
              y:0
             }}
             >
            <motion.div 
                  initial={{
                    scale:0.3,
                       x:300,
          y:180,
          // x:500,
          // y:300,
          opacity:0.5,
          // color:'#92400e',
          display:'none'
          // backgroundColor:'#d6d3d1'
                  }}

          animate={{
            scale: 1,
            x:0,
            y:0,
            // backgroundColor:'',
            opacity:1,
            color:'#d6d3d1',
            display:'block'
          }}

          transition={isQuestionHome? {
            duration:0.6,
            type:'spring',
            stiffness:50,
            delay:0.7  
          }:{
            // duration:0.4,
            // delay:0.8
            // delay: 0.4 
          }}
            
            >
               <QuestionsHome/>
            </motion.div>
         
         </motion.div>         
          }
          </AnimatePresence>


<AnimatePresence>

          
{isCreateQuestionsOpen &&

<motion.div className=''
 exit=  {{
  scale:1.3,
            x:-670,
            y:-459,
            opacity:0.1,
  // display:'absolute'
  
   }}

   initial={{
    x:0,
    y:0
   }}

   transition={{
    duration:0.5,
    type:'tween',
    ease:'easeIn',
    delay:0.2
  }}


>


  <motion.div
        initial={{
          scale:0.2,
x:300,
y:180,
// backgroundColor:'gray',
opacity:0.1,
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
  display:'block'
}}

transition={ {
  duration:0.6,
  type:'spring',
  stiffness:50,
  delay:0.7

  
}}
  
  >
  <CreateQuestions/> 
  {/* <Rawinput/> */}
  </motion.div>

</motion.div>
 
}




</AnimatePresence>


<AnimatePresence>

          
{isQuestionList &&

<motion.div className=''
 exit=  {{
  scale:1.3,
            x:-670,
            y:-459,
            opacity:0.1,
  // display:'absolute'
  
   }}

   initial={{
    x:0,
    y:0
   }}

   transition={{
    duration:0.5,
    type:'tween',
    ease:'easeIn',
    delay:0.2
  }}


>


  <motion.div
        initial={{
          scale:0.2,
x:300,
y:180,
// backgroundColor:'gray',
opacity:0.1,
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
  display:'block'
}}

transition={ {
  duration:0.6,
  type:'spring',
  stiffness:50,
  delay:0.7

  
}}
  
  >
  <QuestionsList/> 
  {/* <Rawinput/> */}
  </motion.div>

</motion.div>
 
}

</AnimatePresence>
        
        </div>
     
   
       
    </div>
    </div>
  
  )
}

export default assesment