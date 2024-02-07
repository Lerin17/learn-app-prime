import React from 'react'
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import { JsxElement } from 'typescript';
// import { useDrag } from 'react-dnd';

interface Ttpe {
    item:{name:string, icon:any, component:JsxElement},
    handleClick:() => void
}

const SectionBarOptionCom = (prop:Ttpe) => {

        
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id:prop.item.name,
        data: {
            name: prop.item.name,
          }
      });

      const style = transform ? {
        transform:  CSS.Translate.toString(transform),
      } : undefined;

    
    // const [{isDragging}, drag] = useDrag(() => ({
    //     type: 'image',
    //     item:{id:prop.item.name},
    //     collect: monitor => ({
    //       isDragging: !!monitor.isDragging(),
    //     })
    //   }))


  return (

    <div
    ref={setNodeRef} style={style} {...listeners} {...attributes}
    className={` lg:w-1/2 w-full  border`} 
    >
          <div
      
      onClick={() => prop.handleClick()} className='text-white  flex flex-col p-1 border w-full  items-center'>
      <div className=' '>
            {prop.item.icon}
      </div>

      <div className='text-xs  ml-1 capitalize'>
          {prop.item.name}
      </div>
    
      </div>
    </div>
       
         


  )
}

export default SectionBarOptionCom