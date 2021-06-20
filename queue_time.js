//Given an array of wait times and n as number(s) of cashier, get the amount of time all the customers are checked out.
function queueTime(customers, n) {
  let array = [];
  if (n === 1) {
    return customers.reduce((acc, ele) => acc + ele, 0);
  } else if (customers.length <= n) {
    return Math.max(...customers);
  } else {
    while (customers.length > 0) {
      for (let index = 0; index < n; index += 1) {
        let element = customers[0];
        if (array.length < n) {
          array.push(element);
          customers.shift();
        } else {
          array.sort((a, b) => a - b);
          if (element !== undefined) {
            array[0] += element;
          }
          console.log(array);
          
          customers.shift();
        }        
      }
    }
  }
  return Math.max(...array);
}

console.log(queueTime([21,29,42,42,13,10,21,31,30,20,3,40,23,47], 5));
console.log(queueTime([2,2,3,3,4,4], 2));