import React from 'react'
import StudentLibary from '../components/students/StudentLibary'

import {TiPlusOutline} from 'react-icons/ti'
import {BiSearchAlt} from 'react-icons/bi'
import { Button } from '@mui/material'
import StudentCP from '../components/students/StudentCP'



const students = () => {
  return (
    <div className=' px-20 font-header4 h-full' >
        
        students
        <div className='flex justify-between' >
            <div className='w-5/12 h-full'>
                <StudentLibary/>
            </div>

            <div className='w-6/12  rounded-xl border-l-0'>
                <StudentCP/>
            </div>
        </div>
      
        </div>
  )
}

export default students