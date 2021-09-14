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
