import React from 'react'
import AnimationContainer from '../../components/GeneralPurpose/AnimationContainer'
import YourNetwork from '../../components/you/YourNetwork'




const yournetwork = () => {
  return (
    <AnimationContainer
    Component={<YourNetwork/>}
    condition={true}
    />
  )
}

export default yournetwork