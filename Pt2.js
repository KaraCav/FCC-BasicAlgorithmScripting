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

// 13. Use Recursion to Create a Countdown
// The function should use recursion to return an array containing the integers n through 1 based on the n parameter. 
// If the function is called with a number less than 1, the function should return an empty array. 
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

// 14. Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) { 
  if (startNum == endNum) {
    return [startNum];
  } else {
    let numArr = rangeOfNumbers(startNum, endNum - 1);
    numArr.push(endNum);
    return numArr;
  }
}

// 15. Slice and Splice- You are given two arrays and an index. Copy each element of the first array into the second array, in order, starting 
// at index n of the second array. Return the resulting array. The input arrays should not change.
// 1st Answer:
function frankenSplice(arr1, arr2, n) {
  let arr2Start = arr2.slice(0, n);
  let arr2End = arr2.slice(n);
  
  for(let i = 0; i < arr1.length; i++) {
    arr2Start.push(arr1[i]);
  }
  for(let i = 0; i < arr2End.length; i++){
    arr2Start.push(arr2End[i])
  }
  return arr2Start;
}
// Second Answer:
function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArray.splice(n, 0, arr1[i]);
    n++;
  }
  return newArray;
}
