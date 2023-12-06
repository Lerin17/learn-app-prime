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
    notfication:Tnotification
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
    subscriberDetails: null | TsubscriberDetails
    setsubscriberDetails: React.Dispatch<React.SetStateAction<TsubscriberDetails | null>>
    isWaiting:boolean
   

}

export type TsubscriberDetails = {
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
}