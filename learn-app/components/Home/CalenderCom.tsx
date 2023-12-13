import React from 'react'
import Calendar from 'react-calendar';
import { CalendarContext } from '../../context/CalenderContext';
import { Icalendarcontext } from '../../types/context/calendarcontext';

import { CalendarTileProperties } from 'react-calendar';
// import './Calender.css'
// import './Calendar.css';

type TcalenderCom = {

}

 const CalendarCom = (props:any) => {
    const {getDateInfo, setDateInfo, updateDateInfo} = React.useContext(CalendarContext) as Icalendarcontext
    const [value, onChange] = React.useState<any>(new Date());

    // React.useEffect(() => {
    //   onChange(new Date())
    // }, []);
    
    // const rot = ['d']
    console.log(value, 'value')

    React.useEffect(() => {
      if(props.isSelectRange && value.length){
        if(value.length){
          console.log(getDateInfo(value[0]) , 'valuez' , value[1])

        }
      }
    }, [value]);

    const getTileClassName = (e:CalendarTileProperties) => {
      console.log(e, 'tile')
      return 'text-blue-600'
    }

  return (
    <div>
        <div className=''   >
            <Calendar 
            onClickDay={(e)=>props.handleClick(e)} tileContent={'*'}  
            tileClassName={(e) => getTileClassName(e)}
            className={` text-lg lg:rounded-l-none border-y-2 w-full mx-auto  font-header12`} onChange={onChange} value={value}
            selectRange = {props.isSelectRange}
            minDate={props.minDate}
            maxDate={props.maxDate}
            
            // maxDate={}
            showDoubleView ={false}
            closeCalendar
            
            // defaultValue={value}
            />
        </div>
    </div>
  )
}

export  {CalendarCom}
