import React from 'react'

import {  motion, usePresence } from "framer-motion";

interface Ianimationcontainerprops {
    Component :JSX.Element
    condition:boolean
}

const AnimationContainer = (props:Ianimationcontainerprops) => {
  return (
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
      x:-570,
      y:-480,
      opacity:0.02
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
    opacity:0.5,
    display:'none'
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

    transition={props.condition? {
      duration:0.6,
      type:'spring',
      stiffness:40,
      delay:0.7  
    }:{
          //error if i use && instead of ? 
    }}
      
      >
         {props.Component}
      </motion.div>
   
   </motion.div> 
  )
}

export default AnimationContainer