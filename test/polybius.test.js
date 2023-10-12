// Write your tests here!
const polybiusModule = require("../src/polybius")
const expect = require("chai").expect

describe("polybius", () => {
    it("Should encode message", () => {
            const expected = "4432423352125413"
            const actual = polybiusModule.polybius("thinkful")
            expect(actual).to.eql(expected)
    })

    it("Should encode message with spaces maintained", () => {
            const expected = '3251131343 2543241341'
            const actual = polybiusModule.polybius("Hello world")
            expect(actual).to.eql(expected)
    })
    
    it("Should decode message with spaces maintatined", () => {
            const expected = "hello world"
            const actual = polybiusModule.polybius("3251131343 2543241341", false)
            expect(actual).to.eql(expected)
    })
  
    it("Should return 'i/j' when decoding 42", () => {
            const expected = "th(i/j)nkful"
            const actual = polybiusModule.polybius("4432423352125413", false)
            expect(actual).to.eql(expected)
    })
    
    it("Should return false if the number of characters in the string excluding spaces is an odd number", () => {
            const expected = false
            const actual = polybiusModule.polybius("44324233521254134", false)
            expect(actual).to.eql(expected)
    })
})
