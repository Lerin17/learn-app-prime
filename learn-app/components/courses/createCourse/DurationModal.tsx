import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import Calendar from 'react-calendar'
import { DuttonAlt, DuttonMid } from '../../GeneralPurpose/dutton'
import { CourseContext } from '../../../context/CourseContext'

import { Icoursecontext } from '../../../types/context/coursecontext'
import { CalendarCom } from '../../Home/CalenderCom'
import { CalendarContext } from '../../../context/CalenderContext'
import { Icalendarcontext } from '../../../types/context/calendarcontext'
import DurationInterface from './DurationModal/DurationInterface'


const DurationModal = (props:any) => {

  
const {isDurationModal, setisDurationModal} = React.useContext(CourseContext) as Icoursecontext

const {isSelectRange,getDateInfo} = React.useContext(CalendarContext) as Icalendarcontext

const [isSelectRangeDurationModal, setisSelectRangeDurationModal] = React.useState(false);

const [isSelectInitialDate, setisSelectInitialDate] = React.useState<boolean>(false);

const [isSelectDaysOfWeeks, setisSelectDaysOfWeeks] = React.useState(false);

const [maxRangeDurationModal, setmaxRangeDurationModal] = React.useState();

const [minRangeDurationModal, setminRangeDurationModal] = React.useState();

const [DurationStart, setDurationStart] = React.useState<string>('4th of May, 2023');

const [Duration, setDuration] = React.useState<{
  NoWeeks:string,
  NoDays:string
}>({NoWeeks:'3', NoDays:'5' });

  // type TtoggleModalOptionArg {
  //   option:'
  // }

  const toggleModalOptions = (option:'initialDate' | 'Days of week' | 'Duration') => {
    if(option === 'initialDate'){
      if(isSelectInitialDate === true){
        setisSelectInitialDate(false)
        return
      }
      setisSelectInitialDate(true)
      setisSelectRangeDurationModal(false)
      setisSelectDaysOfWeeks(false)
    }else if(option === 'Days of week'){
        if(isSelectDaysOfWeeks === true){
        setisSelectDaysOfWeeks(false)
        return
      }
      setisSelectInitialDate(false)
      setisSelectRangeDurationModal(false)
      setisSelectDaysOfWeeks(true)
    }else if(option === 'Duration'){
           if(isSelectRangeDurationModal === true){
        setisSelectRangeDurationModal(false)
        return
      }
      setisSelectInitialDate(false)
      setisSelectRangeDurationModal(true)
      setisSelectDaysOfWeeks(false)
    }
  }

  const handleCalenderClick = (e:any) => {
    if(isSelectInitialDate){
    const InitialDateInfo =  getDateInfo(e)

    const formatDateInfo = () => `${InitialDateInfo.Date} of ${InitialDateInfo.Month}, ${InitialDateInfo.Year}`

    setDurationStart(formatDateInfo)
      
    }
  }

  return (
    <div
    className=' absolute flex flex-col block w-full  z-10'>

        <div className='self-left w-fit'>
          <DuttonAlt
          handleClick={()=>setisDurationModal(false)}
          icon={<div className='text-gray-300 '> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z"/></svg>
            </div>}
          />
        </div>

        <div className='block border blur-md w-full lg:hidden md:hidden'>
            info
        </div>

        <div
        style={{ 
        }}
        className='h-72 flex  lg:flex-row md:flex-row flex-col '
        >
        
        <div className=' w-fit mx-auto  '>
          <CalendarCom
          isSelectRange = {isSelectRangeDurationModal}
          minDate = {minRangeDurationModal}
          maxDate = {maxRangeDurationModal}
          handleClick = {handleCalenderClick}
          />
        </div>

      

        <div className='hidden lg:block md:block lg:w-8/12 md:w-8/12 h-full px-4'>

          <div className='flex  justify-between w-10/12'>
            <div className={`${isSelectInitialDate?'border-b-4':''}`}>
             <DuttonAlt
                icon={
                'Initial date'
                }
                handleClick={() => toggleModalOptions('initialDate')}
                />
            </div>


               <DuttonAlt
                icon={
                  'Duration'
                }
                handleClick={() => toggleModalOptions('Duration')}
                />
         

              <DuttonAlt
                icon={
                  'Days of the week'
                }
                handleClick={() => toggleModalOptions('Days of week')}
                />

               
          </div>
                  
                  <DurationInterface
                  DurationStart = {DurationStart}
                  Duration = {Duration}
                  isSelectRangeDurationModal = {isSelectRangeDurationModal}
                  isSelectInitialDate = {isSelectInitialDate} setisSelectInitialDate = {setisSelectInitialDate}

                  />
            
        </div>
        
        </div>
    </div>
   
  )
}

export default DurationModal