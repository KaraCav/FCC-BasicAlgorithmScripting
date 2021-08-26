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

// 10. Change the Prototype to a New Object
// Instead of adding new properties to a prototype individually, it's more efficient  
// to set the prototype to a new object that already contains the properties.
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs : 4,
  eat : function() {
    console.log("dog eats")
  },
  describe: function() {
    console.log("dog is brown")
  }
};

// 11. Understand Where an Object’s Prototype Comes From
Dog.prototype.isPrototypeOf(beagle); // beagle is of prototype Dog
// Dog is the supertype for beagle, while beagle is the subtype

// 12. Create Animal superset
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// 13. Inherit Behaviors from a Supertype
// Starting with this code:
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
// Step 1- Make an instance of the Supertype
let animal = new Animal();
// this way of creating a supertype has disadvantages, so instead we'll use:
let animal = Object.create(Animal.prototype);
// Use Object.create to make two instances of Animal named duck and beagle
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
console.log(duck.eat())
console.log(beagle instanceof Animal);

// Step 2- Set the Child's Prototype to an Instance of the Parent
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

// Number 14- Reset an Inherited Constructor Property
// Instantiate an actual instance of an Object like this:
let duck = new Bird();
let beagle = new Dog();
// Then change the prototype:
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

// 15. Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() { console.log("Woof!"); };

let beagle = new Dog();

// 16. Use a Mixin to Add Common Behavior Between Unrelated Objects
// Inheritance isn't great for unrelated objects like Bird and Airplane- use a mixin instead
let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(plane); // this adds the functionality of the flyMixin, to create plane.fly()
// Create a glide mixin and give the functionality to both birds and boats:
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Look Ma, I'm gliding!")
  }
}
glideMixin(bird);
glideMixin(boat);

// 17. Use Closure to Protect Properties Within an Object
function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  }
}

// 18. Understand the Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("A cozy nest is ready");
})();

// 19. Create a Module with Mixins
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
