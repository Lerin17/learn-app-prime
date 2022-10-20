import React from 'react'
import {motion} from 'framer-motion'
import { StudentContext } from '../../context/StudentContext'
import { Istudentcontext } from '../../types/context/studentcontext'

const StudentLibary = () => {

const {openAssesmentPanel, isAssesmentopen} = React.useContext(StudentContext) as Istudentcontext

const StudentArray = new Array(20).fill('x')

const StudentLibaryDisplay = StudentArray.map(item => <motion.div animate={isAssesmentopen && {scale:2}} transition={{type:'tween', duration: 0.5}} style={{
    height: '100px',
    width: '100px'
}} className={`text-white border-2 border-white rounded-xl border-r-none bg-gradient-to-b from-black via-black to-gray-800 bg-gradient-to-r rhombus  ${isAssesmentopen?'mx-8 mt-6':''}`} >
    *
</motion.div>)

  return (
    <div className={`flex flex-wrap justify-center ${isAssesmentopen?'w-3/6  h-min':'w-full '} transition-all bg-red-400`} >
        {StudentLibaryDisplay}
    </div>
  )
}

export default StudentLibary