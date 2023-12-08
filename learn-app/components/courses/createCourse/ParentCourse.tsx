import React from 'react'
import { Select, MenuItem, InputBase, Button } from '@mui/material'
import { CourseContext } from '../../../context/CourseContext';
import { Icoursecontext } from '../../../types/context/coursecontext';

import {FormControl, InputLabel} from '@mui/material';
import ReactSelect, {StylesConfig} from 'react-select'

const ParentCourse = () => {

  const {courseGroupArray,currentCourseGroup, setcurrentCourseGroup} = React.useContext(CourseContext) as Icoursecontext

  const [selectedCourseGroup, setselectedCourseGroup] = React.useState<any>('');
  
  const options = [   
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  console.log(selectedCourseGroup,' selected')

  const selectStyles:StylesConfig = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' , border:'none'})
  }

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const handleChange = () => {

}

const inputLabel = 'Course groups'



  return (
    <div className='flex w-full justify-center font-header9 border-b border-amber-900'>

<ReactSelect
  placeholder='Tags for Questions'
  className='text-base w-full focus:border-none'
   options={options}
   isMulti
       theme={(theme) => ({
                    ...theme,
                    borderRadius: 1,
                    colors: {
                      ...theme.colors,
                      primary25: 'gray',
                      primary: 'black',
                    },
                  })}
   onChange={(e:any)=>{
    
    console.log(e)
   }}
   styles={
    selectStyles
    // display:'absolute'
   }
  />

      {/* <div className='mx-2 flex'>

      <div className='text-4xl font-header9'>
        [/]
      </div>


      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg>

   

      <div className='text-4xl font-header8 font-extralight flex items-center' >
        [<span className='font-header9 text-base px-4' >
          V
        </span>
        ]
      </div>

      <InputBase className=' border-b w-full' />
      </div> */}
     
    
      {/* <div>ddd</div>
      <div>ddd</div> */}
    </div>
  )
}

export default ParentCourse