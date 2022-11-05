

import React from 'react'

import { Icoursecontext, Icourseobject, IsaveCurrentCourseArg, IcourseGroupObject, IinputCourseGroupDetailsArg } from '../types/context/coursecontext';

const CourseContext = React.createContext<Icoursecontext | null>(null)

const CourseContextProvider = (props:any) => {
    const [CoursesArray, setCoursesArray] = React.useState<Icourseobject[]>([]);

    const [CourseObject, setCourseObject] = React.useState<Icourseobject>();

    const [currentCourseName, setcurrentCourseName] = React.useState<string>('');

    const [currentCourseCode, setcurrentCourseCode] = React.useState<string>('');

    const [currentCodeDesc, setcurrentCodeDesc] = React.useState<string>('');

    const [currentNoWeeks, setcurrentNoWeeks] = React.useState<string>('');

    const [currentDayOfWeek, setcurrentDayOfWeek] = React.useState<string[]>([]);

    // const [courseGroupArray, setcourseGroupArray] = React.useState([]);

    const [courseGroupObject, setcourseGroupObject] = React.useState<IcourseGroupObject>();

    const [currentCourseGroupName, setcurrentCourseGroupName] = React.useState<string>('');

    const [currentCourseGroupAbv, setcurrentCourseGroupAbv] = React.useState<string>('');

    const [currentCourseGroupDesc, setcurrentCourseGroupDesc] = React.useState<string>('');

    const [currentCourseGroupCourseArray, setcurrentCourseGroupCourseArray] = React.useState([]);

    const [courseListSelectedCourse, setcourseListSelectedCourse] = React.useState<Icourseobject | undefined | null>();

    const [isNewCoursePanelOpen, setisNewCoursePanelOpen] = React.useState(false);

    const [isTopicPanelOpen, setisTopicPanelOpen] = React.useState(false);

    const [isCreateCourseGroupOpen, setisCreateCourseGroupOpen] = React.useState(false);


    const [isCourseList, setisCourseList] = React.useState(true);

    const [isDowCarousel, setisDowCarousel] = React.useState(false);

    const [isParentCourse, setisParentCourse] = React.useState(false);

    const toggleNewCoursePanel = () => {
      setisNewCoursePanelOpen(prev => !prev)
      setisCourseList(false)
    }

    const toggleisDowCarousel = () => {
      setisDowCarousel(prev => !prev)
    }

    const toggleTopicPanel = () => {
      setisTopicPanelOpen(prev => !prev)
    }

    const addDayOfWeek = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const dayofweek = e.target.innerText
      console.log(e.target)
      console.log(dayofweek, 'day')

      
      // console.log(e.target.textContent, 'event')
      setcurrentDayOfWeek((prev:string[]):any => {
        if (prev.includes(dayofweek)){
          return [...prev]
        }else{
          return [dayofweek, ...prev]
        }
        })
    }

    console.log(currentDayOfWeek, 'currentDays')

    const ACTIONS = {
      SAVE_NEW_COURSE:'SAVE1',
      SAVE_NEW_COURSEGROUP:'SAVE2'
      // cow:'ee'
    }

    const returnNewCourse = (payload:IsaveCurrentCourseArg) => {
      return {
        courseName: payload.currentCourseName,
        courseCode: payload.currentCourseCode,
        courseDesc:payload.currentCodeDesc,  
        NoWeeks:payload.currentNoWeeks,
        courseId: Date.now()
      }
    }

    const returnNewCourseGroupObject = () => {
      return {

      }
    }

    interface Istate {
      coursesArray:Icourseobject[]
      courseGroupArray:object
    }

    type Iaction = {type:'SAVE1', payload:IsaveCurrentCourseArg} | {type:'SAVE2', payload:any}
    
    const reducer = (state:Istate, action:Iaction) => {
      switch (action.type) {
        case ACTIONS.SAVE_NEW_COURSE:
          return {...state ,coursesArray: [...state.coursesArray, returnNewCourse(action.payload)]}
          case 'SAVE2':
          return {...state, courseGroupArray: [] }
        default:
          return state  
      }
    }

    

    const inputCourseGroupDetails = ({ name, abv, desc}:IinputCourseGroupDetailsArg) => {
      // console.log(currentCourseGroupAbv)
      setcurrentCourseGroupAbv(abv)
      setcurrentCourseGroupDesc(desc)
      setcurrentCourseGroupName(name)
    }

    const inputCourseDetails =  ({name}:any) => {

    }

  


    const [state, dispatch]:any = React.useReducer<any>(reducer, {coursesArray:[], courseGroupArray:[]})

    console.log(state, 'state')

    const coursesArray = state.coursesArray

  // const [state, dispatch] = React.useReducer<any, ()=>void>(reducer, [])

    const saveCurrentCourse = (Obj:IsaveCurrentCourseArg) => {
      setcurrentCodeDesc('')
      setcurrentCourseName('')
      setcurrentCourseCode('')
      setcurrentNoWeeks('')
      dispatch({type:ACTIONS.SAVE_NEW_COURSE, payload: {...Obj}})
    }

    

    // function dam() {
    //         dispatch({type: 'SAVE'})
    // }



  return (
    <CourseContext.Provider value={{CourseObject, CoursesArray, toggleNewCoursePanel, isNewCoursePanelOpen, setisNewCoursePanelOpen, isTopicPanelOpen, toggleTopicPanel, currentCourseName,currentCodeDesc,currentCourseCode,currentNoWeeks, setcurrentCourseName, setcurrentCodeDesc, setcurrentCourseCode, setcurrentNoWeeks, saveCurrentCourse,  coursesArray, toggleisDowCarousel, isDowCarousel, setisDowCarousel, addDayOfWeek, currentDayOfWeek, setcurrentDayOfWeek, courseListSelectedCourse, setcourseListSelectedCourse, setisCourseList, isCourseList, isParentCourse, setisParentCourse, isCreateCourseGroupOpen, setisCreateCourseGroupOpen,currentCourseGroupName,currentCourseGroupAbv,
currentCourseGroupDesc,currentCourseGroupCourseArray,inputCourseGroupDetails 
     }}>
        {props.children}
    </CourseContext.Provider>
  )
}

export {CourseContextProvider, CourseContext}