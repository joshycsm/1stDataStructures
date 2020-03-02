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
