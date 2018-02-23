const Math = require('../business/math.js')()
const expect = require('chai').expect

describe('Math module', () => {
    describe('"sum"', () => {
        it('Should export a function', () => {
            expect(Math.sum).to.be.a('function')
        })

        it('Should return 10 when 6 plus 4', () => {
            expect(Math.sum(6, 4)).to.be.equal(10)
        })

        it('Should return 2 when sum 6 with -4', () => {
            expect(Math.sum(6, -4)).to.be.equal(2)
        })

        
    })
})