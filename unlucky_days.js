/*
Problem : given a year as integer, return the number of days of friday the 13 in that year

Examples :
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

Data structure :
- input : an integer
- output : the result integer

Algorithm :
- Declare and initialize a string with a value '


*/

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }



  return thirteenths.map(element => element.getDay()).filter(element => element === 5).length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2