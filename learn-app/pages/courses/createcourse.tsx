import React from 'react'

import CreateCourse from '../../components/courses/createCourse'
import AnimationContainer from '../../components/GeneralPurpose/AnimationContainer'
import { UtilityContext } from '../../context/UtilityContext'

import { Iutilitycontext } from '../../types/context/utilitycontext'

const createcourse = () => {

    const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext

  return (
    <AnimationContainer
    Component={<CreateCourse/>}
    condition={true}
    key={routerLocation}
    />
  )
}

export default createcourse