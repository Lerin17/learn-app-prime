import React from 'react'

import { Iuserdata } from '../../../types/context/usercontext'

interface IprofilePageprops  {
  userData:Iuserdata
}

const ProfilePage = ({userData}:IprofilePageprops) => {
  return (
    <div
    style={{
      height:450
    }}
     className='flex ' >
        <div className='w-1/3 p-2 glass '>
          <div className='flex justify-center' >
                  <div className='w-32 rhombus h-32 '>
                       <svg className='w-32 h-32  text-stone-800 hover:text-amber-900 fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
                </div>

                <div>
               
                </div>
          </div>
            
            <div className='text-3xl'>
            Name: {userData.name}
            </div>
         
            <div>
              Email: {userData.email}
            </div>

            
            <div>
              Network id: Lerin2445
            </div>
          </div>
{/* 
          <div className='bg-amber-900 w-3'>
            
          </div> */}

          <div className='w-2/3 p-2 pl-0  pt-0  border border-l-0  '>
            <div className='flex h-full'>
            <div className='w-1/2   border-r '>
              <div className='px-4'>
              Courses
              </div>
       
              <div>
              <div className='border-dashed border-b px-4 text-2xl transition-all hover:border-solid hover:bg-amber-800  hover:border-b-8 hover:border-amber-900 hover:border-solid hover-scale-125'>
                  math
                </div>
                <div className='border-dashed border-b px-4 text-2xl transition-all hover:border-solid hover:bg-amber-800  hover:border-b-8 hover:border-amber-900 hover:border-solid hover-scale-125'>
                  math
                </div>
                <div className='border-dashed border-b px-4 text-2xl transition-all hover:border-solid hover:bg-amber-800  hover:border-b-8 hover:border-amber-900 hover:border-solid hover-scale-125'>
                  math
                </div>
              </div>
            </div>

            <div className='w-1/2 px-4'>
              Networks
            </div>

            
            <div className='w-1/2 px-4'>
              Packages
            </div>
            </div>
 
            
          </div>
    </div>
  )
}

export default ProfilePage