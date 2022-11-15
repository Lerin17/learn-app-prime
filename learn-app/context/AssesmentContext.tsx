import React from 'react'
import { FaWeebly } from 'react-icons/fa';
import { Iassesmentcontext } from '../types/context/assesmentcontext';
import { Iquestion } from '../types/question';

const AssesmentContext = React.createContext< Iassesmentcontext | null>(null)

const AssesmentContextProvider = (props:any) => {



    const [isCreateQuestionsOpen, setisCreateQuestionsOpen] = React.useState<Boolean>(false);
    
    const [currentquestionsRaw, setcurrentquestionsRaw] = React.useState('');

    const [currentQuestion, setcurrentQuestion] = React.useState('');

    

    const [currentAnswers, setcurrentAnswers] = React.useState({
      A:'A',
      B:'B',
      C:'C',
      D:'D'
    });

    // const [, set] = useState();

    const [isProcessData, setisProcessData] = React.useState<Boolean>(false);

    const [questionProcessedArray, setquestionProcessedArray] = React.useState<any>([]);

  const [questionsArray, setquestionsArray] = React.useState([]);

    const [currentProcessedQuestion, setcurrentProcessedQuestion] = React.useState<string[]>([]);

//

// const Add = (a:number, b:number) => {
//   return a +b
// }
let arrayBatch:string[] = []

const processQuestionRaw = () => {
  const splitQuestion =  currentquestionsRaw.split('\n')
  // setisCreateQuestionsOpen([])
  setquestionProcessedArray([])

  setTimeout(() => {
    splitQuestion.map(item => {
      const last = item.length - 1
  
      if(item[last] == '.'){
        
        arrayBatch.push(item)
  
        let array = arrayBatch
        arrayBatch = []
  
        setquestionProcessedArray((prev:any) => ([...prev, array]))
  
      }else{
        arrayBatch.push(item)
      }
    })
  }, 10);

}

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

  let xx

  if(processArray){
    
 xx =  processArray.map((item:any) => {
  let question
  let answers:string[] = []


  if(item){
    item.map((text:any) => {
      
      if(item[0] == text){
        question = text
      }else{
        answers.push(text)
      }
    })

    return {
      question,
      answers,
      id:Date.now()
    }
  }
}) 

setquestionsArray(xx)
  }

  
  console.log(xx, 'whatebver')
}, [questionProcessedArray]);




console.log(questionProcessedArray, 'Array')



// export default Add


  // React.useEffect(() => {
  //   console.log(currentProcessedQuestion, 'currently')
  //   setcurrentProcessedQuestion([]) 
  // }, [questionProcessedArray]);


  // React.useEffect(()=> {

  //   let processed

  //   processed = que

  // }, [])
  // module.exports = Add

  return (
    <AssesmentContext.Provider value={{isCreateQuestionsOpen,questionProcessedArray , currentProcessedQuestion,setcurrentProcessedQuestion,isProcessData,setquestionProcessedArray,setisCreateQuestionsOpen, setcurrentquestionsRaw, currentquestionsRaw, setisProcessData, processQuestionRaw, questionsArray,currentQuestion,setcurrentQuestion,setcurrentAnswers,currentAnswers }}>
        {props.children}
    </AssesmentContext.Provider>
  )
}



export {AssesmentContext, AssesmentContextProvider}
