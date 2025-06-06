// console.log("Hello Tuesday!");

// [SECTION] Objects
	// An object is a data type that is used to represent real world objects.
	// It is a collection of related data and/or function.
	// Information is stored in objects are represented by a "key:value" pair.
	// A "key" is also mostly referred to as a "property" of an object.

// Creating Objects using object literals: {};
	// In JavaScript, we can create objects using {}. This is called object literals.
	// This creates/declares an object and also initializes/assigns it's properties upon creation.
		// Syntax:
			// let/const objectName = { key: value };

let cellphone = {
	name: 'Nokia 3210',
	manufactureData: 1999,
	color: "Blue"
};

console.log("Result from creating object using object literals:");
console.log(cellphone);
console.log(typeof cellphone);

// Creating of objects using a constructor function:
	// Syntax:
		/*
			function(keyA, keyB) {
				this.keyA = keyA;
				this.keyB = keyB;
			}

		*/
	// The "this" keyword assigns values from a constructor functions parameter to a new objects properties.

function Laptop(name, manufactureData) {
	this.name = name;
	this.manufactureData = manufactureData;
}

// Instantiation - process of creating an instance out of a constructor function.

let laptop = new Laptop("Lenovo", 2008);

console.log(laptop);

let secondLaptop = new Laptop("Acer", 2010);
console.log(secondLaptop);

let oldLaptop = Laptop('Portal R2E CCMC', 1980);
console.log('Result from creating objects without the new keyword');
console.log(oldLaptop);

let myLaptop = new Laptop('Macbook Air', 2020);
console.log('Result from creating objects using object constructors:');
console.log(myLaptop);

// Accessing object properties
// using "dot or ." notation

console.log('Result from dot notation: ' + myLaptop.name);
console.log('Result from dot notation: ' + myLaptop.manufactureData);

// Initializing/Adding/Deleting/Reassigning Object Properties
/*
	- Like any other variables in JavaScript, objects may have their properties initialized/added after the object was created/declared.

	- This is useful for times when an objects properties are undetermined at the time of creating them.
*/

let car = {};

console.log(car);
// Initializing/Adding object properties using dot notation.

car.name = 'Honda Civic';
// car.year = '2011';
console.log('Result from adding properties using dot notation:');
console.log(car);

// Object methods
// - Just like real objects can do action (like a car it can start), JavaScript objects can perform actions using methods.
// Methods are functions within an objects. They can be accessed and invoked from an object.

let person = {
	name: "John",
	talk: function() {
		console.log('Hello my name is ' + this.name);
	}
};

person.talk();

// Adding methods to objects
// This is not the best practice
person.walk = function() {
	console.log(this.name + ' walked 25 steps forward.');
}
person.walk();

let friend = {
	firstName: 'Joe',
	lastName: 'Smith',
	address: {
		city:'Austin',
		country: 'Texas'
	},
	emails:['joe@mail.com', 'joesmith@email.xyz'],
	introduce: function() {
		console.log('Hello my name is ' + this.firstName + ' ' + this.lastName)
	}
};

friend.introduce();

// Object methods can also receive arguments much like regular functions.

friend.greet = function(object) {
	console.log('Hi, ' + object.name + '!');
}

friend.greet(person);

// Real World Application of Objects
/*
	Scenario
1. We would like to create a game (Dungeon Quest) that have several monsters and an adventurer.
2. Every monster would have the same set of stats, properties, and functions.
*/

// 1. Let's create an adventurer object that can attack a monster.

let adventurer = {
	name: 'Arin the Brave',
	level: 10,
	health: 100,
	attack: 20,
	// This is a method to attack a monster
	attackMonster: function(monster) {
		// let's use the return statement to return the attack message.
		return this.name + ' attacked ' + monster.name;
	}
}

// 2. Let's create an object constructor for monster that can attack the adventurer. We will use the constructor to create multiple instances of the same monster type.
// Object Constructor.
function Monster(name, level) {
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;

	// a method to attack the adventurer
	this.attackAdventurer = function(adventurer) {
		return this.name + ' attacked ' + adventurer.name;
	}
}

// Create a new instance of the "Monster" object
let fenrir = new Monster("Fenrir", 30);
let slime = new Monster("Slime", 10);

// How to make the adventurer attack the monsters
adventurer.attackMonster(fenrir);
adventurer.attackMonster(slime);

// Using the console in the browser. Call the method of the adventurer to attack the monster.
console.log(adventurer.attackMonster(fenrir));
console.log(adventurer.attackMonster(slime));

fenrir.attackAdventurer(adventurer);
console.log(fenrir.attackAdventurer(adventurer));
slime.attackAdventurer(adventurer);
console.log(slime.attackAdventurer(adventurer));