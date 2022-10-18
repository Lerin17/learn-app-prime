import React from 'react'
import { Istudentcontext } from '../types/context/studentcontext';
import { Iutilitycontext } from '../types/context/utilitycontext';
import { UtilityContext } from './UtilityContext';

const StudentContext = React.createContext<Istudentcontext | null>(null)

const StudentContextProvider = (props:any) => {

  const {screenWidth} = React.useContext(UtilityContext) as Iutilitycontext



  const panel1ref = React.useRef<any>(null)

    const [isNewStudentint, setisNewStudentint] = React.useState(false);

    const [currentCPoption, setcurrentCPoption] = React.useState('');

    const toggleisNewStudentint = () => {
        setisNewStudentint(prev => !prev)
    }

    const setcurrentCPOP = (option:string) => {
        setcurrentCPoption(option)
    }

    const [panel1Student, setpanel1Student] = React.useState({
      ispanel: false,
      panelX: 0,
      panelY: 0
    });

    // const [panel1width, setpanel1width] = React.useState();

    console.log(screenWidth, 'screenWIdth')

    React.useEffect(() => {
      if(panel1ref.current){
        const widthX = panel1ref.current.offsetWidth
        console.log(panel1ref.current.offsetWidth)
        setpanel1Student(prev => ({...prev, panelX:widthX }))
      }
    }, [screenWidth]);

    console.log(panel1Student, 'screenwidth')

    React.useEffect(() => {
      
    }, []);



    


  return (
    <StudentContext.Provider value={{isNewStudentint, toggleisNewStudentint, currentCPoption, setcurrentCPOP, setpanel1Student, panel1Student,  panel1ref}}>
        {props.children}
    </StudentContext.Provider>
  )
}

export  {StudentContextProvider, StudentContext}