import { NextPage } from 'next'
import React from 'react'
// import CreateQuestions from '../components/assesment/QuestionsHome'
import QuestionsHome from '../components/assesment/QuestionsHome'
import CreateQuestions from '../components/assesment/CreateQuestions'
import { AssesmentContext } from '../context/AssesmentContext'

import { Iassesmentcontext } from '../types/context/assesmentcontext'
import { AnimatePresence, motion, usePresence } from 'framer-motion'
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
        <AnimatePresence >
          {!isCreateQuestionsOpen &&
          <motion.div 
          transition={{
            duration:0.4,
            type:'tween',    
          }}

  //         initial={!isCreateQuestionsOpen?{
  //           scale:0.2,
  // x:500,
  // y:300,
  // backgroundColor:'gray',
  // opacity:0.1,
  //         }:{
  //           opacity:1
  //         }}

          // animate={ {
          //   scale: 1,
          //   x:0,
          //   y:0,
          //   backgroundColor:'',
          //   opacity:1
          // }}

      

         exit=  {{
            scale:1.6,
            // border:'solid brown 1px',
            marginLeft:'100px',
            // zIndex:'-1',
            x:-570,
            y:-400,
            opacity:0.1
            // display:'absolute'
            // x:620,
            // opacity:0
             }}>
            <motion.div 
                  initial={{
                    scale:0.2,
          x:500,
          y:300,
          // backgroundColor:'gray',
          opacity:0.1,
          color:'#92400e',
          // backgroundColor:'#d6d3d1'
                  }}

          animate={ {
            scale: 1,
            x:0,
            y:0,
            // backgroundColor:'',
            opacity:1,
            color:'#d6d3d1'
          }}

          transition={!isCreateQuestionsOpen? {
            duration:0.4,
            type:'spring',
            stiffness:50,
            delay:0.3
        
            
          }:{
            // duration:0.4,
            // delay:0.8
            // delay: 0.4 
          }}
            // animate={{
            //   x:0,
            //   y:0
            // }}

            // transition={{
            //   type:'spring',
            //   stiffness:50,
            //   duration:0.3
            // }}

            // initial={{
            //   x:50,
            //   y:50
            // }}
            >
               <QuestionsHome/>
            </motion.div>
         
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
                display:'block',
                opacity:100,
                scale:0.2
                // y:100,
                // x:100
              }}
              animate={{
                display: 'none',
                scale:1
                // opacity:0
              }}
              transition={{
                duration:0.4,
                delay:0.3
              }}
              style={{
                width:350,
                height:150,
              }} className='bg-white text-amber-800 absolute  z-10 right-36 bottom-36' >
                .
              </motion.div>
            }
          </AnimatePresence>  */}

<AnimatePresence>
{isCreateQuestionsOpen &&

<motion.div className=''
 exit=  {{
  scale:1.2,
            // border:'solid brown 1px',
            // marginLeft:'100px',
            // zIndex:'-1',
            x:-870,
            y:-659,
            opacity:0.1,
  display:'absolute'
  
   }}




// initial={isCreateQuestionsOpen?{
//   scale:0.2,
//   x:500,
//   y:300,
//   opacity:0.1,
// }:{
//   opacity:1
// }}
// animate={isCreateQuestionsOpen ? {
//   scale: 1,
//   x:0,
//   y:0,
//   backgroundColor:'',
//   opacity:1
//   // x:-100,
//   // x:0,
//   // display:'block'
// }:{}}

transition={{
  // delay:  0.4,
  duration: 0.5,
  type:'tween'  
}}
>
  <motion.div
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

  transition={isCreateQuestionsOpen && {
    delay: isCreateQuestionsOpen? 0.3:0,
    duration: isCreateQuestionsOpen? 0.4:0.4,
    type:'spring',
    stiffness:50
    // type: isCreateQuestionsOpen? 'spring':'tween',
    // stiffness:isCreateQuestionsOpen?50:100,
    // bounce: isCreateQuestionsOpen?0.8:0
    
  }}

  initial={{
    scale:0.2,
    x:500,
    y:300,
    // backgroundColor:'gray',
    opacity:0.1
  }}
                    // animate={{
                    //   x:0,
                    //   y:0
                    // }}
        
                    // transition={{
                    //   type:'spring',
                    //   stiffness:50,
                    //   duration:0.3
                    // }}
        
                    // initial={{
                    //   x:50,
                    //   y:50
                    // }}
  >
  <CreateQuestions/>
  </motion.div>

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