export interface Iutilitycontext {
    screenWidth: number
    mousePosition:any
    currentCursorVariant:string
    setcurrentCursorVariant:React.Dispatch<React.SetStateAction<string>>
    cursorLeave:()=>void
    cursorEnter:()=>void
    routerLocation:string
}