import React from 'react'

import CreateCourseGroup from '../../components/courses/courseList/createCourseGroup'
import AnimationContainer from '../../components/GeneralPurpose/AnimationContainer'
import { UtilityContext } from '../../context/UtilityContext'

import { Iutilitycontext } from '../../types/context/utilitycontext'

const coursegroups = () => {

    const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext

  return (
    <AnimationContainer
    Component={<CreateCourseGroup/>}
    condition={true}
    key={routerLocation}
    />
  )
}

export default coursegroups