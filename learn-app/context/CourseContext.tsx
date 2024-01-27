

import React from 'react'

import { Icoursecontext, Icourseobject, IsaveCurrentCourseArg, IcourseGroupObject, IinputCourseGroupDetailsArg, IsaveCurrentCourseGroupArg } from '../types/context/coursecontext';

import useNotification from '../hooks/Notification';

import { courses } from '../testdata/QuestionsArraysample';

const CourseContext = React.createContext<Icoursecontext | null>(null)

import { IstartDate, IcourseDuration } from '../types/context/coursecontext';
import { UtilityContext } from './UtilityContext';
import { Iutilitycontext } from '../types/context/utilitycontext';
import { UserContext } from './UserContext';
import { Iusercontext } from '../types/context/usercontext';

const CourseContextProvider = (props:any) => {
  // const {setnotfication, notfication} = useNotification()

  const {notfication, setnotfication} = React.useContext(UtilityContext) as Iutilitycontext

  const {updateUserCourseData, userData} = React.useContext(UserContext) as Iusercontext

  // const courseNotification = notfication

  //ignore, it is not used
    const [CoursesArray, setCoursesArray] = React.useState<Icourseobject[]>(courses);

    const [CourseObject, setCourseObject] = React.useState<Icourseobject>();

    const [currentCourseName, setcurrentCourseName] = React.useState<string>('');

    const [currentCourseCode, setcurrentCourseCode] = React.useState<string>('');

    const [currentCodeDesc, setcurrentCodeDesc] = React.useState<string>('');

    const [currentNoWeeks, setcurrentNoWeeks] = React.useState<string>('');

    const [currentDuration, setcurrentDuration] = React.useState<IcourseDuration>({NoDays:0, NoWeeks:0});

    const [currentCourseStartDate, setcurrentCourseStartDate] = React.useState<IstartDate | undefined>({text: '', dateObj:null});

    const [currentDaysOfWeek, setcurrentDaysOfWeek] = React.useState<string[]>([]);

    const [currentCourseGroup, setcurrentCourseGroup] = React.useState({});

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

    const [isDurationModal, setisDurationModal] = React.useState<boolean> (false);

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



    React.useEffect(() => {
      if(userData){
        dispatch({type:ACTIONS.INIT_COURSEDATA, payload: userData.allCourses})
      }
    }, [userData]);

    

    // const addDayOfWeek = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //   const dayofweek = e.target.innerText
    //   console.log(e.target)
    //   console.log(dayofweek, 'day')

      
    //   // console.log(e.target.textContent, 'event')
    //   setcurrentDaysOfWeek((prev:string[]):any => {
    //     if (prev.includes(dayofweek)){
    //       return [...prev]
    //     }else{
    //       return [dayofweek, ...prev]
    //     }
    //     })
    // }

    console.log(currentDaysOfWeek, 'currentDays')

    const ACTIONS = {
      SAVE_NEW_COURSE:'SAVE1',
      SAVE_NEW_COURSEGROUP:'SAVE2',
      INIT_COURSEDATA:'INITCORSEDATA'
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

    const returnNewCourseGroupObject = (payload:any) => {
      return {
        courseGroupName: payload.currentCourseGroupName,
        courseGroupDesc:payload.currentCourseGroupDesc,
        courseGroupAbv:payload.currentCourseGroupAbv,
        courseGroupCourseArray:[],
        courseGroupId:Date.now()
    }
      }
    

    interface Istate {
      coursesArray:Icourseobject[]
      courseGroupArray:IcourseGroupObject[]
    }

    type Iaction = {type:'SAVE1', payload:IsaveCurrentCourseArg} | {type:'SAVE2', payload:any} | {type:'INITCOURSEDATA', payload:any}
    
    const reducer = (state:Istate, action:Iaction) => {
      switch (action.type) {
        case ACTIONS.SAVE_NEW_COURSE:
          return {...state ,coursesArray: [...state.coursesArray, returnNewCourse(action.payload)]}
          case 'SAVE2':
          return {...state, courseGroupArray: [...state.courseGroupArray, returnNewCourseGroupObject(action.payload) ] }
          case 'INITCOURSEDATA':
          return {courseGroupArray:action.payload , coursesArray: action.payload}
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

  


    const [state, dispatch]:any = React.useReducer<any>(reducer, {coursesArray:[...courses], courseGroupArray:[]})

    console.log(state, 'state')

    const coursesArray = state.coursesArray
    const courseGroupArray = state.courseGroupArray

  // const [state, dispatch] = React.useReducer<any, ()=>void>(reducer, [])

    const saveCurrentCourse = (CourseObj:IsaveCurrentCourseArg) => {

      if(!CourseObj.currentCourseName || !CourseObj.currentCourseCode){
        setnotfication( {
          type:'error-mini',
          message:'Please, input basic information'
        } )

        return
      }

      setcurrentCodeDesc('')
      setcurrentCourseName('')
      setcurrentCourseCode('')
      setcurrentNoWeeks('')
      setcurrentDuration({NoDays:null, NoWeeks:null})

      const courseGroupArrayArg:IcourseGroupObject = state.courseGroupArray

      updateUserCourseData({CourseObj, courseGroupArrayArg})
      dispatch({type:ACTIONS.SAVE_NEW_COURSE, payload: CourseObj})
    }

    // const SaveCourseOnline = () => {
      
    // }



    const saveCurrentCourseGroup = (Obj:IsaveCurrentCourseGroupArg) => {
    
      setcurrentCourseGroupDesc('')
      setcurrentCourseGroupAbv('')
      setcurrentCourseGroupName('')
      dispatch({type:ACTIONS.SAVE_NEW_COURSEGROUP, payload:Obj})
    }

    

    // function dam() {
    //         dispatch({type: 'SAVE'})
    // }



  return (
    <CourseContext.Provider value={{CourseObject, CoursesArray, toggleNewCoursePanel, isNewCoursePanelOpen, setisNewCoursePanelOpen, isTopicPanelOpen, toggleTopicPanel, currentCourseName,currentCodeDesc,currentCourseCode,currentNoWeeks, setcurrentCourseName, setcurrentCodeDesc, setcurrentCourseCode, setcurrentNoWeeks, saveCurrentCourse,  coursesArray, toggleisDowCarousel, isDowCarousel, setisDowCarousel,  currentDaysOfWeek, setcurrentDaysOfWeek, courseListSelectedCourse, setcourseListSelectedCourse, setisCourseList, isCourseList, isParentCourse, setisParentCourse, isCreateCourseGroupOpen, setisCreateCourseGroupOpen,currentCourseGroupName,currentCourseGroupAbv,
currentCourseGroupDesc,currentCourseGroupCourseArray,inputCourseGroupDetails,saveCurrentCourseGroup, courseGroupArray,currentCourseGroup, setcurrentCourseGroup,isDurationModal, setisDurationModal, currentCourseStartDate, setcurrentCourseStartDate, currentDuration, setcurrentDuration, 
     }}>
        {props.children}
    </CourseContext.Provider>
  )
}

export {CourseContextProvider, CourseContext}