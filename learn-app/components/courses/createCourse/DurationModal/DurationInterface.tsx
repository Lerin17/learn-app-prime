import React from 'react'
import AnimationTextBox from '../../../GeneralPurpose/AnimationTextBox'
import { motion } from 'framer-motion'
import DaysOfWeeksMenu from './DurationInterface/DaysOfWeeksMenu'

import { Icoursecontext } from '../../../../types/context/coursecontext'
import { CourseContext } from '../../../../context/CourseContext'

const DurationInterface = (props:any) => {

  const {isDurationModal, setisDurationModal, setcurrentDaysOfWeek, currentCourseStartDate, setcurrentCourseStartDate} = React.useContext(CourseContext) as Icoursecontext

  const InfoBoard = () => {

    // console.log('exexe')

    if(props.isSelectDurationStart){
      return <div className='flex items-center'>
        <AnimationTextBox
        text='Please, select the initial date for the course from the calender.'
        animationtype='notice'
        isAnimate = {props.isSelectDurationStart}
        />
        
      </div>
    }else {
      return <div className='px-1 text-black'>
        From the 4th of jan to 5th of march, mon, tues, weds, thurs
      </div>
    }
 
  }

  return (
    <div className='mt-2 h-full  flex flex-col'>
      <div className='   '>
        <InfoBoard/>
      </div>

    <div className=' h-5/12'>
    {props.isSelectDaysOfWeeks?
      <div className=' font-header12  py-2'>
        <DaysOfWeeksMenu/>
      </div>:
        <div className='py-2 font-header12  text-xl w-full flex items-end'>
      
        <div className={` mr-2`}>

        <div className={`${props.isSelectDurationStart?'bg-red-800 text-black text-4xl border-b-2':'text-xl'} transition-all px-1`}>
        {`${props.DurationStart.text}`}
        </div>
      
            </div>

            
            <div className=' flex items-bottom '>
              for 
            </div>
            

            
            <div className={`${props.isSelectRangeDurationModal?'bg-amber-800 border-b-2 px-2':'px-1'} mx-1  transition-all  `}>
                  {props.isSelectRangeDurationModal?<input
                  onChange={(e) => props.updateDuration({NoWeeks:e.target.value, NoDays: props.Duration.NoDays})}
                  value={props.Duration.NoWeeks}
                  type='number'
                  placeholder='0'
                  className='w-8 xl:text-4xl text-black bg-transparent text-center'
                  />:props.Duration.NoWeeks} 
                    </div>
                    Weeks and 
                <div className={`${props.isSelectRangeDurationModal?'bg-amber-800 border-b-2  px-2':'px-1'} mx-1  transition-all `}>
                {props.isSelectRangeDurationModal?<input
                onChange={(e) => props.updateDuration({NoDays:e.target.value, NoWeeks: props.Duration.NoWeeks})}
                value={props.Duration.NoDays}
                type='number'
                placeholder='0'
                className='w-8 xl:text-4xl text-black bg-transparent text-center'
                />:props.Duration.NoDays}
                </div>
                Days
    </div>
        }
        
    </div>
  
    </div>
  
  )
}

export default DurationInterface