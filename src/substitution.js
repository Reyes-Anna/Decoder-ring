// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const originalAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false
   let str = alphabet[0]
    for (let i = 1 ; i < alphabet.length; i ++) {
      if(str.includes(alphabet[i])) return false
   }
    let message = ""
    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          message += input[i]
        } 
        else {
          if (!encode) {
          let index = alphabet.indexOf(input[i].toLowerCase())
          message += originalAlphabet[index]
          } 
          else {
          index = originalAlphabet.indexOf(input[i].toLowerCase())
          message += alphabet[index]
          }
       }
    }
    console.log(message)
    return message
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
