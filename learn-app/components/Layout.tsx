import React from 'react'
import { Nav } from './Nav'
import mesh1 from '../images/mesh-gradient-1.png'

import Image from 'next/image'
import { useRouter } from 'next/router'
import Mavbar from './GeneralPurpose/Mavbar'
import { UserContext } from '../context/UserContext'
import { Iusercontext } from '../types/context/usercontext'
import Login from './login/Login'


export const Layout = (prop:any) => {

  console.log(useRouter().asPath, 'as path')


const {isUserStudent} = React.useContext(UserContext) as Iusercontext

  const [windowHeight, setwindowHeight] = React.useState<number>();

  const handleResize = () => {
    setwindowHeight(window.innerHeight)
  }

  //create windowHeight conditional to deal with changes in height and their effect on ui

  React.useEffect(() => {
    setwindowHeight(window.innerHeight)

    window.addEventListener('resize', handleResize)
  }, []);

  // if(window){
  //   window.addEventListener('resize', handleResize)
  // }




  

  return (
    <div style={{
      // transformBox:'view-box'
      // backgroundColor: "rgb(190, 242, 100)",
      // backgroundImage: "radial-gradient(at 77% 92%, rgb(34, 197, 94) 0, transparent 58%), radial-gradient(at 12% 12%, rgb(22, 101, 52) 0, transparent 71%), radial-gradient(at 36% 8%, rgb(22, 78, 99) 0, transparent 55%), radial-gradient(at 60% 68%, rgb(196, 181, 253) 0, transparent 93%), radial-gradient(at 67% 36%, rgb(132, 204, 22) 0, transparent 8%), radial-gradient(at 34% 34%, rgb(196, 181, 253) 0, transparent 50%)"
    
    }}
     className='lg:h-screen md:h-screen  h-full bg-amber-800 paper relative ' > 

        
{isUserStudent?<div className='flex justify-center'>
 <Login/>
</div>: <div className=' h-full' >

<div className='flex  flex-col h-full' >
  <div className=''>
  <div
  style={{
    // backdropFilter: 'blur(1px)'
  }}
  className='border-y-2  border-black bg-stone-300 relative z-40' >
    <div className='border-y border-black my-1  '>
       <Nav/>
    </div>
    
  </div>

  <div className='flex justify-center'>
  <Mavbar/>
  </div>
  </div>
 

  <div className='h-full ' >

    {prop.children} 
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
