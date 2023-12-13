export interface Icalendarcontext {
    DateInfo: Idateinfo
    getDateInfo:(e:any)=>Idateinfo
    TommorowDateInfo:Idateinfo
    isDateTerminal: Boolean
    toggleisDateTerminal:()=>void
    isSelectRange:Boolean
    setisSelectRange:React.Dispatch<React.SetStateAction<Boolean>>
    rangeMin:any
    setrangeMin:React.Dispatch<React.SetStateAction<any>>
    rangeMax:any
    setrangeMax:React.Dispatch<React.SetStateAction<any>>
    setDateInfo:React.Dispatch<React.SetStateAction<Idateinfo>>
    updateDateInfo:(e:any) => void

}

export interface Idateinfo {  
    Day: String | undefined
    Month: String | undefined
    Year: String | undefined
    Date: String | undefined
}