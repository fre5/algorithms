let arr = [2,5,3,5,6,4,3,5,24,54,3,5,2,767,2,3];
let idx = 0;

while (idx !== arr.length) {
  if (arr[idx] > arr[idx+1]) {
    [arr[idx], arr[idx+1]] = [arr[idx+1], arr[idx]];
    idx = 0;
  }
  idx += 1;
}

console.log(arr);



