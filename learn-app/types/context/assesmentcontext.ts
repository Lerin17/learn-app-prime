
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
    isQuestionList:Boolean
    setisQuestionList:React.Dispatch<React.SetStateAction<boolean>>
    isQuestionHome:boolean
    setisQuestionHome:React.Dispatch<React.SetStateAction<boolean>>
    TagsOptions:{
        value: string;
        label: string;
      }[]
      isQuestionsTest:boolean
    setisQuestionsTest:React.Dispatch<React.SetStateAction<boolean>>
    isPreviewPage:boolean
     setisPreviewPage:React.Dispatch<React.SetStateAction<boolean>>
     currentTestQuestionsArray:Iquestion[]
     setcurrentTestQuestionsArray:React.Dispatch<React.SetStateAction<Iquestion[]>>
     currentTestQuestionsTimeInput: {
        hours: number;
        minutes: number;
        seconds: number;
    }
     setcurrentTestQuestionTimeInput: React.Dispatch<React.SetStateAction<{
        hours: number;
        minutes: number;
        seconds: number;
    }>>
    currentNoOfTestQuestions:number
    setcurrentNoOfTestQuestions: React.Dispatch<React.SetStateAction<number>>
    tagsArrayForTestQuestions:{value:string,
    option:string}[]
    settagsArrayForTestQuestions:React.Dispatch<React.SetStateAction<{
        value: string;
        option: string;
    }[]>>
    // Test:any
}

export interface Iquestion {
    question:string
    answers:string[]
    correctanswer?:string
    id:string
    tags:string[]
}
