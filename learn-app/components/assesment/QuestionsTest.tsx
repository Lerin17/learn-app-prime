import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext'
import PreviewPage from './QuestionsTestcomponents.tsx/PreviewPage'
import QuestionstoAdd from './QuestionsTestcomponents.tsx/QuestionstoAdd'



import { Iassesmentcontext } from '../../types/context/assesmentcontext'
import TimerSelect from './QuestionsTestcomponents.tsx/TimerSelect'
import TimeQuickSelect from './QuestionsTestcomponents.tsx/timeQuickSelect'
import { AnimatePresence, motion } from 'framer-motion'
// isPreviewPage, setisPreviewPage

const QuestionsTest = () => {
      
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen,isQuestionList,    isQuestionHome, isQuestionsTest,isPreviewPage, setisPreviewPage } = React.useContext(AssesmentContext) as Iassesmentcontext

  return (
    <div 
    style={{
        height:450,
        // overflowY:'hidden'
    }}
    className=' h-full  flex z-20   relative mt-4 items-center' >

        <div
        style={{
            opacity:0.3
        }}
        className='w-2/12  p-2 text-xl  absolute h-full z-10 text-transparent bg-amber-700   text-white'>
            *
        </div>

        <div
        style={{
            opacity:1,
            backgroundColor:''
        }}
        className='w-2/12 border-4  border-amber-900  rhombusx  p-2 absolute h-full  flex '>
            <div className='text-3xl   w-11/12'>
            *
            </div>
       
        </div>

        
        <TimerSelect/>

        <div className='w-1/12 h-full'>
            <TimeQuickSelect/>
        </div>
     

        <div className='w-9/12  h-full'>
            <AnimatePresence>
                {!isPreviewPage && 

            <motion.div 
            exit={{
                y:3000,
                opacity:0.1,
                // backgroundColor:'white'
            }}
            transition={{
                duration:0.5,
                type:'tween',
                ease:'easeInOut'
            }}
            style={{
                // backgroundColor:'#7A3D2D'
            }}
            className={`z-20 bg-amber-900 opacity-100 w-9/12 h-full ${isPreviewPage?'':'h-full'} transition-all absolute`}>
            <QuestionstoAdd/>
            </motion.div>
                            }
           
            </AnimatePresence>
            
           

            <div className='z-10  absolute w-full h-full bg-white w-9/12'> 
                <PreviewPage/>

                {/* <div className='w-2/12 h-full bg-white border border-black mx-2'>
              xx
             </div> */}
            </div>

        </div>

        </div>
  )
}

export default QuestionsTest