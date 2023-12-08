import { Button } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { CourseContext } from '../../context/CourseContext'
import { Icoursecontext } from '../../types/context/coursecontext'
import CreateTopic from './createTopic'
import InputBase from '@mui/material/InputBase'
import DowCarousel from './createCourse/DowCarousel'
import DaysofWeekdisplay from './createCourse/DaysofWeekdisplay'
import ParentCourse from './createCourse/ParentCourse'

import Select from '@mui/material/Select'


const CreateCourse = () => {

    // let Array1 = [1,2]
    // let array2 = [3,4]

    // Array1 = array2

    // array2.push(5)

    // console.log(Array1)
    // console.log(array2)

    // console.log(array2 === Array1, 'reals')
    

    const {isTopicPanelOpen, toggleTopicPanel, currentCourseName, currentCodeDesc, currentCourseCode, setcurrentCodeDesc, setcurrentCourseName, setcurrentCourseCode, currentNoWeeks, setcurrentNoWeeks, saveCurrentCourse, setisNewCoursePanelOpen, isNewCoursePanelOpen ,isDowCarousel,toggleisDowCarousel, setisDowCarousel, addDayOfWeek, currentDaysOfWeek,isCourseList, setisCourseList, isParentCourse,setisParentCourse} = React.useContext(CourseContext) as Icoursecontext

    const parentVariant = {
        move: {
            y:isTopicPanelOpen? 0:-400,
            scale: isTopicPanelOpen?1:0.2,
            opacity:isTopicPanelOpen?'1':'0.5',
            // y: isTopicPanelOpen? 0:-400,
            // display: 'none',
            transition: {
                duration: 0.7,
                delayChildren: 0.3
              },
        },
       
        static: {
            y: -400,
            scale: 0.2,
            opacity:'0.5'
        }
    }

    const childrenVariant = {
        move: {
            // y:  300:0,
            display:isTopicPanelOpen? 'block':'none',
            transition: {
                duration: 0.4,
                // delayChildren: 0.3
              },
        },
        static: {
            display: 'none'
        }
    }

  return (
    <div className='flex justify-center' >
        { 

          
                      <div 
                  className='xl:w-8/12 lg:w-9/12 md:w-10/12 w-11/12 '
                      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
                if(isDowCarousel && e.target.id !== 'dowCarousel' || !e){
        
             
                    setisDowCarousel(false)
                }
            }}>
            
                <div className='flex flex-col py-4 mx-4' >
                    <div className='mb-4'  >
                        {/* <div className='text-2xl bg-amber-800 font-header8 font-bold cursor-pointer flex' onClick={()=>{setisParentCourse((prev) => !prev)}} >
                        Add Parent Course 
                        <div>
                            [+++]
                        </div> 
                        </div> */}


                        <ParentCourse/>
                        {/* {isParentCourse && 
                        <motion.div transition={{type:'spring', stiffness:50}} initial={{y:20}} animate={{y:0}}>
                             <ParentCourse/>
                         </motion.div>
                        } */}
                       
        
                    </div>
        
                    <div className='   text-white  font-header12 flex ' ><div className='flex'>
                    BASIC INFORMATION
                        </div></div>
                    <div className='flex w-full  font-header12' >
                        <div className='w-7/12 mr-4  flex flex-col items-start ' >
                            <div className='text-xs'>
                                name
                            </div>

                            <div className='flex border-b-2 lg:text-3xl md:text-xl xs:text-base w-full' >
                             Name
                            <div className='w-full'>
                                <input
                                placeholder='ABC-101'
                                value={currentCourseName}
                                onChange={(e)=>{
                                setcurrentCourseName(e.target.value)
                                }}
                                className='w-full text-stone-400  bg-transparent focus:border-none focus:text-stone-800 transition-all lg:border-b-4 md:border-b-2 border-b pl-4'
                                />
                            </div>
                            </div>

                            </div>

                        <div className='w-5/12 flex flex-col' >
                            <div className='text-xs'>
                                code
                            </div>

                            
                            <div className='flex border-b-2 lg:text-3xl md:text-xl xs:text-base w-full' >
                             Code
                            <div className='w-full'>
                                <input
                                placeholder='ABC-101'
                                value={currentCourseCode}
                                onChange={(e)=>{
                                setcurrentCourseCode(e.target.value)
                                }}
                                className='w-full text-stone-400  bg-transparent focus:border-none focus:text-stone-800 transition-all lg:border-b-4 md:border-b-2 border-b pl-4'
                                />
                            </div>
                            </div>
                            
                    </div>
                    </div>
        
                    <div  className='flex mt-4 flex-col'>
                        <div className='text-xs '>
                            description
                        </div>
                        <textarea 
                        placeholder='description'
                        value={currentCodeDesc}
                        onChange={(e)=>setcurrentCodeDesc(e.target.value)}
                        className='w-full font-header12 text-xl bg-transparent my-1 border-b h-20' />
        
                    </div>
        
                    <div className='flex flex-col my-4 ' >
                        <div  className='bg-amber-800 text-white border   font-header9 flex bg-yellow-600 '>
                            <div className='w-36 px-2'>
                            DURATION
                            </div>
                        </div>
                      
                      <div className='flex flex-col lg:flex-row l mt-2 mx-4 lg:items-center py-4' >
               
                            <div className={`text-xl ${!isDowCarousel?'w-9/12':'w-4/12'} flex items-center`}>
                                <span className='font-bold cursor-pointer  transition-all  font-header7'>
                                    {isDowCarousel?  
                                    <motion.div transition={{type:'tween', duration:0.5}} initial={isDowCarousel && {y:-50}} animate={isDowCarousel && {y:10}} >
                                          <DowCarousel/>
                                    </motion.div>
                                  :<div onClick={()=>toggleisDowCarousel()} className='text-4xl' > [Everyday+]</div>}
                                  
                                    {/* [Everyday+] */}
                                </span>
                                {!isDowCarousel && <span className='transition-all w-full  text-wrap'>
                                 for the next
                                </span>}
                                
                              
                            </div>
        
                        <div className=' w-full' >
                            {!isDowCarousel? 
                            <div className={`${isDowCarousel?'lg:w-6/12 w-7/12':'lg:w-8/12  w-7/12'} flex text-xl    justify-start items-end`} >
                            
                            
                                    <div>
                                    <InputBase
                            placeholder='[00]'
                             className=' w-20  text-4xl bg-amber-800 font-header7  lg:mr-4 mr-4   flex justify-center'
                            value={currentNoWeeks}
                            onChange={(e)=>setcurrentNoWeeks(e.target.value)}
                        />
                                    </div>
                   
                            <div className='mb-3 ' >
                                Weeks
                            </div>
                            </div>:<div className='text-xl ml-4 flex'>
                                {currentDaysOfWeek.length?``:``}
                               <DaysofWeekdisplay/>
                               <span className='ml-2'>
                               for 3week
                               </span>
                               </div>}
                            
                        </div>
                      
        
                           
                      </div>
                        
                    </div>
        
                    <div>
                        {/* <div className='flex justify-between items-center' >
                            <div>Create Topics</div>
                            <div >
                                <Button 
                                onClick={()=>toggleTopicPanel()}
                                className='text-gray-300 hover:scale-110 transition-all' >
                                [+]
                                </Button>
                            </div>
                        </div> */}
                        
                {/* <div className={`${isTopicPanelOpen?'block':'hidden'}`}>
                <motion.div variants={parentVariant} initial='static' animate='move'>
                    <motion.div variants={childrenVariant} >
                    <div style={{
                            overflow: 'auto'
                        }} className='bg-transparent'>
                           <CreateTopic weeks={4}/>
                        </div>
                    </motion.div>
                        </motion.div>
                </div> */}
                  
                      
                    </div>
        
        <div className='flex flex-col lg:mt-8 mt-14' >
            <div className='flex justify-end '>          
                        <Button onClick={()=>saveCurrentCourse({currentCourseName, currentCodeDesc, currentCourseCode, currentNoWeeks})} className='font-header8 capitalize text-black  text-4xl hover:scale-110 transition-all px-0 font-extralight' >[ <span className='px-6 text-base font-header9'>SAVE</span> ]
                        </Button>
                    </div>
        
                        <div onClick={()=>{setisNewCoursePanelOpen(false)
                        setisCourseList(true)
                        setisParentCourse(false)
                        }} className='flex justify-end capitalize cursor-pointer ' >
                            go back
                        </div>
            </div>
        
        
                </div>
           
              
            </div>
           
          
        }
    </div>

    
  )
}

export default CreateCourse