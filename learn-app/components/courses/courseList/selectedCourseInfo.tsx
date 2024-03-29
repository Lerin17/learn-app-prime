import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { CourseContext } from '../../../context/CourseContext';
import { Icoursecontext } from '../../../types/context/coursecontext';

import SelectedCourseContent from './selectedCourseMenu/courseContent';
import { DndContext } from '@dnd-kit/core';




const SelectedCourseInfo = () => {
    const {setcourseListSelectedCourse, setisNewCoursePanelOpen, courseListSelectedCourse,   setisCourseList, setcurrentCourseSection, getSectionContent} = React.useContext(CourseContext) as Icoursecontext

    const [selectedCourseInfoOption, setselectedCourseInfoOption, ] = React.useState('basicInfo');

    const OptionButton = (props:any) => {
        return <div onClick={()=>setselectedCourseInfoOption(props.text)} >
            <div className='px-1 cursor-pointer hover:scale-110 hover:text-gray-300 transition-all' >
               [{props.text}]
            </div>
        </div>
    }

    function handleDragEnd(event:any) {
        const {active, over} = event;
    
        console.log(active, 'active')

        setcurrentCourseSection(prev => [ ...prev, getSectionContent(active.data.current.name)])
        // if (over && over.data.current.accepts.includes(active.data.current.type)) {
        //     setcurrentCourseSection(['ee'])
        //   // do stuff
        // }
      }


    const NoOfWeekInput = () => {

        return (<div className='flex items-center w-full bg-amber-800 border' >
                <div className='font-header8 text-3xl italic px-2'>
                -Week1
                </div>

                <div className='border px-2 border-dotted w-full' >
                    <input/>
                </div>
             
        </div>)
    }

    const BasicInfoComponent = () => {
        return (
          
            <AnimatePresence>
                    <motion.div transition={{type:'spring', stiffness:40}} initial={{x:0}} animate={{x:0}} exit={{y:200}} className=''>
               <div className='flex ' >
                   <div className='w-2/6' >
                   <div className=' px-2 bg-amber-900 text-3xl font-bold font-header7 uppercase' >
                       NAME: {courseListSelectedCourse?.courseName} {courseListSelectedCourse?.courseCode}
                   </div>
               
                   <div className='bg-amber-800 px-2 text-2xl' >
                       DURATION: {courseListSelectedCourse?.courseDuration.NoWeeks} Weeks and {courseListSelectedCourse?.courseDuration.NoDays} Days
                   </div>
               
                   <div className='bg-amber-700 px-2 text-xl' >
                       NEXT-CLASS:2 day FN
                   </div>
                   </div>
               </div>
                          
                </motion.div>
            </AnimatePresence>
            
           
        )
    }



    const TopicsComponent = () => {
        return (
            <motion.div transition={{type:'spring', stiffness:40}} initial={{x:20}} animate={{x:0}} >
                        <div>
            {/* topics */}
            <div className='px-2 font-header7 text-xl' >
                Create Topics per week
            </div>
            <div className='w-5/6 ' >
                <NoOfWeekInput/>
                <NoOfWeekInput/>
                <NoOfWeekInput/>
                <NoOfWeekInput/>
                <NoOfWeekInput/>
                <NoOfWeekInput/>
            </div>
        </div>
            </motion.div>
    
        )
    }



    const AssesemnetComponent = () => {
        return (
            <motion.div transition={{type:'spring', stiffness:40}} initial={{x:20}} animate={{x:0}} >
                  <div>
                          Assesment
            </div>
            </motion.div>
          
        )
    }
    const GetSelectedCourseInfo  = () => {
        if(selectedCourseInfoOption === 'basicInfo'){
return (
    <AnimatePresence>
<motion.div exit={{y:200}} className=''>
   <div className='flex ' >
       <div className='w-2/6' >
       <div className=' px-2 bg-amber-900 text-3xl font-bold font-header7 uppercase' >
           NAME:{courseListSelectedCourse?.courseName} {courseListSelectedCourse?.courseCode}
       </div>
   
       <div className='bg-amber-800 px-2 text-2xl' >
           DURATION: {courseListSelectedCourse?.courseDuration.NoWeeks} Weeks and {courseListSelectedCourse?.courseDuration.NoDays} Days
       </div>
   
       <div className='bg-amber-700 px-2 text-xl' >
           NEXT-CLASS:2 day FN
       </div>
       </div>
   </div>
              
    </motion.div>
</AnimatePresence>  
)

 

           
        }else if(selectedCourseInfoOption === 'topics'){
            return <div>
                {/* topics */}
                <div className='px-2 font-header7 text-xl' >
                    Create Topics per week
                </div>
                <div className='w-5/6 ' >
                    <NoOfWeekInput/>
                    <NoOfWeekInput/>
                    <NoOfWeekInput/>
                    <NoOfWeekInput/>
                    <NoOfWeekInput/>
                    <NoOfWeekInput/>
                </div>
            </div>
        }else {
            return <div>
                Assesment
            </div>
        }
        
    }




  return (
    <div 
    className=' h-full  w-8/12 flex flex-col text-black bg-gradient-to-b from-amber-700 to-amber-800'
    style={{
    height:500,
    // borderRadius: '22% 20% 25% 25% / 41% 43% 44% 46%',


}}
    >
      
        
        <div className={`flex justify-between items-center py-2 px-2 `} >
            <div className='font-bold text-3xl font-header9' >
                {courseListSelectedCourse?.courseName}
            </div>
            <div onClick={()=>{setcourseListSelectedCourse(null)
              
            }} className='text-3xl hover:scale-110 transition-all cursor-pointer hover:text-gray-300 transition-all ' >
                [X]
            </div>
        </div>

        <div className='py-1 px-3  bg-amber-800 font-header8 flex' >
            <OptionButton
            text='basicInfo'
            />

            <OptionButton
            text='Sections'
            />

            <OptionButton
            text='Assesment'
            />
        </div> 

            <AnimatePresence>
                {selectedCourseInfoOption === 'basicInfo' && 
                <motion.div 
                
                initial={{scale:0.2}} animate={{scale:1}} transition={{type:'tween', duration:0.3}} exit={{x:0.2, opacity:0.4, display:'none'}}>
                  <BasicInfoComponent/>
                </motion.div>

                }               
            </AnimatePresence>

                <AnimatePresence
                
                >
                {selectedCourseInfoOption === 'Sections' && 
                <motion.div initial={{scale:0.2}} animate={{scale:1}} transition={{type:'tween', duration:0.3}} className='h-full'
                exit={{scale:0.2, opacity:0.4,  display:'none'}}>
                    {/* <TopicsComponent/> */}
                    <DndContext onDragEnd={handleDragEnd}>
                    <SelectedCourseContent/>
                    </DndContext>
                
                </motion.div>
                }
                </AnimatePresence>
          

          <AnimatePresence>
          {selectedCourseInfoOption === 'Assesment' && <motion.div  initial={{scale:0.2}} animate={{scale:1}} transition={{type:'tween', duration:0.2}} exit={{x:0.2, opacity:0.4, display:'none'}}>
                    <AssesemnetComponent/>
                </motion.div>
                }
          </AnimatePresence>

          
            
        
        
        </div>
  )
}

export default SelectedCourseInfo