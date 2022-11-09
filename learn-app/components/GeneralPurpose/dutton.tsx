import React from 'react'
import { motion } from 'framer-motion'

const dutton = () => {
  return (
    <div>dutton</div>
  )
}


const DuttonLarge = (props:any) => {
  return (
    <motion.div transition={{type:'tween', duration:0.3}} whileHover={{
      skewX:-20
    }} className='flex items-center font-header6  cursor-pointer px-4'>
      [
      <motion.div  className=' transition-all'>
         {props.icon}
      </motion.div>]
      </motion.div>
  )
}

export  {dutton, DuttonLarge}