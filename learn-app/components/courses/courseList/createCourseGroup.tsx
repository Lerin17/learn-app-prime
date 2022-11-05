import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CourseContext } from '../../../context/CourseContext'
import { Icoursecontext } from '../../../types/context/coursecontext'
import { InputBase } from '@mui/material'


const CreateCourseGroup = () => {

    const {isCreateCourseGroupOpen, setisCreateCourseGroupOpen, setisCourseList,inputCourseGroupDetails, currentCourseGroupDesc,currentCourseGroupAbv, currentCourseGroupName } = React.useContext(CourseContext) as Icoursecontext

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
                        <div className='flex text-4xl items-center text-gray-300'>
                            Name:
                            <InputBase 
                            onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{inputCourseGroupDetails({name:e.target.value, abv:currentCourseGroupAbv, desc:currentCourseGroupDesc})}}
                            placeholder='Course Group Name'
                            className='text-base w-full mx-2 text-white px-2 border-b-2  font-header8'
                            />
                        </div>


                        <div className='text-2xl flex mt-4 items-center text-gray-300 font-header9 mt-8'>
                        Abv:
                        <InputBase 
                          onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{inputCourseGroupDetails({name:currentCourseGroupName,
                            abv:e.target.value, desc:currentCourseGroupDesc})}}
                        placeholder='Course Group Name'
                        className='text-base mx-2 text-white w-full px-2 border-b-2  font-header8 '
                        />
                        </div>


                        <div className='text-2xl flex mt-4 items-center font-header9 mt-8 text-gray-300'>
                        desc:
                        <InputBase 
                          onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{inputCourseGroupDetails({name:currentCourseGroupName, abv:currentCourseGroupAbv, desc:e.target.value})}}
                        placeholder='Course Group Name'
                        className='text-base mx-2 text-white w-full px-2 border-b-2  font-header8 '
                        />
                        </div>
                  
                   
                    </div>

                    <div 
                    style={{
                        backdropFilter:'blur(10px)'
                    }}
                    className='text-4xl font-header9 relative px-4 h-1/3 backdrop-blur-lg bg-gradient-to-t from-red-800 to-amber-800 text-gray-300 rounded-bl-3xl hidden'>
                        <div>
                        description
                        </div>

                        <div className='flex justify-start items-end bg-transparent right-0 bottom-0 absolute' >
                            <svg className='fill-current text-red-700' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
                        </div>
                        
                        {/* Code
                        <InputBase 
                        placeholder='Code'
                        className='text-4xl mx-2 text-white px-2 border-b-2  font-header9'
                        /> */}
                    </div>
                    </div>


                    <div  style={{
                        backdropFilter:'blur(10px)'
                    }}
                    className='h-full  w-1/3' >
                        <div className='h-3/4 bg-gradient-to-b from-red-800 to-amber-800 rounded'>
                            <div onClick={()=>{
                              
                                setisCreateCourseGroupOpen(false)}} className='flex justify-end font-bold hover:scale-110 transition-all hover:text-gray-300 p-2 cursor-pointer hover:p-4'>
                                [X]
                            </div>
                            {/* <div>Example</div> */}
                            <div className='flex justify-center text-7xl font-header9 cursor-pointer'>
                                [?]
                            </div>

                            <div className='flex flex-col items-center justify-center pt-4 cursor-pointer' >
                                <div className='font-header9 text-6xl text-gray-300 italic' >
                                    Math
                                </div>
                                <div className='text-lg font-bold text-white font-header8 border-y' >
                                    101 102 103 104
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 4.056l9.137 7.011-4.928.85-4.209-7.861zm-2-4.056v19.823l5.293-4.581 4.281 8.758 3.901-1.907-4.255-8.676 6.78-1.138-16-12.279z"/></svg>
                            </div>
                            
                            <div className='px-2 text-center text-gray-300'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit ipsum doloremque architecto
                            </div>

                       

                        </div>

                        <div className='h-1/4 bg-gradient-to-l from-red-800 to-amber-800 relative
                        rounded-br-3xl hidden'>
                        
                        <div className=' absolute right-0' >
                            <svg className='fill-current text-red-700' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>
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