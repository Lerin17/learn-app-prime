import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { CourseContext } from '../../context/CourseContext'

import { Icoursecontext } from '../../types/context/coursecontext'

import SelectedCourseInfo from './courseList/selectedCourseInfo'
import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'


const CoursesList = () => {

  const {userData} = React.useContext(UserContext) as Iusercontext

  const { coursesArray , setcourseListSelectedCourse, courseListSelectedCourse   } = React.useContext(CourseContext) as Icoursecontext

  // const [CourseArray, setCourseArray] = React.useState(MultiCourseArray);
  // const coursesArray = userData.allCourses

  const openSingleCourse = (num:any) => {
    console.log(num, 'num')

    // console.log(CoursesArray)
    console.log(coursesArray, 'coursesArray')

   const selectedCourse = coursesArray.find(item => item.courseId === num)

   setcourseListSelectedCourse(selectedCourse)
   
    // setisCourseList(false)
    // setisNewCoursePanelOpen(true)
}
    
  const SingleCourse = (props:any) => {
    const mainName = props.courseCode.substring(0, 3)

    const numberCode = props.courseCode.substring(4, 7)

    console.log(props.id, 'dd')

    const isVisible = props.isVisible

    // let isVis = CourseArray.find(item => item.id == props.id)?.isVisible

    console.log(isVisible)



    return (
   <AnimatePresence>

           (
             
                <motion.div  className='mt-4  w-full'
                  onClick={()=>{
                  //  console.log('xe')
                    openSingleCourse(props.id)}}
                  key={props.courseId}
                  initial={{x:20, y:20}} 
                  animate={props.isAnimate? {x:0, y:0, scale:1 }:{x:20}} 
                  exit={{scale:2, y:300}}
                  transition={{duration:0.5, type:'tween'}} 
             
                  >

      
                  
               
               <div style={{
          
                //  background: 'rgb(139,69,19)',
                 background: 'linear-gradient(90deg, rgba(218,94,18,1) 2%, rgba(180,83,9,1) 31%, rgba(146,64,14,1) 67%, rgba(120,53,15,1) 86%)'
               }}
               className={`${'w-fit hover:scale-105 transition-all font-header9  px-1 '} flex text-orange-900 mt-2 justify-between  cursor-pointer relative`} >
                    <div  className='flex flex-row  w-5/6 text-gray-300' >
                        <div className='flex uppercase absolute top-0 -mt-4' >
                        <div style={{
                            //   color:'brown',
                              WebkitTextStroke: '2px saddlebrown',
                    }} className='text-6xl font-header9 '>
                        {mainName}
                        </div>
                          
                        <div className='text-xl text-gray-400 font-bold' >
                            101
                            {numberCode}
                        </div>
                        </div>

                        <div className=' self-end px-2 pt-4 mt-4 text-white uppercase text-lg font-bold' >
                            mathematics and studides
                            mathematics and studides
                        </div>
                    </div>
                
  
                
               
                    
                    <div className='mr-10   align-center text-gray-300  ' >
                        <div>
                         next class is on tuesday
                          </div> 
                          <div>at 4:00</div>
                    </div>
                        
                 
                 
                      
                  <div className='text-white px-2 flex flex-col' >
                        <div className='text-3xl font-header8 italic' >
                        {props.NoWeeks}
                        </div>
                    
                      <div>
                      weeks
                      </div>
       
                  </div>
               </div>
           
                    </motion.div>
       
            
           )
   </AnimatePresence>
    )
}


  const MultiCourseDisplay = coursesArray.map((item,i) => (<SingleCourse
    courseName={item.courseName}
    courseDesc={item.courseDesc}
    courseCode={item.courseCode}
    NoWeeks={'e'}
    id={item.courseId}
    isVisible={true}
    // isAnimate={item.isAnimate}
/>))


  return (
    <div className='flex  justify-center'>
      {courseListSelectedCourse?  <SelectedCourseInfo/>: <div>
        {MultiCourseDisplay}
      </div>}

    </div>
  )
}

export default CoursesList