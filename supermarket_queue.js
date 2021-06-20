function queueTime(customers, n) {
  let arr = [];
  if (n === 1) {
    return customers.reduce((acc, ele) => acc + ele, 0);
  } else if (customers.length <= n) {
    return customers.sort((a, b) => b - a)[0];
  } else {
    while (customers.length > 0) {
      for (let index = 0; index < n; index += 1) {
        let customer = customers[0];
        if (arr.length < n) {
          arr.push(customer);
          customers.shift();
        } else {
          arr.sort((a, b) => a - b);
          if (customer !== undefined) {
            arr[0] += customer;
          }
          customers.shift();
        }
      }
    }
  }
  return arr.sort((a, b) => b - a)[0];
}