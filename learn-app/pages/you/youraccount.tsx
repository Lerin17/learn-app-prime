import React from 'react'
import AnimationContainer from '../../components/GeneralPurpose/AnimationContainer'
import Login from '../../components/login/Login-SignupModal'
<Login/>

const yourAccount = () => {
  return (
    <AnimationContainer
    Component={<Login/>}
    condition={true}
    />
  )
}

export default yourAccount

// const washingtonRef = db.collection('cities').doc('DC');

// // Atomically add a new region to the "regions" array field.
// const unionRes = await washingtonRef.update({
//   regions: FieldValue.arrayUnion('greater_virginia')
// });
// // Atomically remove a region from the "regions" array field.
// const removeRes = await washingtonRef.update({
//   regions: FieldValue.arrayRemove('east_coast')
// });

// // To add or remove multiple items, pass multiple arguments to arrayUnion/arrayRemove
// const multipleUnionRes = await washingtonRef.update({
//   regions: FieldValue.arrayUnion('south_carolina', 'texas')
//   // Alternatively, you can use spread operator in ES6 syntax
//   // const newRegions = ['south_carolina', 'texas']
//   // regions: FieldValue.arrayUnion(...newRegions)
// });