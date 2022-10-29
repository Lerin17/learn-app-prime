import { Button } from '@mui/material'
import CourseList from '../components/courses/courseList'
import CreateCourse from '../components/courses/createCourse'
import React from 'react'
import { motion } from 'framer-motion'
import { type } from 'os'
import { CourseContext } from '../context/CourseContext'
import { Icoursecontext } from '../types/context/coursecontext'

const courses = () => {

  const {isNewCoursePanelOpen, toggleNewCoursePanel} = React.useContext(CourseContext) as Icoursecontext

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

  return (
    <div className='px-20 h-full font-header6' >
        {/* <div>Courses</div> */}
        <div className='flex justify-center' >
            <div className='w-7/12 ' >
              <div >
                <div  className='bg-amber-600 text-3xl flex justify-between'>
                  <div>courses</div>
                  <div onClick={()=>toggleNewCoursePanel()} className='px-2 cursor-pointer hover:scale-110 transition-all'>[+]</div>
                  </div>
             
                <motion.div className={`${isNewCoursePanelOpen?'hidden':'block'}`}>
                  <motion.div>
                     <CourseList/>
                  </motion.div> 
                </motion.div>

                <motion.div variants={parentVariant} initial='static' animate='move' >
                  <motion.div variants={childrenVariant} >
                     <CreateCourse/>
                  </motion.div> 
                </motion.div>
          

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