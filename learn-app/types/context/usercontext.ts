export interface Iusercontext {
    isUserStudent:boolean
    setisUserStudent: React.Dispatch<React.SetStateAction<boolean>>
    addNewUser:() => void
    logininUser:()=>void
    isLoginPage:boolean
    setisLoginPage: React.Dispatch<React.SetStateAction<boolean>>
    userData:Iuserdata
    setuserData:React.Dispatch<React.SetStateAction<Iuserdata>>
    Userpasswordinput:string
    setUserpasswordinput: React.Dispatch<React.SetStateAction<string>>
    Useremailinput:string
     setUseremailinput:React.Dispatch<React.SetStateAction<string>>
     Usernameinput:string
    setUsernameinput:React.Dispatch<React.SetStateAction<string>>
    // notfication:Tnotification
    isPackagesPage:boolean
    setisPackagesPage: React.Dispatch<React.SetStateAction<boolean>>
    isCreatePackage:boolean
    setisCreatePackage:React.Dispatch<React.SetStateAction<boolean>>
    userPackagesArray:Tpackage[]
    setuserPackagesArray: React.Dispatch<React.SetStateAction<Tpackage[]>>
    currentUserPackage:Tpackage
    setcurrentUserPackage:React.Dispatch<React.SetStateAction<Tpackage>>
    saveUserPackage:()=>void
    clearUserPackage:()=>void
    isNetworkPage:boolean
    setisNetworkPage:React.Dispatch<React.SetStateAction<boolean>>
    isSubscriberList:boolean
    setisSubscriberList:React.Dispatch<React.SetStateAction<boolean>>
    copyUserLink:()=>void
    subscribeLinkInput:string
     setsubscribeLinkInput:React.Dispatch<React.SetStateAction<string>>
     searchForNetwork:(arg:boolean)=>void
    //  subscribeToUrlLink:string
    // setsubscribeToUrlLink:React.Dispatch<React.SetStateAction<string>>
    channelDetails: null | TchannelDetails
    setchannelDetails: React.Dispatch<React.SetStateAction<TchannelDetails | null>>
    isWaiting:boolean
    updateUserCourseData:(CourseObject:any) => void


}

export type TchannelDetails = {
  name:string | undefined,
  SearchedPackage:any,
  data:{} | undefined,
  allPackages:any[] | null
}

export type Tpackage = {
  name:string,
  description:string
  courses:any[],
  id:string
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

export type Tpackagesubscribers = {
  name:string
}

type Tnotification = {
    type:'success',
    message:string
  } | {type:'error',
    message:string} | {
    type:'error-mini',
    message:string
  } | {
    type:'success-mini',
    message:string
  }| null


export interface Iuserdata {
    name:string
    hashedpassword:string
    email:string
    networks:[]
    packages:Tpackage[]
    subscribers: Tpackagesubscribers[]
    yourSubscriptions:[]
    id:string
    allCourses:Icourseobject[] 
    allCourseGroups:IcourseGroupObject[]
    isAdmin?:boolean
}