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
// First Answer:
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

// 16. Falsy Bouncer- Remove all falsy values from an array (in JS, these are false, null, 0, "", undefined, and NaN)
// First Answer:
function bouncer(arr) {
  let localArr = [];
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    if (x == null || x == 0 || x == undefined || x != x || x == false) {   // x != x checks for NaN
      console.log(localArr)
    }
    else {
      localArr.push(x);
    }
  }
  return localArr;
}
// Second Answer: 
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
// Suggested Answer:
function bouncer(arr) {
  return arr.filter(Boolean); 
}
// Explanation: The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument 

// 17. Where do I Belong- Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number. EX: getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= num) {
      console.log(arr[i - 1])
      return i;
    }
  }
  return arr.length;
}
