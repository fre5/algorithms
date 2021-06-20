//Demonstrate how a function without the parentheses can be used as a callback function to an argument
function myFunc(x) {
  return x * 2;
}

let array = [1,2,3,4,5,6];

let newArray = array.map(myFunc);

console.log(newArray);