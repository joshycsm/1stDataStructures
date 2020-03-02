// Array Practice

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();

array.sort();

array.push("Kiwi");

console.log(array);

array.splice(0, 1);

array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

let oranges = array2[1][1][0];

console.log("array2", oranges);

console.log(array);

// Object Notes

var user = {
  name: "John",
  age: 34,
  hobby: "soccer",
  isMarried: false
};

user.favoriteFood = "spinach";
user.isMarried = true;
user.spells = ["abrakadabra", "shazam", "boo"];
user.shout = function() {
  console.log("shouting!");
};

var user2 = {};

// push, pop, concat
// var list = ["apple", "orange", "banana"];

var list2 = [];
var list = [
  {
    username: "andy",
    password: "secret"
  },
  {
    username: "peter",
    password: "123"
  }
];

var emptyObject = {};
// Vs.
var nullObject = null;

emptyObject.name = "jim";
// cannot set propery 'name' of null at script.js 65
// nullObject.name = "jim";

// Object Practice
