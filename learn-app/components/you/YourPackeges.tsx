import { motion, MotionConfig } from 'framer-motion'
import React from 'react'
import { DuttonAlt } from '../GeneralPurpose/dutton'
import { AnimatePresence } from 'framer-motion'
import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'



const YourPackages = () => {


  const {isCreatePackage, setisCreatePackage} = React.useContext(UserContext) as Iusercontext

  return (
    <div className='flex font-header12  justify-center'>
              <div 
              style={{
                height:450,
                overflow:'hidden'
              }}
    className=' w-8/12'
    >
    <div className='text-4xl '>
       <DuttonAlt
        icon={'Create Packages'}
        handleClick={()=>setisCreatePackage(prev => !prev)}
        />
    </div>

<AnimatePresence>

  {isCreatePackage &&

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
  animate={{
    x:0,
    display:'block'
  }}
    
    initial={{
      x:400,
      display:'none'
    }}

    transition={isCreatePackage &&{
      duration:0.4,
      delay:0.48
    }}
    >
      
<div className='mt-4'>
            <div className='text-2xl flex  border-b'>
             
             <div>
             Name
             </div>
        

             <div className='w-full'>
              <input
              className='bg-transparent transition-all border-b-2 focus:border-b-0  w-full'
              />
             </div>
            </div>

            <div className='text-2xl flex border-b'>
             
             <div>
             Description
             </div>
        

             <div className='w-full'>
              <input
              className='bg-transparent transition-all border-b-2 focus:border-b-0  w-full'
              />
             </div>
            </div>

            <div className='text-2xl flex border-b'>
                    <div>
                    Courses
                    </div>
      
                  <div className='w-full'>
                    <input
                    className='bg-transparent w-full'
                    />
             </div>
            </div>

            <div className='h-72 border-2 flex'>
              
              <div className='h-full w-5/12 bg-amber-900'>
                
                <div className='px-2'>
                  Selected courses
                </div>

                <div>
                <div className='px-2'>
                  sss
                </div>
                <div className='px-2'>
                  sss
                </div>
                <div className='px-2'>
                  sss
                </div>
                </div>
            
              </div>

          <div className='text-xl  flex w-7/12 border'>
             <div>
              Search
             </div>
          </div>
              

              
               
            </div>
</div>
</motion.div>  

  </motion.div>
 
  }
  
  </AnimatePresence>


  <AnimatePresence>
    {!isCreatePackage &&
    <motion.div exit={{
      x:-300,
      opacity:0.1
    }}
    
    transition={{
      duration:0.4
    }}
    >
<motion.div
animate={{
  x:0,
  display:'block'
}}

transition={!isCreatePackage && {
duration:0.4,
delay:0.48
}}

// transition={{
//   delay:0.6
// }}

initial={{
  x:400,
  display:'none'
}}
//     exit={{
//       x:-300
//     }}
    >
      
<div className='mt-4'>
            <div className='border-dashed border-b px-4 text-3xl transition-all hover:border-solid hover:bg-amber-800  hover:border-b-8 hover:border-amber-900 hover:border-solid  hover:text-4xl'>
              Unity High school e-lning
            </div>

            <div className='border-dashed border-b px-4 text-3xl transition-all hover:border-solid hover:bg-amber-800  hover:border-b-8 hover:border-amber-900 hover:border-solid  hover:text-4xl'>
              Unilorin e-learining
            </div>

            <div className='border-dashed border-b px-4 text-3xl transition-all hover:border-solid hover:bg-amber-800  hover:border-b-8 hover:border-amber-900 hover:border-solid  hover:text-4xl '>
              math
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

export default YourPackages