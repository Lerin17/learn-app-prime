import React from 'react'
import { StudentContext } from '../../context/StudentContext'

import { Istudentcontext } from '../../types/context/studentcontext'
import { DuttonSmall, DuttonAlt } from '../GeneralPurpose/dutton'
import StudentCP from './StudentCP'
import StudentLibary from './StudentLibary'
import { HiSearchCircle } from 'react-icons/hi'
import NewStudentpanel from './NewStudentpanel'

import ReactSelect, {StylesConfig} from 'react-select'



const StudentsHome = () => {


    const {openAssesmentPanel, isAssesmentopen,   isNewStudentOpen} = React.useContext(StudentContext) as Istudentcontext

    
    const colourStyles: StylesConfig = {
        control: (baseStyles, state) => ({ ...baseStyles, backgroundColor: 'white', borderRadius:'0px', 
        borderColor: state.isFocused ? 'black' : '#2e1507',
        borderWidth:"1px",
        color:'honeydew'
    
    }),

        
      
      };

      const options = [
        { value: 'English 101', label: 'English 101' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

  return (
    <div className='font-header6 w-full flex justify-center  h-full ' >
        
       
    <div className=' mt-4 w-full'>
         {/* students search bar START */}
         
         <div className='w-8/12  mx-auto  '>
            <div className='flex border-b-2  w-full items-center ' >
            <div className='self-bottom mr-1 cursor-pointer text-white text-4xl border-white'>
                <DuttonAlt
                icon={ <HiSearchCircle/>}
                handleClick={()=>console.log('search Students')}
                />
            
            </div>
            <input placeholder='Search ' className='text-4xl  transition-all border-b-2 focus:border-none focus:text-stone-400  w-full font-header12 text-stone-300 bg-transparent ' />
        
            </div>

            <div className='w-11/12 mt-2'>
                <ReactSelect
                options={options}
                isMulti
                 styles={colourStyles}
                 theme={(theme) => ({
                    ...theme,
                    borderRadius: 1,
                    colors: {
                      ...theme.colors,
                      primary25: 'gray',
                      primary: 'black',
                    },
                  })}
                placeholder='Filter Students via Courses or Packages Offered'
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

export default StudentsHome