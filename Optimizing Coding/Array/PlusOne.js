const num1 = [1, 2, 3];
const num2 = [9, 9, 9];

function plusOne(digits) {
  var memo = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 > 9) {
      digits[i] = 0;
      memo = true;
    } else {
      digits[i] = digits[i] + 1;
      memo = false;
      break;
    }
  }

  if (memo) {
    digits.unshift(1);
  }

  return digits;
}

console.log(plusOne(num2));
