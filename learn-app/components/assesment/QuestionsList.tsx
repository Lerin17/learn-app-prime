import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext'
import { Iassesmentcontext } from '../../types/context/assesmentcontext'

import { Iquestion } from '../../types/context/assesmentcontext'

const QuestionsList = () => {
    const {isCreateQuestionsOpen, setisCreateQuestionsOpen, QuestionsArray} = React.useContext(AssesmentContext) as Iassesmentcontext

    const QuestionComponent = (props:Iquestion) => {
        return (<div>
            {props.question}
        </div>)
    }

    const QuestionsDisplay = QuestionsArray? QuestionsArray.map(item => (
        <QuestionComponent
        question={item.question}
        answers={item.answers}
        id={item.id}
        tags={item.tags}
        correctanswer={item.correctanswer}
        />
    )):<div>
        No question Created yet
    </div>

  return (
    <div>
        <div className='bg-red-500 w-full' >ddx</div>
            <div>
                <div>
                    <div 
                    style={{
                        fontSize:200
                    }}
                    className='text-8xl font-header7' >
                        123
                    </div>
                    Available Questions
                </div>
                <div>
                    {QuestionsDisplay}
                </div>
            </div>
    </div>
  )
}

export default QuestionsList