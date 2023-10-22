const Sum = require('./sum')
// import React from 'react'
import {render} from '@testing-library/react'
// import {render} from '../'

// import AssesmentContext from  '../context/AssesmentContext'
import React from 'react'
import {AssesmentContextProvider,AssesmentContext} from '../context/AssesmentContext'
// import AssesmentContext from '../context/AssesmentContext'
console.log(AssesmentContext,'ddd')



/**
 * @jest-environment jsdom
 */


const TestingComponent = () => {
    const {currentAnswers} = React.useContext(AssesmentContext)

    return (<div data-testid="jack">
        {currentAnswers.A}
    </div>)
}

const TestingAssesmentContextKeyFunctions = () => {

}


describe('example tests', ()=> {

    // beforeEach(()=>{
    //     expectedProps {
    //         jack:'dom'
    //     }
    // })

    const {getByTestId, getByText} = render(
        <AssesmentContextProvider>
            <TestingComponent/>
        </AssesmentContextProvider>
    )

    it('adds two numbers', () => {
        const userName = getByTestId('jack');

        expect(userName.textContent).toEqual('A');
        const result = Sum(1,2)
        expect(result).toBe(3)
    })
})

// const exex= describe()

// function RunTest(params) {

//     console.log('ccee', React)

//     const {currentAnswers} = React.useContext(AssesmentContext)
    
//     describe('items should be visible', () => {
//         <AssesmentContextProvider>
//         {
//         it('find out', () => {
//             expect({
//                 A:'A',
//                 B:'B',
//                 C:'C',
//                 D:'D'
//               }).toEqual(currentAnswers)
//         })
//         }
//         </AssesmentContextProvider>
//         })
        
//     return (<div>

//     </div>)
// }

// RunTest()

