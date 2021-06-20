
/*
function recursiveFibonacci(number) {
  if (number < 2) {
    return 1;
  } else {
    return recursiveFibonacci(number - 1) + recursive(number - 2);
  }  
}


function fibonacci(number) {
  let array = [];
  for (let index = 0; index <= number; index += 1) {
    if (index < 2) {
      array.push(1);
    } else {
      array.push(array[array.length - 1] + array[array.length - 2]);
    }
  }
  return array;
}

console.log(fibonacci(7));



function fibonacciArray(number) {
  let array = [];
  
  for (let index = 0; index <= number; index +=1) {
    array.push(recursiveFibonacci(index));
  }
  return array;
}

console.log(fibonacciArray(7));

Algorithm :
- declare an empty object
- define a for loop, starts from 0, smaller than input, increment 1:
  - if index is smaller than 2 assign obj[index] to 1
  - else add obj[index - 1] to obj[index - 2]
return object[input number]

*/

function fibonacciMemoization(number) {
	let object = {};
	for (let index = 1; index <= number; index += 1) {
		if (index <= 2) {
			object[index] = 1;
		} else {
			object[index] = object[index - 1] + object[index - 2];
		}
	}
	return object[number];
}

console.log(fibonacciMemoization(18));