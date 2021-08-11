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
