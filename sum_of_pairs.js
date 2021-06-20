function sumPairs(ints, s) {
  const object = {};
  
  for (let index = 0; index < ints.length; index += 1) {
    
    const firstNumber = ints[index];            
    const secondNumber = s - firstNumber;       
    
    if (object[secondNumber] !== undefined) {   
      return [secondNumber, firstNumber]
    }
    
    if (object[firstNumber] === undefined) {
      console.log(object);
      object[firstNumber] = index;
    }   
  }
  
  return undefined;
}

console.log(sumPairs([10, 8, 5, 2, 3, 7, 5], 10));