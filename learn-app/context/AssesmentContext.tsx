import React from 'react'
import { Iassesmentcontext } from '../types/context/assesmentcontext';

const AssesmentContext = React.createContext< Iassesmentcontext | null>(null)

const AssesmentContextProvider = (props:any) => {

    const [isCreateQuestionsOpen, setisCreateQuestionsOpen] = React.useState<Boolean>(false);
    
    const [questionsRaw, setquestionsRaw] = React.useState('');

    // const [, set] = useState();

    const [isProcessData, setisProcessData] = React.useState<Boolean>(false);

    const [questionProcessedArray, setquestionProcessedArray] = React.useState<any>([]);

    const [currentProcessedQuestion, setcurrentProcessedQuestion] = React.useState<string[]>([]);
// 








  React.useEffect(() => {
    console.log(currentProcessedQuestion, 'currently')
    setcurrentProcessedQuestion([]) 
  }, [questionProcessedArray]);


  // React.useEffect(()=> {

  //   let processed

  //   processed = que

  // }, [])


  return (
    <AssesmentContext.Provider value={{isCreateQuestionsOpen,questionProcessedArray , currentProcessedQuestion,setcurrentProcessedQuestion,isProcessData,setquestionProcessedArray,setisCreateQuestionsOpen, setquestionsRaw, questionsRaw, setisProcessData}}>
        {props.children}
    </AssesmentContext.Provider>
  )
}

export {AssesmentContext, AssesmentContextProvider}
