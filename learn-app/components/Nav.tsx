import Link from 'next/link'
import React from 'react'
import { UrlObject, UrlWithStringQuery } from 'url'


export const Nav = () => {

  interface INavOptions {
    text: String
    locationURL: any
    one?:boolean
  }


  const NavOption = (props:INavOptions) => {

    return (
      <div className={`px-2 py-1  lg:px-8 md:px-6 lg:text-base md:text-base text-sm   transition-all text-white font-header1 font-normal `} >
        <Link  href= {props.locationURL} >
            <div className={` ${props.one?'lg:text-5xl md:text-2xl font-black font-header7 text-stone-300  uppercase ':'font-header7 text-black lg:text-2xl md:text-lg'}`} >
              {props.text}
            </div>
        </Link>
      </div>
    )
  }

  return (
    <div
    style={{

     backdropFilter:'blur(30px)'
    }}
    className='text-white bg-blur     flex flex-wrap justify-center bg-transparent  w-full items-center  ' >
        <NavOption
        text = 'Home'
        locationURL= "/"
        one= {true}
        />
       

        <NavOption
        text = 'You'
        locationURL= '/you'
        />

        <NavOption
        text = 'Students'
        locationURL= '/students'
        />

<NavOption
        text = 'Courses'
        locationURL= '/courses'
        />

        
        <NavOption
        text = 'Assesment'
        locationURL= '/assesment'
        />

        
        <NavOption
        text = 'Live Classes'
        locationURL= '/liveclasses'
        />

        {/* <NavOption
        text = 'xyou'
        locationURL= '/you/yourpackages'
        /> */}

     
       
    </div>
  )
}
