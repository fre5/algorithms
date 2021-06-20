function QuestionsMarks(str) { 
  let ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let newString = str.split('').filter(element => {
    element = element.toLowerCase();
    if (!ALPHABET.includes(element)) {
      return element;
    }
  }).join('');
  console.log(newString);
  for (let index = 0; index < newString.length; index += 1) {
    if ((newString[index] === '?' && newString[index + 1] === '?') && (newString[index + 2] === '?' && newString[index + 3] !== '?')) {
      if (newString[index - 1] !== '?' && (Number(newString[index + 3]) + Number(newString[index - 1]) === 10)) {
        return true;
      }
    }
  return false; 
  }
} 
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));
