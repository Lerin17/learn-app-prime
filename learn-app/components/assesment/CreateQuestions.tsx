import { InputBase, TextareaAutosize } from '@mui/material'
import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext';
import { DuttonLarge,DuttonMid, DuttonSmall } from '../GeneralPurpose/dutton';
import { Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material'

import { Iassesmentcontext } from '../../types/context/assesmentcontext';
import { motion } from 'framer-motion';
import ReactSelect, {StylesConfig} from 'react-select'

const CreateQuestions = () => {
  // const [questionsRaw, setquestionsRaw] = React.useState('');
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen, currentquestionsRaw, setcurrentquestionsRaw,questionProcessedArray, processQuestionRaw, QuestionsArray, currentQuestion,setcurrentQuestion, currentAnswers, setcurrentAnswers, processQuestionsInput, isOpenSideBarQuestion, setisOpenSideBarQuestion,setcurrentCorrectAnswer,currentCorrectAnswer,    currentQuestionBatchTagsArray,    setcurrentQuestionBatchTagsArray,TagsOptions} = React.useContext(AssesmentContext) as Iassesmentcontext


  const [isTextRaw, setisTextRaw] = React.useState(false);

  const [AnimateSave, setAnimateSave] = React.useState(false);

const [lunch, setlunch] = React.useState('');


  // const inputQuestions = ({e,props}:any) => {
  //   {(e:any)=>{setcurrentAnswers((prev:any) => ({B:e.target.value, ...prev}))}}
  // }

  // console.log(lunch)

  // setTimeout(() => {
  //   setAnimateSave(prev => !prev)
  // }, 2000);

  const handleSelectChange = (e:any) => {
    const getTagsArray = e.map((item:any) => (item.value))

    console.log(getTagsArray, 'tagsSelected')

    setcurrentQuestionBatchTagsArray(getTagsArray)
  }

  console.log(currentQuestionBatchTagsArray, 'eex')

  const selectStyles:StylesConfig = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' , border:'none'})

  }

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

  const TagsSelectComponent = (props:{text:string}) => {
    return (
      <div className='rounded-full border px-2 mx-2 cursor-pointer hover:bg-white hover:text-amber-800 transition-all flex items-center' >
      {props.text}
      
      <div>
      <FormControl className='w-full' sx={{ m: 0, p:0 , border:'none', outline:'none'}} size="small">
      <InputLabel id="demo-select-small"></InputLabel>
      <Select
      className='w-full border-none'
      label='CourseGroups'
      placeholder='No CourseGroups'

      // size='small'
      >
        {
          <MenuItem>
          x</MenuItem>
        }
      
      </Select>
      </FormControl>
      </div>
    </div>
    )
  }

  const TagsSelectComponetDisplay =     currentQuestionBatchTagsArray.map(item => <TagsSelectComponent
  text={item}
  />)

  // console.log(Test, 'tense')

  console.log(TagsOptions, 'TagsOptions')
  
  const options = [   
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


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

  const EditableSideBarSingleQuestion = (props:any) =>
  {

    let optionsIndex = ['A', 'B','C', 'D']
    let n= 0
    const Answers = props.answers.map((item:string) => { 
      n++
      console.log(props.correctanswer)
      let singleOption
     if(item[item.length-1] == '/'){
      singleOption = item.substring(0, item.length-1)
      }else{
      singleOption = item
      } 
      return (<div className={`${props.correctanswer == item?'text-white':''}`}>
        {optionsIndex[n-1]}    {singleOption}
          </div>)
    } )

    return (
      <div className='bg-white flex mt-1' >
      
    <div className='flex flex-col items-center p-1 h-full  h-full' >
      <div className='text-xl'>
        6
      </div>
      <div className='' >
          <svg className='w-8' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 12c-2.435 3.599-4 5.85-4 8.037 0 2.19 1.79 3.963 4 3.963s4-1.773 4-3.963c0-2.187-1.565-4.438-4-8.037zm-.014 2.56c.234.363.514.994.514 1.66 0 1.954-2 2.274-2 1.085 0-.817.994-2.022 1.486-2.745zm-7.986 5.314v-16.874h-4c-1.604 0-2.001 1.826-2.001 3h-1.999v-6h19.999l.001 6h-1.98c0-1.174-.371-3-2.02-3h-4v11.448c-1.244 2.038-2 3.749-2 5.589 0 1.522.582 2.908 1.529 3.963h-6.529v-2h1c1.175 0 2-.952 2-2.126z"/></svg>
      </div>

      <div className='mt-1' >
          <svg width="24" className='w-8'  height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm.456-11.429l-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z"/></svg>
      </div>
 
          </div>

        <div className='border-l'>
          <div className='text-base'>
            {props.question}
          
          </div>

          <div>
          {Answers}
          </div>
        </div>
 
      </div>
    )
  }

  const SidebarSingleQuestion = (props:any) => {
    console.log(props.n)
//create code for longer digits
    return (
      <div className='text-sm  my-2 flex' >
        <div onClick={()=>{
          setisOpenSideBarQuestion((prev) => (!prev))
        }} className='pr-2  w-6 text-xs text-white cursor-pointer hover:scale-125 transition-all flex  '>
         
            {parseInt(props.index)+ 1}
          
        </div>
        <div>
          <span style={{
            wordWrap:'break-word'
          }} className='bg-orange-700 w-fit inline'>
          {props.question}
          </span>
        </div>
      </div>
    )
  }

  console.log(QuestionsArray)

  const questionsSideBarList = QuestionsArray.length? QuestionsArray.map((item:any, n:any) => {
    if(!isOpenSideBarQuestion){
      return (
        <SidebarSingleQuestion
        question={item.question}
        index={n}
        />)
    }else{
      return (
        <EditableSideBarSingleQuestion
        question={item.question}
        index={n}
        answers={item.answers}
        correctanswer={item.correctanswer}
        />
      )
    }
   
    
 
  }):<div>
    No questions Created Yet...
  </div>

  // setTimeout(() => {
  //   setAnimateSave(true)
  // }, 3000);


  return (
    <div onClick={(e:any)=>{
      console.log(e.target.id)
      if(!e.target.id){
        setcurrentCorrectAnswer('')
      }
      // if(e.target.id !== 'optionSelect' || e.target.id !== 'textArea'){

      // }
    }} className='flex  justify-between relative '>
     

    <div className='w-full lg:w-10/12 md:w-10/12 '>

      
{/* <div style={{
  overflowX:'auto'
}} className='flex text-base mb-2 text-white transition-all pb-4 absolute z-10' > */}

  <ReactSelect
  className='text-base focus:border-none'
   options={TagsOptions}
   isMulti
   onChange={(e:any)=>{
    handleSelectChange(e)
    // console.log(v)
   }}
   styles={
    selectStyles
    // display:'absolute'
   }
  />
    
    {/* {TagsSelectComponetDisplay} */}
    {/* <div className='rounded-full border px-2 mx-2 cursor-pointer hover:bg-white hover:text-amber-800 '>
      Agriculture 
      <span>
        V
      </span>
    </div>

    <div className='rounded-full border px-2 mx-2 cursor-pointer hover:bg-white hover:text-amber-800 transition-all ' >
      Agriculture 
      <span>
        V
      </span>
    </div> */}

    {/* <Button onClick={()=>addNewTag()} className='text-black' >
      +
    </Button> */}
{/* 
    <div>
      +
    </div> */}
{/* </div> */}

    <div className='flex text-xl mt-3'>
    <DuttonSmall
    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm5.521 1.544l1.57-1.743 1.019.918-1.603 1.777c-.25-.297-.593-.672-.986-.952zm-10.738.952l-1.603-1.777 1.019-.918 1.57 1.743c-.392.28-.736.655-.986.952zm-1.597 5.429h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z"/></svg>}
    handleClick={isTextRaw? ()=>processQuestionRaw():()=>processQuestionsInput()}
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
  }} className='absolute mt-16  z-10 left-0 rounded-3xl text-lg  flex justify-start border'>
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
id='textArea'
onChange={(e)=>{setcurrentquestionsRaw(e.target.value)}}  
className='w-full text-base border border-black bg-white text-black mt-4 p-2'
value={currentquestionsRaw}
// maxRows={4}
// aria-label="maximum height"
// placeholder="Maximum 4 rows"
defaultValue=""
style={{ height: 400 }}
/>
</motion.div>
</motion.div>}

{!isTextRaw &&   <motion.div  transition={{type:'tween', duration:0.2}} animate={AnimateSave && {x:-70}}>

<div className='my-4 '>
<textarea
onChange={(e)=>{setcurrentQuestion(e.target.value)}}  
className='w-full text-lg bg-white text-black rounded p-2 border border-white'
placeholder='Enter Question...'
value={currentQuestion}
defaultValue=""
style={{ height: 150,
outline:'none' }}
/>
</div>



<div className='flex flex-col'>

<div className='flex text-xl'>
      <div id='optionSelect' onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent> | any)=>{
        console.log(event.target.innerText)
        setcurrentCorrectAnswer(event.target.innerText)}} className= {`${currentCorrectAnswer=='A'?'bg-lime-500':''} px-2 w-10 border border-b-0 cursor-pointer flex justify-center`}>A</div>
      <input 
        onChange= {e=>{console.log(e.target.value)
          setcurrentAnswers((prev) => ({...prev, A:e.target.value}))
          }}
        value={currentAnswers.A} 
        className={`border border-black ${currentCorrectAnswer=='A'?'bg-orange-700':'bg-orange-800'}  w-full`} />
    </div>

    <div onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent> | any)=>{
        console.log(event.target.innerText)
        setcurrentCorrectAnswer(event.target.innerText)}}  className='flex text-xl'>
      <div id='optionSelect' className= {`${currentCorrectAnswer=='B'?'bg-lime-500':''} px-2 w-10 border border-b-0 cursor-pointer flex justify-center`}>B</div>
      <input 
        onChange= {e=>{console.log(e.target.value)
          setcurrentAnswers((prev) => ({...prev, B:e.target.value}))
          }}
        value={currentAnswers.B} 
        className={`border border-t-0 border-black  ${currentCorrectAnswer=='B'?'bg-orange-700':'bg-orange-800'} w-full`} />
    </div>

    <div className='flex text-xl'>
      <div id='optionSelect' onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent> | any)=>{
        console.log(event.target.innerText)
        setcurrentCorrectAnswer(event.target.innerText)}} className= {`${currentCorrectAnswer=='C'?'bg-lime-500':''} px-2 w-10 border border-b-0 cursor-pointer flex justify-center`}>C</div>
      <input 
        onChange= {e=>{console.log(e.target.value)
          setcurrentAnswers((prev) => ({...prev, C:e.target.value}))
          }}
        value={currentAnswers.C} 
        className={`border border-y-0 border-black ${currentCorrectAnswer=='C'?'bg-orange-700':'bg-orange-800'} w-full`} />
    </div>

    <div className='flex text-xl'>
      <div id='optionSelect' onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent> | any)=>{
        console.log(event.target.innerText)
        setcurrentCorrectAnswer(event.target.innerText)}} className= {`${currentCorrectAnswer=='D'?'bg-lime-500':''} px-2 w-10 border cursor-pointer flex justify-center`}>D</div>
      <input 
        onChange= {e=>{console.log(e.target.value)
          setcurrentAnswers((prev) => ({...prev, D:e.target.value}))
          }}
        value={currentAnswers.D} 
        className={`border border-black ${currentCorrectAnswer=='D'?'bg-orange-700':'bg-orange-800'}  w-full`} />
    </div>



</div>


</motion.div>}

{/* {!isOpenSideBarQuestion &&
  <div className='mt-4 flex justify-end'>
<DuttonMid
icon='Save'
handleClick={isTextRaw? ()=>processQuestionRaw():()=>processQuestionsInput()}
/>
  </div>
} */}

  </div>

  <div style={{
    height:isTextRaw? 500:400,
    width:isOpenSideBarQuestion? 300:150,
    backgroundColor:isOpenSideBarQuestion?'brown':'',
    overflowY:'auto',
    overflowX:'hidden',
    wordWrap:'break-word'
  }} className={`text-sm text-wrap font-header8 ${isOpenSideBarQuestion?'right-0 absolute z-10 ':""}text-black  p-2 pt-0   transition-all hidden lg:block md:block font-bold  `}>
    <div className={`opacity-100 text-xl polkachild  border-b pt-2 flex justify-between ${isOpenSideBarQuestion?'fixed':''}`}>
      <div className={`cursor-pointer ${isOpenSideBarQuestion?' bg-amber-800 ':'hidden'} `} onClick={()=>{setisOpenSideBarQuestion(false)}} >[x]</div>
      {!isOpenSideBarQuestion && 'Questions'}
      
    </div>

    <div className={`${isOpenSideBarQuestion?'mt-10':''}`} >
      {questionsSideBarList}
    </div>

    </div>
 </div>
    
  
  )
}

export default CreateQuestions