import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { CourseContext } from '../../context/CourseContext'
import { Icoursecontext } from '../../types/context/coursecontext'
import CreateTopic from './createTopic'



const CreateCourse = () => {

    // let Array1 = [1,2]
    // let array2 = [3,4]

    // Array1 = array2

    // array2.push(5)

    // console.log(Array1)
    // console.log(array2)

    // console.log(array2 === Array1, 'reals')
    

    const {isTopicPanelOpen, toggleTopicPanel, currentCourseName, currentCodeDesc, currentCourseCode, setcurrentCodeDesc, setcurrentCourseName, setcurrentCourseCode, currentNoWeeks, setcurrentNoWeeks, saveCurrentCourse} = React.useContext(CourseContext) as Icoursecontext

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
    <div>createCourse
        <div className='flex flex-col' >
            <div className='flex w-full ' >
                <div className='w-3/4 mr-2 shadow' >
                    <input
                    placeholder='Name' 
                    value={currentCourseName} 
                    onChange={(e)=>{setcurrentCourseName(e.target.value)}}
                    className='w-full  text-3xl border-b my-1 px-2 bg-amber-800' /></div>
                <div className='w-1/4 shadow text-3xl' >
                    <input 
                    placeholder='code'
                    value={currentCourseCode}
                    onChange={(e)=>{setcurrentCourseCode(e.target.value)}}
                    className='w-full  border-b my-1 px-2 bg-amber-800'  />
                    </div>
            </div>

            <div  className=''>
                <input 
                placeholder='description'
                value={currentCodeDesc}
                onChange={(e)=>setcurrentCodeDesc(e.target.value)}
                className='w-full  text-4xl bg-amber-800 border-b' />

            </div>

            <div className='flex flex-col my-2' >
                <div>
                Duration
                </div>
              
                 <div className='flex text-6xl' >
                    <div>[</div>
                    <input
                     className='w-20 bg-amber-800 flex justify-center items-center'
                    value={currentNoWeeks}
                    onChange={(e)=>setcurrentNoWeeks(e.target.value)}
                /><div>]</div>
                    <div className='w-full' >Weeks</div>
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

            <div className=''>          
                <Button onClick={()=>saveCurrentCourse({currentCourseName, currentCodeDesc, currentCourseCode})} className='font-bold text-black text-xl hover:scale-110 transition-all px-0' >[Save]
                </Button>
            </div>

        </div>
   
      
    </div>
  )
}

export default CreateCourse