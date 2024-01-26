import React from 'react'
import { Icoursecontext } from '../../../../../types/context/coursecontext'
import { CourseContext } from '../../../../../context/CourseContext'

const DaysOfWeeksMenu = () => {

    const {isDurationModal, setisDurationModal, setcurrentDaysOfWeek, currentDaysOfWeek} = React.useContext(CourseContext) as Icoursecontext

    const DaysoftheWeek = [
        'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',
        'Saturday'
    ]

    const handleAddDaysofWeek = (DOW:string) => {
        currentDaysOfWeek.includes(DOW)?setcurrentDaysOfWeek(prev => prev.filter(item =>  item !== DOW?item:null )):setcurrentDaysOfWeek(prev => [DOW,...prev])
        
    }

    const DaysofWeekdisplay = DaysoftheWeek.map(item => 
        <div onClick={()=>handleAddDaysofWeek(item)} className={`${currentDaysOfWeek.includes(item)?'bg-amber-800 hover:bg-amber-800':'hover:text-black hover:bg-white'} w-1/4 lg:w-1/5 h-full h-10 border mr-1 mb-1  flex items-center justify-center text-xs md:text-base lg:text-xl  transition-all` }>
         
            {item}
         
           
        </div>
    )

  return (
    <div className=''>
    <div className='flex flex-wrap'>
       {DaysofWeekdisplay}
    </div>
    </div>
 
  )
}

export default DaysOfWeeksMenu