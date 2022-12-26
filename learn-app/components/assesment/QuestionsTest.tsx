import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext'
import PreviewPage from './QuestionsTestcomponents.tsx/PreviewPage'
import QuestionstoAdd from './QuestionsTestcomponents.tsx/QuestionstoAdd'


import { Iassesmentcontext } from '../../types/context/assesmentcontext'
import TimeCarousel from './QuestionsTestcomponents.tsx/TimeCarousel'
// isPreviewPage, setisPreviewPage

const QuestionsTest = () => {
      
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen,isQuestionList,    isQuestionHome, isQuestionsTest,isPreviewPage, setisPreviewPage } = React.useContext(AssesmentContext) as Iassesmentcontext

  return (
    <div 
    style={{
        height:450
    }}
    className=' h-full flex  rounded relative mt-4 items-center' >

        <div
        style={{
            opacity:0.3
        }}
        className='w-2/12  p-2 text-xl  absolute h-full z-10 text-transparent metal  text-white'>
            *
        </div>

        <div
        style={{
            opacity:1,
            backgroundColor:''
        }}
        className='w-2/12 border-4 border-amber-900  rhombusx  p-2 absolute h-full  flex '>
            <div className='text-3xl   w-11/12'>
            *
            </div>
       
        </div>

        <TimeCarousel/>

        {/* <div className='w-2/12 scale-x-100  flex flex-col justify-center z-20 relative text-4xl'>
            <div className='text-2xl border flex  justify-center'>
            <div
        style={{
            WebkitTextStroke:'5px white', 
            fontSize:70,
            textShadow:'5px 1px 2px rgba(150, 150, 150, 0.81);',
            // perspective:200,
            perspectiveOrigin:'top',
            // width:185,
            // height:185
        }}

        className='rounded-full flex items-center justify-center '
        >
            <div 
            style={{
                transform: 'rotateX(-30deg)'
            }}
            className='text-center font-header9 text-transparent '
            >
            45
            </div>
        
            </div>
            <div>
                hours
            </div>
            </div>

            <div>
            20min
            </div>

            <div>
            20secs
            </div>
            
        </div>
      */}

        <div className='w-10/12  h-full'>
            <div 
            style={{
                // backgroundColor:'#7A3D2D'
            }}
            className={`z-20 bg-amber-900 opacity-100 w-10/12 h-full ${isPreviewPage?'h-1/6':'h-full'} transition-all absolute`}>
            <QuestionstoAdd/>
            </div>
           

            <div className='z-10 absolute w-10/12 h-full bg-white '> 
                <PreviewPage/>

                <div className='w-2/12 h-full bg-white border border-black mx-2'>
              xx
             </div>
            </div>

        </div>

        </div>
  )
}

export default QuestionsTest