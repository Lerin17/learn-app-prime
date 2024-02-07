export interface Icoursecontext{
CourseObject: Icourseobject | undefined
CoursesArray:Icourseobject[]
coursesArray:Icourseobject[]
toggleNewCoursePanel:()=>void
isNewCoursePanelOpen:boolean
setisNewCoursePanelOpen:React.Dispatch<React.SetStateAction<boolean>>
isTopicPanelOpen:boolean
toggleTopicPanel:()=>void
currentCourseName:string
currentCodeDesc:string
currentCourseCode:string
currentNoWeeks:string
isDowCarousel:boolean
toggleisDowCarousel:()=>void
setisDowCarousel:React.Dispatch<React.SetStateAction<boolean>>
setcurrentCourseName:React.Dispatch<React.SetStateAction<string>>
setcurrentCodeDesc:React.Dispatch<React.SetStateAction<string>>
setcurrentCourseCode:React.Dispatch<React.SetStateAction<string>>
setcurrentNoWeeks:React.Dispatch<React.SetStateAction<string>>
saveCurrentCourse:(Arg:IsaveCurrentCourseArg)=>void

currentDaysOfWeek:string[]
setcurrentDaysOfWeek:React.Dispatch<React.SetStateAction<string[]>>
courseListSelectedCourse:Icourseobject | undefined | null
setcourseListSelectedCourse:React.Dispatch<React.SetStateAction<Icourseobject | undefined | null>>
setisCourseList:React.Dispatch<React.SetStateAction<boolean>>
isCourseList:boolean
isParentCourse:boolean
setisParentCourse:React.Dispatch<React.SetStateAction<boolean>>
isCreateCourseGroupOpen:boolean
 setisCreateCourseGroupOpen:React.Dispatch<React.SetStateAction<boolean>>
 currentCourseGroupName:string
 currentCourseGroupAbv:string
 currentCourseGroupDesc:string
 currentCourseGroupCourseArray:Icourseobject[]
 currentCourseStartDate:IstartDate | undefined
setcurrentCourseStartDate:React.Dispatch<React.SetStateAction<IstartDate | undefined>>
 inputCourseGroupDetails: (Arg:IinputCourseGroupDetailsArg)=>void
 saveCurrentCourseGroup:(obj:IsaveCurrentCourseGroupArg)=>void
 courseGroupArray:IcourseGroupObject[]
 currentCourseGroup:object
 setcurrentCourseGroup:React.Dispatch<React.SetStateAction<any>>
 isDurationModal:boolean
setisDurationModal:React.Dispatch<React.SetStateAction<boolean>>
currentDuration:IcourseDuration
setcurrentDuration:React.Dispatch<React.SetStateAction<IcourseDuration>>
currentCourseSection:any[]
setcurrentCourseSection: React.Dispatch<React.SetStateAction<any[]>>
getSectionContent:(item:string) => any
openSelectedSectionContent:(id:number) => void
// courseNotification:Tnotification
}


// type Tnotification = {
//     type:'success',
//     message:string
//   } | {type:'error',
//     message:string} | {
//     type:'error-mini',
//     message:string
//   } | {
//     type:'success-mini',
//     message:string
//   }| null


export interface IinputCourseGroupDetailsArg {
    name:string
    abv:string
    desc:string
    // e: React.MouseEvent<HTMLDivElement, MouseEvent> 
} 

export interface IinputCourseDetailsArg {
    name:string
}

export interface IsaveCurrentCourseArg {
    currentCourseName:string
    currentCodeDesc:string
    currentCourseCode:string
    currentDuration:IcourseDuration
    currentCourseStartDate: IstartDate | undefined
    currentDaysOfWeek:string[]
    // courseId?:string | undefined
}

export interface IsaveCurrentCourseGroupArg {
currentCourseGroupDesc:string
currentCourseGroupAbv:string
currentCourseGroupName:string
}

export interface IstartDate {
        text:string | null,
        dateObj:Date | null
} 

export interface IcourseDuration {
    NoWeeks:number | null,
    NoDays:number | null
} 
export interface Icourseobject {
    courseName: string
    courseCode:string
    courseDesc:string
    // NoWeeks:string
    courseDuration:IcourseDuration
    startDate: IstartDate 
    courseId:string
    daysOfTheWeek:string[]

}

export interface IcourseGroupObject {
    courseGroupName: string,
    courseGroupDesc:string,
    courseGroupAbv:string,
    courseGroupCourseArray:[]
    courseGroupId:string

}



interface Icheckboxes {
    completed:boolean
    name:string
}

interface Itopics {
    checkpoints: Icheckboxes
    name:string
}