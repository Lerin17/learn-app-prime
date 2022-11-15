import { InputBase, TextareaAutosize } from '@mui/material'
import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext';
import { DuttonLarge,DuttonMid, DuttonSmall } from '../GeneralPurpose/dutton';

import { Iassesmentcontext } from '../../types/context/assesmentcontext';
import { motion } from 'framer-motion';
import e from 'express';

const CreateQuestions = () => {
  // const [questionsRaw, setquestionsRaw] = React.useState('');
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen, currentquestionsRaw, setcurrentquestionsRaw, setisProcessData,questionProcessedArray,currentProcessedQuestion,setcurrentProcessedQuestion,setquestionProcessedArray,isProcessData, processQuestionRaw, questionsArray, currentQuestion,setcurrentQuestion, currentAnswers, setcurrentAnswers} = React.useContext(AssesmentContext) as Iassesmentcontext


  const [isTextRaw, setisTextRaw] = React.useState(false);

  const [AnimateSave, setAnimateSave] = React.useState(false);

const [lunch, setlunch] = React.useState('');


  // const inputQuestions = ({e,props}:any) => {
  //   {(e:any)=>{setcurrentAnswers((prev:any) => ({B:e.target.value, ...prev}))}}
  // }

  // console.log(lunch)

  const inputvalue = ({e,props}:any) => {

    e.preventDefault()

    // setlunch(e.target.value)

      const value = e.target.value
      setcurrentAnswers((prevState: { A: string; B: string; C: string; D: string; })=>{
      
        if(props == 'A'){
          return {  ...prevState, A:value}
        }else if(props == 'B'){
          return {  ...prevState, B:value}
        }else if(props== 'C'){
          return {  ...prevState, C:value}
        }else{
          return {...prevState, D:value}
        }
        
      })
   
  }

  const Optioninput = (props:any) => {


    const txt = props.text

    console.log(props.inputValue)

    const change =(e:any)=> props.inputValue(e)


    return (
      <div className='flex text-xl'>
      <div className='px-2 w-8 bg-white'>{
        props.text
      }</div>
      <input 
        onChange={e=>{props.inputValue}}
        value={props.valuex} 
        className='border-2 border-gray-400  w-full' />
    </div>
    )
  }

  const SingleQuestion = (props:any) => {
    return (
      <div className='text-sm' >
        {props.question}
      </div>
    )
  }

  console.log(questionsArray)

  const questionsSideBarList = questionsArray.length? questionsArray.map((item:any) => {
    return (
      <SingleQuestion
      question={item.question}
      />
    )
 
  }):<div>
    No questions Created Yet
  </div>

  // setTimeout(() => {
  //   setAnimateSave(true)
  // }, 3000);


  return (
    <div className='flex  justify-between'>
     

    <div className='w-full lg:w-10/12 md:w-10/12 '>

    <div className='flex text-xl '>
    <DuttonSmall
    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm5.521 1.544l1.57-1.743 1.019.918-1.603 1.777c-.25-.297-.593-.672-.986-.952zm-10.738.952l-1.603-1.777 1.019-.918 1.57 1.743c-.392.28-.736.655-.986.952zm-1.597 5.429h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z"/></svg>}
    handleClick={()=>console.log('d')}
    />

  <DuttonSmall
    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>}
    handleClick={()=>console.log('d')}
    />

  <DuttonSmall
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
    }
    handleClick={()=>setisTextRaw(prev => !prev)}
    />
</div>


{Boolean(AnimateSave && isTextRaw)  &&
  <motion.div style={{
    height:100,
    width:280
  }} className='absolute mt-16  z-10 left-0 rounded-3xl text-lg  flex justify-end'>
    <div className='flex flex-col' >
      <div className=' rounded-full bg-amber-800 text-green-600 flex justify-center  items-center' style={{
        width:50,
        height:50
      }} >
          ?
      </div>

  
    </div>


  </motion.div>

}

{Boolean(  AnimateSave && !isTextRaw)
 &&
  <motion.div style={{
    height:200,
    width:260
  }} className='absolute mt-10  z-10 left-0 rounded-3xl text-sm  flex justify-end'>

<div className='flex flex-col' >
      <div className='rounded-full bg-amber-800 text-amber-800 items-center' style={{
        width:100,
        height:20
      }} >
          x
      </div>

      <div className='rounded-full bg-amber-800 text-sm text-amber-800 flex items-center mt-1' style={{
        width:100,
        height:20
      }} >
          x
      </div>
    </div>

  </motion.div>

}


{isTextRaw &&   
<motion.div  transition={{type:'tween', duration:0.3}} animate={AnimateSave && {x:-50}} >
<motion.div>
<textarea
onChange={(e)=>{setcurrentQuestion(e.target.value)}}  
className='w-full text-base bg-white text-black mt-4 p-2'
value={currentQuestion}
// maxRows={4}
// aria-label="maximum height"
// placeholder="Maximum 4 rows"
defaultValue=""
style={{ height: 400 }}
/>
</motion.div>
</motion.div>}

{!isTextRaw &&   <motion.div  transition={{type:'tween', duration:0.2}} animate={AnimateSave && {x:-70}}>

<div className='border border-gray-400 my-4'>
<textarea
onChange={(e)=>{setcurrentquestionsRaw(e.target.value)}}  
className='w-full text-lg bg-white  text-black  p-2 border border-gray-400'
placeholder='Enter Question'
value={currentquestionsRaw}
defaultValue=""
style={{ height: 100,
outline:'none' }}
/>
</div>



<div className='border-4 flex flex-col'>

<div className='flex text-xl'>
      <div className='px-2 w-8 bg-white'>A</div>
      <input 
        onChange= {e=>{console.log(e.target.value)
          setcurrentAnswers((prev) => ({...prev, A:e.target.value}))
          }}
        value={currentAnswers.A} 
        className='border-2 border-gray-400  w-full' />
    </div>

    <div className='flex text-xl'>
      <div className='px-2 w-8 bg-white'>B</div>
      <input 
        onChange= {e=>{console.log(e.target.value)
          setcurrentAnswers((prev) => ({...prev, B:e.target.value}))
          }}
        value={currentAnswers.B} 
        className='border-2 border-gray-400  w-full' />
    </div>

    <div className='flex text-xl'>
      <div className='px-2 w-8 bg-white'>C</div>
      <input 
        onChange= {e=>{console.log(e.target.value)
          setcurrentAnswers((prev) => ({...prev, C:e.target.value}))
          }}
        value={currentAnswers.C} 
        className='border-2 border-gray-400  w-full' />
    </div>

    <div className='flex text-xl'>
      <div className='px-2 w-8 bg-white'>D</div>
      <input 
        onChange= {e=>{console.log(e.target.value)
          setcurrentAnswers((prev) => ({...prev, D:e.target.value}))
          }}
        value={currentAnswers.D} 
        className='border-2 border-gray-400  w-full' />
    </div>

{/*     


  <input
  value={currentAnswers.A}
  onChange= {e=>{console.log(e.target.value)
  setcurrentAnswers((prev) => ({...prev, A:e.target.value}))
  }}
  />

<input
className=''
  value={currentAnswers.A}
  onChange= {e=>{console.log(e.target.value)
  setcurrentAnswers((prev) => ({...prev, D:e.target.value}))
  }}
  />

<input
  value={currentAnswers.A}
  onChange= {e=>{console.log(e.target.value)
  setcurrentAnswers((prev) => ({...prev, C:e.target.value}))
  }}
  />

<input
  value={currentAnswers.A}
  onChange= {e=>{console.log(e.target.value)
  setcurrentAnswers((prev) => ({...prev, D:e.target.value}))
  }}
  /> */}



  {/* <Optioninput
  valuex  = {currentAnswers.B}
  text='B'
  inputValue = {(e:any)=>{setcurrentAnswers((prev:any) => ({C:e.target.value, ...prev}))}}
  /> */}

{/* <Optioninput
  valuex ={currentAnswers.B}
  text = 'B'
  inputValue = {(e:any)=>{setcurrentAnswers((prev:any) => ({C:e.target.value, ...prev}))}}
  />

<Optioninput
  valuex ={currentAnswers.C}
  text='C'
  inputValue = {(e:any)=>{setcurrentAnswers((prev:any) => ({C:e.target.value, ...prev}))}}
  />

<Optioninput
  valuex ={currentAnswers.D}
  text='D'
  inputValue = {(e:any)=>{
    console.log(e.target.value)
    setcurrentAnswers((prev:any) => ({D:e.target.value, ...prev}))}}
  /> */}

</div>


</motion.div>}

<div className='mt-4 flex justify-end'>
<DuttonMid
icon='Save'
handleClick={()=>processQuestionRaw()}
/>
  </div>
  </div>

  <div style={{
    height:400,
    width:150,
    overflowY:'auto',
    overflowX:'hidden',
    wordWrap:'break-word'
  }} className='text-sm text-wrap text-black mt-8 p-2  hidden lg:block md:block font-bold  rounded-3xl '>
    <div className='opacity-100 polkachild border'>
      Questions
    </div>

    <div>
      {questionsSideBarList}
    </div>

    </div>
 </div>
    
  
  )
}

export default CreateQuestions