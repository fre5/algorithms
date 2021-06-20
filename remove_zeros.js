function removeZeros(array) {
  if (array.length === 1 || array.length === 0) {
    return array;
  }

  let counter = 0;

  array.forEach(element => {
    if (element === 0 || element === '0') {
      counter += 1;
    }
  });

  while (true) {
    array = swapZero(array);
    if (zeroChecker(array, counter)) {
      return array;
    }
  }
}

function swapZero(array) {
  while (true) {
    for (let index = 0; index < array.length; index += 1) {
      if ((array[index] === 0 || array[index] === '0') && 
         (array[index + 1] === 0 || array[index + 1] === '0')) {
        continue;
      } else if ((array[index] === 0 || array[index] === '0') && 
         (array[index + 1] !== 0 || array[index + 1] !== '0')) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        return array;
      } 
    } 
  }
}

function zeroChecker(array, counter) {
  let zeros = 0;
  for (let index = array.length - counter; index < array.length; index += 1) {
    if (array[index] === 0 || array[index] === '0') {
      zeros += 1;
    }
  }
  return zeros === counter;
}


console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
//[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];


