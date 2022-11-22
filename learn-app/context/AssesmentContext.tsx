import React from 'react'
import { FaWeebly } from 'react-icons/fa';
import { Iassesmentcontext } from '../types/context/assesmentcontext';
import { Iquestion } from '../types/context/assesmentcontext';
import uniqid from 'uniqid'

const AssesmentContext = React.createContext< Iassesmentcontext | null>(null)

const AssesmentContextProvider = (props:any) => {



    const [isCreateQuestionsOpen, setisCreateQuestionsOpen] = React.useState<Boolean>(false);
    
    //the raw questions and answers in their least processed form
    const [currentquestionsRaw, setcurrentquestionsRaw] = React.useState('');

    //questionProcessArray, namechange pending. is a rough array of the questions and answers from the raw inpiut mehtod after they have been partially processed
    const [questionProcessedArray, setquestionProcessedArray] = React.useState<any>([]);

    //the two below respectively are, current question through normal input method, current Answers object throught normal input mehtod
    const [currentQuestion, setcurrentQuestion] = React.useState('');

    const [currentAnswers, setcurrentAnswers] = React.useState({
      A:'',
      B:'',
      C:'',
      D:''
    });

    const [currentCorrectAnswer, setcurrentCorrectAnswer] = React.useState('');

    // const [, set] = useState();


 //questions array contains the sum questions set from either raw or normal input method, further subdivisions should be provided enventually
  const [currentQuestionBatchArray, setcurrentQuestionsBatchArray] = React.useState<Iquestion[] | []>([]);

  const [questionsArray, setquestionsArray] = React.useState([]);


const [isOpenSideBarQuestion, setisOpenSideBarQuestion] = React.useState<boolean>(false);

const [currentQuestionBatchTagsArray, setcurrentQuestionBatchTagsArray] = React.useState<string[]>(['All']);


// const [currentQuestionBatch, setcurrentQuestionBatch] = React.useState([]);
// const [Que, setQue] = useState();
//

// const Add = (a:number, b:number) => {
//   return a +b
// }

const addNewTag = () => {
  setcurrentQuestionBatchTagsArray(prev => [...prev, 'Anything'])
}

let array:string[] = []

const processQuestionsInput = () => {
  console.log(currentAnswers)
  console.log(currentQuestion)

  let findcorrectAnswersArray =['A', 'B', 'C', 'D']

 const answers = [currentAnswers.A, currentAnswers.B, currentAnswers.C, currentAnswers.D]

const correctAnswerIndex = findcorrectAnswersArray.indexOf(currentCorrectAnswer) 

// setcurrentQuestionBatch((prev) => ([]))

  setcurrentQuestionsBatchArray((prev) => ([...prev, {
    question:currentQuestion,
    correctanswer:answers[correctAnswerIndex],
    answers:[currentAnswers.A, currentAnswers.B, currentAnswers.C, currentAnswers.D],
    id: uniqid()
  }]))
}

const processQuestionRaw = () => {
  // 
  const splitQuestion =  currentquestionsRaw.split('\n')
  // setisCreateQuestionsOpen([])
  setquestionProcessedArray([])

  setTimeout(() => {
    splitQuestion.map(item => {
      const last = item.length - 1


  
      if(item[last] == '.'){
        
        array.push(item)
  
        let arrayBatch = array
        array = []
  
        console.log(arrayBatch,'dddzszszzszszszzsszz')
        setquestionProcessedArray((prev:any) => ([...prev, arrayBatch]))

  
      }else{
        array.push(item)
      }
    })
  }, 10);

}

React.useEffect(() => {
  
}, []);

React.useEffect(() => {
  let processArray

  if(questionProcessedArray.length){
     processArray =  questionProcessedArray.map((item:any) => {
      const filtred = item.filter((text:any)=>{
        if(text){
          return text
        }})
  
      return filtred
  
    })
  }

  let getProcessedArray:Iquestion[] | []

  if(processArray){
    
 getProcessedArray
    =  processArray.map((item:any) => {
  let question:string=''
  let answers:string[] = []
  let correctanswer:string=''


  if(item){
    item.map((text:any) => {
      console.log(text[text.length-1])
      if(text[text.length-1] == '/'){
        correctanswer = text
      }

      if(item[0] == text){
        question = text
      }else{
        answers.push(text)
      }
    })

    return {
      question,
      answers,
      correctanswer,
      id:uniqid()
    }
  }
}) 

const presentIds:any[] = currentQuestionBatchArray.length? currentQuestionBatchArray.map(item => (item.question)):[]

// presentIds.includes('e')
// console.log(getProcessedArray, 'getProcessedArray')

const itemNotPresent = getProcessedArray.filter((item:any) => {
  if(!presentIds.includes(item.question)){
    return item
  }
})

// console.log(wor, 'work')

setcurrentQuestionsBatchArray((prev:Iquestion[]) => ([...prev,...itemNotPresent]))

}

  
  // console.log(xx, 'whatebver')
}, [questionProcessedArray]);



  return (
    <AssesmentContext.Provider value={{isCreateQuestionsOpen,questionProcessedArray , setquestionProcessedArray,setisCreateQuestionsOpen, setcurrentquestionsRaw, currentquestionsRaw,processQuestionRaw, currentQuestionBatchArray, currentQuestion,setcurrentQuestion,setcurrentAnswers,currentAnswers, processQuestionsInput, isOpenSideBarQuestion,setisOpenSideBarQuestion,setcurrentCorrectAnswer,currentCorrectAnswer,currentQuestionBatchTagsArray,setcurrentQuestionBatchTagsArray,addNewTag }}>
        {props.children}
    </AssesmentContext.Provider>
  )
}



export {AssesmentContext, AssesmentContextProvider}
