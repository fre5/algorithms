/* === SUM EVEN NUMBER ROWS === *\
Problem : Given an integer, return a sum of the last row of rows of sequenced even numbers, where each row consists
of the input number amount of element(s)

Questions :
- Input validation ? No 
- Negative numbers ? No
- Fractions ? No

Examples :
2 -> total 2
4 6 -> total 10
8 10 12 -> total 30
14 16 18 20 -> total 68

Data structure :
- Input : an integer
- Output : the result integer

Algorithm :
- Declare and initialize rows to an empty array
- Declare and initialize sequence to an integer 2
- Define a for loop : declare and initialize index initializer to 0, 
  will keep running as long as index is smaller or equal to number,
  and index increment by 1 every iteration
  - Declare and initialize row to an empty array
  - Define a while loop that will iterate as long as the row length is smaller than index
    - Push the value of sequence variable to row
    - Increment sequence variable by 2
  - Push the value of row variable to rows
- Declare and initialize total to the value of last element of row, which is a nested array, 
  and invoke a reduce method to it, with accumulator and element as arguments, where in the 
  callback accumulator and element is added together, the 3rd argument is 0 as the initial value
- Return the value of total

Code : */
function sumEvenNumberRows(number) {
  let rows = [];
  let sequence = 2;
  for (let index = 1; index <= number; index += 1) {
    let row = [];
    while (row.length < index) {
      row.push(sequence);
      sequence += 2;
    }
    rows.push(row);
  }
  let total = rows[rows.length - 1].reduce((accumulator, element) => accumulator + element, 0);
  return total;
}

console.log(sumEvenNumberRows(4));