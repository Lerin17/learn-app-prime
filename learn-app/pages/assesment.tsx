import { NextPage } from 'next'
import React from 'react'
// import CreateQuestions from '../components/assesment/QuestionsHome'
import QuestionsHome from '../components/assesment/QuestionsHome'
import CreateQuestions from '../components/assesment/CreateQuestions'
import { AssesmentContext } from '../context/AssesmentContext'

import { Iassesmentcontext } from '../types/context/assesmentcontext'

const assesment:NextPage = () => {

  const {isCreateQuestionsOpen, setisCreateQuestionsOpen} = React.useContext(AssesmentContext) as Iassesmentcontext

  console.log(isCreateQuestionsOpen, 'dam')

  return (
    <div
    style={{
      // backgroundColor:'#DD9D29'
    }}
    className='flex justify-center mt-8  xl:px-16 lg:px-10 '>
        <div className='xl:w-8/12 lg:w-9/12 w-11/12 '>
        <div className='font-header6 font-extralight text-5xl text-black ' >
          {!isCreateQuestionsOpen &&
            <QuestionsHome/>
          }
            

            {isCreateQuestionsOpen &&
              <CreateQuestions/>
            }
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