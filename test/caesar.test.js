// Write your tests here!

const caesarModule = require("../src/caesar")
const expect = require("chai").expect

describe("caesar", () => {
    it("Should encode message by shifting letters 3 spaces to the right", () => {
            const expected = 'wklqnixo'
            const actual = caesarModule.caesar("thinkful", 3)
            expect(actual).to.eql(expected)
    })

    it("Should encode message by shifting letters 3 spaces to the left", () => {
            const expected = 'qefkhcri'
            const actual = caesarModule.caesar("thinkful", -3)
            expect(actual).to.eql(expected)
    })
    
    it("Should decode the message", () => {
            const expected = 'thinkful'
            const actual = caesarModule.caesar("wklqnixo", 3, false)
            expect(actual).to.eql(expected)
    })
    
    it("Should encode message by shifting letters 8 spaces to the right", () => {
            const expected = 'bpqa qa i amkzmb umaaiom!'
            const actual = caesarModule.caesar("This is a secret message!", 8)
            expect(actual).to.eql(expected)
    })
    it("Should decode the message", () => {
            const expected = 'this is a secret message!'
            const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false)
            expect(actual).to.eql(expected)
    })
    
    it("Should return false if a shift value isn't present", () => {
            const expected = false
            const actual = caesarModule.caesar("thinkful")
            expect(actual).to.eql(expected)
    })
    
    it("Should return false if shift value is greater than 25", () => {
            const expected = false
            const actual = caesarModule.caesar("thinkful", 99)
            expect(actual).to.eql(expected)
    })
    
    it("Should retunr false if the shift value is less than -25", () => {
            const expected = false
            const actual = caesarModule.caesar("thinkful", -26)
            expect(actual).to.eql(expected)
    })
    
})
