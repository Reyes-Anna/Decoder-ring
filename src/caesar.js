// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet= "abcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
      if (shift > 25 || shift < -25 || !shift) return false 
      let message = ""
      for (let i = 0; i < input.length; i++) {
          if (input[i] === " " || input[i] ==="." || input[i] === "!") {
              message += input[i]
          }
          else {
              let index = alphabet.indexOf(input[i].toLowerCase()) 
              if (!encode) {
                  index = index - shift
              }
              else {
                  index = index + shift
              }
              if (index > 25 ) {
                  index = index - 26
              }
              else if (index < 0 ) {
                  index = index + 26
              }
              message += alphabet[index]
          }
      }
      return message
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
