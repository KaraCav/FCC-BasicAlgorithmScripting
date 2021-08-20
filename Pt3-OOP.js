// #1- Create a Method on an Object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() { return "This dog has " + dog.numLegs + " legs"}
};

// 2. Make Code More Reusable with the this Keyword
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

// 3. Define a Constructor Function
function Dog() {
  this.name = "Fido",
  this.numLegs = 4
}

// 3B. Create a new Object
let hound = new Dog();

// 4. Create a Constructor that Accepts Parameters
function Dog(name, numLegs) {
  this.name = name,
  this.numLegs = numlegs
}

// 5. Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);
myHouse instanceof House; // true

// 6. Understand Own Properties- name and numLegs are called 'own properties', 
// because they are defined directly on the instance object
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for(let prop in canary) {
  if(canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

// 7. Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

// 8. Iterate Over All Properties
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];

for(let prop in beagle) {
  if(beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
  else {
    prototypeProps.push(prop);
  }
}

// 9. Understand the Constructor Property
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
