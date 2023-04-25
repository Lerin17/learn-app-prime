import Router, { useRouter } from 'next/router';
import React from 'react'

import { Iutilitycontext } from '../types/context/utilitycontext';



const UtilityContext = React.createContext<Iutilitycontext | null>(null)



const UtilityContextProvider = (props:any) => {

    const [screenWidth, setscreenWidth] = React.useState(0);

    const routerx = useRouter().asPath 

    React.useEffect(() => { 
        console.log(routerx, 'routerxwz')
        setrouterLocation(
            routerx
        )
    }, []);

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
    <UtilityContext.Provider value={{screenWidth, mousePosition, currentCursorVariant, setcurrentCursorVariant,  cursorLeave, cursorEnter, routerLocation}} >
        {props.children}
    </UtilityContext.Provider>
  )
}

export  {UtilityContextProvider, UtilityContext}