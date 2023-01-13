import React from 'react'
import { FaWeebly } from 'react-icons/fa';
import { Iassesmentcontext } from '../types/context/assesmentcontext';
import { Iquestion } from '../types/context/assesmentcontext';
import uniqid from 'uniqid'
import { CourseContext } from './CourseContext';
import { Icoursecontext } from '../types/context/coursecontext';

const {products, people, questions} = require('../testdata/QuestionsArraysample')

const AssesmentContext = React.createContext< Iassesmentcontext | null>(null)

const AssesmentContextProvider = (props:any) => {
  console.log(people, 'people')

  const {coursesArray,courseGroupArray} = React.useContext(CourseContext) as Icoursecontext

  // console.log(coursesArray, 'jack')


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
  const [QuestionsArray, setQuestionsArray] = React.useState<Iquestion[] | []>([...questions]);

  // const [questionsArray, setquestionsArray] = React.useState([]);


const [isOpenSideBarQuestion, setisOpenSideBarQuestion] = React.useState<boolean>(false);

const [currentQuestionBatchTagsArray, setcurrentQuestionBatchTagsArray] = React.useState<string[]>(['All']);

//In the process of creating a test these are the questions that are filtered out and selected
const [currentTestQuestionsArray, setcurrentTestQuestionsArray] = React.useState<Iquestion[]>([]);

//The number of questions selected for a test
const [currentNoOfTestQuestions, setcurrentNoOfTestQuestions] = React.useState<number>(0);

const [currentTestQuestionsTimeInput, setcurrentTestQuestionTimeInput] = React.useState< {
  hours: number;
  minutes: number;
  seconds: number;
}>(
  {hours:0,
  minutes:0,
  seconds:0},
);

// const [Test, setTest] = React.useState([]);

const [TagsOptions, setTagsOptions] = React.useState<{
  value: string;
  label: string;
}[]>( [
  { value: 'chocolate', label: 'Chocolate' },
  // { value: 'strawberry', label: 'Strawberry' },
  // { value: 'vanilla', label: 'Vanilla' }
]);

const [isQuestionList, setisQuestionList] = React.useState(false);

const [isQuestionHome, setisQuestionHome] = React.useState(true);

const [isQuestionsTest, setisQuestionsTest] = React.useState(false);

const [isPreviewPage, setisPreviewPage] = React.useState(false);
// const [currentQuestionBatch, setcurrentQuestionBatch] = React.useState([]);
// const [Que, setQue] = useState();
//

//these are the tags used to filter out test questions in the process of creating a test
const [tagsArrayForTestQuestions, settagsArrayForTestQuestions] = React.useState<{
  value: string;
  option: string;
}[]>([]);

// const Add = (a:number, b:number) => {
//   return a +b
// }

console.log(courseGroupArray, 'courde')
console.log(TagsOptions, 'Tags')

React.useEffect(() => {
  const AvailableCourses = coursesArray.map(item => (item.courseName))

  const AvailableCourseGroups = courseGroupArray.map(item => (item.courseGroupName))

  const getTagsOptions = [...AvailableCourses, ...AvailableCourseGroups].map(item => ({
    value:item,
    label:item
  }))

  setTagsOptions((prev:any) => ([...prev, ...getTagsOptions]))


}, [courseGroupArray, coursesArray]);


let array:string[] = []

const processQuestionsInput = () => {
  console.log(currentAnswers)
  console.log(currentQuestion)

  let findcorrectAnswersArray =['A', 'B', 'C', 'D']

 const answers = [currentAnswers.A, currentAnswers.B, currentAnswers.C, currentAnswers.D]

const correctAnswerIndex = findcorrectAnswersArray.indexOf(currentCorrectAnswer) 

// setcurrentQuestionBatch((prev) => ([]))

  setQuestionsArray((prev) => ([...prev, {
    question:currentQuestion,
    correctanswer:answers[correctAnswerIndex],
    answers:[currentAnswers.A, currentAnswers.B, currentAnswers.C, currentAnswers.D],
    id: uniqid(),
    tags:currentQuestionBatchTagsArray
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

// React.useEffect(() => {
  
// }, []);

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
    item.map((text:string) => {
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
      id:uniqid(),
      tags:currentQuestionBatchTagsArray
    }
  }
}) 

const presentIds:any[] = QuestionsArray.length? QuestionsArray.map(item => (item.question)):[]

// presentIds.includes('e')
// console.log(getProcessedArray, 'getProcessedArray')

const itemNotPresent = getProcessedArray.filter((item:any) => {
  if(!presentIds.includes(item.question)){
    return item
  }
})

setQuestionsArray((prev:Iquestion[]) => ([...prev,...itemNotPresent]))

}

}, [questionProcessedArray]);



  return (
    <AssesmentContext.Provider value={{isCreateQuestionsOpen,questionProcessedArray , setquestionProcessedArray,setisCreateQuestionsOpen, setcurrentquestionsRaw, currentquestionsRaw,processQuestionRaw, QuestionsArray, currentQuestion,setcurrentQuestion,setcurrentAnswers,currentAnswers, processQuestionsInput, isOpenSideBarQuestion,setisOpenSideBarQuestion,setcurrentCorrectAnswer,currentCorrectAnswer,currentQuestionBatchTagsArray,setcurrentQuestionBatchTagsArray,isQuestionList, setisQuestionList, isQuestionHome, setisQuestionHome,TagsOptions, isQuestionsTest, setisQuestionsTest,isPreviewPage, setisPreviewPage, currentTestQuestionsArray, setcurrentTestQuestionsArray, currentTestQuestionsTimeInput, setcurrentTestQuestionTimeInput, currentNoOfTestQuestions, setcurrentNoOfTestQuestions, tagsArrayForTestQuestions, settagsArrayForTestQuestions}}>
        {props.children}
    </AssesmentContext.Provider>
  )
}



export {AssesmentContext, AssesmentContextProvider}
