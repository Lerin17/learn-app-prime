import React from 'react'
import { Nav } from './Nav'
import mesh1 from '../images/mesh-gradient-1.png'

import Image from 'next/image'

import Mavbar from './GeneralPurpose/Mavbar'
import { UserContext } from '../context/UserContext'
import { Iusercontext } from '../types/context/usercontext'
import Login from './login/Login-SignupModal'
import { motion } from 'framer-motion'
import { UtilityContext } from '../context/UtilityContext'
import { Iutilitycontext } from '../types/context/utilitycontext'
import { CourseContext } from '../context/CourseContext'
import { Icoursecontext } from '../types/context/coursecontext'
import { useRouter } from 'next/router'

import { studentUsers, teachersUsers } from '../testdata/QuestionsArraysample';
import { DuttonAlt } from './GeneralPurpose/dutton'

import { Label } from '../@/shadowComponents/ui/label'
import { Switch } from '../@/shadowComponents/ui/switch'



export const Layout = (prop:any) => {



  // console.log(useRouter().asPath, 'as path')

  const path = useRouter().asPath

const {currentCursorVariant, navBarOptionLocation, setnavBarOptionLocation, updateNavBarOptionLocation, notfication} = React.useContext(UtilityContext) as Iutilitycontext

const {isUserStudent, userData,  setUsernameinput, setUserpasswordinput, logininUser, Usernameinput}  = React.useContext(UserContext) as Iusercontext

  const [windowHeight, setwindowHeight] = React.useState<number>();

  const [haloLocation, sethaloLocation] = React.useState<any>();

  const updateLocation = (data:any) => {
    setnavBarOptionLocation(data)
  }

  const [mousePosition, setmousePosition] = React.useState({
    x:0,
    y:0
});

  const {isDurationModal, setisDurationModal} = React.useContext(CourseContext) as Icoursecontext

  // console.log(navBarOptionLocation, 'navx')

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
      backgroundColor:'#92400e',
      height:20,
      width:20,
      borderRadius:'50%',
      //width and height 32 
      


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

  const getMousePosition = (e:any) => {
    //  console.log(e)
     setmousePosition({
        x:e.clientX,
        y:e.clientY
     })
}

  React.useEffect(() => {
    window.addEventListener('mousemove', getMousePosition)

    return () => {
        window.removeEventListener('mousemove', getMousePosition)
    }
}, []);

  // console.log(navBarOptionLocation, 'navbarloaction')
  
  React.useEffect(() => {
    const halolox = document.getElementById('halo')?.getBoundingClientRect()

    sethaloLocation(halolox)
    // console.log(path.split('/')[2] === 'createcourse', 'path')
  }, [path]);

//   const toggleDurationModal = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {

//     console.log(e, 'gorilla')

//     if(path.split('/')[2] !== 'createcourse' || isDurationModal === false){
//       return
//     }

//     if(!e){
//         setisDurationModal(false)
//     }else if(e.target.id !== 'durationModal'){
//       setisDurationModal(false)
//     }
// }

const StudentUsersSelection = studentUsers.map(item => (
  <div
  className={`transition-all ${item.name == Usernameinput?'border-black border-2':'' } p-2 m-2 bg-white flex flex-col items-center `}
  onClick={() => {
    setUsernameinput(item.name)
    setUserpasswordinput(item.Password)
  }}>
    <div>
    <svg className='fill-current' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 24h-24v-24h24v24zm-2-22h-20v20h20v-20zm-4.118 14.064c-2.293-.529-4.427-.993-3.394-2.945 3.146-5.942.834-9.119-2.488-9.119-3.388 0-5.643 3.299-2.488 9.119 1.064 1.963-1.15 2.427-3.394 2.945-2.048.473-2.124 1.49-2.118 3.269l.004.667h15.993l.003-.646c.007-1.792-.062-2.815-2.118-3.29z"/></svg>
    </div>

    <div className='text-4xl font-header12'>
    {item.name}
    </div>
  
  </div>
))

const TeacherUsersSelection = 
teachersUsers.map(item => (
  <div
  className={`transition-all ${item.name == Usernameinput?'border-black border-2':'' } p-2 m-2 bg-white flex flex-col items-center`}
  onClick={() => {
    setUsernameinput(item.name)
    setUserpasswordinput(item.Password)
  }}>
    <div>
    <svg className='fill-current' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 24h-24v-24h24v24zm-2-22h-20v20h20v-20zm-4.118 14.064c-2.293-.529-4.427-.993-3.394-2.945 3.146-5.942.834-9.119-2.488-9.119-3.388 0-5.643 3.299-2.488 9.119 1.064 1.963-1.15 2.427-3.394 2.945-2.048.473-2.124 1.49-2.118 3.269l.004.667h15.993l.003-.646c.007-1.792-.062-2.815-2.118-3.29z"/></svg>
    </div>

    <div className='text-4xl font-header12'>
    {item.name}
    </div>
  
  </div>
))



  const UserSelect = () => 
    <div className=' h-full w-full flex justify-center '>
        <div className='h-full w-10/12 select-none flex flex-col items-center'>
          <div className='p-2 text-3xl mt-8'>
            Welcome, Select a pre created account to go through the features easily!
          </div>
          <div className='flex flex-col items-center mt-4'
          >
            <div>
            USER ACCOUNTS
          </div>

          <div className='flex'>
          {StudentUsersSelection}
          </div>
    
          </div>

          <div className='flex flex-col items-center mt-4'
          >    
          <div>
            TEACHER ACCOUNTS
          </div>
          <div className='flex'>
          {TeacherUsersSelection}
          </div>
      
          </div>

          <DuttonAlt
          icon={'Login'}
          handleClick={() => logininUser()}
          color='black'
          />

          {/* <div className='mt-4' onClick={() => logininUser()}>
                Login
              </div> */}

        </div>
    </div>
  

  // console.log(haloLocation, 'haloLocation')
  if(''){
    return (
      <div className=' paperwhite border h-screen'>
          <motion.div
        variants={cursorVariants}
        animate={currentCursorVariant}
        className={`custom-cursor opacity-75 z-20`} >
          
        </motion.div>

              <UserSelect/>
              
      </div>



    )

  }else {
    return (
      <div
      
      style={{
        // transformBox:'view-box'
        // backgroundColor: "rgb(190, 242, 100)",
        // backgroundImage: "radial-gradient(at 77% 92%, rgb(34, 197, 94) 0, transparent 58%), radial-gradient(at 12% 12%, rgb(22, 101, 52) 0, transparent 71%), radial-gradient(at 36% 8%, rgb(22, 78, 99) 0, transparent 55%), radial-gradient(at 60% 68%, rgb(196, 181, 253) 0, transparent 93%), radial-gradient(at 67% 36%, rgb(132, 204, 22) 0, transparent 8%), radial-gradient(at 34% 34%, rgb(196, 181, 253) 0, transparent 50%)"
      
      }}
       className={`lg:h-screen md:h-screen font-inter h-full bg-amber-800 ${backgroundstyle} relative`} >
  
  
        <motion.div
        variants={cursorVariants}
        animate={currentCursorVariant}
        className={`custom-cursor opacity-75 z-20`} >
          
        </motion.div>
  
          
  {!isUserStudent?<div className='flex justify-center'>
   <Login/>
  </div>: 
  <div className=' h-full' >
  
  <div className='flex  flex-col h-full' >
    <div className=''>
    <div
    style={{
      // backdropFilter: 'blur(10px)',
      // opacity:'20%'
      // backdropFilter: 'blur(1px)'
    }}
    className=' bg-transparent   relative w-full z-10' >
      <motion.div
      animate={{
        x:navBarOptionLocation? navBarOptionLocation.x :0
      }}
  
      transition={{
        duration:0.4,
        ease:'easeInOut'
      }}
      
      style={{
        width: navBarOptionLocation?navBarOptionLocation.width:''
      }}
      id='halo'
      className='text-lg absolute top-1/2 text-transparent  border-b-4   border-amber-900   '>
        
        xxexexexeddddddd
      </motion.div>
      <div className='border-b  border-black   '>
         <Nav
       
         updateNavBarOptionLocation={updateNavBarOptionLocation}
         />
      </div>
      
    </div>
  
    <div className='flex justify-center'>
    <Mavbar/>
    </div>
    </div>
   
  
    <div 
    className='h-full ' >
      {notfication?.type === 'success'?
       <div className='w-8/12 pt-4 text-7xl text-green-200 px-2'>
              <div>
                Lerin17,
              </div>
              <div className=' text-6xl leading-tight'>
              {notfication.message}
              </div>
              
            </div>:
  
            
            <div
            >
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
 
}
