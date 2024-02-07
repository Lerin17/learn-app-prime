import React from 'react'
// import { useDrop } from 'react-dnd';
;

import { Icoursecontext } from '../../../../../types/context/coursecontext';


import { sectionOptions } from '../courseContent';
import { useDroppable } from '@dnd-kit/core';
import { CourseContext } from '../../../../../context/CourseContext';


const CourseSection = (props:any) => {

    const {currentCourseSection, getSectionContent, openSelectedSectionContent} = React.useContext(CourseContext) as Icoursecontext

    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
      });

    // const [isOver, drop] = useDrop(() => ({
    //     accept:'image',
    //     drop:(item:any) => {
    //         setcurrentCourseSection(prev => [...prev, getSectionContent(item.id)])
    //     },
    //     collect: monitor => ({
    //         isOver: !!monitor.isOver(),
    //       }),
    // }))

    // console.log(currentCourseSection, 'currenttruth')



    const handleGetChildPayload = (index:any) => {
        console.log(index)
       let x = sectionOptions[index]
       console.log(x, 'indexxxe')

       return x
    }

  return (

    <div
    className='w-full border-4'>
        <div className='border'>
            <div>   
            <input
            placeholder='untitled section'
            />
            </div>

     
            <div ref={setNodeRef} className={`border ${isOver?'border-2':''} mt-4`}>

            {currentCourseSection.map(item => (
            <div onClick={() => openSelectedSectionContent(item.ID)} >
                <div className={`${item.isOpen?'bg-green-400':''} border`}>{
                     item.type
                      }</div>
            </div>))}

            </div>
  
        
           
            
        </div>
    </div>
  )
}

export default CourseSection