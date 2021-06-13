// longest substring - longest subarray
// longest increase aray (contiguous - and not contiguous)

const str1 = "abcdefghijkbcdtre";
const str2 = "fseabcdtrewws";

function findLongestSubstring(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    return "";
  }
  let longStr = str1.length > str2.length ? str1 : str2;
  let shortStr = str1.length < str2.length ? str1 : str2;
  
  const arrRepeat = [];
  if (longStr.includes(shortStr[0])) {
    arrRepeat.push(1);
  } else {
    arrRepeat.push(0);
  }
  for(let i = 1; i < shortStr.length; i++) {
    if (longStr.includes(shortStr[i])) {
      let j;
      for(j = arrRepeat[i - 1]; j > 0; j--) {
        const subStr = shortStr.substr(i - j, j + 1);
        if (longStr.includes(subStr)) {
          console.log(subStr);
          arrRepeat.push(subStr.length);
          break;
        }
      }
      if (j === 0) {
        arrRepeat.push(1);
      }
    } else {
      arrRepeat.push(0);
    }
  }
  console.log(arrRepeat);
}

console.log(findLongestSubstring(str1, str2));
