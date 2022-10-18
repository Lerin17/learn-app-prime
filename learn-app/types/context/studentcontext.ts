import { Interface } from "readline"

export interface Istudentcontext {
    isNewStudentint: boolean
    toggleisNewStudentint:()=>void
    currentCPoption: string
    setcurrentCPOP:(option:string)=>void
    setpanel1Student: React.Dispatch<React.SetStateAction<{
        ispanel: boolean;
        panelX: number;
        panelY: number;
    }>>
    panel1Student: Ipanel1Student,
    panel1ref:React.MutableRefObject<null>

}


interface Ipanel1Student {
    ispanel: boolean,
    panelX: number,
    panelY: number
}