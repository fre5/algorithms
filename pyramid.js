function pyramid(number) {
  for (let index = 0; index < number; index += 1) {
    console.log('X'.repeat(index + 1));
  }
  return;
}
console.log(pyramid(9));