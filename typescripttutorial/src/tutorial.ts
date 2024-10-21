// filter 
//: Filters an array based on a condition and returns a new array with only the elements that meet the condition.

const numbers = [1, 2, 3, 4, 5, 6];
// filtering
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// map
//: Transforms each element of an array based on a function and returns a new array with the transformed values.
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// forEach
//: Calls a function on each element of an array, but does not return a new array.
numbers.forEach((num) => console.log(num));


// Reduce
//: Applies a function to each element of an array, accumulating a value that is returned as the result
const sum = numbers.reduce((acc, num) => acc + num, 0,);
console.log(sum);
