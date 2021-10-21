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
