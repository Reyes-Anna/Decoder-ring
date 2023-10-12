// Write your tests here!
const substitutionModule = require("../src/substitution")
const expect = require("chai").expect

describe("substitution", () => {
    it("Should encode message", () => {
            const expected = 'jrufscpw'
            const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
            expect(actual).to.eql(expected)
    })

   it("Should encode message with spaces", () => {
            const expected =  'elp xhm xf mbymwwmfj dne'
            const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
            expect(actual).to.eql(expected)
    })
  
   it("Should decode message", () => {
            const expected = 'thinkful'
            const actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
            expect(actual).to.eql(expected)
    })
  
  it("Should encode message with special characters", () => {
            const expected = "y&ii$r&"
            const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            expect(actual).to.eql(expected)
    })
  
  it("Should decode message with special characters", () => {
            const expected = "message"
            const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
            expect(actual).to.eql(expected)
    })
  
  it("Should return false if alphabet parameter is less than 26 characters", () => {
            const expected = false
            const actual = substitutionModule.substitution("thinkful", "short")
            expect(actual).to.eql(expected)
    })
  
  it("Should return false if characters in the alphabet are not unique", () => {
            const expected = false
            const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
            expect(actual).to.eql(expected)
    })

})
