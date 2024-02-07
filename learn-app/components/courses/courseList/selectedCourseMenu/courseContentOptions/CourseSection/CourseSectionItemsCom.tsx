import React from 'react'
import { Draggable, Container } from 'react-smooth-dnd'


const CourseSectionItemsCom = (props:any) => {
  return (
    <div className='border'>{
        props.itemObj.type
        }</div>
  )
}

export default CourseSectionItemsCom