import { NextPage } from 'next'
import React from 'react'
import CreateQuestions from '../components/assesment/CreateQuestions'

const assesment:NextPage = () => {
  return (
    <div
    style={{
      backgroundColor:'#DD9D29'
    }}
    className='flex justify-center  h-full '>
        <div className='xl:w-7/12 lg:w-9/12 w-11/12 '>
        <div className='font-header8 text-6xl text-white mt-8' >
          <div className='bg-amber-800'>
            Create Questions
          </div>  
            <CreateQuestions/>
        </div>
        <div style={{
          backgroundColor:'#BFD5ED'
        }}>
             assesment
        </div>
       
    </div>
    </div>
  
  )
}

export default assesment