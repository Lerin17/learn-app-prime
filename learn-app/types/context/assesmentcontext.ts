
export interface Iassesmentcontext {
    isCreateQuestionsOpen:Boolean
    setisCreateQuestionsOpen:React.Dispatch<React.SetStateAction<Boolean>>
    setquestionsRaw:React.Dispatch<React.SetStateAction<string>>
    questionsRaw:string
    isProcessData:Boolean
    setisProcessData:React.Dispatch<React.SetStateAction<Boolean>>
    questionProcessedArray:any
    setquestionProcessedArray:React.Dispatch<React.SetStateAction<any>>
    currentProcessedQuestion:any
    setcurrentProcessedQuestion:React.Dispatch<React.SetStateAction<any>>

}