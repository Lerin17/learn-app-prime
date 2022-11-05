import React from 'react'

import { CourseContext } from '../../../context/CourseContext'

import { Icoursecontext } from '../../../types/context/coursecontext'

const DaysofWeekdisplay = () => {

    const DaysoftheWeek = [
        'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',
        'Saturday'
    ]


    const {currentDayOfWeek} = React.useContext(CourseContext) as Icoursecontext
    
    const DaysSelected = currentDayOfWeek.map((item:string) => {
        return {
            index:currentDayOfWeek.indexOf(item),
            name:item
        }
    })

    const jam = []

//    DaysSelected.map(item => {
//     jam.splice()
//    })



//   let DaysSelcted =  DaysSelected.filter(item => {
    
//         return ()
//     })

//     const getDaysSelected = () => {
//         let array = []

//         const DaysSelctedx =  DaysSelected.map(item => {
//             const ITEM = item
//             let n = 0
//             DaysSelcted.map(item => {
//                 if(ITEM.index > item.index){
//                     n
//                 }
//             })
        
           
           
//         })
//     }



  return (
    <div>{currentDayOfWeek}</div>
  )
}

export default DaysofWeekdisplay