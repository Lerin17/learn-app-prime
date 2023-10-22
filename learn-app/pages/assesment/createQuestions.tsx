import React from 'react'
import CreateQuestions from '../../components/assesment/CreateQuestions'
import AnimationContainer from '../../components/GeneralPurpose/AnimationContainer'
import { UtilityContext } from '../../context/UtilityContext'

import { Iutilitycontext } from '../../types/context/utilitycontext'

const createQuestions = () => {

    
const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext

  return (
       
    <AnimationContainer
    key={routerLocation}
    Component={<CreateQuestions/>}
    condition={true }
    /> 
    
  )
}

export default createQuestions