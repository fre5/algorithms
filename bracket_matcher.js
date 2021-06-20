//Given a string of parentheses, return a boolean true if all the bracket pairs are matched, and false if there are backward pairs or non matching opening or closing parenthesis
function bracketMatcher(string) {
  while (string.indexOf('()') !== -1) {
    let fullBracketIndex = string.indexOf('()');
    if (fullBracketIndex === 0) {
      string = string.slice(2);
    } else {
      string = string.slice(0, fullBracketIndex) + string.slice(fullBracketIndex + 2);
    }
  }
  return string.length === 0 ? true : false;
}

console.log(bracketMatcher('())()(()'));