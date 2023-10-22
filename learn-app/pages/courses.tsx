import type { NextPage } from 'next'
import { Button } from '@mui/material'

import CreateCourse from '../components/courses/createCourse'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { type } from 'os'
import { CourseContext } from '../context/CourseContext'
import { Icoursecontext } from '../types/context/coursecontext'
import SelectedCourseInfo from '../components/courses/courseList/selectedCourseInfo'
import CreateCourseGroup from '../components/courses/courseList/createCourseGroup'

import {TiPlus} from 'react-icons/ti'
import AnimationContainer from '../components/GeneralPurpose/AnimationContainer'
import CoursesHome from '../components/courses/CoursesHome'
import { UtilityContext } from '../context/UtilityContext'
const nylon = 'learn-app\images\cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BmLXMxMjQtdGQtNzAzNF8yLmpwZw.webp'

import { Iutilitycontext } from '../types/context/utilitycontext'
const courses: NextPage = () => {

  const {isNewCoursePanelOpen, toggleNewCoursePanel, coursesArray, courseListSelectedCourse, isCourseList, setisCourseList, isCreateCourseGroupOpen, setisCreateCourseGroupOpen,} = React.useContext(CourseContext) as Icoursecontext


  const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext
  const parentVariant = {
    move: {
        y:isNewCoursePanelOpen? 0:-400,
        scale: isNewCoursePanelOpen?1:0.2,
        opacity:isNewCoursePanelOpen?'1':'0.5',
        // y: isTopicPanelOpen? 0:-400,
        // display: 'none',
        transition: {
            duration: 0.7,
            delayChildren: 0.3
          },
    },
   
    static: {
        y: -400,
        scale: 0.2,
        opacity:'0.5'
    }
}

const childrenVariant = {
    move: {
        // y:  300:0,
        display:isNewCoursePanelOpen? 'block':'none',
        transition: {
            duration: 0.4,
            // delayChildren: 0.3
          },
    },
    static: {
        display: 'none'
    }
}

const parentVariant1 = {
  move: {
      y:isNewCoursePanelOpen? 0:-400,
      scale: isNewCoursePanelOpen?1:0.2,
      opacity:isNewCoursePanelOpen?'1':'0.5',
      // y: isTopicPanelOpen? 0:-400,
      // display: 'none',
      transition: {
          duration: 0.7,
          delayChildren: 0.3
        },
  },
 
  static: {
      y: -400,
      scale: 0.2,
      opacity:'0.5'
  }
}

const childrenVariant1 = {
  move: {
      // y:  300:0,
      display:isNewCoursePanelOpen? 'block':'none',
      transition: {
          duration: 0.4,
          // delayChildren: 0.3
        },
  },
  static: {
      display: 'none'
  }
}





console.log(isCourseList,'damnxxxx')

console.log(courseListSelectedCourse, 'courseListSelectedCourse')

console.log(isNewCoursePanelOpen, 'createCOurse')

  return (
    <AnimationContainer
    Component={<CoursesHome/>}
    condition={true}
    key={routerLocation}
    />
    // <div className={` ${isNewCoursePanelOpen?'':"xl:px-16 lg:px-14 "}   px-0 h-full font-header6` }>
    //     {/* <div>Courses</div> */}
    //     <div className='flex justify-center' >
    //         <div className={`${isNewCoursePanelOpen?'xl:w-8/12 lg:w-10/12':"xl:w-7/12 lg:w-9/12"}  w-11/12 `}>

    //           {/* MENU BAR */}
    //           <div >
       
            

    //           <div className=''>
               
    //             <CourseList/>

    //           </div>
            
             
               

    //             <motion.div 
               
    //             className={`${courseListSelectedCourse?'h-full block':""}`} >
    //               {courseListSelectedCourse && (
    //                 <motion.div 
    //                 transition={{duration:0.5, type:'tween'}}
    //                 initial={{y:-400}}
    //                 animate={{y:0}} >
    //                 <SelectedCourseInfo/>
    //                 </motion.div>
    //               )

    //               }
                  

    //             </motion.div>

                
    //                  <CreateCourse/>
                

    //             <CreateCourseGroup/>
                  

    //           </div>

           
         
    //         </div>

            

    //     </div>
        
    // </div>
  )
}

export default courses