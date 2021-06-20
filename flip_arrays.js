function flipArrays(array1, array2) {

  for (let index = 0; index < array1.length; index += 1) {
    [array1[index], array2[index]] = [array2[index], array1[index]];
  }
  console.log(array1, array2)
}

console.log(flipArrays(['a', 'b', 'c', 'd'], [1, 2, 3, 4]))