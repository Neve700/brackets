module.exports = function check(str, bracketsConfig) {
  const splitStr = str.split('');
  let stack = [];

  const bracketMap = {};
  for (const [open, close] of bracketsConfig) {
    bracketMap[open] = close;
  }

  for (let i = 0; i < splitStr.length; i++) {
    const currentChar = splitStr[i];

    if (bracketMap[currentChar]) { 
      if (currentChar === bracketMap[currentChar] && stack.includes(currentChar)) {
        stack.pop(); 
      } else {
        stack.push(currentChar);
      }
    } else {
      const lastOpen = stack.pop();
      if (bracketMap[lastOpen] !== currentChar) {
        return false;
      }
    }      
  }
  return stack.length === 0;
}
