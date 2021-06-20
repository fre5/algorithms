/*
Problem : Given an array of numbers that represents customers check out waiting time write a function 
that calculates the total time required to finish checkout based on the number of available till
Rules :
- there's only one queue serving multiple tils
- the order of the queue never changes
- the front person in the queue will proceed to a till as soon as it becomes free

Question : 
- Is there any input validation?

Data structure :
Input : 
- 1st argument : an array of customer checkout waiting time
- 2nd argument : number of till 
Output :
- number of total waiting time 

Algorithm :
- declare and initialize a till variable, assign it to an empty object
- define a while statement that will continue looping until customers array length is equal to 0
  - define a loop statement, declare its index variable to 1, iterate it until index is equal to n,
    increment index by 1
    - if till object at index key === undefined, assign 0 to till at index key 
    - populate till object with the index key property, assign a value of 0 to each key

Code :
*/

function queueTime(customers, registers) {
  let arr = [];

  for(let i = 0; i < registers; i++) {
    arr[i] = 0;
  }
  for(let i = 0; i < customers.length; i++) {
    arr[0] += customers[i];
    console.log(arr);
    arr.sort((a, b) => a - b);
    console.log(arr);
  }

  return arr[arr.length - 1];
}

//console.log(queueTime([], 1));
//console.log(queueTime([1,2,3,4]), 1);
console.log(queueTime([2,2,3,3,4,4], 2));
//console.log(queueTime([1,2,3,4,5], 100));
//console.log(queueTime([10,2,3,3], 2));

