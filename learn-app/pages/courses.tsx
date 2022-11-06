import type { NextPage } from 'next'
import { Button } from '@mui/material'
import CourseList from '../components/courses/courseList'
import CreateCourse from '../components/courses/createCourse'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { type } from 'os'
import { CourseContext } from '../context/CourseContext'
import { Icoursecontext } from '../types/context/coursecontext'
import SelectedCourseInfo from '../components/courses/courseList/selectedCourseInfo'
import CreateCourseGroup from '../components/courses/courseList/createCourseGroup'

import {TiPlus} from 'react-icons/ti'

const courses: NextPage = () => {

  const {isNewCoursePanelOpen, toggleNewCoursePanel, coursesArray, courseListSelectedCourse, isCourseList, setisCourseList, isCreateCourseGroupOpen, setisCreateCourseGroupOpen} = React.useContext(CourseContext) as Icoursecontext

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

  return (
    <div className='xl:px-16 lg:px-14 px-0 h-full font-header6' >
        {/* <div>Courses</div> */}
        <div className='flex justify-center' >
            <div className='xl:w-7/12 lg:w-9/12 w-11/12 ' >
              <div >
                <div 
                style={{
                 background:'radial-gradient(circle, rgba(235,225,225,1) 18%, rgba(215,218,222,1) 26%, rgba(206,210,217,1) 39%, rgba(235,237,241,1) 49%, rgba(204,204,214,0.9876283276982668) 64%, rgba(167,159,159,1) 90%)'
                }}
                className='bg-amber-600 text-xl flex justify-between px-3 py-2 rounded border border-black'>
                  <div>courses/createCourse</div>

                  <div>[X]</div>

                  {Boolean(coursesArray.length)  && 
                  <div className='flex'>
      <motion.div initial={{y:20 ,opacity:0.4}} animate={{y:0, opacity:1}} onClick={()=>{
        // setisCourseList(false)
        toggleNewCoursePanel()}} >
        <div className='px-2 cursor-pointer hover:scale-110 transition-all text-2xl hover:text-gray-300 flex items-center '>
        [ <svg className='hover:text-gray-300 fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>]
        </div>
       </motion.div>

      <motion.div initial={{y:20 ,opacity:0.4}} animate={{y:0, opacity:1}}  >
        <div onClick={()=>{
          setisCourseList(false)
          setisCreateCourseGroupOpen(true)}} className='px-4 cursor-pointer hover:scale-110 transition-all text-2xl hover:text-gray-300 flex items-center'>
        [ <svg className='hover:text-gray-300 fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg> 
        <svg className='hover:text-gray-300 fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg> 
        <svg className='hover:text-gray-300 fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>]
        </div>   
      </motion.div>
                  </div>
                  
                  }
                  
                  </div>

              <div className=''>
               
                <CourseList/>

              </div>
            
             
               

                <motion.div 
               
                className={`${courseListSelectedCourse?'h-full block':""}`} >
                  {courseListSelectedCourse && (
                    <motion.div 
                    transition={{duration:0.5, type:'tween'}}
                    initial={{y:-400}}
                    animate={{y:0}} >
                    <SelectedCourseInfo/>
                    </motion.div>
                  )

                  }
                  

                </motion.div>

                {/* <motion.div variants={parentVariant} initial='static' animate='move' >
                  <motion.div variants={childrenVariant} > */}
                     <CreateCourse/>
                  {/* </motion.div> 
                </motion.div> */}

                <CreateCourseGroup/>
                  

              </div>

           
         
            </div>

            {/* <div className='w-6/12 border' >
                <div>courses details</div>
            </div> */}

        </div>
        
    </div>
  )
}

export default courses