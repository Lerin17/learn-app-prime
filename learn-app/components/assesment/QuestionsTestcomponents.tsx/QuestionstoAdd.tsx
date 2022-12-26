import React from 'react'
import ReactSelect, {StylesConfig} from 'react-select'
import { AssesmentContext } from '../../../context/AssesmentContext'
import PreviewPage from './PreviewPage'

import { Iassesmentcontext } from '../../../types/context/assesmentcontext'


const QuestionstoAdd = () => {

  
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen,isQuestionList,    isQuestionHome, isQuestionsTest,isPreviewPage, setisPreviewPage } = React.useContext(AssesmentContext) as Iassesmentcontext

    const options = [   
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

      const selectStyles:StylesConfig = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' , border:'none'})
    
      }
  return (
    <div>
         <div
    className='p-2 text-black relative '
    >
   
      QuestionstoAdd

        
  <ReactSelect
  className='text-base focus:border-none'
   options={options}
   isMulti
   onChange={(e:any)=>{

    // console.log(v)
   }}
   styles={
    selectStyles
    // display:'absolute'
   }
  />

  <div className=' mt-3 text-black  font-header7 text-7xl px-4   items-center'>
      <div
    className='text-transparent   '
    style={{
        WebkitTextStroke:'3px silver'
    }}
    >
           331
    </div>
    <div className='text-2xl text-gray-300'>
     Questions Available
    {/* No of Questions: */}
    </div>  
  </div>

  
  <div className=' mt-3 text-black font-header7 text-7xl px-4   items-center'>
      <div
    className='text-transparent   '
    style={{
        WebkitTextStroke:'3px silver'
    }}
    >
           331
    </div>
    <div className='text-2xl '>
     Questions Available
    {/* No of Questions: */}
    </div>  
  </div>

  <div
  style={{

  }}
  className='bottom-0 mt-20 text-2xl  flex justify-center left-1/2 hover:bg-amber-800 cursor-pointer '>
  <div
      onMouseLeave={()=>{setisPreviewPage(false)}}
      onMouseEnter={()=>{setisPreviewPage(true)}}
      className='   '>
      [v]
      </div>
  </div>
    </div>
    </div>
   
  )
}

export default QuestionstoAdd