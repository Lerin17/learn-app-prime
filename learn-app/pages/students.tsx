import React from 'react'
import StudentLibary from '../components/students/StudentLibary'

import {TiPlusOutline} from 'react-icons/ti'
import {BiSearchAlt} from 'react-icons/bi'
import { Button } from '@mui/material'
import StudentCP from '../components/students/StudentCP'
import { StudentContext } from '../context/StudentContext'

import { Istudentcontext } from '../types/context/studentcontext'
import { HiSearchCircle } from 'react-icons/hi'

const students = () => {

    const {openAssesmentPanel, isAssesmentopen,   isNewStudentOpen} = React.useContext(StudentContext) as Istudentcontext



  return (
    <div className='font-header6 flex justify-center  h-full ' >
        
       
    <div className=' w-10/12  mt-4  '>
         {/* students */}
         <div className='w-8/12  mx-auto  flex '>
        <div className='flex  w-full border-b border-black ' >
        <input placeholder='Search' className='text-4xl w-full  text-white bg-transparent' />
        <div className='self-bottom text-white text-4xl' >
            <HiSearchCircle/>
        </div>
        </div>
        </div>


        <div className='flex justify-center mt-4 ' >
            <div  style={{
   
    }} className={`${isAssesmentopen || isNewStudentOpen?'w-5/12':'w-5/12'}   h-5/6`}>
                <StudentLibary/>
            </div>

            <div className={`${isAssesmentopen ||   isNewStudentOpen?'w-3/12 ':'w-3/12 '} `}>
                <StudentCP/>
            </div>
        </div>

    </div>

     
      
        </div>
  )
}

export default students