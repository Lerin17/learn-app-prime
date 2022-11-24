import { NextPage } from 'next'
import React from 'react'
// import CreateQuestions from '../components/assesment/QuestionsHome'
import QuestionsHome from '../components/assesment/QuestionsHome'
import CreateQuestions from '../components/assesment/CreateQuestions'
import { AssesmentContext } from '../context/AssesmentContext'

import { Iassesmentcontext } from '../types/context/assesmentcontext'
import { AnimatePresence, motion } from 'framer-motion'
import zIndex from '@mui/material/styles/zIndex'



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

  return (
    <div
    style={{
      // backgroundColor:'#DD9D29'
    }}
    className='flex justify-center mt-4  xl:px-16 lg:px-10 '>
        <div className='xl:w-8/12 lg:w-9/12 w-11/12 '>
        <div className='font-header6 font-extralight  text-stone-300 ' >
  
        {/* <QuestionsHome/> */}
        <AnimatePresence>
          {!isCreateQuestionsOpen &&
          <motion.div 
          transition={!isCreateQuestionsOpen? {
            duration:0.4,
            type:'tween',
            // delay: 0.7 
            

            // delay:scale:{x:''}
            // delay:0.3,
            // duration:0.4,*
            // type:'spring',ss
            // stiffness:  50:100,
            
          }:{
            duration:0.4,
            // delay: 0.7 
          }}

          initial={!isCreateQuestionsOpen?{
            scale:0.2,
  x:500,
  y:300,
  backgroundColor:'gray',
  opacity:0.1,
          }:{
            opacity:1
          }}

          animate={ {
            scale: 1,
            x:0,
            y:0,
            backgroundColor:'',
            opacity:1
          }}

         exit=  {{
            scale:1.6,
            border:'solid brown 1px',
            marginLeft:'100px',
            zIndex:'-1',
            x:-570,
            y:-400,
            opacity:0.1
            // display:'absolute'
            // x:620,
            // opacity:0
             }}>
          <QuestionsHome/>
         </motion.div>         
          }
          </AnimatePresence>


{/* 
          <AnimatePresence>
            {isCreateQuestionsOpen &&
              <motion.div
              initial={{
                display:'none'
              }}
              animate={{
                display: ['none','block','none']
              }}
              transition={{
                duration:0.4,
                delay: 0.7 
                
              }}
              style={{
                width:670,
                height:250,
              }} className='bg-amber-800 text-amber-800 absolute rounded-l-full z-10 left-0 top-0' >
                .
              </motion.div>
            }
          </AnimatePresence> */}


          {/* <AnimatePresence>
            {isCreateQuestionsOpen &&
              <motion.div
              initial={{
                display:'block'
              }}
              animate={{
                display: 'none'
              }}
              transition={{
                duration:0.4,
                delay: 0.7 
                
              }}
              style={{
                width:470,
                height:250,
              }} className='bg-amber-800 text-amber-800 absolute rounded-l-full z-10 right-0 top-36' >
                .
              </motion.div>
            }
          </AnimatePresence> */}

<AnimatePresence>
{isCreateQuestionsOpen &&

<motion.div className=''
 exit=  {{
  scale:1.3,
  border:'solid brown 1px',
  backgroundColor:'red',
  // marginLeft:'100px',
  // zIndex:'-1',
  x:-970,
  y:-900,
  opacity:0.1
  // display:'absolute'
  // x:620,
  // opacity:0
   }}
initial={isCreateQuestionsOpen?{
  scale:0.2,
  x:500,
  y:300,
  // backgroundColor:'gray',
  opacity:0.1,
  
  // display:'absolute',

  // x:-500,
  // display:'none'
}:{
  opacity:1
}}
animate={isCreateQuestionsOpen ? {
  scale: 1,
  x:0,
  y:0,
  backgroundColor:'',
  opacity:1
  // x:-100,
  // x:0,
  // display:'block'
}:{}}

transition={isCreateQuestionsOpen? {
  delay:0.3,
  duration:0.4,
  type:'tween',
  // stiffness:50
  
}:{ 
  duration:0.3,
  type:'tween'
  // delay: 0.7 
}}
>
   <CreateQuestions/>
</motion.div>
 
}
</AnimatePresence>

        </div>
     
        {/* <div style={{
          // backgroundColor:'#BFD5ED'
        }}>
             assesment
        </div> */}
       
    </div>
    </div>
  
  )
}

export default assesment