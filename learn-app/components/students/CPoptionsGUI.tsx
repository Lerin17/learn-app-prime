import { Button, InputBase, TextField } from '@mui/material'
import React from 'react'
import { StudentContext } from '../../context/StudentContext'
import { Istudentcontext } from '../../types/context/studentcontext'

// import {SIUserFemale} from 'react-icons/si'
// import {SlUserFemale} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
// TextField


const CPoptionsGUI = () => {

    const {currentCPoption} = React.useContext(StudentContext) as Istudentcontext

    const newStudentGUI = () => {
        return <div className=' h-full'>
            {/* <div>Search</div> */}
            <div className=' ' >


                <div className='text-red-600 flex flex-col px-4'>
                <input placeholder='Name'
                className='text-red-600 bg-transparent my-2 border-b-4 border-blue-500  py-2'
                />
                
                <div className='flex' >
                <input placeholder='Age'
                className='text-red-600 w-2/3 mr-2 bg-transparent my-2  border-b-4 border-blue-500'
                />

                <input placeholder='Age'
                className='text-white w-1/3 bg-transparent my-2  border-b-4 border-blue-500'
                />
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
    <div>
        <div className='relative' >
            <GetGUI/>
            <div className='text-white   border w-52 h-52 hidden' >
                d
            </div>
        </div>
    </div>
  )
}

export default CPoptionsGUI