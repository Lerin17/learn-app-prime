import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'
import { DuttonAlt } from '../GeneralPurpose/dutton'



const YourNetwork = () => {


  const {setisSubscriberList, isSubscriberList} = React.useContext(UserContext) as Iusercontext

  return (
    <div
   
    className='flex flex-col items-center font-header12'>

      <div
       style={{
        overflowX:'hidden'
      }}
      className='w-8/12'>
      <div 
     
     className='flex w-full items-center mb-4 justify-start'>

      <div className={`transition-all ${!isSubscriberList?'border-b-4':''}`}>
      <DuttonAlt
       icon={'Subscriptions'}
       handleClick={()=>setisSubscriberList(false)}
       />
      </div>
       

       <div className='text-xl px-2'>
       or
       </div>
  
      <div className={`transition-all ${isSubscriberList?'border-b-4':''}`}>
      <DuttonAlt
       icon={'Subscribers'}
       handleClick={()=>setisSubscriberList(true)}
       />
      </div>
       
     </div>

     <AnimatePresence>
       {isSubscriberList && 
       
       <motion.div
       className=' w-full'
       exit={{
         x:-400,
         opacity:0.1
       }}
       
       transition={{
         duration:0.4
       }}
       >
             <motion.div 
       initial={{
         x:400,
         display:'none'
       }}

       transition={isSubscriberList && {
         duration:0.4,
         delay:0.48
       }}
       
       animate={{
         x:0,
         display:'block'
       }}

       style={{
         height:500
       }}
       className='w-full relative border-l-8 border-amber-700'>
         <div className='bg-amber-700   absolute w-full h-full  py-2 opacity-50 text-transparent'>x</div>
 
         <div className='relative z-10'>
           <div 
           style={{
            borderLeft:'1px solid black'
           }}
           className='text-xl px-2 border-y border-b'>
             Subscriber List
           </div>
         <div className='  '>
        
           <div 
           style={{
             opacity:'70%',
             height:450
           }}
           className='text-7xl p-4 z-10 w-full h-full opacity-50 text-transparent   border-l border-black absolute bg-amber-900'>
           Y
           </div>

           <div className='z-20 relative '>
           <DuttonAlt
           icon={'Copy Subscribe Link'}
           handleClick={()=>console.log('jack ')}
           />
         </div>
 
           <div className='z-20 p-4 text-7xl text-stone-300 relative'>
           <div>
             Nobody, is subscribed to you.
           </div>
           </div>
 
         
         
         </div>

       </div>
 
 
         </motion.div>
       </motion.div>
       }
     </AnimatePresence>

     <AnimatePresence>
       {!isSubscriberList && 
       
       <motion.div
       
       exit={{
         x:-400,
         opacity:0.1
       }}
       
       transition={{
         duration:0.4
       }}
       >
             <motion.div 
       initial={{
         x:400,
         display:'none'
       }}

       transition={!isSubscriberList &&{
         duration:0.4,
         delay:0.48
       }}
       
       animate={{
         x:0,
         display:'block'

       }}

       style={{
         height:500
       }}
       className='w-full relative border-l-8 border-amber-700'>
         <div className='bg-amber-800   absolute w-full h-full  py-2 opacity-50 text-transparent'>x</div>
 
         <div className='relative z-10'>
           <div className='text-xl px-2 border-y border-b'>
             Subscriber List
           </div>
         <div className='  '>
        
           <div 
           style={{
             opacity:'70%',
             height:450
           }}
           className='text-7xl p-4 z-10 w-full h-full opacity-50 text-transparent  border-b border-l border-black absolute bg-amber-900'>
           Y
           </div>
{/* 
           <div className='z-20 relative '>
           <DuttonAlt
           icon={'Copy Subscribe Link'}
           handleClick={()=>console.log('jack ')}
           />
         </div> */}
 
           <div className='z-20 p-4 py-8 text-7xl text-stone-300 relative'>
           <div>
             You are subscribed to, Nobody
           </div>
           </div>
 
         
         
         </div>

       </div>
 
 
         </motion.div>
       </motion.div>
       }
     </AnimatePresence>
      </div>

 

    
    
       
    </div>
  )
}

export default YourNetwork