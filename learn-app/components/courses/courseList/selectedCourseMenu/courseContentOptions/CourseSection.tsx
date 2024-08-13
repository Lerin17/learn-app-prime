import React from 'react'
// import { useDrop } from 'react-dnd';
;

import { Icoursecontext } from '../../../../../types/context/coursecontext';


import { sectionOptions } from '../courseContent';
import { useDroppable } from '@dnd-kit/core';
import { CourseContext } from '../../../../../context/CourseContext';
import { DuttonAlt } from '../../../../GeneralPurpose/dutton';
import Statement from './CourseSectionComponent/Statement';



const CourseSection = (props:any) => {

    const {currentCourseSection, getSectionContent, openSelectedSectionContent} = React.useContext(CourseContext) as Icoursecontext

    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
      });

      const getOpenedItem = currentCourseSection.find(item => item.isOpen)

      const RenderSelectedCourseSectionItem = () => {

        

        if(getOpenedItem.type === 'content'){
             return (
          <div>
          content
        </div>    )
        }else if(getOpenedItem.type === 'multiquestion'){
            return (
          <div>
         multiquestion
        </div>    )
        }else if(getOpenedItem.type === 'singlequestion') {
          return <div>
            singlequestion
          </div>
        }else if(getOpenedItem.type === 'statement') {
          return <div>
          <Statement/>
          </div>
        }else if(getOpenedItem.type === 'blackboard') {
          return <div>
          blackboard
          </div>
        }
        else {
          return <div>
            pro
          </div>
        }
      }


      const isAnyItemOpen = currentCourseSection.some(item => item.isOpen === true)
     

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

    <div>
      {isAnyItemOpen?<div className=''>
        <div className='w-full flex'>
        <DuttonAlt
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>}
        handleClick={() => openSelectedSectionContent(getOpenedItem.ID)}
        />
        </div>
        <RenderSelectedCourseSectionItem/>
      </div>:<div
    className='w-full border-4'>
        <div className='border'>
            <div>   
            <input
            placeholder='untitled section'
            />
            </div>

     
            <div ref={setNodeRef} className={`border ${isOver?'border-2':''} mt-4 `}>

            {currentCourseSection.map(item => (
            <div onClick={() => openSelectedSectionContent(item.ID)} >
                <div className={`${item.isOpen?'bg-green-400':''} cursor-pointer border`}>{
                     item.type
                      }</div>
            </div>))}

            </div>
  
        
           
            
        </div>
    </div>}
    </div>
   

    


  )
}

export default CourseSection