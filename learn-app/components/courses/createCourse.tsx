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
    

    const {isTopicPanelOpen, toggleTopicPanel, currentCourseName, currentCodeDesc, currentCourseCode, setcurrentCodeDesc, setcurrentCourseName, setcurrentCourseCode, currentNoWeeks, setcurrentNoWeeks, saveCurrentCourse, setisNewCoursePanelOpen, isNewCoursePanelOpen ,isDowCarousel,toggleisDowCarousel, setisDowCarousel, addDayOfWeek, currentDayOfWeek,isCourseList, setisCourseList, isParentCourse,setisParentCourse} = React.useContext(CourseContext) as Icoursecontext

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
    <div>
        {isNewCoursePanelOpen && 

            <AnimatePresence>
                      <motion.div 
                      initial={{y:200}}
                 animate={{y:0}}
                 transition={{type:"spring", stiffness:100}}
                 exit={{ opacity:0.1, y:400, display:'none'}} 
                      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
                if(isDowCarousel && e.target.id !== 'dowCarousel' || !e){
        
             
                    setisDowCarousel(false)
                }
            }}>
               <div className='text-xl' >
            {/* xx */}
                </div> 
                <div className='flex flex-col py-4' >
                    <div className='mb-4 flex justify-between'  >
                        <div className='text-2xl bg-amber-800 font-header8 font-bold cursor-pointer flex' onClick={()=>{setisParentCourse((prev) => !prev)}} >
                        Add Parent Course 
                        <div>
                            [+++]
                        </div> 
                        </div>

                        {isParentCourse && 
                        <motion.div transition={{type:'spring', stiffness:50}} initial={{y:20}} animate={{y:0}}>
                             <ParentCourse/>
                         </motion.div>
                        }
                       
        
                    </div>
        
                    <div className='bg-amber-800 border text-white  font-header7 flex' ><div className='flex bg-yellow-600 px-2'>
                    Basic information
                        </div></div>
                    <div className='flex w-full ' >
                        <div className='w-3/4 mr-2' >
                            <InputBase
                            placeholder='Name' 
                            value={currentCourseName} 
                            onChange={(e)=>{setcurrentCourseName(e.target.value)}}
                            className='w-full  text-3xl border-b my-1  bg-amber-800 font-header8 text-white' 
                            />
                            {/* <input
                            placeholder='Name' 
                            value={currentCourseName} 
                            onChange={(e)=>{setcurrentCourseName(e.target.value)}}
                            className='w-full  text-3xl border-b my-1  bg-amber-800' /> */}
                            </div>
                        <div className='w-1/4 ' >
                            <InputBase 
                            placeholder='code'
                            value={currentCourseCode}
                            onChange={(e)=>{setcurrentCourseCode(e.target.value)}}
                            className='w-full  border-b my-1 bg-amber-800 text-3xl font-header8 text-white'  />
                            </div>
                    </div>
        
                    <div  className=''>
                        <textarea 
                        placeholder='description'
                        value={currentCodeDesc}
                        onChange={(e)=>setcurrentCodeDesc(e.target.value)}
                        className='w-full  text-2xl bg-amber-800 border-b h-20' />
        
                    </div>
        
                    <div className='flex flex-col my-4 ' >
                        <div  className='bg-amber-800 text-white border   font-header7 flex'>
                            <div className='bg-yellow-600 w-36 px-2'>
                            Duration
                            </div>
                        </div>
                      
                      <div className='flex flex-col lg:flex-row l mt-2  lg:items-center py-4' >
               
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
                            {!isDowCarousel? <div className={`${isDowCarousel?'lg:w-6/12 w-7/12':'lg:w-8/12  w-7/12'} flex text-xl    justify-start items-end`} >
                            
                            
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
                                {currentDayOfWeek.length?``:``}
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
                        <Button onClick={()=>saveCurrentCourse({currentCourseName, currentCodeDesc, currentCourseCode, currentNoWeeks})} className='font-header7 capitalize text-black text-4xl hover:scale-110 transition-all px-0 ' >[Save]
                        </Button>
                    </div>
        
                        <div onClick={()=>{setisNewCoursePanelOpen(false)
                        setisCourseList(true)
                        setisParentCourse(false)
                        }} className='flex justify-end capitalize cursor-pointer' >
                            go back
                        </div>
            </div>
        
        
                </div>
           
              
            </motion.div>
            </AnimatePresence>
          
        }
    </div>

    
  )
}

export default CreateCourse