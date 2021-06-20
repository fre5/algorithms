/*

Test casses:
- 2 servers, requests : [1, 5, 6], output : 1
- 3 servers, requests : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], output : 

2 servers :
1 to 2
1st server can process 1 to 2 * 1 => 1, 2
2nd server can process 1 to 2 * 2 => 1, 2, 3, 4
3rd server can process 1 to 2 * 3 => 1, 2, 3, 4, 5, 6

Date structure: 
- input : an integer and an array
- output : the result integer

Algorithm
- create a variable counter, initialize to the value of 0
- create a for loop, that its index starts from 0, iterates until index is equal to server, and index increment by 1 :

Code :
*/

function processingRequests(servers, requests) {
  let counter = 0;
  for (let index = 1; index <= servers; index += 1) {
    let serverProcess = index * 2;
    let array = []; 
    while(serverProcess > 0 ) {
      array.push(serverProcess);
      serverProcess -= 1;
    }
    let length = requests.length;
    let element = requests.find(element => array.includes(element));
    if (element !== undefined) {
      requests.splice(requests.indexOf(element), 1);
    }
    if (requests.length !== length) {
      counter += 1;
    }
  }
  return counter;
}

console.log(processingRequests(10,[1, 2, 3, 5, 7, 11, 13, 15, 19, 22, 27, 30, 2000]));