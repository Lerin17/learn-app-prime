import React from 'react'
import StudentLibary from '../components/students/StudentLibary'


import {TiPlusOutline} from 'react-icons/ti'
import {BiSearchAlt} from 'react-icons/bi'
import { Button } from '@mui/material'
import StudentCP from '../components/students/StudentCP'
import { StudentContext } from '../context/StudentContext'
import chroma from 'chroma-js'

import { Istudentcontext } from '../types/context/studentcontext'
import { HiSearchCircle } from 'react-icons/hi'
import { DuttonSmall } from '../components/GeneralPurpose/dutton'
import NewStudentpanel from '../components/students/NewStudentpanel'
import ReactSelect, {StylesConfig} from 'react-select'


const students = () => {

    const {openAssesmentPanel, isAssesmentopen,   isNewStudentOpen} = React.useContext(StudentContext) as Istudentcontext

    const colourStyles: StylesConfig = {
        control: (baseStyles, state) => ({ ...baseStyles, backgroundColor: 'white', borderRadius:'0px', 
        borderColor: state.isFocused ? '' : 'gray',
        borderWidth:"2px"
    
    }),

        
      
      };

      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

  return (
    <div className='font-header6 w-full flex justify-center  h-full ' >
        
       
    <div className=' mt-4 w-full'>
         {/* students search bar START */}
         
         <div className='w-8/12  mx-auto  '>
            <div className='flex   w-full items-center ' >
            <div className='self-bottom mr-1 cursor-pointer text-white text-4xl'>
                <DuttonSmall
                icon={ <HiSearchCircle/>}
                handleClick={()=>console.log('search Students')}
                />
            
            </div>
            <input placeholder='Search' className='text-4xl border-b border-black w-full font-header12 text-white bg-transparent ' />
        
            </div>

            <div className='w-11/12 mt-2'>
                <ReactSelect
                options={options}
                isMulti
                 styles={colourStyles}
                 theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'gray',
                      primary: 'black',
                    },
                  })}
                placeholder='Filter Students via Courses Offered'
                />
            </div>
        </div>

        {/* students search bar END */}


        <div className='flex justify-center mt-4' >
            {!isNewStudentOpen? <div  style={{
}} className={`${isAssesmentopen || isNewStudentOpen?'w-5/12':'w-5/12'}    h-5/6`}>
            <StudentLibary/>
        </div>:<div className=' w-5/12' >
            <NewStudentpanel/>
            </div>}
      

            <div className={`${isAssesmentopen ||   isNewStudentOpen?'w-3/12 ':'w-3/12 '} `}>
                <StudentCP/>
            </div>
        </div>

    </div>

     
      
        </div>
  )
}

export default students