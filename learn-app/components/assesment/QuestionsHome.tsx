import React from 'react'
import { AnimatePresence, motion, usePresence } from 'framer-motion'

import { DuttonLarge } from '../GeneralPurpose/dutton'
import { AssesmentContext } from '../../context/AssesmentContext'
import { Iassesmentcontext } from '../../types/context/assesmentcontext'
import Text from '../GeneralPurpose/Text'
// import { motion } from 'framer-motion'



const QuestionsHome = () => {
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen, QuestionsArray,setisQuestionList,  setisQuestionHome, isQuestionsTest, setisQuestionsTest} = React.useContext(AssesmentContext) as Iassesmentcontext

  // const [isPresent, safeToRemove] = usePresence()

  // React.useEffect(() => {
  //   !isPresent && setTimeout(safeToRemove, 1000)
  // }, [isPresent])

  return (
<div className='flex justify-center relative z-20'>
<motion.div exit={{
  // y:40,
  // opacity:0
}} 
style={{
  // fontSize:65
}}
className='text-6xl   flex flex-col justify-center'>
    <div onClick={()=>{
      setisQuestionHome(false)
      setisQuestionList(true)}} style={{
      // backgroundColor:'#A46741'
    }} className=''>
      {QuestionsArray.length?<div className='flex '>
       Explore Created  Questions <DuttonLarge
      handleClick={()=>{
        setisQuestionHome(false)
        setisQuestionList(true)
      }}
      icon={ <svg className='fill-current text-amber-800' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z"/></svg>}
      />,

      </div> :'No Questisons Created yet ,'}
       
      </div>
      <div style={{
  // backgroundColor:'#89ABD0'
}} className=' flex pt-2'>Create Questions  

<DuttonLarge
handleClick={()=>{
  setisQuestionHome(false)
  setisCreateQuestionsOpen(true)}}
icon={ <svg className='fill-current text-amber-800' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z"/></svg>}
/>


  <span className='font-header6' >,</span> </div>

  <div style={{
  // backgroundColor:'#89ABD0'
}} className=' flex pt-2 transition-all hover:text-stone-800'>Create Test 

<DuttonLarge
handleClick={()=>{
  setisQuestionList(false)
  setisQuestionHome(false)
  setisQuestionsTest(true)
}}
icon={<div className='flex'> <svg style={{
  // color:'#A46741'
}} className='fill-current text-amber-800 ' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z"/></svg>
<svg style={{
  // color:'#A46741'
}} className='fill-current text-amber-800' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z"/></svg>
<svg style={{
  // color:'#A46741'
}} className='fill-current text-amber-800' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z"/></svg></div>}
/>


  <span className='font-header6' >,</span> </div>
</motion.div>
</div>



    
    
  )
}

export default QuestionsHome