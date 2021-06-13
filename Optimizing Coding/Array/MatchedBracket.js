// {<[]>(()())}()
// {[{}}]

const str = "{<[]>(()())}()";
const checkPair = {
  "(": ")",
  "[": "]",
  "<": ">",
  "{": "}",
};
const openBrackets = "[{<(";
const closeBrackets = ")]}>";

function checkMatcheckedBrackets(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    }
    if (closeBrackets.includes(str[i])) {
      if (stack.length <= 0 || checkPair[stack[stack.length - 1]] !== str[i]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

console.log(checkMatcheckedBrackets(str));
