function cmp(section1, section2) {
  let arr1 = section1.split(".");
  let arr2 = section2.split(".");
  while (arr1.length !== arr2.length) {
    if (arr1.length > arr2.length) arr2.push('0')
    else if (arr2.length > arr1.length) arr1.push('0')
  }

  console.log(arr1);
  console.log(arr2);

  for (let idx = 0; idx < arr1.length; idx += 1) {
    if (parseInt(arr1[idx], 10) > parseInt(arr2[idx], 10)) return 1;
    else if(parseInt(arr2[idx], 10) > parseInt(arr1[idx], 10)) return -1;
    
  }
  return 0;
}





console.log(cmp( "3", "3.0.0.0" ));//0
console.log(cmp( "1.2.1", "1.2.0" )); //1
console.log(cmp( "3.0.0", "3.1.1" )); //-1