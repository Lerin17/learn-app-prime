import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React from 'react'
import AnimationContainer from '../../components/GeneralPurpose/AnimationContainer'
import YouHome from '../../components/you/YouHome'
import YourPackages from '../../components/you/YourPackeges'
import { UtilityContext } from '../../context/UtilityContext'
import { Iutilitycontext } from '../../types/context/utilitycontext'





const yourpackages = () => {

  const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext

  return (
   
          <AnimationContainer
          Component={<YourPackages/>}
          condition={Boolean(routerLocation == '/you/yourpackages')}
          />
  )

  
 
}

export default yourpackages