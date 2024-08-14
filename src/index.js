module.exports = function check(str, bracketsConfig) {
  const splitStr = str.split('');
  let stack = [];

  const bracketMap = {}
  for (const [open, close] of bracketsConfig) {
    bracketMap[open] = close;
  }

  for(let i = 0; i < splitStr.length; i++) {
    const currentChar = splitStr[i];

    if (bracketsMap[currentChar] {
        if (currentChar === bracketsMap[currentChar] && stack.includes(currentChar)) {
          stack.pop(); 
        } else {
          stack.push(currentChar);
        }
    } else {
      const lastOpen = stack.pop();
      if (bracketsMap[lastOpen] !== currentChar) {
        return false;
      }
    }          
  }
return stack.length === 0;
};
