import React from 'react'
import Calendar from 'react-calendar';
import { CalendarContext } from '../../context/CalenderContext';
import { Icalendarcontext } from '../../types/context/calendarcontext';

import { CalendarTileProperties } from 'react-calendar';
// import './Calender.css'
// import './Calendar.css';

type TCalenderValuePiece = Date | null

type TCalenderValue = TCalenderValuePiece | [TCalenderValuePiece, TCalenderValuePiece]
// Date | null | undefined | [Date | null, Date | null]

 const CalendarCom = (props:any) => {
    const {getDateInfo, setDateInfo, updateDateInfo} = React.useContext(CalendarContext) as Icalendarcontext
    const [value, onChange] = React.useState<any>(new Date());

    // React.useEffect(() => {
    //   onChange(new Date())
    // }, []);
    
    // const rot = ['d']
    console.log(value, 'value')

    React.useEffect(() => {

      //getMaxandMinValues in getDateInfo type
      if(props.isSelectRange && props.value.length){
        if(props.value.length){
          console.log(getDateInfo(props.value[0]) , 'valuez' , value[1])

        }
      }
    }, [value]);

    const getTileClassName = (e:CalendarTileProperties) => {
      console.log(e, 'tile')
      return 'text-black'
    }

    // Function: ({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 3 ? 'wednesday' : null

  return (
    <div>
        <div className=''   >
            <Calendar 
            onClickDay={(e)=>props.handleClick(e)} tileContent={'*'}  
            tileClassName={(e) => getTileClassName(e)}
            className={` text-lg border w-full mx-auto  font-header12`} onChange={props.onChange} value={props.value}
            selectRange = {props.isSelectRange}
            // minDate={props.minDate}
            // maxDate={props.maxDate}
            
            // maxDate={}
            showDoubleView ={false}
            closeCalendar
            allowPartialRange

            // defaultValue={value}
            />
        </div>
    </div>
  )
}

export  {CalendarCom}
