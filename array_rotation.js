/*
Problem : write a function that rotates an array by moving the first element to the end of the array
Rules : 
- can't modify the original array
- if input is not array, return undefined
- if input is an empty array, return an empty array

Examples :

Data structure :
- input : array
- output : array or undefined

Algorithm :
- Declare and initialize a variable newArray, and assign it to the value of the input array with .slice() method invoked to it
- Define an if statement with a condition if the input array is not an array then return undefined
- Define an if statement with a condition if inputArray length is zero, then return an empty array
- Declare and initialize a variable movingNumber and assign it to the value of newArray with .shift method invoked to it
- Return the value of newArray and push movingNumber to newArray

Code :
*/

function rotateArray(inputArray) {
  let newArray = inputArray.slice();

  if (!Array.isArray(inputArray)) return undefined;
  if (inputArray.length === 0) return [];

  let movingNumber = newArray.shift();

  newArray.push(movingNumber);
  return newArray;
  
}

console.log(rotateArray([]));