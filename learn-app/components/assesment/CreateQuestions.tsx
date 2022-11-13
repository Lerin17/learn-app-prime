import { InputBase, TextareaAutosize } from '@mui/material'
import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext';

import { DuttonLarge,DuttonMid, DuttonSmall } from '../GeneralPurpose/dutton';

import { Iassesmentcontext } from '../../types/context/assesmentcontext';

const CreateQuestions = () => {
  // const [questionsRaw, setquestionsRaw] = React.useState('');
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen, questionsRaw, setquestionsRaw, setisProcessData,questionProcessedArray,currentProcessedQuestion,setcurrentProcessedQuestion,setquestionProcessedArray,isProcessData,} = React.useContext(AssesmentContext) as Iassesmentcontext


  const [isTextRaw, setisTextRaw] = React.useState(false);

  const jam:any = []
let questionAndOptionsArray


  console.log(questionProcessedArray, 'the truth')
  // console.log(questionAndOptionsArray, 'the eha')

    React.useEffect(() => {
    if(questionsRaw){
     questionAndOptionsArray =  questionsRaw.split('\n')

     console.log(questionAndOptionsArray, 'questionsOptions')

     jam.push(1)
      console.log(jam,'')

      const array:any= []

     questionAndOptionsArray = questionAndOptionsArray.map((item:String) => {
      if(item){

        const itemSymbols = item.split('')
        const lastDigitIndex = itemSymbols.length-1

        console.log(item)
        console.log(itemSymbols)
        console.log(Boolean())

       


        if(itemSymbols[lastDigitIndex] == '.'  ){

          
        console.log(item, '...item')


          // setcurrentProcessedQuestion(([...currentProcessedQuestion, item]))
          console.log(array)
          // console.log(currentProcessedQuestion,'relyyy')
          // setquestionProcessedArray((prev:any) => ([...prev,[...currentProcessedQuestion, item]]))
          
          
          // array = []
        }else{
          console.log(item, 'item')
          // array.push(item)

          array.push(item)
        
          // setcurrentProcessedQuestion((prev:any)=> ([...prev,item]))

          // console.log(currentProcessedQuestion, 'behave')
        }
        

      }
     })

 
    // console.log(questionAndOptionsArray)
    }
  }, [isProcessData]);

  console.log(currentProcessedQuestion)
  console.log(questionProcessedArray)


  const Optioninput = (props:any) => {
    return (
      <div className='flex text-xl'>
      <div className='px-2 w-8 bg-white'>{
        props.text
      }</div>
      <input className='border-2 border-gray-400  w-full' />
    </div>
    )
 
  }

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

  {/* <div onClick={()=>setisTextRaw(prev => !prev)}>
  [D]
 </div> */}
</div>
{!isTextRaw &&   <div>
<div>
<textarea
onChange={(e)=>{setquestionsRaw(e.target.value)}}  
className='w-full text-lg bg-white text-black mt-4 p-2'
value={questionsRaw}
// maxRows={4}
// aria-label="maximum height"
// placeholder="Maximum 4 rows"
defaultValue=""
style={{ height: 300 }}
/>
</div>
</div>}

{isTextRaw &&   <div>

<div className='border border-gray-400 my-4'>
<textarea
onChange={(e)=>{setquestionsRaw(e.target.value)}}  
className='w-full text-lg bg-white  text-black  p-2 border border-gray-400'
placeholder='Enter Question'
value={questionsRaw}
defaultValue=""
style={{ height: 100,
outline:'none' }}
/>
</div>

<div className='border-4 flex flex-col'>
  <Optioninput
  text='A'
  />

<Optioninput
  text='B'
  />

<Optioninput
  text='C'
  />

<Optioninput
  text='D'
  />

</div>


</div>}

<div className='mt-4 flex justify-end'>
<DuttonMid
icon='Save'
handleClick={()=>setisProcessData(prev => !prev)}
/>
  </div>
  </div>

  <div style={{
    height:400,
    width:150,
    overflowY:'auto',
    overflowX:'hidden',
    wordWrap:'break-word'
  }} className='text-sm text-wrap text-black mt-8 p-2  hidden lg:block md:block font-bold rounded-3xl '>
    <div className='opacity-100 polkachild'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt cum cupiditate quaerat similique et esse iste nostrum. Rerum quam voluptatibus blanditiis aliquid numquam, ullam error vel tenetur iure ex! ddddddddddddddddd 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt cum cupiditate quaerat similique et esse iste nostrum. Rerum quam voluptatibus blanditiis aliquid numquam, ullam error vel tenetur iure ex! ddddddddddddddddd deeeeeeeeeeeeeeeeeeeeeeeeeeeee
    </div>

    </div>
 </div>
    
  
  )
}

export default CreateQuestions