import { Interface } from "readline"

export interface Istudentcontext {
    isNewStudentOpen: boolean
    // toggleisNewStudentint:()=>void
    currentCPoption: string
    setcurrentCPOP:(option:string)=>void
    setlargePanelStudent: React.Dispatch<React.SetStateAction<{
        ispanel: boolean;
        panelX: number;
        panelY: number;
    }>>
    largePanelStudent: Ipanel1Student,
    smallPanelStudent:Ipanel1Student
    midpanelStudent:Ipanel1Student
    panel1ref:React.MutableRefObject<null>
    isAssesmentopen:boolean
    openAssesmentPanel:()=>void
    toggleNewStudentPanel:()=>void
    setcurrentStudentAge:React.Dispatch<React.SetStateAction<string | undefined>>
    currentStudentAge:string | undefined

}


interface Ipanel1Student {
    ispanel: boolean,
    panelX: number,
    panelY: number
}