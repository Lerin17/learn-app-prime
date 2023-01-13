import { Button } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { AssesmentContext } from '../../../context/AssesmentContext'

import { Iassesmentcontext } from '../../../types/context/assesmentcontext'

import { Iquestion } from '../../../types/context/assesmentcontext'


const PreviewPage = () => {

  const {isCreateQuestionsOpen, setisCreateQuestionsOpen,isQuestionList,    isQuestionHome, isQuestionsTest,isPreviewPage, setisPreviewPage,currentTestQuestionsArray, setcurrentTestQuestionsArray, QuestionsArray, } = React.useContext(AssesmentContext) as Iassesmentcontext

  const [QuestionsCapsulesArray, setQuestionsCapsulesArray] = React.useState<{chunk: Iquestion[], isVisible:boolean, id:number}[]>([]);

  const [isSelectedQuestionCapsule, setisSelectedQuestionCapsule] = React.useState<boolean>(false);

  const [selectedQuestionCapsule, setselectedQuestionCapsule] = React.useState<{
    chunk: Iquestion[];
    isVisible: boolean;
    id: number;
} | null>();


  const selectQuestionCapsule = (index:number) => {
    // setQuestionsCapsulesArray(prev => prev.filter(item => item.id == index))

    const getQuestionCapsule = QuestionsCapsulesArray.find(item => item.id == index)

    setselectedQuestionCapsule(getQuestionCapsule)
  }

  interface ISingleQuestionComponent extends Iquestion  {
    indexNumber:number
  }

  const SingleQuestionComponent = (props:ISingleQuestionComponent) => {
    let options =['A','B','C','D']

    const Answer = props.answers.map(item => {

      const index = props.answers.indexOf(item)

      return (
        <div className='flex'>
          <div className='mr-1'>
          {options[index]}
          </div>
       
          {item}
        </div>
      )
      
    })

    return (
      <div
      style={{
        // transform: 'scale(0.65)',
        maxWidth:'200',
        minWidth:'100'
      }}
      className='text-black  border px-2'>
        <div className=' text-sm'>
         {props.indexNumber+1}  {props.question}
        </div>
        <div className=' text-sm'>
          {Answer}
        </div>
      </div>
    )
  }

  function sliceIntoChunks(arr:any, chunkSize:any) {
    const res = [];
    let n =0
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push({chunk, isVisible:true, id:n++});
    }
    return res;
}

interface IsingleQuestionsCapsuleProps {
  array:Iquestion[]
  index:number
  id:number
  isVisible:boolean
}

// const Item = () => (
//   <div>
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     />
//   </div>
// )

// /**
//  * The component being removed must be a direct
//  * descendant of AnimatePresence due to limitations
//  * with React.
//  */
// export const MyComponent = ({ items }) => (
//   <AnimatePresence>
//     {items.map(({ id }) => (
//       <Item key={id} />
//     ))}
//   </AnimatePresence>

const SingleQuestionCapsule = (props:IsingleQuestionsCapsuleProps) => {
  const frontPageArray = props.array.slice(0, 3)

  
  const frontPageDisplay = frontPageArray.map((item,i) => (<div className='mt-1'>
    ({i+1}) {item.question}?
  </div>))

  // const isDisplayComponent =!selectedQuestionCapsule?true:selectedQuestionCapsule == props.index + 1?true:false

  return (
      
        <motion.div 
        key={props.index}
        initial={{
          x:0,
          y:0
        }}
        exit={{
          // opacity:0.1
          // x:100,
          // y:-150
        }}
    
        transition={{
          duration:0.3,
          ease:'easeOut'
        }}
        onClick={()=>{
          selectQuestionCapsule(props.id)
          setisSelectedQuestionCapsule(true)
        }} className={`border cursor-pointer border-black mt-1 text-black text-sm`}>
          <div className='bg-amber-900 text-white'>{props.index+1}# Questions Batch</div>
      {frontPageDisplay}.........
        </motion.div>
  )
}

// const arxr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sliceIntoChunks(arxr, 3));

  const QuestionsChunksDisplay = QuestionsCapsulesArray.map((item, i) => (
    
    <SingleQuestionCapsule 
    array={item.chunk}
    key={i}
    index={i}
    id={item.id}
    isVisible={item.isVisible}
    />
  ))



  console.log(QuestionsCapsulesArray, 'questionsCapsules')

  console.log(currentTestQuestionsArray, 'currentTest')

  React.useEffect(() => {
    setQuestionsCapsulesArray(sliceIntoChunks(currentTestQuestionsArray, 3))
    // getQuestionsCapsules()
  }, [currentTestQuestionsArray]);


  // const QuestionsDisplay = currentTestQuestionsArray.map(item => <SingleQuestionComponent
  // question={item.question}
  // answers={item.answers}
  // id={item.id}
  // correctanswer={item.correctanswer}
  // tags={item.tags}
  // />)

  const SelectedQuestionDisplay = selectedQuestionCapsule?selectedQuestionCapsule?.chunk.map((item,i) => (
    <div>
      <SingleQuestionComponent
    question={item.question}
    answers={item.answers}
    id={item.id}
    correctanswer={item.correctanswer}
    tags={item.tags}
    key={i}
    indexNumber={i}
      />
    </div>
  
  )):<div>xdx</div>
  

  return (
    <div 
    style={{
      overflowY:'auto'
    }}
    className=' absolute w-full h-full  bg-white z-10' >



        <div className=' border bg-white'>
          {!selectedQuestionCapsule?  <div>
              <Button onClick={()=>setisPreviewPage(prev => !prev)} className='bg-amber-900 text-white'>
                x
              </Button>
            </div>: <div>
              <Button onClick={()=>{setselectedQuestionCapsule(null)
              setisSelectedQuestionCapsule(false)
              }} className='bg-amber-900 text-white'>
                x
              </Button>
            </div>}
           
        </div>

        <div className={`${isSelectedQuestionCapsule?'w-full flex  justify-center ':' w-7/12 ml-16'} mt-2 `}>
        {/* {QuestionsDisplay} */}
        <AnimatePresence>
           {isSelectedQuestionCapsule && <motion.div 
            animate={{

            }}
           className='testpaper h-full text-black font-header8  w-11/12 px-2'>
            <div className='flex justify-between  border-b-2 border-black px-2 w-full'>
              <div>
                 Questions Batch
              </div>
               
               <div>
                 #2
               </div>
            </div>

            <div className=' w-full'>
            {SelectedQuestionDisplay}
            </div>
            
          </motion.div>}
        {!isSelectedQuestionCapsule&& QuestionsChunksDisplay}
        </AnimatePresence>
     
        </div>

        

        {/* <div
         className='w-4/12 border border-black h-full bg-white'>
          <div
          className='bg-green-600 relative'
          style={{
            height:320,
            overflow:'hidden'
          }}
          >
            <div
            style={{
              // scale:'25%',
            }}
            className='flex flex-col  justify-between items-center'>
            
            </div> 
          </div>
        
        </div> */}
     </div>
  )
}

export default PreviewPage