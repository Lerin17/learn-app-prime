
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { CourseContext } from '../../context/CourseContext'
import { Icoursecontext } from '../../types/context/coursecontext'
import CreateTopic from './createTopic'

import DowCarousel from './createCourse/DowCarousel'
import DaysofWeekdisplay from './createCourse/DaysofWeekdisplay'
import ParentCourse from './createCourse/ParentCourse'


import DurationModal from './createCourse/DurationModal'
import { DuttonMid, DuttonSmall, DuttonAlt } from '../GeneralPurpose/dutton'


const CreateCourse = () => {

    // let Array1 = [1,2]
    // let array2 = [3,4]

    // Array1 = array2

    // array2.push(5)

    // console.log(Array1)
    // console.log(array2)

    // console.log(array2 === Array1, 'reals')
    

    const {isTopicPanelOpen, toggleTopicPanel, currentCourseName, currentCodeDesc, currentCourseCode, setcurrentCodeDesc, setcurrentCourseName, setcurrentCourseCode, currentDuration, currentNoWeeks, setcurrentNoWeeks, saveCurrentCourse, currentCourseStartDate,  setisNewCoursePanelOpen, isNewCoursePanelOpen ,isDowCarousel,toggleisDowCarousel, setisDowCarousel, currentDaysOfWeek,isCourseList, setisCourseList, isParentCourse,setisParentCourse,isDurationModal, setisDurationModal} = React.useContext(CourseContext) as Icoursecontext

    // const [isDurationModal, setisDurationModal] = React.useState<boolean> (false);

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
    <div className='flex relative justify-center' >
                      <div 
                  className='xl:w-8/12 lg:w-9/12 md:w-10/12 w-11/12 '
                >

{isDurationModal &&

<motion.div

initial={{
    y:40,
}}
transition={{
    type:'tween',   
}}
animate={{
    y:0,
    opacity:'50'
}} 
className='flex'
>
    <div id='durationModal' className='w-full z-20 relative flex justify-center'>
    <DurationModal/>
    </div>
   
</motion.div>

                }
            
                <div className={`${isDurationModal?'opacity-0':''} flex flex-col py-4 `} >
                    <div className={` mb-4`}  >
                        <ParentCourse/>
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
        
                    <div  className='flex mt-4 flex-col '>
                        <div className='text-xs '>
                            description
                        </div>

                        <div className='border my-1'>
                            <textarea 
                            placeholder='description'
                            value={currentCodeDesc}
                            onChange={(e)=>setcurrentCodeDesc(e.target.value)}
                            className='w-full font-header12 p-1 text-xl  bg-transparent  h-20' />
                        </div>
                  
        
                    </div>
        
                    <div className='flex flex-col my-4 ' >
                        <div  className=' text-white   font-header12 flex '>
                            <div className=''>
                            DURATION AND TIME
                            </div>
                        </div>

                        <div className='text-xs'>
                            set duration details
                        </div>

                        <div className='flex '>
                            <DuttonAlt
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z"/></svg>}
                            handleClick={() => setisDurationModal(true)}
                            noPadding={true}
                            />
                        </div>
                      
                        {isDurationModal &&
             
                       <div>
                            details
                        </div>
                        
                        }
                        
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
        
        <div className='flex flex-col ' >
            <div className=' text-black border-t '> 
                        <DuttonAlt
                        icon={'SAVE'}
                        handleClick={()=>saveCurrentCourse({currentCourseName, currentCodeDesc, currentCourseCode, currentDuration, currentCourseStartDate, currentDaysOfWeek})}
                        noPadding={true}
                        />         
                        {/* <Button onClick={()=>saveCurrentCourse({currentCourseName, currentCodeDesc, currentCourseCode, currentNoWeeks})} className='font-header8 capitalize text-black  text-4xl hover:scale-110 transition-all px-0 font-extralight' >[ <span className='px-6 text-base font-header9'>SAVE</span> ]
                        </Button> */}
                    </div>
        
                        {/* <div onClick={()=>{setisNewCoursePanelOpen(false)
                        setisCourseList(true)
                        setisParentCourse(false)
                        }} className='flex justify-end capitalize cursor-pointer ' >
                            go back
                        </div> */}
            </div>
        
        
                </div>
           
              
            </div>
           
          

    </div>

    
  )
}

export default CreateCourse