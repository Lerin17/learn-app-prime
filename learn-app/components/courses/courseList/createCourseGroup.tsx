import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CourseContext } from '../../../context/CourseContext'
import { Icoursecontext } from '../../../types/context/coursecontext'
import { InputBase } from '@mui/material'


const CreateCourseGroup = () => {

    const {isCreateCourseGroupOpen, setisCreateCourseGroupOpen, setisCourseList,inputCourseGroupDetails, saveCurrentCourseGroup,currentCourseGroupDesc,
        currentCourseGroupAbv,
        currentCourseGroupName, } = React.useContext(CourseContext) as Icoursecontext

    console.log(isCreateCourseGroupOpen, 'damn')

        // setTimeout(() => {
        //     setisCourseList(true)
        //     setisCreateCourseGroupOpen(false)
        // }, 5000);

    return (
    <div>{
        isCreateCourseGroupOpen &&
        <AnimatePresence>
            <motion.div style={{
                height: 600
            }}  className=' p-2' initial={{y:200}}
                 animate={{y:0}}
                 transition={{type:"spring", stiffness:100}}
                 exit={{ opacity:0.1, y:400, display:'none'}} >
                 
                    <div className=' h-full flex flex-col'>
                    <div className='w-full' >
                    {/* createCourseGroup */}
                    <div className='text-4xl font-header9 px-2 h-1/2 bg-gradient-to-r from-red-700 to-amber-800   py-8 pt-4 relative'>

                        <div className='flex justify-end' >
                            <div onClick={()=>{
                            setisCreateCourseGroupOpen(false)
                            setisCourseList(true)
                            }}>
                                [X]
                            </div>
                        </div>
                        <div className='flex text-5xl items-center bg-gradient-to-r from-red-800 to-amber-800 text-gray-300 py-4 px-2'>
                            Name:
                            <InputBase 
                            value={currentCourseGroupName}
                            onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{inputCourseGroupDetails({name:e.target.value, abv:currentCourseGroupAbv, desc:currentCourseGroupDesc})}}
                            placeholder='Course Group Name'
                            className='text-base w-full mx-2 text-white px-2 border-b-2  font-header8'
                            />
                        </div>


                        <div className='text-3xl flex  items-center text-gray-300 bg-gradient-to-r from-red-800 to-amber-800 font-header9  py-4 px-2'>
                        Abv:
                        <InputBase 
                        value={currentCourseGroupAbv}
                          onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{inputCourseGroupDetails({name:currentCourseGroupName,
                            abv:e.target.value, desc:currentCourseGroupDesc})}}
                        placeholder='Course Group Name'
                        className='text-base mx-2 text-white w-full px-2 border-b-2  font-header8 '
                        />
                        </div>


                        <div className='text-2xl flex  items-center font-header9  bg-gradient-to-r from-red-800 to-amber-800 py-4 text-gray-300 px-2'>
                        desc:
                        <InputBase 
                        value={currentCourseGroupDesc}
                          onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{inputCourseGroupDetails({name:currentCourseGroupName, abv:currentCourseGroupAbv, desc:e.target.value})}}
                        placeholder='Course Group Name'
                        className='text-base mx-2 text-white w-full px-2 border-b-2  font-header8 '
                        />
                        </div>
                  
                 
                   <div className=' p-3 cursor-pointer flex justify-end'>
                    <div onClick={()=>{saveCurrentCourseGroup({currentCourseGroupDesc, currentCourseGroupAbv,currentCourseGroupName})}} className='hover:scale-105 transition-all hover:text-gray-300' >
                        [Save]
                    </div>
                    {/* <div className='text-xl font-header8'>
                        go back
                    </div> */}
                   </div>
                    </div>

                    </div>


               

                    </div>
     
            </motion.div>
        </AnimatePresence>
        }
       </div>
  )
}

export default CreateCourseGroup