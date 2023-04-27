import { random } from 'chroma-js'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'
import { DuttonAlt } from '../GeneralPurpose/dutton'



const YourNetwork = (props:any) => {


  const {setisSubscriberList, isSubscriberList, copyUserLink, subscribeToLinkInput, setsubscribeToLinkInput,subscribeToNetwork} = React.useContext(UserContext) as Iusercontext

  React.useEffect(() => {
    
  }, []);

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
         x:-500,
         opacity:0.05
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
         height:480
       }}
       className='w-full relative border-l-8 border-yellow-900'>
         <div className='   absolute w-full h-full  py-2 opacity-50 text-transparent'>x</div>
 
         <div className='relative h-full shadow z-10 border-r border-black'>
           <div 
           style={{
            borderLeft:'2px solid black'
           }}
           className='text-xl px-2 border-y border-b'>
             Subscriber List
           </div>
         <div className='  '>
        
           <div 
           style={{
             opacity:'70%',
             height:450,
             backgroundColor:'rgb(45 30 30)'
           }}
           className='text-7xl p-4 z-10 w-full h-full opacity-50 text-transparent   border-l-2 border-black absolute '>
           Y
           </div>

           <div className='z-20 relative '>
           <DuttonAlt
           icon={'Copy Subscribe Link'}
           handleClick={()=>copyUserLink()}
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

       style={{
     
       }}
       
       exit={{
         x:-500,
         opacity:0.05
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
         height:480
       }}
       className='w-full relative  border-l-8 border-amber-700 '>
         <div className=' border-b border-black absolute w-full h-full  py-2 opacity-50  text-transparent'>x</div>
 
         <div className='relative shadow z-10 h-full border-r border-gray-800'>
           <div
            style={{
              borderLeft:'2px solid black'
             }}
           className='text-xl px-2  border-y'>
             Subscriber List
           </div>
         <div className='  '>

        
           <div 
           style={{
             opacity:'70%',
             height:450
           }}
           className='text-7xl p-4 z-10 w-full h-full opacity-50 text-transparent  border-b border-l-2 border-black absolute '>
           Y
           </div>

           <div className='z-20 relative flex items-end'>

            <div className={`${props.isClearLink?'':'animate-pulse'}`}>
            <DuttonAlt
           icon={' Subscribe to'}
           handleClick={() => {subscribeToNetwork( props.isClearLink),
             props.clearsubscribetoLink() }}
           />
            </div>
           

            <div className='w-3/4 '>
            <input
            onChange={(e:any) => {
              setsubscribeToLinkInput(e.target.value)
            } }
            value={Boolean(props.link && !props.isClearLink) ?props.link:subscribeToLinkInput}
            placeholder='Enter link'
           className='bg-transparent border-b px-3 py-1 text-xl w-full '
           />
            </div>
          
         </div>
 
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