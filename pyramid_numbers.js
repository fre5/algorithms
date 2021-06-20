/*
Problem : Given a number, return a sum of the last row from rows of sequenced numbers, where the amount of number(s)
is equal to the nth row with each numbers incremented by 1

Question :
- Is there any input validation?
- Can an input be a float?


Examples : 

1 - 1               => sum is 1
2 - 2 3             => sum is 5
3 - 4 5 6           => sum is 15
4 - 7 8 9 10        => sum is 34
5 - 11 12 13 14 15  => sum is 65 

Data structure :
- Input : a number
- Output : the sum of the number row


[[1], [2, 3], [4, 5, 6], ]

Algorithm :
- Declare a variable named rows, initialize and assign it to the value of an empty array, this will be populated with the array with nested arrays of the sequence numbers
- Declare and initialize a variable called sequence, the value will be used to populate the nested arrays
- Define a for loop : 
  - Declare the initializer variable index and assign the value 0
  - Iterate loop as long as index is smaller the input argument, number
  - Increment index by 1 each iteration
  - Declare a local variable row, initialize it to the value of an empty array
  - Define a while loop, with condition : length of row is smaller or equal to index variable :
    - Push the value of sequence to row
    - Increment sequence by 1
  - Push the value of row to rows
- Return the sum of the last nested array element


Code :

*/
function pyramidNumber(number) {
  let rows = [];
  let sequence = 1;
  for (let index = 0; index < number; index += 1) {
    let row = [];
    while (row.length <= index) {
      row.push(sequence);
      sequence += 1;
    }
    rows.push(row);
  }
  return rows[rows.length - 1].reduce((accumulator, element) => accumulator + element, 0);
}

console.log(pyramidNumber(5));




