// 1. Learn About Functional Programming
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

// 2. Understand Functional Programming Terminology
// Create a function that takes in other functions as a parameter
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

// 3. Understand the Hazards of Using Imperative Code- Make changes to the Window object to add and remove tabs
var Window = function(tabs) {
  this.tabs = tabs; // record of the array in the object
};
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); 
  return this;
};
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.slice(0, index);
  var tabsAfterIndex = this.tabs.slice(index + 1); 
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
console.log("my 1st answer",this.tabs);
  return this;
 };

var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); 
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 

var finalTabs = socialWindow
  .tabOpen() // Open a new tab 
  .join(videoWindow.tabClose(2)) // Close 3rd tab in window and join
  .join(workWindow.tabClose(1).tabOpen());
console.log("final", finalTabs.tabs);

// 4. Avoid Mutations/ Side Effects- return a global variable with a fixed value increased by 1
var fixedValue = 4;
function incrementer () {
  return fixedValue + 1;
}

// 5. Refactor Global Variables Out of FunctionsPassed
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}
function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1); 
    return newArr; 
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

// 6. Use the map Method to Extract Data from an Array
const ratings = watchList.map(movie => ({
  title: movie["Title"],
  rating: movie["imdbRating"]
}))

// 7. Implement map on a Prototype- write your own. map method
Array.prototype.myMap = function(callback) {
  var newArray = [];
  this.forEach(item => newArray.push(callback(item)))
  return newArray;
};

// 8. Use the filter Method to Extract Data from an Array
var filteredList = watchList.map(function(movie) {
    return { title: movie["Title"], rating: movie["imdbRating"] };
  })
  .filter(movie => movie.rating >= 8);

// 9. Implement the filter Method on a Prototype
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];

 for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
      console.log(newArray);
    }
  }
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

// 10. Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

// 11. Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

// 12. Combine Two Arrays Using the concat Method
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

// 13. Add Elements to the End of an Array Using concat Instead of push
// Functional programming is all about creating and using non-mutating functions
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

// 14. Use the reduce Method to Analyze Data- Return the average rating of only Christopher Nolan movies
function getRating(watchList) {
  
let averageRating = watchList
.filter(movie => movie.Director == "Christopher Nolan")
.map(movie => Number(movie.imdbRating))
.reduce((allRatings, thisRating) => allRatings + thisRating);
  
return averageRating/ watchList.filter(movie => movie.Director == "Christopher Nolan").length
}

// 15. Use Higher-Order Functions to Solve a Complex Problem- return a new array containing the squares of only the positive integers
const squareList = arr => {
  return arr
  .filter(num => num > 0 && num % parseInt(num) === 0)
  .map(num => Math.pow(num, 2));
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// 16. Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
  arr.sort(function(a,b) {
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
  })
  console.log(arr);
  return arr
}
alphabeticalOrder(["a", "d", "d", "c", "a", "z", "g"]);

// 17. Return a Sorted Array Without Changing the Original Array
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArr = [...arr].sort(function(a,b){
    return a-b;
  })
  console.log(newArr)
  return newArr;
}
nonMutatingSort(globalArray);

// 18. Split a String into an Array Using the split Method
function splitify(str) {
  let newStr = str.split(/\W/g);
  console.log(newStr)
  return newStr;
}
splitify("Hello World,I-am code");

// 19. Combine an Array into a String Using the join Method
function sentensify(str) {
  let newStr = str.split(/\W/g);
  return newStr.join(" ");
}
sentensify("May-the-force-be-with-you");

// 20. Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
  let URLTitle = title.toLowerCase().trim().split(" ");
  return URLTitle.filter(substring => substring !== "").join("-");
}
console.log(urlSlug(" Lord of The  Rings"));

// 21. Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
  return arr.every(val => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);

// 22. Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
  return arr.some(val => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);

// 23. Introduction to Currying and Partial Application
// The arity of a function is the number of arguments it requires
// Currying restructures a function so it takes one argument, then returns another function that takes the next argument
function add(x) {
  return function(y) {
   return function(z) {
     return x + y + z;
   }
  }
}

add(10)(20)(30);

// alternatively, can do:
function add(x) { 
  return y => z => x + y + z;
}
