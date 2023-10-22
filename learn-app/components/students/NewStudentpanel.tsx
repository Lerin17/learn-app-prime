import React from 'react'

const NewStudentpanel = () => {
  return (
    <div className='w-full font-header12 border'
    >
       {/* <div>
       NewStudentpanel
        </div>  */}
        <div className='text-3xl flex justify-center'>
            Add New student Via
        </div>
        <div className='flex justify-between mt-4 h-48'>
             <div className='w-6/12 border border-l-0 border-b-0 cursor-pointer'>
                Create dummy student
            </div>
            <div className='mx-2'>
                Or
            </div>
            <div className='w-6/12 border border-r-0 border-b-0 cursor-pointer'>
                <div className='text-6xl'>
                <svg className='fill-current' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                </div>
                Send Email for input
            </div>
            
        </div>
    </div>
  )
}

export default NewStudentpanel