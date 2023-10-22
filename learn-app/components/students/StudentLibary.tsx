import React from 'react'
import {motion} from 'framer-motion'
import { StudentContext } from '../../context/StudentContext'
import { Istudentcontext } from '../../types/context/studentcontext'

const StudentLibary = () => {

const {openAssesmentPanel, isAssesmentopen} = React.useContext(StudentContext) as Istudentcontext

const StudentArray = new Array(20).fill('x')

const StudentLibaryDisplay = StudentArray.map(item => <motion.div animate={isAssesmentopen ? {scale:1.5}:{scale:1}} transition={{type:'tween', duration: 0.5}} style={{
    height: '100px',
    width: '100px'
}} className={`text-white   mr-1 mb-1 border-4  border-amber-900 rhombus  ${isAssesmentopen?'mx-8 mt-14':''}`} >
  <span className='font-header8 text-2xl text-white'>
    *
  </span>
   
</motion.div>)

  return (
    <div 
    style={{
      overflow: 'auto',
      height: isAssesmentopen? '600px': ''
    }}
    className={`flex flex-wrap justify-start  transition-all `} >
        {StudentLibaryDisplay}
    </div>
  )
}

export default StudentLibary