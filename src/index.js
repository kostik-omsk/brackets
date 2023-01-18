module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let item of bracketsConfig) {
      if (
        str[i] == item[1] &&
        stack.length &&
        stack[stack.length - 1] == item[0]
      ) {
        stack.pop();
      } else if (str[i] == item[0]) {
        stack.push(item[0]);
      } else if (str[i] == item[1]) {
        return false;
      }
    }
  }
  return stack.length == 0;
};
