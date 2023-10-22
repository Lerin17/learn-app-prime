import React from 'react'
import QuestionsTest from '../../components/assesment/QuestionsTest'
import AnimationContainer from '../../components/GeneralPurpose/AnimationContainer'
import { UtilityContext } from '../../context/UtilityContext'

import { Iutilitycontext } from '../../types/context/utilitycontext'



const createTest = () => {

    const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext

  return (
    <AnimationContainer
    Component={<QuestionsTest/>}
    condition={true}
    key={routerLocation}
    />
  )
}

export default createTest