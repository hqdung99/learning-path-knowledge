const number = -12345000;

function reverse(x) {
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;
  if (x < min || x > max) {
    return 0;
  }
  var negative = false;
  if (x < 0) {
    negative = true;
  }
  var newX = x;
  if (negative) {
    newX = -x;
  }
  const arrNumber = newX.toString().split("");
  while (arrNumber[arrNumber.length - 1] === "0") {
    arrNumber.pop();
  }
  const reverseArrNumber = arrNumber.reverse();
  const reverseNumber = arrNumber.join("");

  if (negative) {
    return -reverseNumber > min ? -reverseNumber : 0;
  }
  return reverseNumber < max ? reverseNumber : 0;
}

console.log(reverse(number));
