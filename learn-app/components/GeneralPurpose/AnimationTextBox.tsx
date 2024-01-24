import { motion } from 'framer-motion'
import React from 'react'
import AnimationContainer from './AnimationContainer'

interface TAnimationTextBox {
    text:string | undefined,
    animationtype: string | undefined
}


const AnimationTextBox = (props:TAnimationTextBox) => {

    console.log('xx')

    if(props.animationtype === 'notice'){
        return <div className='relative flex'>
            <motion.div
            transition={{
                repeat:Infinity,
                repeatDelay: 5,
                duration:1
            }}

            initial={{
                right:'0%'
            }}
            animate={{
                right:'100%',

            }}
            className='bg-white absolute z-10 h-full w-20 blur-md '>

            </motion.div>

            <div>
            {props.text}
            </div>

               
        </div>
    }else {
        return <div>
            x
        </div>
    }
}


export default AnimationTextBox