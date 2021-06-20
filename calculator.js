//Given a string of an order of calculation, return the result value of the calculation
function evaluate (string) {
  let array = string.split(' ').map(element => !isNaN(parseInt(element, 10)) ? parseInt(element, 10) : element);
  while (array.length > 1) {
    while (array.includes('/') || array.includes('*')) {
      let sign = array.find(element => element === '/' || element === '*');
      let index = array.indexOf(sign);
      let operate = calc(array[index - 1], array[index + 1], sign);
      array.splice(index - 1, 3, operate);
    }
    while (array.includes('+') || array.includes('-')) {
      let sign = array.find(element => element === '+' || element === '-');
      let index = array.indexOf(sign);
      let operate = calc(array[index - 1], array[index + 1], sign);
      array.splice(index - 1, 3, operate);
    }
  }
  return array[0];
};

function calc(operand1, operand2, sign) {
  switch (sign) {
    case '/' : 
      return operand1 / operand2;
    case '*' : 
      return operand1 * operand2;
    case '+' : 
      return operand1 + operand2;
    case '-' : 
      return operand1 - operand2;
  }
}
console.log(evaluate('2 - 3 - 4'));