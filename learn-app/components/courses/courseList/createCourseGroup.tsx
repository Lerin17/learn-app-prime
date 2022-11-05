import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CourseContext } from '../../../context/CourseContext'
import { Icoursecontext } from '../../../types/context/coursecontext'
import { InputBase } from '@mui/material'


const CreateCourseGroup = () => {

    const {isCreateCourseGroupOpen, setisCreateCourseGroupOpen, setisCourseList,inputCourseGroupDetails } = React.useContext(CourseContext) as Icoursecontext

    console.log(isCreateCourseGroupOpen, 'damn')

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
                 
                    <div className=' h-full flex'>
                    <div className='w-2/3' >
                    {/* createCourseGroup */}
                    <div className='text-4xl font-header9 px-4 h-2/3 bg-gradient-to-r from-red-800 to-amber-800 pt-4'>
                        <div className='flex text-4xl items-center'>
                            Name:
                            <InputBase 
                            onClick={()=>inputCourseGroupDetails() }
                            placeholder='Course Group Name'
                            className='text-base w-full mx-2 text-white px-2 border-b-2  font-header8'
                            />
                        </div>


                        <div className='text-2xl flex mt-4 items-center font-header9 mt-8'>
                        Abv:
                        <InputBase 
                        placeholder='Course Group Name'
                        className='text-base mx-2 text-white w-full px-2 border-b-2  font-header8'
                        />
                        </div>


                        <div className='text-lg flex mt-4 items-center font-header9 mt-8'>
                        desc:
                        <InputBase 
                        placeholder='Course Group Name'
                        className='text-base mx-2 text-white w-full px-2 border-b-2  font-header8'
                        />
                        </div>
                  
                   
                    </div>

                    <div className='text-4xl font-header9 px-4 h-1/3 bg-gradient-to-t from-red-800 to-amber-800'>
                        description
                        {/* Code
                        <InputBase 
                        placeholder='Code'
                        className='text-4xl mx-2 text-white px-2 border-b-2  font-header9'
                        /> */}
                    </div>
                    </div>


                    <div className='h-full  w-1/3 bg-amber-800 mt-4' >
                        <div className='h-2/3 bg-gradient-to-b from-red-800 to-amber-800'>
                            <div onClick={()=>{
                              
                                setisCreateCourseGroupOpen(false)}} className='flex justify-end font-bold hover:scale-110 transition-all hover:text-gray-300 p-2 cursor-pointer hover:p-4'>
                                [X]
                            </div>
                            {/* <div>Example</div> */}
                            <div className='flex justify-center text-2xl font-header9'>
                                [[][][]]
                            </div>

                            <div className='flex flex-col items-center justify-center pt-4 cursor-pointer' >
                                <div className='font-header9 text-6xl text-gray-300 italic' >
                                    Math
                                </div>
                                <div className='text-lg font-bold text-white font-header8 border-y' >
                                    101 102 103 104
                                </div>
                            </div>
                            
                            <div className='px-2 text-center text-gray-300'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit ipsum doloremque architecto
                            </div>

                        </div>

                        <div className='h-1/3 bg-gradient-to-l from-red-800 to-amber-800'>
                            Test
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