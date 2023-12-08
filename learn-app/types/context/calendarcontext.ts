export interface Icalendarcontext {
    DateInfo: Idateinfo
    getDateInfo:(e:any)=>void
    TommorowDateInfo:Idateinfo
    isDateTerminal: Boolean
    toggleisDateTerminal:()=>void
}

export interface Idateinfo {  
    Day: String | undefined
    Month: String | undefined
    Year: String | undefined
    Date: String | undefined
}