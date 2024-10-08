import React from 'react'
import { motion } from 'framer-motion'
import { defaultProps } from 'react-select/dist/declarations/src/Select'

const dutton = () => {
  return (
    <div>dutton</div>
  )
}
 type duttonProps = {
  icon: any;
  handleClick:()=>void,
  color?:string
  noPadding?:boolean
  
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
    }} className={`${props.color?`text-${props.color}-300`:``} font-header9 capitalize  text-2xl px-0  flex items-center cursor-pointer`}>
      [
      <motion.div  className=' transition-all px-2 text-base font-header9'>
         {props.icon}
      </motion.div>]
      </motion.div>
  )
 }

const DuttonAlt = (props:duttonProps) => {
  return (
    <motion.div
        onClick={props.handleClick} 
    whileTap={{
      x:15
    }}
    >
         <div 
 
      style={{
        color:props.color? 'black':''
      }}
     className={`flex text-center text-stone-300 items-center  lg:text-2xl md:text-xl text-xs hover:bg-stone-300  py-1  text-gray-300  ${props.noPadding?'':'px-1'}   font-header12 hover:text-stone-800 transition-all`}>
      <span className='font-header9 text-stone-300' >
        [
      </span>
     
      <motion.div 
      style={{
        
      }}
      className='px-1    '>
         {props.icon}
      </motion.div>

      <span className='font-header9 text-stone-300' >
         ]
      </span>
      </div>
    </motion.div>
   
  )
}

const DuttonLarge = (props:duttonProps) => {
  return (
    <motion.div 
 
    onClick={props.handleClick} transition={{type:'tween', duration:0.3}}
    whileTap={{
      x:40
    }}
    whileHover={{
      skewX:-20
    }} className='flex items-center font-header9 cursor-pointer px-4'>
      [
      <motion.div    style={{
      backgroundColor:'#a8a29e'
    }}  className=' transition-all '>
         {props.icon}
      </motion.div>]
      </motion.div>
  )
}

export  {dutton, DuttonLarge, DuttonMid, DuttonSmall, DuttonAlt}