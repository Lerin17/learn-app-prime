

import React from 'react'

import { Icoursecontext, Icourseobject, IsaveCurrentCourseArg } from '../types/context/coursecontext';

const CourseContext = React.createContext<Icoursecontext | null>(null)

const CourseContextProvider = (props:any) => {


    const [CoursesArray, setCoursesArray] = React.useState<Icourseobject[]>([]);

    const [CourseObject, setCourseObject] = React.useState<Icourseobject>();

    const [currentCourseName, setcurrentCourseName] = React.useState<string>('');

    const [currentCourseCode, setcurrentCourseCode] = React.useState<string>('');

    const [currentCodeDesc, setcurrentCodeDesc] = React.useState<string>('');

    const [currentNoWeeks, setcurrentNoWeeks] = React.useState<string>('00');

    const [isNewCoursePanelOpen, setisNewCoursePanelOpen] = React.useState(false);

    const [isTopicPanelOpen, setisTopicPanelOpen] = React.useState(false);

    const toggleNewCoursePanel = () => {
      setisNewCoursePanelOpen(prev => !prev)
    }

    const toggleTopicPanel = () => {
      setisTopicPanelOpen(prev => !prev)
    }

    const ACTIONS = {
      SAVE_NEW_COURSE:'SAVE1',
      // cow:'ee'
    }

    const returnNewCourse = (payload:any) => {
      return {
        courseName: payload.currentCourseName,
        courseCode: payload.currentCourseCode,
        courseDesc:payload.currentCodeDesc,     
      }
    }
    
    const reducer = (state:any, action:any) => {
      switch (action.type) {
        case ACTIONS.SAVE_NEW_COURSE:
          return {coursesArray: [...state.coursesArray, returnNewCourse(action.payload)]}
        default:
          return state  
      }
    }


    const [state, dispatch]:any = React.useReducer<any>(reducer, {coursesArray:[]})

    console.log(state, 'state')

    const coursesArray = state.coursesArray

  // const [state, dispatch] = React.useReducer<any, ()=>void>(reducer, [])

    const saveCurrentCourse = (Obj:IsaveCurrentCourseArg) => {
      dispatch({type:ACTIONS.SAVE_NEW_COURSE, payload: {...Obj}})
    }

    

    // function dam() {
    //         dispatch({type: 'SAVE'})
    // }



  return (
    <CourseContext.Provider value={{CourseObject, CoursesArray, toggleNewCoursePanel, isNewCoursePanelOpen, isTopicPanelOpen, toggleTopicPanel, currentCourseName,currentCodeDesc,currentCourseCode,currentNoWeeks, setcurrentCourseName, setcurrentCodeDesc, setcurrentCourseCode, setcurrentNoWeeks, saveCurrentCourse,  coursesArray}}>
        {props.children}
    </CourseContext.Provider>
  )
}

export {CourseContextProvider, CourseContext}