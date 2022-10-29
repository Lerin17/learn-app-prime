import React from 'react'

import { CourseContext } from '../../context/CourseContext'
import { Icoursecontext } from '../../types/context/coursecontext'

const CourseList = () => {
    const {CoursesArray, coursesArray} = React.useContext(CourseContext) as Icoursecontext

    const CourseListDisplay = () => {

        console.log(coursesArray, 'jaws')

        if(coursesArray.length === 0){
            return <div className='' >
                <div className='text-lg' >Course list</div>
                <div className='text-5xl ' >
                    No Courses Created Yet,
                    <span>Create Courses [+]</span>
                </div>
              
            </div>
        }else{
            return <div>
                Courses Available
            </div>
        }
    }

  return (
    <div>
        <CourseListDisplay/>
    </div>
  )
}

export default CourseList