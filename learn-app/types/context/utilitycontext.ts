export interface Iutilitycontext {
    screenWidth: number
    // mousePosition:any
    currentCursorVariant:string
    setcurrentCursorVariant:React.Dispatch<React.SetStateAction<string>>
    cursorLeave:()=>void
    cursorEnter:()=>void
    routerLocation:string
    navBarOptionLocation:any
    setnavBarOptionLocation:React.Dispatch<React.SetStateAction<any>>
    updateNavBarOptionLocation: (data:any) => void
    notfication:Tnotification
    setnotfication: React.Dispatch<React.SetStateAction<Tnotification>>
}


export type Tnotification = {
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