

import React from 'react'

const CourseContext = React.createContext(null)

const CourseContextProvider = (props:any) => {


    const [CoursesArray, setCoursesArray] = React.useState();

    const [CourseObject, setCourseObject] = React.useState();


  return (
    <CourseContext.Provider value={{}}>
        {props.children}
    </CourseContext.Provider>
  )
}

export {CourseContextProvider, CourseContext}