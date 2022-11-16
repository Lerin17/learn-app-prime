import React from 'react'
import { motion } from 'framer-motion'

const dutton = () => {
  return (
    <div>dutton</div>
  )
}
 type duttonProps = {
  icon: any;
  handleClick:()=>void
  
 }

 const DuttonMid = (props:duttonProps) => {
  return (
    <motion.div onClick={props.handleClick} transition={{type:'tween', duration:0.3}} whileHover={{
      skewX:-20
    }} className='font-header8 capitalize text-black  text-4xl px-0 font-extralight flex items-center cursor-pointer'>
      [
      <motion.div  className=' transition-all px-6 text-base font-header9'>
         {props.icon}
      </motion.div>]
      </motion.div>
  )
 }


const DuttonSmall = (props:duttonProps) => {
  return (
    <motion.div onClick={props.handleClick} transition={{type:'tween', duration:0.3}} whileHover={{
      skewX:-20
    }} className='font-header8 capitalize text-black  text-2xl px-0 font-extralight flex items-center cursor-pointer'>
      [
      <motion.div  className=' transition-all px-2 text-base font-header9'>
         {props.icon}
      </motion.div>]
      </motion.div>
  )
 }

const DuttonLarge = (props:duttonProps) => {
  return (
    <motion.div onClick={props.handleClick} transition={{type:'tween', duration:0.3}} whileHover={{
      skewX:-20
    }} className='flex items-center font-header6  cursor-pointer px-4'>
      [
      <motion.div  className=' transition-all'>
         {props.icon}
      </motion.div>]
      </motion.div>
  )
}

export  {dutton, DuttonLarge, DuttonMid, DuttonSmall}