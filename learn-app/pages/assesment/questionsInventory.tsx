import React from 'react'

import QuestionsList from '../../components/assesment/QuestionsList'
import AnimationContainer from '../../components/GeneralPurpose/AnimationContainer'
import { UtilityContext } from '../../context/UtilityContext'

import { Iutilitycontext } from '../../types/context/utilitycontext'

const questionsInventory = () => {

    
const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext

  return (
    <AnimationContainer
    Component={<QuestionsList/>}
    condition={true}
    key={routerLocation}
    />
  )
}

export default questionsInventory