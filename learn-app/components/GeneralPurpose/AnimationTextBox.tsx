import { motion } from 'framer-motion'
import React from 'react'
// import AnimationContainer from './AnimationContainer'

interface TAnimationTextBox {
    text:string | undefined,
    animationtype: string | undefined
    isAnimate : Boolean
}


const AnimationTextBox = (props:TAnimationTextBox) => {

    console.log('xx')

    if(props.animationtype === 'notice'){
        return  <motion.div className='relative w-full flex justify-between  overflow-hidden'>
            
      

       <div className='text-black px-1'>
       {props.text}
       </div>

       <motion.div
        className='bg-white  z-10 h-full  w-10 blur-md sm:animate-slideAcross md:animate-slideAcrossMd lg:animate-slideAcrossLg'>
            x
        </motion.div>

          
   </motion.div>
    }else{
        return <div>
            yx
        </div>
    }


        // return
        //  <motion.div className='relative flex'>
            
        //      <motion.div
        //      animate={props.isAnimate && { right: '0%' }}

        //      initial={{left:'0%'}}
        //      transition={{ ease: "linear", duration: 2, repeatType:'loop' }}
 
        //      className='bg-white absolute z-10 h-full w-20 blur-md '>
 
        //      </motion.div>
        
            
            

        //     <div>
        //     {props.text}
        //     </div>

               
        // </motion.div>
  
}


export default AnimationTextBox