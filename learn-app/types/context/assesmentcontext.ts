
export interface Iassesmentcontext {
    isCreateQuestionsOpen:Boolean
    setisCreateQuestionsOpen:React.Dispatch<React.SetStateAction<Boolean>>
    setcurrentquestionsRaw:React.Dispatch<React.SetStateAction<string>>
    currentquestionsRaw:string
    isProcessData:Boolean
    setisProcessData:React.Dispatch<React.SetStateAction<Boolean>>
    questionProcessedArray:any
    setquestionProcessedArray:React.Dispatch<React.SetStateAction<any>>
    currentProcessedQuestion:any
    setcurrentProcessedQuestion:React.Dispatch<React.SetStateAction<any>>
    processQuestionRaw:()=>void
    questionsArray:Iquestion[]
    currentQuestion:string
    setcurrentQuestion:React.Dispatch<React.SetStateAction<any>>
    currentAnswers:{
        A: string;
        B: string;
        C: string;
        D: string;
    }
    setcurrentAnswers:React.Dispatch<React.SetStateAction<{
        A: string;
        B: string;
        C: string;
        D: string;
    }>>

}

export interface Iquestion {
    question:string
    answers:string[]
    correctanswer?:string
    id:string
}
