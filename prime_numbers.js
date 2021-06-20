/*
Problem : given an n number, write a function that returns an array with n amount of prime numbers

Examples : 
- prime(3) => [2, 3, 5]
- prime(7) => [2, 3, 5, 7, 11, 13, 17]

Data structure :
input : a number
output : an array of prime numbers


Algorithm :

- write a helper function that takes a number argument and returns true if the argument is a prime number and false if the number is not
- declare a counter variable, initialize it with a value of number - 1
- define a while loop that will keep looping until the counter variable is equal to 1
  - check if the remainder of number and counter is equal to zero :
    -if the condition evaluates to true, return false
    -if the condition evaluates to false, decrement counter
- if the while loop condition expression evaluates to false, continue execution 
- return true


- declare an array variable, initialize it with an empty array
- define a while loop that will continue looping until the length of array is equal to number
- declare an iterator variable and initialize it to the number value of 2
- check the iterator by passing it as an argument to isPrime :
  - if it evaluates to true, push it to the array
  - increment iterator by 1
- after the loop exits, return array
*/

function prime(number) { // 2, 3, 5, 7
  let array = [];
  let iterator = 2;
  while (array.length < number) {
    if (isPrime(iterator)) {
      array.push(iterator);
    }
    iterator += 1;
  }
  return array;
}

function isPrime(number) {
  let counter = number - 1;
  while (counter > 1) {
    if (number % counter === 0) {
      return false;
    } else {
      counter -= 1;
    }
  }
  return true;
}


console.log(prime(38));