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
      <div className={`px-2 py-1  lg:px-6 md:px-4 lg:text-base md:text-base text-sm  hover:text-black transition-all text-white font-header1 font-normal`} >
        <Link  href= {props.locationURL} >
            <div className={`cursor-pointer ${props.one?'lg:text-5xl md:text-2xl font-black font-header6  uppercase ':'font-header6 lg:text-2xl md:text-lg'}`} >
              {props.text}
            </div>
        </Link>
      </div>
    )
  }

  return (
    <div className='text-white flex flex-wrap justify-center  w-full items-center ' >
        <NavOption
        text = 'Home'
        locationURL= "/"
        one= {true}
        />
       

        <NavOption
        text = 'About'
        locationURL= '/aboot'
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

     
       
    </div>
  )
}
