function compareArrayElements(array1, array2) {
  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] === array2[index]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(compareArrayElements([1,2,3,4,5,6], [1,2,3,4,9,6]));