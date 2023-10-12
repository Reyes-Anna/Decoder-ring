// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let square = {
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: { 1: 'f', 2: 'g', 3: 'h', 4: '(i/j)', 5: 'k'},
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'}, 
               }

  function polybius(input, encode = true) {
    let message = input.toLowerCase().split("")
    const messageNoSpaces = message.filter(char => char != " ")
    if (encode === true) {
       let buildEncryption = []
       for (let i = 0; i < message.length; i ++) {
         if (message[i] === " ") {
             buildEncryption.push(" ")
             }
         else {
           for (let c = 1; c < 6; c++){
             for (let r = 1; r < 6; r ++) {
               if (square[c][r].includes(message[i])) {
                    buildEncryption.push(r,c)
                 }
               }
            }
          }
       }
      console.log(buildEncryption)
      return buildEncryption.join('')
    }
    else if (encode === false) {
      let decodeString = ""
      if (messageNoSpaces.length % 2 !== 0) return false
      for (let i = 0; i < message.length ; i += 2) {
        if (message[i] === " ") {
          decodeString += message [i--] 
        } 
       else {
         decodeString += square[message[i+ 1]][message[i]]
    }
   }
      return decodeString
  }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
