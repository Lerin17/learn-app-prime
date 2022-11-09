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
      <div className={`px-2 py-1  lg:px-4 md:px-4 lg:text-base md:text-base text-sm  hover:text-black transition-all text-white font-header1 font-normal`} >
        <Link  href= {props.locationURL} >
            <div className={`cursor-pointer ${props.one?'text-5xl font-black font-header9  uppercase ':'font-header6'}`} >
              {props.text}
            </div>
        </Link>
      </div>
    )
  }

  return (
    <div className='text-white flex flex-wrap justify-center w-full items-center' >
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
