import React from 'react'
// import { useDrop } from 'react-dnd';
import CourseSectionItemsCom from './CourseSection/CourseSectionItemsCom';
import { Draggable, Container } from 'react-smooth-dnd'

const CourseSection = (props:any) => {
    const [currentCourseSection, setcurrentCourseSection] = React.useState<any[]>([]);

    // const [isOver, drop] = useDrop(() => ({
    //     accept:'image',
    //     drop:(item:any) => {
    //         setcurrentCourseSection(prev => [...prev, getSectionContent(item.id)])
    //     },
    //     collect: monitor => ({
    //         isOver: !!monitor.isOver(),
    //       }),
    // }))

    console.log(currentCourseSection, 'currenttruth')

    const getSectionContent = (item:string) => {
        if(item === 'singlequestion'){
            return {
                //Name and Question are the same thing
                Name:'',
                Question:'',
                Answer:'',
                ID:Date.now(),
                type:item,
                isOpen:false            
            }
        }else if(item === 'content'){
            return {
                //Name and Question are the same thing
                Name:'',
                Header:'',
                ID:Date.now(),
                TextObj:{},
                type:item,
                isOpen:false                  
            }
        }else if(item === 'multiquestion'){
            return {
                //Name and Question are the same thing
                Name:'',
                Header:'',
                Options:[],
                ID:Date.now(),
                TextObj:{},
                type:item,
                isOpen:false                 
            }
        }else if(item === 'statement'){
            return {
                //Name and Question are the same thing
                Name:'',
                Header:'',
                ID:Date.now(),
                type:item,
                isOpen:false            
            }
        }
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

        <Container>
            <div className='border-t mt-4'>

            {currentCourseSection.map(item => (
            <div>
                <CourseSectionItemsCom
                itemObj = {item}
                />
            </div>))}

            </div>
        </Container>
           
            
        </div>
    </div>
  )
}

export default CourseSection