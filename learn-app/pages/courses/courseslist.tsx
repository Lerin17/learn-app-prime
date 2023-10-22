import React from 'react'



import CoursesHome from '../../components/courses/CoursesHome'
import CoursesList from '../../components/courses/CoursesList'
import AnimationContainer from '../../components/GeneralPurpose/AnimationContainer'
import { UtilityContext } from '../../context/UtilityContext'

import { Iutilitycontext } from '../../types/context/utilitycontext'



const courseslist = () => {

    const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext 

  return (
    <AnimationContainer
    Component={<CoursesList/>}
    condition={true}
    key={routerLocation}
    />
  )
}

export default courseslist