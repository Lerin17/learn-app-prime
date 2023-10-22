import { random } from 'chroma-js'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'
import { DuttonAlt } from '../GeneralPurpose/dutton'



const YourNetwork = (props:any) => {


  const {setisSubscriberList, isSubscriberList, copyUserLink, subscribeToLinkInput, setsubscribeToLinkInput,   searchForNetwork, subscriberDetails, isWaiting} = React.useContext(UserContext) as Iusercontext

  React.useEffect(() => {
    
  }, []);

  return (
    <div
    className='flex flex-col  items-center font-header12'>

      <div
       style={{
        overflowX:'hidden'
      }}
      className='lg:w-8/12 md:w-10/12   w-11/12'>
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
 
         <div className='relative h-full z-10 border-r border-black'>
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
 
         <div className='relative  z-10 h-full border-r border-gray-800'>
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
           icon={'Search'}
           handleClick={() => {   searchForNetwork( props.isClearLink),
            ()=> props.clearsubscribetoLink() }}
           />
            </div>
           

            <div className='w-3/4 '>
            <input
            onChange={(e:any) => {
              setsubscribeToLinkInput(e.target.value)
            } }
            value={Boolean(props.link && !props.isClearLink) ?props.link:subscribeToLinkInput}
            placeholder='Enter link'
           className='bg-transparent border-b px-3 py-1 lg:text-2xl md:text-xl text-xs  w-full '
           />
            </div>
          
         </div>
 
           <div className='z-10 p-4 py-8 text-xl text-stone-300 relative'>

     
            
          
              {isWaiting?
                <div className=' '>
                 
                    <svg className='fill-current animate-spin text-red-400' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.341 6.502c1.11-2.157 2.877-3.984 5.162-5.16l.766 1.848c-1.779.954-3.169 2.393-4.074 4.081l-1.854-.769zm5.93 14.302c-1.688-.904-3.126-2.294-4.08-4.074l-1.848.765c1.175 2.286 3.002 4.054 5.16 5.165l.768-1.856zm-4.845-5.921c-.584-1.932-.549-3.932.005-5.765l-1.856-.768c-.739 2.311-.782 4.852.003 7.299l1.848-.766zm5.925-14.306l.766 1.848c1.932-.583 3.933-.549 5.765.005l.77-1.855c-2.313-.74-4.853-.782-7.301.002zm8.378 2.619c1.688.905 3.126 2.294 4.079 4.073l1.848-.766c-1.176-2.285-3.002-4.052-5.159-5.163l-.768 1.856zm4.845 5.919c.584 1.933.549 3.933-.005 5.766l1.855.769c.74-2.311.782-4.853-.003-7.301l-1.847.766zm-.77 7.614c-.904 1.688-2.294 3.126-4.072 4.08l.766 1.848c2.285-1.176 4.052-3.003 5.162-5.16l-1.856-.768zm-5.92 4.845c-1.933.584-3.933.549-5.766-.005l-.77 1.856c2.312.739 4.853.782 7.301-.002l-.765-1.849z"/></svg>
                </div>:<div>
                  {subscriberDetails?
                  <div 
                 
                  className='flex lg:h-72 h-52 r  w-full'>
                    <div 
                      style={{
                        mixBlendMode:'difference'
                      }} 
                    className='w-3/12  flex flex-col h-full  items-end  lg:mr-0 md:mr-2 '>

                     
                    
                    <div 
                           
                    className='lg:h-80 flex items-center justify-center lg:w-56  md:h-56  rhombus '>
                       <svg
                        
                       className='lg:h-72 lg:w-52 md:w-32 md:h-52  h-32 w-16  text-stone-800 hover:text-amber-900 fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
                </div>

                    
                    
                  
                    </div>
                   
                    <div className='text-3xl h-full w-8/12'>

                      <div
                      style={{
                        // height: 
                      }}
                      className='flex  relative  flex-col lg:text-2xl md:text-lg text-xs  h-full bg-amber-900'>

                      <div className='w-full  border-y lg:text-lg md:text-lg text-xs '>
                      {subscriberDetails?.name} Package
                      </div>

                      <div className='p-2'>
                      <div>
                      Name {subscriberDetails?.name}
                      </div>
                 

                      <div>
                      Duration {subscriberDetails?.SearchedPackage.description}
                      </div>

                      <div>
                        Description: {subscriberDetails?.SearchedPackage.description}
                      </div>
                      </div>
                        
                    

                      <div className='absolute bottom-0 left-0 '>
                      <DuttonAlt
                      icon={' Subscribe'}
                      handleClick={()=>console.log('exex')}
                      />
                      </div>
                      
                      </div>
                   
                    
                      
                      
{/* 
                      {subscriberDetails?.packages.map((item:any) => (<div>
                        {item.name}
                      </div>))} */}
                    </div>

                   

                    <div>
                   
                     
                    </div>
                  </div>:  <div className='lg:text-7xl md:text-3xl'>
                    You are subscribed to, Nobody
                  </div>
                  }
                </div>
              }
          

           

           
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