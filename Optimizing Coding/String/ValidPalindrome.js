const str = "A man, a plan, a canal: Panamaa";

function isPalindrome(s) {
  var lowerCase = s.toLowerCase();
  const length = lowerCase.length;
  var str = "";
  for (let i = 0; i < length; i++) {
    if (
      (lowerCase[i] >= "a" && lowerCase[i] <= "z") ||
      (lowerCase[i] >= "0" && lowerCase[i] <= "9")
    ) {
      str += lowerCase[i];
    }
  }
  const palindromeLength = str.length;
  const axis = Math.round(palindromeLength / 2);

  for (let i = 0; i < axis; i++) {
    if (str[i] !== str[palindromeLength - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("0P"));
