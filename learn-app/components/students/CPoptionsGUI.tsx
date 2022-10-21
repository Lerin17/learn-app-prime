import { Button, InputBase, TextField } from '@mui/material'
import React from 'react'
import { StudentContext } from '../../context/StudentContext'
import { Istudentcontext } from '../../types/context/studentcontext'

// import {SIUserFemale} from 'react-icons/si'
// import {SlUserFemale} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
// TextField
import Switch from '@mui/material/Switch'
import Radio from '@mui/material/Radio'
// import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem'
// import SwitchBase from '@mui/material/internal/SwitchBase'

const CPoptionsGUI = () => {

    const {currentCPoption, setcurrentStudentAge, currentStudentAge} = React.useContext(StudentContext) as Istudentcontext

    const handleChangeAge = (e:any) => {
        setcurrentStudentAge(e.target.value)
    }

    const newStudentGUI = () => {
        return <div className=' h-full w-full '>
            {/* <div>Search</div> */}
            <div className='w-full' >


                <div className=' px-4'>
                   
                    <input placeholder='Name'
                    className='text-red-600 bg-transparent my-2 border-b-2 border-black border-dotted  py-2 w-full'
                    />
                
                 
                
                <div className='flex w-full' >
                    <div className=' ' >
                        <div>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                <Select 
                    className='bg-amber-600 rounded-none'
                     labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
          value={currentStudentAge}
          onChange={handleChangeAge}
             >
                <MenuItem value="">
                 <em>None</em>
                </MenuItem>
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
                 </Select>
              </FormControl>
                        </div>
                
                    </div>
                

                    <div className='w-full  ' >
                        <div className='mr-2 text-bold text-white' >Email</div>
                            <input placeholder='Age'
                                    
                                    className='text-white w-full bg-transparent my-2  border-b-2 border-black border-dotted '
                                    />
                    </div>
            </div>
                

            <div>
                Courses
                <div>

                </div>
            </div>
             
              
                </div>
            </div>

            {/* <div className='border' >
                 <input
                className='text-white  bg-black my-2 rounded-xl border border-white '
                />
            </div> */}
            

            {/* <div>
                <Button>
                    Save
                </Button>
            </div> */}
           
        </div>
    }

    const searchGUI = () => {
        return <div>
        <div>Search</div>
        <TextField
            label="Standard warning"
            variant="standard"
            color="warning"
            focused
        />
    </div>
    }


    const GetGUI = () => {
        if(currentCPoption == 'Search'){
            return (<div className='' >
                 {searchGUI()}
                </div>)
        }else if(currentCPoption == 'New student'){
            return (<div>
                {newStudentGUI()}
            </div>)
        }else {
            return <div>d</div>
        }
    }

  return (
    <div className='w-full'>
        <div className='w-full' >
            <GetGUI/>
        </div>
    </div>
  )
}

export default CPoptionsGUI