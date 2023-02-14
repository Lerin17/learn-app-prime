export interface Iusercontext {
    isUserStudent:boolean
    setisUserStudent: React.Dispatch<React.SetStateAction<boolean>>
    addNewUser:() => void
    isLoginPage:boolean
    setisLoginPage: React.Dispatch<React.SetStateAction<boolean>>
    userData:Iuserdata
    setuserData:React.Dispatch<React.SetStateAction<Iuserdata>>
}

export interface Iuserdata {
    name:string
    hashedpassword:string
    email:string
    networks:[]
    packages:[]
}