function permutations(string) {
  let array = [];
  if (string.length === 1) {         
    return [string];         
  } else if (string.length === 2) {   
    return [string, string.slice(1).concat(string.slice(0,1))]            
  } else {                         
    for(let index = 0; index < string.length; index += 1) {
      let extract = string.slice(0, index).concat(string.slice(index + 1));
      array = array.concat(permutations(extract).map(element => string[index] + element));
    }
  }
  return [...new Set(array)];
}

console.log(permutations('abcd'));