//just an old school recursive fibonacci 
function fibonacci(index) {
  if (index < 3) {
    return 1;
  } else {
    return fibonacci(index - 1) + fibonacci(index - 2);
  }
}

//hate recursive function? this one has none
function nonRecursionFibonacci(index) {
  
  let array = [];
  for (let i = 0; i < index; i += 1) {
    if (i < 2) {
      array.push(1);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }
  return array[array.length - 1];
}

//the fast and furious type 
function memoizationFibonacci(index) {
  let object = {};
  for (let i = 1; i <= index; i += 1) {
    if (i < 3) {
      object[i] = 1;
    } else {
      object[i] = object[i - 1] + object[i - 2];
    }
  }
  return object[index];
}


function fibonacciArray(index) {
  const rlSync = require('readline-sync');
  let selection;
  while (selection > 3 && selection < 1) {
    console.log('Choose a Fibonacci function :');
    console.log('1. Recursive ');
    console.log('2. Non-recursive');
    console.log('3. Memoization');
    console.log('=================================');
    selection = rlSync.question('Select (1 - 3) ');
  }
  let array = [];
  while (index > 0) {
    console.time("timer");
    if (selection === 1) array.unshift(fibonacci(index));
    if (selection === 2) array.unshift(nonRecursionFibonacci(index));
    if (selection === 3) array.unshift(memoizationFibonacci(index));
    console.timeEnd("timer");
    index -= 1;
  }
  return array;

}

console.log(memoizationFibonacci(10));
