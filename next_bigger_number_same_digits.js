function nextBigger(n) {
  let array = n.toString().split('');
  let index = array.length - 1;

  if (index < 1) return -1;

  while (index > 0) {
    if (array[index] > array[index - 1]) break;
    index -= 1;
  }
  
  if (index < 1) return -1;

  let extractNumber = array.splice(index).sort();
  let subIndex;
  
  for (let index = 0; index < extractNumber.length; index += 1) {
    if (array[array.length - 1] < extractNumber[index]) {
      subIndex = index;
      break;
    }
  }

  let movingElement = extractNumber.splice(subIndex, 1);
  extractNumber.push(array.pop());
  extractNumber.sort();
  
  return parseInt(array.concat(movingElement).concat(extractNumber).join(''));
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(414));
console.log(nextBigger(144));