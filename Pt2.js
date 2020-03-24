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
// FIRST ATTEMPT
function titleCase(str) {
  let lowerString = str.toLowerCase();
  let newString = "";
  console.log(lowerString.length);
  for(let i = 0; i < lowerString.length; i++) {
    if(lowerString[i] == " ") {
      let upperCaseLetter = lowerString[i + 1].toUpperCase();
    newString = newString + " " + upperCaseLetter;
    }
    else {
      newString = newString + lowerString[i];
    }
    console.log(newString);
  }
console.log(typeof(newString));
  return str;
}

titleCase("I'm a little tea pot");
