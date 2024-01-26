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
import { text } from 'stream/consumers'


const DurationModal = (props:any) => {

  const getDateString = (dateObj:Date) => {
    const InitialDateInfo = getDateInfo(dateObj)

    const DateString = `${InitialDateInfo.Date} of ${InitialDateInfo.Month}, ${InitialDateInfo.Year}`

    return DateString
  }
  
const {isDurationModal, setisDurationModal, setcurrentDaysOfWeek, currentCourseStartDate, setcurrentCourseStartDate, currentDuration, setcurrentDuration} = React.useContext(CourseContext) as Icoursecontext

const {getDateInfo} = React.useContext(CalendarContext) as Icalendarcontext

const [isSelectRangeDurationModal, setisSelectRangeDurationModal] = React.useState(false);

const [isSelectDurationStart, setisSelectDurationStart] = React.useState<boolean>(false);

const [isSelectDaysOfWeeks, setisSelectDaysOfWeeks] = React.useState(false);

const [maxRangeDurationModal, setmaxRangeDurationModal] = React.useState<Date | null>();

const [minRangeDurationModal, setminRangeDurationModal] = React.useState<Date | null>();

const [DurationStart, setDurationStart] = React.useState<TDurationStart>({text: getDateString(new Date), dateObj:null});

const [Duration, setDuration] = React.useState<{
  NoWeeks:string,
  NoDays:string
}>({NoWeeks:'0', NoDays:'0' });



  // type TtoggleModalOptionArg {
  //   option:'
  // }

  type TCalenderValuePiece = Date | null

type TCalenderValue = TCalenderValuePiece | [TCalenderValuePiece, TCalenderValuePiece]

const [calenderValue, setcalenderValueOnChange] = React.useState<TCalenderValue>(new Date());

  type TDurationStart = {
    text:string | null,
    dateObj:Date | null
  }

  React.useEffect(() => {
    const date = Date()
  }, []);

  React.useEffect(() => {
    if(!currentCourseStartDate?.dateObj){
      setcurrentCourseStartDate({text: getDateString(new Date), dateObj:new Date})
    }
   
  }, []);

  React.useEffect(() => {
    if(currentDuration && isSelectRangeDurationModal){
      const getMinDate = currentCourseStartDate?.dateObj? currentCourseStartDate.dateObj:new Date()

      if(getMinDate){
        const getMaxDate = new Date(getMinDate)
        const maxDateDifference = (Number(currentDuration.NoWeeks) * 7) + Number(currentDuration.NoDays)
  
        getMaxDate.setDate(getMaxDate.getDate() + maxDateDifference)
  
        const maxDate =  getMaxDate
        const minDate = getMinDate
  
        setmaxRangeDurationModal(maxDate)
        setminRangeDurationModal(minDate)
      
      if(isSelectRangeDurationModal){
        setcalenderValueOnChange([minDate, maxDate])
        // setTimeout(() => {
        //   setisSelectRangeDurationModal(false)
        // }, 200);
      
      }

      console.log(minDate,maxDate, 'maxDateDifference')
      }
      


    
    }
  }, [currentDuration]);

  const updateDuration = (Value:{
    NoWeeks:number,
    NoDays:number
  }) => {
    console.log('update')
    setcurrentDuration(Value)
    // setDuration(Value)
  }

  const toggleModalOptions = (option:'initialDate' | 'Days of week' | 'Duration') => {
    if(option === 'initialDate'){
      if(isSelectDurationStart === true){
        setisSelectDurationStart(false)
        return
      }
      setisSelectDurationStart(true)
      setisSelectRangeDurationModal(false)
      setisSelectDaysOfWeeks(false)
    }else if(option === 'Days of week'){
        if(isSelectDaysOfWeeks === true){
        setisSelectDaysOfWeeks(false)
        return
      }
      setisSelectDurationStart(false)
      setisSelectRangeDurationModal(false)
      setisSelectDaysOfWeeks(true)
    }else if(option === 'Duration'){
           if(isSelectRangeDurationModal === true){
        setisSelectRangeDurationModal(false)
        return
      }
      setisSelectDurationStart(false)
      setisSelectRangeDurationModal(true)
      setisSelectDaysOfWeeks(false)
    }
  }



  const handleCalenderClick = (e:any) => {
    if(isSelectDurationStart){
    // const InitialDateInfo =  getDateInfo(e)

    // const formatDateInfo =  `${InitialDateInfo.Date} of ${InitialDateInfo.Month}, ${InitialDateInfo.Year}`

      setcurrentCourseStartDate({dateObj:e, text:getDateString(e)})
      setDurationStart({dateObj:e, text:getDateString(e)})
      
    }
  }

  return (
    <div
    className=' absolute  flex flex-col block w-full  z-10'>

        <div className='self-left w-fit'>
          <DuttonAlt
          handleClick={()=>setisDurationModal(false)}
          icon={<div className='text-gray-300 '> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z"/></svg>
            </div>}
          />
        </div>

        <div className='block blur-md w-full lg:hidden md:hidden'>
            info
        </div>

        <div
        style={{ 
        }}
        className=' flex  lg:flex-row md:flex-row flex-col '
        >
        
        <div className=' w-fit mx-auto  '>
          <CalendarCom
          isSelectRange = {isSelectRangeDurationModal}
          minDate = {minRangeDurationModal}
          maxDate = {maxRangeDurationModal}
          handleClick = {handleCalenderClick}
         value = {calenderValue}
         onChange = {setcalenderValueOnChange}
          />
        </div>

      

        <div className='hidden lg:block md:block lg:w-8/12 md:w-8/12 flex flex-col h-full px-4'>

          <div className='flex  justify-between w-12/12 border-b'>
            <div className={`${isSelectDurationStart?'border-b-4':''}`}>
             <DuttonAlt
                icon={
                'Initial date'
                }
                handleClick={() => toggleModalOptions('initialDate')}
                />
            </div>

              <div className={`${isSelectRangeDurationModal?'border-b-4':''}`}>
                  <DuttonAlt
                    icon={
                      'Duration'
                    }
                    handleClick={() => toggleModalOptions('Duration')}
                    />
              </div>
            
         
            <div className={`${isSelectDaysOfWeeks?'border-b-4':''}`}>
            <DuttonAlt
                icon={
                  'Days of the week'
                }
                handleClick={() => toggleModalOptions('Days of week')}
                />
            </div>
          

               
          </div>
 
                <div className='h-full '>
                <DurationInterface
                  DurationStart = {currentCourseStartDate}
                  Duration = {currentDuration}
                  updateDuration = {updateDuration}
                  isSelectRangeDurationModal = {isSelectRangeDurationModal}
                  isSelectDurationStart = {isSelectDurationStart}
                  isSelectDaysOfWeeks = {isSelectDaysOfWeeks} 
                  setisSelectDurationStart = {setisSelectDurationStart}

                  />
                </div>
                  
              
            
        </div>
        
        </div>
    </div>
   
  )
}

export default DurationModal