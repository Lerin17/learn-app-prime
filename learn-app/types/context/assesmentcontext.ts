
export interface Iassesmentcontext {
    isCreateQuestionsOpen:Boolean
    setisCreateQuestionsOpen:React.Dispatch<React.SetStateAction<Boolean>>
    setcurrentquestionsRaw:React.Dispatch<React.SetStateAction<string>>
    currentquestionsRaw:string
    questionProcessedArray:any
    setquestionProcessedArray:React.Dispatch<React.SetStateAction<any>>
    processQuestionRaw:()=>void
    QuestionsArray:Iquestion[] | []
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
    processQuestionsInput:()=>void
    isOpenSideBarQuestion:boolean
    setisOpenSideBarQuestion:React.Dispatch<React.SetStateAction<boolean>>
    setcurrentCorrectAnswer:React.Dispatch<React.SetStateAction<string>>
    currentCorrectAnswer:string
    currentQuestionBatchTagsArray:string[]
    setcurrentQuestionBatchTagsArray:React.Dispatch<React.SetStateAction<string[]>>
    addNewTag:()=>void
    isQuestionList:Boolean
    setisQuestionList:React.Dispatch<React.SetStateAction<boolean>>
    isQuestionHome:boolean
    setisQuestionHome:React.Dispatch<React.SetStateAction<boolean>>


}

export interface Iquestion {
    question:string
    answers:string[]
    correctanswer?:string
    id:string
    tags?:string[]
}
