function permutations(array) {
  let newArr = [];
  if (array.length === 1) {
    return [array];
  } else if (array.length === 2) {
    return [array, [array[1], array[0]]];
  } else {
    for (let index = 0; index < array.length; index += 1) {
      let extract = [array[index]];
      let remaining = array.slice(0, index).concat(array.slice(index + 1));
      newArr = newArr.concat(permutations(remaining).map(element => extract.concat(element)));
    }
  }
  let convert = [... new Set(newArr.map(element => element.join("")))];
  newArr = convert.map(element => element.split(''));
  return newArr;
}

console.log(permutations([1,2,3,4]));

