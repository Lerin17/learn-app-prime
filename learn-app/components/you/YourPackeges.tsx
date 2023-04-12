import { motion, MotionConfig } from 'framer-motion'
import React from 'react'
import { DuttonAlt } from '../GeneralPurpose/dutton'
import { AnimatePresence } from 'framer-motion'
import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'
import { CourseContext } from '../../context/CourseContext'


import { Icoursecontext } from '../../types/context/coursecontext'

const YourPackages = () => {

  const {coursesArray, courseGroupArray} = React.useContext(CourseContext) as Icoursecontext
  

  const {isCreatePackage, setisCreatePackage, currentUserPackage, setcurrentUserPackage} = React.useContext(UserContext) as Iusercontext

  const [courseSearchInput, setcourseSearchInput] = React.useState('');

  
  const getFilteredItems = () => {


    return (
      coursesArray.filter(item => {
        if( item.courseName.includes('m')){
          return (<div>
            {item.courseName}
          </div>)
        }
       
      
      })
    )
  }


  const filtered = (item:any) => {
    if( item.courseName.includes('M')){
      return (<div>
        {item.courseName}
      </div>)
    }
  }

  const getSearchCourses = !courseSearchInput? 
   coursesArray
:  coursesArray.filter(item => {
  const itemcourseName = item.courseName.toLowerCase()
  const searchInput = courseSearchInput.toLowerCase()
    if( itemcourseName.includes(searchInput)){
      return <div>
        {item.courseName}
      </div>
    }
  })

  const AvailableCourses = getSearchCourses.map((item:any) => (<div 
  onClick={()=>{setcurrentUserPackage(prev => ({...prev, courses:[item, ...prev.courses]}))}}
  className='border-dashed transition-all hover:bg-amber-700 hover:border-b-4 hover:border-amber-900 hover:text-white hover:border-solid  px-4 border-b '>
    {item.courseName}
  </div>))

  console.log(currentUserPackage, 'currentUserPackage')

  console.log(getSearchCourses, 'getCOurseses')


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
             
             <div className='pr-6'>
             Name
             </div>
        

             <div className='w-full'>
              <input
              value={currentUserPackage.name}
              className='bg-transparent transition-all border-b-2 focus:border-b-0  w-full'
              onChange={(e) => {
                setcurrentUserPackage(prev => ({
                  name:e.target.value,
                  description:prev.description,
                  courses:prev.courses
                }))
              }}
              />
             </div>
            </div>

            <div className='text-2xl flex border-b'>
             
             <div className='pr-6'>
             Description
             </div>
        

             <div className='w-full'>
             <input
              value={currentUserPackage.description}
              className='bg-transparent transition-all border-b-2 focus:border-b-0  w-full'
              onChange={(e) => {
                setcurrentUserPackage(prev => ({
                  name:prev.name,
                  description:e.target.value,
                  courses:prev.courses
                }))
              }}
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

            <div className='h-72  flex'>
              
              <div className='h-full w-5/12 bg-amber-900'>
                
                <div className='px-2'>
                  Selected courses
                </div>

                <div 
                style={{
                  overflowY:'auto',
                  height:250
                }}
                >
                  
                  {currentUserPackage.courses.length? currentUserPackage.courses.map(item => (
                    <div>
                      {item.courseName}
                    </div>
                  )):<div>
                    No courses have been added
                    </div>}
                </div>
            
              </div>

          <div className='text-xl   w-7/12 border'>
             <div className='flex' >
              Search
              <input
              onChange={(e)=>setcourseSearchInput(e.target.value)}
              value={courseSearchInput}
              className='border-b bg-transparent px-4 w-full'
              />
             </div>

             <div className=''>
              {AvailableCourses}
             </div>
{/* 
             <div
             style={{
              fontSize:180
             }}
             className=' px-4'>
              ...
             </div> */}
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