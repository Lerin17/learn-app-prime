import React from 'react'
import { mySvgsIcons } from '../../../../mySVG'
import CourseSection from './courseContentOptions/CourseSection'
import { components } from 'react-select';
// import DragContainer from './courseContentOptions/DragContainer';
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

import SectionBarOptionCom from './courseContentOptions/SectionBarOptionCom';

export const sectionOptions = [
    {
        name:'content',
        icon:mySvgsIcons.Content,
        component:'exexs'
    },
    {
        name:'multiquestion',
        icon:mySvgsIcons.question,
        component:'exe'
    },
    {
        name:'singlequestion',
        icon:mySvgsIcons.question,
        component:'exe'
    },
    {
        name:'statement',
        icon:mySvgsIcons.question,
        component:'exe'
    }
]

const SelectedCourseContent = () => {

    const [selectedOption, setselectedOption] = React.useState('objectives');

    const [isAnyDragging, setisAnyDragging] = React.useState(false);

    const updateisAnyDragging = () => {

    }


    
   

    const options = [ 
        {
            name:'sections',
            icon:mySvgsIcons.Section,
            component:<CourseSection
            isAnyDragging = {isAnyDragging}
            />
        },    
    {
        name:'objectives',
        icon:mySvgsIcons.Objective,
        component:'eee'

    },{
        name:'board',
        icon:mySvgsIcons.BlackBoard,
        component:'exe'
    },
    {
        name:'content',
        icon:mySvgsIcons.Map,
        component:'exexw'
    },
    ]



    const getSelectedOptionComponent = options.find(item => item.name === selectedOption)

    const sideBarOptions = options.map(item => (
        <div onClick={() => setselectedOption(item.name)} className='text-white lg:w-1/2 flex items-center p-1  w-full border '>
        <div>
              {item.icon}
        </div>

        <div className='text-xs ml-1 capitalize'>
            {item.name}
        </div>
      
        </div>
    ))

    const handleSectionBarOption = () => {
        console.log('rexe')
    }

    const sectionBarOptions = sectionOptions.map((item:any) => (


        <div>
            <SectionBarOptionCom
        item = {item}
        handleClick = {handleSectionBarOption}
        />
        </div>
        
    ))



  return (
    <div className='flex  h-full' >
        <div className='w-3/12 overflow bg-zinc-800 h-full justify-between' >
            <div className='flex flex-wrap '>
            {sideBarOptions}
            </div>

            <div className={`${selectedOption === 'sections'?'':'hidden'} flex mt-10 flex-wrap`}>
                {sectionBarOptions}
            </div>
        
        </div>

        <div className='w-full'>
        {getSelectedOptionComponent?.component}
        </div>

        

     
       </div>
  )
}

export default SelectedCourseContent