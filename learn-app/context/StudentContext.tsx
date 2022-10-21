import React from 'react'
import { Istudentcontext } from '../types/context/studentcontext';
import { Iutilitycontext } from '../types/context/utilitycontext';
import { UtilityContext } from './UtilityContext';

const StudentContext = React.createContext<Istudentcontext | null>(null)

const StudentContextProvider = (props:any) => {
  const [StudentsArray, setStudentsArray] = React.useState([]);
  const [StudentObject, setStudentObject] = React.useState({
    name: '',
    age: '',
    email:'',
    courses:[]
  });

  const [currentStudentAge, setcurrentStudentAge] = React.useState<string>();

  const {screenWidth} = React.useContext(UtilityContext) as Iutilitycontext

  console.log(currentStudentAge, 'currentStudentAge')


  const panel1ref = React.useRef<any>(null)

    const [isNewStudentOpen, setisNewStudentOpen] = React.useState(false);
    const [isAssesmentopen, setisAssesmentopen] = React.useState(false);

    const [currentCPoption, setcurrentCPoption] = React.useState('');

    const toggleisNewStudentint = () => {
        setisNewStudentOpen(prev => !prev)
    }



    const setcurrentCPOP = (option:string) => {
        setcurrentCPoption(option)
    }

    const [largePanelStudent, setlargePanelStudent] = React.useState({
      ispanel: false,
      panelX: 0,
      panelY: 0
    });

    const [midpanelStudent, setmidPanelStudent] = React.useState({
      ispanel: false,
      panelX: 0,
      panelY: 0
    });

    
    const [smallPanelStudent, setsmallPanelStudent] = React.useState({
      ispanel: false,
      panelX: 0,
      panelY: 0
    });

    const toggleNewStudentPanel = () => {
      setisNewStudentOpen(prev => !prev)

      if(isNewStudentOpen == true){
        setcurrentCPoption('')
      }

      setlargePanelStudent(prev => ({...prev, ispanel: !prev.ispanel}))

      // setsmallPanelStudent(prev => ({...prev, ispanel: !prev.ispanel}))

      setmidPanelStudent(prev => ({...prev, ispanel: !prev.ispanel}))
            // setlargePanelStudent(prev => ({...prev, ispanel: !prev.ispanel}))
    }

    const openAssesmentPanel = () => {
        setisAssesmentopen(prev => !prev)

   
    }

  //   const toggleControlPanelOption = () => {

  // }

    // const [panel1width, setpanel1width] = React.useState();

    console.log(screenWidth, 'screenWIdth')

    React.useEffect(() => {
      if(panel1ref.current){
        const widthX = panel1ref.current.offsetWidth
        
      console.log(widthX)
        console.log(panel1ref.current.offsetWidth)
        setlargePanelStudent(prev => ({...prev, panelX:widthX }))
      }

    }, [screenWidth]);

    // console.log(panel1Student, 'screenwidth')

    React.useEffect(() => {
      if(isNewStudentOpen === true){
    

        

        
      }

    }, [isNewStudentOpen]);



    


  return (
    <StudentContext.Provider value={{isNewStudentOpen,  currentCPoption, setcurrentCPOP, setlargePanelStudent, largePanelStudent,  panel1ref, isAssesmentopen, openAssesmentPanel, toggleNewStudentPanel, smallPanelStudent, midpanelStudent, setcurrentStudentAge, currentStudentAge}}>
        {props.children}
    </StudentContext.Provider>
  )
}

export  {StudentContextProvider, StudentContext}