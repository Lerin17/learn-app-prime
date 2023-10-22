const Sum = require('./sum')
// const Add = require('../context/AssesmentContext')

describe('example tests', ()=> {
    it('adds two numbers', () => {
        const result = Sum(1,2)
        expect(result).toBe(3)
    })
})

