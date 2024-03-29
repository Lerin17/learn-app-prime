import Router, { useRouter } from 'next/router';
import React from 'react'

import { Iutilitycontext } from '../types/context/utilitycontext';

import { Tnotification } from '../types/context/utilitycontext';

const UtilityContext = React.createContext<Iutilitycontext | null>(null)



const UtilityContextProvider = (props:any) => {

    const [screenWidth, setscreenWidth] = React.useState(0);

    const [navBarOptionLocation, setnavBarOptionLocation] = React.useState<any>();


   
    const [notfication, setnotfication] = React.useState<Tnotification>(null);

    const routerx = useRouter().asPath 

    const updateNavBarOptionLocation = (data:any) => {
        setnavBarOptionLocation(data)
    }

    React.useEffect(() => { 
        console.log(routerx, 'routerxwez')
        setrouterLocation(
            routerx
        )
    }, []);

    let runReset:any

    React.useEffect(() => {
        if(notfication){
          console.log(  console.log(notfication,'notiixexexxexexexexexexexxdexzf'))
          runReset = setTimeout(() => {
              setnotfication(null)
          }, 4000);
        }
        return () => {
          if(runReset){
              clearTimeout(runReset)
          }
          
        }
      }, [notfication]);


    // console.log(routerx, 'Linkkkkkks')

    // const [, set] = useState();

    const [routerLocation, setrouterLocation] = React.useState<string>('zwzw');  

    // React.useEffect(() => {
    //     if(routerx){
    //         // console.log('exexxexxexexexexexjxekxe')
    //         setrouterLocation(routerx)
    //     }
    // }, [routerx]);

    // React.useEffect(() => {
    //     setrouterLocation(routerx)
    //     console.log('casamigosssssssss')
    //     console.log(routerLocation)
    // }, [routerx]);

    const [mousePosition, setmousePosition] = React.useState({
        x:0,
        y:0
    });


    const [currentCursorVariant, setcurrentCursorVariant] = React.useState<string>('default');

    // const getMousePosition = (e:any) => {
    //     //  console.log(e)
    //      setmousePosition({
    //         x:e.clientX,
    //         y:e.clientY
    //      })
    // }

   

    // React.useEffect(() => {
    //     window.addEventListener('mousemove', getMousePosition)

    //     return () => {
    //         window.removeEventListener('mousemove', getMousePosition)
    //     }
    // }, []);

    const getWindowWidth = () => {
        setscreenWidth(window.innerWidth)
    }


    React.useEffect(() => {
        if(window){
            window.addEventListener('resize', getWindowWidth)
            // setscreenWidth(window.innerWidth)
        }

        return () => {
            window.removeEventListener('resize', getWindowWidth)
        }
    }, []);


    // if(window){

    
    // }

    const cursorEnter = () => {
setcurrentCursorVariant('animate')
    }

    const cursorLeave = () => {
setcurrentCursorVariant('default')
    }
   

    

  return (
    <UtilityContext.Provider value={{screenWidth, currentCursorVariant, setcurrentCursorVariant,  cursorLeave, cursorEnter, routerLocation, navBarOptionLocation, setnavBarOptionLocation, updateNavBarOptionLocation, notfication, setnotfication}} >
        {props.children}
    </UtilityContext.Provider>
  )
}

export  {UtilityContextProvider, UtilityContext}