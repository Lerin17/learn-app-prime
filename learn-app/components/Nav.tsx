import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { UrlObject, UrlWithStringQuery } from 'url'
import { UtilityContext } from '../context/UtilityContext'


import { Iutilitycontext } from '../types/context/utilitycontext'

export const Nav = (props:any) => {

  const {updateNavBarOptionLocation, setnavBarOptionLocation} = React.useContext(UtilityContext) as Iutilitycontext

  interface INavOptions {
    text: String
    locationURL: any
    one?:boolean
  }

  const [haloLocation, sethaloLocation] = React.useState();

const navOptionRef = useRef(null)

console.log(navOptionRef.current, 'locationcurrent')

// console.log(navOptionRef.current)

const path = useRouter().asPath

// if(document){
//   console.log('ze')
// }

const [navOptionLocation, setnavOptionLocation] = React.useState<any>();

console.log(props, 'update')

// const updateNavBarOption = (data:any) => {
//   setnavBarOptionLocation(data)
// }

React.useEffect(() => {
  const locationData = document.getElementById('jack')?.getBoundingClientRect()
  
  props.updateNavBarOptionLocation(locationData)

}, [path]);

// console.log(navOptionLocation, 'navOptionLoction')

// const ran = document? document.getElementById('jack'):undefined



// console.log(navOptionLocation, 'navOptionlOaction')



// console.log(ran?.getBoundingClientRect())

// React.useEffect(() => {
//   if(ran){
//     setnavOptionLocation(ran?.getBoundingClientRect())
//   }
  
// }, []);

// React.useEffect(() => {
//   ()=>props.updateNavBarOptionLocation(navOptionLocation)
// }, [navOptionLocation]);


  const NavOption = (props:INavOptions) => {

    return (
      <div 
      id={path == props.locationURL? 'jack':''}
      ref = {path == props.locationURL? navOptionRef:null}
      className={`px-2 py-1  lg:px-8 md:px-6 lg:text-base md:text-base text-sm   transition-all text-white font-header1 font-normal `} >
        <Link
       
        href= {props.locationURL} >
            <div 
            
            className={` ${path == props.locationURL?'lg:text-5xl md:text-2xl font-black font-header7 text-stone-800 uppercase ':'font-header7 text-stone-300 lg:text-2xl md:text-lg'} textshadow`} >
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
