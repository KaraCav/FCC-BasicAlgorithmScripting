// 11. Return true if a value is a boolean primitive
function booWho(bool) {
  if(bool === true || bool === false){
    return true;
  }
  else {
  return false;
  }
}

booWho(null);

// 12. Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
    let lowerString = str.toLowerCase().split(' ');
    let returnString = "";
    for(let i = 0; i < lowerString.length; i++) {    
        let upperLetter = lowerString[i].slice(0,1);
        returnString = returnString + upperLetter.toUpperCase();
        if(lowerString[i].length > 1) {
            let otherLetters = lowerString[i].slice(1, lowerString[i].length)
        returnString = returnString + otherLetters + " ";
      }
      else {
          returnString = returnString + " "
        }
    }
    return returnString.slice(0, returnString.length-1);
}
titleCase("I'M a liTtle tEa pOt");
