import React from 'react'
import { Draggable, Container } from 'react-smooth-dnd'
// import { useDrag } from 'react-dnd';

const SectionBarOptionCom = (prop:any) => {

    
    // const [{isDragging}, drag] = useDrag(() => ({
    //     type: 'image',
    //     item:{id:prop.item.name},
    //     collect: monitor => ({
    //       isDragging: !!monitor.isDragging(),
    //     })
    //   }))


  return (
    <Draggable
    render={() => (
    <div
    className={` lg:w-1/2 w-full  border`} 
    >
          <div
      
      onClick={() => prop.setselectedOption()} className='text-white  flex flex-col p-1 border w-full  items-center'>
      <div className=' '>
            {prop.item.icon}
      </div>

      <div className='text-xs  ml-1 capitalize'>
          {prop.item.name}
      </div>
    
      </div>
    </div>
    )}
    />
       
         


  )
}

export default SectionBarOptionCom