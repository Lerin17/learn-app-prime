import Link from 'next/link'
import React from 'react'

const CoursesHome = () => {
  return (
    <div className='flex justify-center'>
          <div className='text-7xl pt-3 xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-white xl:w-8/12 lg:w-9/12 md:w-10/12 w-11/12  font-header9 flex flex-col justify-center ' >
         
         <Link href={'/courses/courseslist'}>
         <div className='textshadow text-stone-300 hover:text-stone-800'>
            {/* No Courses Created Yet, */}
            Available Course List,
            </div>
                   
         </Link>  


         <Link href={'/courses/coursegroups'}>
         <div className='textshadow pt-2 text-stone-300 hover:text-stone-800'>
         Create Course Group,
            </div>
                   
         </Link>


         <Link href={'/courses/createcourse'}>
         <div className='textshadow pt-2 text-stone-300 hover:text-stone-800'>
         Create Course 
            </div>
                   
         </Link>
          
          

                                                 
                </div>
    </div>
  )
}

export default CoursesHome