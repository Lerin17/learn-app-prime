import React from 'react'

import { Iutilitycontext } from '../types/context/utilitycontext';

const UtilityContext = React.createContext<Iutilitycontext | null>(null)

const UtilityContextProvider = (props:any) => {

    const [screenWidth, setscreenWidth] = React.useState(0);

    React.useEffect(() => {
        if(window){
            window.addEventListener('resize', ()=>{
                setscreenWidth(window.innerWidth)
            })
            // setscreenWidth(window.innerWidth)
        }
    }, []);


    // if(window){

    
    // }

   

    

  return (
    <UtilityContext.Provider value={{screenWidth}} >
        {props.children}
    </UtilityContext.Provider>
  )
}

export  {UtilityContextProvider, UtilityContext}