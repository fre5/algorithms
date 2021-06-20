/*
Problem :
- given an array and a n represents a total value, return true if two elements of the array can sum up to a value of n

*/

function hashTable(array, n) {
  let obj = {};
  for (let index = 0; index < array.length; index += 1) {
    if (obj[array[index]] === undefined) {
      obj[array[index]] = obj[array[index]] + 1 || 1;
    }

    let remainder = n - array[index];
    if (obj[remainder] !== undefined) {
      return true;
    }
  }
  return false;
}


console.log(hashTable([8, 2, 9, 5, 19, 1], 12));