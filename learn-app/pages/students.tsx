import React from 'react'
import StudentLibary from '../components/students/StudentLibary'

import {TiPlusOutline} from 'react-icons/ti'
import {BiSearchAlt} from 'react-icons/bi'
import { Button } from '@mui/material'
import StudentCP from '../components/students/StudentCP'
import { StudentContext } from '../context/StudentContext'

import { Istudentcontext } from '../types/context/studentcontext'


const students = () => {

    const {openAssesmentPanel, isAssesmentopen,   isNewStudentOpen} = React.useContext(StudentContext) as Istudentcontext

  return (
    <div className=' px-20 font-header6  h-full' >
        
        {/* students */}
        <div className='flex justify-between' >
            <div  style={{
   
    }} className={`${isAssesmentopen || isNewStudentOpen?'w-4/12':'w-5/12'} h-full`}>
                <StudentLibary/>
            </div>

            <div className={`${isAssesmentopen ||   isNewStudentOpen?'w-7/12 ':'w-6/12'} `}>
                <StudentCP/>
            </div>
        </div>
      
        </div>
  )
}

export default students