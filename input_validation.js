/*
Problem : Given an str as an input, determine if a string is a valid username based on these rules :
1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

Data structure : 
- Input : a string
- Output : a boolean

Algorithm :
- Check if str input has a length between 4 and 25
- Check if the first character is alphabet
- Check if the characters are alphanumeric plus an underscore
- Check if the end of the str is an underscore
- Return true if all conditions are met

*/

function CodelandUsernameValidation(str) { 
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const NUMERIC = '1234567890';
  const UNDERSCORE = '_';
  const ALL = ALPHABET + NUMERIC + UNDERSCORE;
  if (str.length < 4 || str.length > 25) return false;
  if (!ALPHABET.includes(str[0])) return false;
  if (!str.split('').every(element => ALL.includes(element))) return false;
  if (str[str.length - 1] === UNDERSCORE) return false;
  return true; 

}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));