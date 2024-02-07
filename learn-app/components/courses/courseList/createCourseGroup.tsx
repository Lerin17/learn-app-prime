import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CourseContext } from '../../../context/CourseContext'
import { Icoursecontext } from '../../../types/context/coursecontext'



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
    <div className='flex justify-center' >{
        
        <AnimatePresence>
            <motion.div style={{
                height: 600
            }}  className=' p-2 w-8/12' initial={{y:200}}
                 animate={{y:0}}
                 transition={{type:"spring", stiffness:100}}
                 exit={{ opacity:0.1, y:400, display:'none'}} >
                 
                    <div className=' h-full flex flex-col'>
                    <div className='w-full' >
                    {/* createCourseGroup */}
                    <div className='text-4xl font-header12   px-2 h-1/2    py-8 pt-4 relative'>
{/* 
                        <div className='flex justify-end' >
                            <div onClick={()=>{
                            setisCreateCourseGroupOpen(false)
                            setisCourseList(true)
                            }}>
                                [X]
                            </div>
                        </div> */}
                        <div className='flex  lg:text-7xl md:text-4xl xs:text-x border-b-2  text-gray-300  px-2'>
                            Name:
                            <input 
                            value={currentCourseGroupName}
                            onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{inputCourseGroupDetails({name:e.target.value, abv:currentCourseGroupAbv, desc:currentCourseGroupDesc})}}
                            placeholder='Course Group Name'
                            className='w-full focus:border-none focus:text-stone-800 text-stone-400  bg-transparent transition-all  border-b-4 pl-4'
                            />
                        </div>


                        <div className='flex lg:text-7xl md:text-4xl xs:text-xl border-b-2 bg-gradient-to-r from-red-800 to-amber-800   '>
                        Abv:
                        <input
                        value={currentCourseGroupAbv}
                          onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{inputCourseGroupDetails({name:currentCourseGroupName,
                            abv:e.target.value, desc:currentCourseGroupDesc})}}
                        placeholder='Course Group Name'
                        className='w-full focus:border-none focus:text-stone-800 text-stone-400  bg-transparent transition-all  border-b-4 pl-4 '
                        />
                        </div>


                        <div className='flex lg:text-7xl md:text-4xl xs:text-xl border-b-2 font-header12'>
                        Desc:
                        <input 
                        value={currentCourseGroupDesc}
                          onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{inputCourseGroupDetails({name:currentCourseGroupName, abv:currentCourseGroupAbv, desc:e.target.value})}}
                        placeholder='Description'
                        className='w-full focus:border-none focus:text-stone-800 text-stone-400  bg-transparent transition-all  border-b-4 pl-4 '
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