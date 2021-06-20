/*

Problem Description
Write a function that will return the count of distinct case-insensitive 
alphabetic characters and numeric digits that occur more than once in the 
input string. 

The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.


Test Cases
console.log(duplicateCount("")) == 0
console.log(duplicateCount("abcde")) == 0
console.log(duplicateCount("abcdeaa")) == 1
console.log(duplicateCount("abcdeaB")) == 2
console.log(duplicateCount("Indivisibilities")) == 2


Input : string
Output : the result as an integer

Rules : 
- case-insensitive
- can be assumed that input only contains alphabets and numerical digits

Algorithm :
- create an empty object
- split the string into an array
- iterate the array and check if the elements is included in the array 
  - if an element is included, call the property key and give a value of 1

Code :
*/
function duplicateCount(string) {
  let object = {};
  let array = string.split('');
  for (let index = 0; index < array.length; index += 1) {
    object[array[index]] = object[array[index]] + 1 || 1;
  }
  let moreThanOnce = Object.keys(object).filter(element => object[element] > 1);
  return moreThanOnce.length;
}


console.log(duplicateCount("")) == 0
console.log(duplicateCount("abcde")) == 0
console.log(duplicateCount("abcdeaa")) == 1
console.log(duplicateCount("abcdeaB")) == 2
console.log(duplicateCount("Indivisibilities")) == 2