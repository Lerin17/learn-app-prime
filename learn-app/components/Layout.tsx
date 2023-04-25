import React from 'react'
import { Nav } from './Nav'
import mesh1 from '../images/mesh-gradient-1.png'

import Image from 'next/image'
import { useRouter } from 'next/router'
import Mavbar from './GeneralPurpose/Mavbar'
import { UserContext } from '../context/UserContext'
import { Iusercontext } from '../types/context/usercontext'
import Login from './login/Login-SignupModal'
import { motion } from 'framer-motion'
import { UtilityContext } from '../context/UtilityContext'
import { Iutilitycontext } from '../types/context/utilitycontext'



export const Layout = (prop:any) => {

  console.log(useRouter().asPath, 'as path')

const {mousePosition, currentCursorVariant} = React.useContext(UtilityContext) as Iutilitycontext

const {isUserStudent, userData, notfication} = React.useContext(UserContext) as Iusercontext

  const [windowHeight, setwindowHeight] = React.useState<number>();

  const handleResize = () => {
    setwindowHeight(window.innerHeight)
  }

  const [backgroundstyle, setbackgroundstyle] = React.useState('paper');

  React.useEffect(() => {
    if(notfication?.type === 'success'){
      setbackgroundstyle('papersuccess')
    }else if(!notfication?.type){
      setbackgroundstyle('paperblue')
    }
  }, [notfication]);


  //create windowHeight conditional to deal with changes in height and their effect on ui

  React.useEffect(() => {
    setwindowHeight(window.innerHeight)

    window.addEventListener('resize', handleResize)
  }, []);

  // if(window){
  //   window.addEventListener('resize', handleResize)
  // }


  const cursorVariants = {
    default:{
      x: mousePosition.x - 16,
      y:mousePosition.y - 16,
      backgroundColor:'#a1a1aa',
      height:32,
      width:32,
      borderRadius:'50%'
      


    },
    animate:{
      x: mousePosition.x - 16,
      y:mousePosition.y - 16,
      height:32,
      width:32,
      backgroundColor:'#a1a1aa',
      borderRadius:'50%',
      // opacity:'50%',
      // backgroundColor:'#a1a1aa',

      // mixBlendMode:'exclusion',




    }
  }

  

  return (
    <div style={{
      // transformBox:'view-box'
      // backgroundColor: "rgb(190, 242, 100)",
      // backgroundImage: "radial-gradient(at 77% 92%, rgb(34, 197, 94) 0, transparent 58%), radial-gradient(at 12% 12%, rgb(22, 101, 52) 0, transparent 71%), radial-gradient(at 36% 8%, rgb(22, 78, 99) 0, transparent 55%), radial-gradient(at 60% 68%, rgb(196, 181, 253) 0, transparent 93%), radial-gradient(at 67% 36%, rgb(132, 204, 22) 0, transparent 8%), radial-gradient(at 34% 34%, rgb(196, 181, 253) 0, transparent 50%)"
    
    }}
     className={`lg:h-screen md:h-screen  h-full bg-amber-800 ${backgroundstyle} relative`} >

      <motion.div
      variants={cursorVariants}
      animate={currentCursorVariant}
      className={`custom-cursor opacity-75`} >
        
      </motion.div>

        
{!isUserStudent?<div className='flex justify-center'>
 <Login/>
</div>: <div className=' h-full' >

<div className='flex  flex-col h-full' >
  <div className=''>
  <div
  style={{
    // backdropFilter: 'blur(10px)',
    // opacity:'20%'
    // backdropFilter: 'blur(1px)'
  }}
  className=' bg-transparent relative z-30' >
    <div
    
    className='text-lg absolute top-2 left-72 border text-transparent rounded-full  bg-rose-900 '>
      xxexexexeddddddd
    </div>
    <div className='border-y py-1 border-black   '>
       <Nav/>
    </div>
    
  </div>

  <div className='flex justify-center'>
  <Mavbar/>
  </div>
  </div>
 

  <div className='h-full ' >
    {notfication?.type === 'success'? <div className='w-8/12 pt-4 text-7xl text-green-200 px-2'>
            <div>
              Lerin17,
            </div>
            <div className=' text-6xl leading-tight'>
            {notfication.message}
            </div>
            
          </div>:<div>
    {prop.children} 
      </div>}

  
  {/* <div
  style={{
    height:300,
    width:300
  }}
  className='earth w-2/6  bottom-56 left-20 absolute z-10'>
  
    x
  </div> */}
{/* 
  <div
  style={{
    height:300,
    width:300
  }}
  className='apple   right-36 absolute z-10'>
    x
  </div> */}
  </div>

  
</div>

</div>}
       
      
    </div>
  )
}
