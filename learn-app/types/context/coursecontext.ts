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
saveCurrentCourse:({currentCourseName, currentCodeDesc, currentCourseCode}:IsaveCurrentCourseArg)=>void
addDayOfWeek:(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void
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
 inputCourseGroupDetails: (Arg:IinputCourseGroupDetailsArg)=>void
 saveCurrentCourseGroup:(obj:IsaveCurrentCourseGroupArg)=>void
 courseGroupArray:IcourseGroupObject[]
 currentCourseGroup:object
 setcurrentCourseGroup:React.Dispatch<React.SetStateAction<any>>
}

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
    currentNoWeeks:string
}

export interface IsaveCurrentCourseGroupArg {
currentCourseGroupDesc:string
currentCourseGroupAbv:string
currentCourseGroupName:string
}


export interface Icourseobject {
    courseName: string
    courseCode:string
    courseDesc:string
    NoWeeks:string
    daysOfTheWeek:string[]
    courseId:string 
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