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

// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

let object = {
  username: "peter",
  password: "123"
};

// 2. Create an array which contains the object you have made above and name the array "database".

let database = [object];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline"

let newsfeed = [
  {
    username: "tim",
    timeline: "fun"
  },
  {
    username: "sally",
    timeline: "cool"
  },
  {
    username: "mitch",
    timeline: "awesome"
  }
];

// Exercise: Build Facebook

var database1 = [
  {
    username: "andrei",
    password: "supersecret"
  }
];

var newsFeed1 = [
  {
    username: "Bobby",
    timeline: "Learning is fun!"
  },
  {
    username: "Sally",
    timeline: "Javascript is so cool!"
  }
];

const userNamePrompt = prompt("What's your username?");
const passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database1[0].username && pass === database1[0].password) {
    console.log(newsFeed1);
  } else {
    alert("Sorry, wrong username and password");
  }
}

signIn(userNamePrompt, passwordPrompt);
