let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

function bubbleSort(array) {
  let count = 0;
  while (count < array.length - 1) {
    for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        let movingElement = array.splice(index, 1);
        array.splice(index + 1, 0, movingElement[0]);
        count = 0;
      } else {
        count += 1;
      }
    }
  }
  return array;
}
