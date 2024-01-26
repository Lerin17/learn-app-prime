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
}