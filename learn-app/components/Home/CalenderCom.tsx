import React from 'react'
import Calendar from 'react-calendar';
import { CalendarContext } from '../../context/CalenderContext';
import { Icalendarcontext } from '../../types/context/calendarcontext';

// import './Calender.css'
// import './Calendar.css';

 const CalendarCom = () => {
    const {getDateInfo} = React.useContext(CalendarContext) as Icalendarcontext
    const [value, onChange] = React.useState(new Date());

  return (
    <div>
        <div className=''   >
            <Calendar onClickDay={(e)=>{getDateInfo(e)}} tileContent={'*'}  tileClassName={'bg-red-400 border'} className={`text-gray-300 text-lg lg:rounded-l-none border-y-2  border-lime-400 rounded mx-auto  font-header6`} onChange={onChange} value={value} />
        </div>
    </div>
  )
}

export  {CalendarCom}
