export interface Iusercontext {
    isUserStudent:boolean
    setisUserStudent: React.Dispatch<React.SetStateAction<boolean>>
    addNewUser:() => void
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
    notficationState:string
    
}

export interface Iuserdata {
    name:string
    hashedpassword:string
    email:string
    networks:[]
    packages:[]
}