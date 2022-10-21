import { Button } from '@mui/material'
import React from 'react'

const courses = () => {
  return (
    <div className='px-20 h-full' >
        <div>Courses</div>
        <div className='flex justify-between' >
            <div className='w-5/12 border' >
                <Button>Create Course</Button>
                <div>courses list</div>
            </div>

            <div className='w-6/12 border' >
                <div>courses details</div>
            </div>

        </div>
        
    </div>
  )
}

export default courses