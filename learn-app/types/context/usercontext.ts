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
}

export type Tpackage = {
  name:string,
  description:string
  courses:any[],
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
    packages:[]
    id:string
}