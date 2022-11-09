import { NextPage } from 'next'
import React from 'react'
import CreateQuestions from '../components/assesment/QuestionsHome'
import QuestionsHome from '../components/assesment/QuestionsHome'

const assesment:NextPage = () => {
  return (
    <div
    style={{
      // backgroundColor:'#DD9D29'
    }}
    className='flex justify-center mt-8  xl:px-16 lg:px-14'>
        <div className='xl:w-7/12 lg:w-9/12 w-11/12 '>
        <div className='font-header6 font-extralight text-5xl text-black ' >
          
            <QuestionsHome/>
        </div>
     
        {/* <div style={{
          // backgroundColor:'#BFD5ED'
        }}>
             assesment
        </div> */}
       
    </div>
    </div>
  
  )
}

export default assesment