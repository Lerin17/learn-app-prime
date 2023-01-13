import React from 'react'
import ReactSelect, {StylesConfig} from 'react-select'
import { AssesmentContext } from '../../../context/AssesmentContext'
import PreviewPage from './PreviewPage'

import { Iassesmentcontext } from '../../../types/context/assesmentcontext'
import { alpha, Switch } from '@mui/material'
import { pink, brown } from '@mui/material/colors'
import { styled } from '@mui/styles'
// import { palette } from '@mui/system'



const QuestionstoAdd = () => {

  
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen,isQuestionList,    isQuestionHome, isQuestionsTest,isPreviewPage, setisPreviewPage,currentTestQuestionsArray, setcurrentTestQuestionsArray, QuestionsArray, currentTestQuestionsTimeInput,currentNoOfTestQuestions, setcurrentNoOfTestQuestions,tagsArrayForTestQuestions,settagsArrayForTestQuestions} = React.useContext(AssesmentContext) as Iassesmentcontext

  const [isExcludeFromTags, setisExcludeFromTags] = React.useState(true);

  // const [tagsArrayForTestQuestions, settagsArrayForTestQuestions] = React.useState([]);

  const handleSelectChange = (e:any) => {
    const getTagsArray = e.map((item:any) => (item))

    settagsArrayForTestQuestions(getTagsArray)
}

console.log(tagsArrayForTestQuestions, 'tagsArrayfortextquestiosns')

React.useEffect(() => {
  const gettagsArrayvalue = tagsArrayForTestQuestions.map(item => item.value)

  const filteredQuestions = tagsArrayForTestQuestions.length?
  QuestionsArray.filter(item => {
    if(item.tags.length && Array.from(new Set([...gettagsArrayvalue, ...item.tags])).length === tagsArrayForTestQuestions.length){
      return item
    }
  }):QuestionsArray

  console.log(QuestionsArray, 'questions Array')
  

  if(filteredQuestions){
    console.log(filteredQuestions,'filtered')
    setcurrentTestQuestionsArray(filteredQuestions)
  }

}, [tagsArrayForTestQuestions]);

// console.log(currentTestQuestionsArray, 'currentquestions Array')
// import * as React from 'react';
// import { alpha, styled } from '@mui/material/styles';
// import { pink } from '@mui/material/colors';
// import Switch from '@mui/material/Switch';

const Ram = (props:any) => {return (
  <Switch
  checked={isExcludeFromTags}
  onChange={()=>setisExcludeFromTags(prev => !prev)}
  sx={{
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: brown[300],
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: brown[300],
    },
  }}
  />
)}

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: brown[600],
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: brown[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };



    const options = [   
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolatex', label: 'Chocolatex' },
        { value: 'strawberryx', label: 'Strawberryx' },
        { value: 'vanillax', label: 'Vanillax' },
        { value: 'chocolateaa', label: 'Chocolateaa' },
        { value: 'strawberraay', label: 'Strawberraay' },
        { value: 'math', label: 'math' }
      ]

      const selectStyles:StylesConfig = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' , border:'none'})
    
      }
  return (
    <div>
         <div
    className='p-2 text-black relative '
    >
   
   <div className='font-header7 justify-between flex'>
   Test Details

   
   <div className={`${isPreviewPage?'':''} mt-1 text-black transition-all font-header7  px-1   items-center`}>
    <div className=' '>
    No Questions Available: {currentTestQuestionsArray.length}
    </div>  
  </div>
   </div>
   

   <div className='flex items-center text-stone-300'>
   <div>
    {isExcludeFromTags?'Exclude Questions :':'Include Questions :'}
  
    </div>


    <div>
    <Ram
    />
    </div>
   </div>
   
  <ReactSelect
  className='text-base focus:border-none'
   options={options}
   isMulti
   onChange={(e:any)=>{
    handleSelectChange(e)
    // console.log(v)
   }}
   value={tagsArrayForTestQuestions}
   styles={
    selectStyles
    // display:'absolute'
   }
  />

{/* exlude Questions
<ReactSelect
  className='text-base focus:border-none'
   options={options}
   isMulti
  //  onChange={(e:any)=>{
  //   handleSelectChange(e)
  //   // console.log(v)
  //  }}
   styles={
    selectStyles
    // display:'absolute'
   }
  /> */}


  {/* <div className='font-header7'>
    Test duration
  </div> */}

    <div className=' mt-4 text-black  font-header6 px-1  flex items-center'>
     {/* <div className='p-1'>
        <svg className='text-white fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 14c0 5.523-4.478 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10zm-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zm-6-11.819v-2.181h-4v2.181c1.408-.238 2.562-.243 4 0zm6.679 3.554l1.321-1.321-1.414-1.414-1.407 1.407c.536.402 1.038.844 1.5 1.328zm-8.679 2.265v6h6c0-3.309-2.691-6-6-6z"/></svg>
     </div> */}

    <div className='lg:text-5xl md:text-4xl text-2xl transition-all text-stone-300 flex'>
    <div className='font-header12'>
    Test duration:
      </div > 
      <div className='font-header7 px-2 '>
      {currentTestQuestionsTimeInput.hours? currentTestQuestionsTimeInput.hours:'0'}h 
      {currentTestQuestionsTimeInput.minutes?
      currentTestQuestionsTimeInput.minutes:'0'}m 
      {currentTestQuestionsTimeInput.seconds? currentTestQuestionsTimeInput.seconds:'0'}s
      </div>
    </div>  
  </div>

     <div className=' mt-3 text-stone-300 transition-all md:text-4xl text-2xl lg:text-5xl px-1 flex items-center'>
      <div className='font-header12'>
      No Test Questions:
      </div>
 <div className='w-1/6'>
      <input
      type={'number'}
      value={currentNoOfTestQuestions}
      onChange={e=>{
        let noOfTestQuestions =  parseInt(e.target.value) > currentTestQuestionsArray.length + 3?currentTestQuestionsArray.length+3:parseInt(e.target.value)
        setcurrentNoOfTestQuestions(noOfTestQuestions)}}
      max={currentTestQuestionsArray.length +3}
      placeholder='00'
      className='bg-transparent font-header7  px-2 border-b border-dotted text-center text-5xl w-full'
      />
    </div>
  </div>

 


  <div
  style={{

  }}
  className='bottom-0 mt-32 text-2xl  flex justify-center left-1/2  cursor-pointer '>
  <div
      onClick={()=>{setisPreviewPage(prev => !prev)}}
 
      className='   '>
      [preview]
      </div>
  </div>
    </div>
    </div>
   
  )
}

export default QuestionstoAdd