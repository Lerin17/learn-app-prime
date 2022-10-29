export interface Icoursecontext{
CourseObject: Icourseobject | undefined
CoursesArray:Icourseobject[]
coursesArray:Icourseobject[]
toggleNewCoursePanel:()=>void
isNewCoursePanelOpen:boolean
isTopicPanelOpen:boolean
toggleTopicPanel:()=>void
currentCourseName:string
currentCodeDesc:string
currentCourseCode:string
currentNoWeeks:string
setcurrentCourseName:React.Dispatch<React.SetStateAction<string>>
setcurrentCodeDesc:React.Dispatch<React.SetStateAction<string>>
setcurrentCourseCode:React.Dispatch<React.SetStateAction<string>>
setcurrentNoWeeks:React.Dispatch<React.SetStateAction<string>>
saveCurrentCourse:({currentCourseName, currentCodeDesc, currentCourseCode}:IsaveCurrentCourseArg)=>void
}

export interface IsaveCurrentCourseArg {
    currentCourseName:string
    currentCodeDesc:string
    currentCourseCode:string
}


export interface Icourseobject {
    courseName: string
    courseCode:string
    checkboxes:Icheckboxes[]
    topics: Itopics[]
}



interface Icheckboxes {
    completed:boolean
    name:string
}

interface Itopics {
    checkpoints: Icheckboxes
    name:string
}