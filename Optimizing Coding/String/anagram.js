const str1 = "anagram";
const str2 = "nagamat";

function isAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  }

  const objListChar = {};
  const length = s.length;

  for (let i = 0; i < length; i++) {
    if (objListChar.hasOwnProperty(s[i])) {
      objListChar[s[i]] += 1;
    } else {
      objListChar[s[i]] = 1;
    }
  }

  for (let i = 0; i < length; i++) {
    if (objListChar.hasOwnProperty(t[i])) {
      objListChar[t[i]] -= 1;
    }
  }

  const arrKeys = Object.keys(objListChar);
  const keysLength = arrKeys.length;
  for (let i = 0; i < keysLength; i++) {
    if (objListChar[arrKeys[i]] != 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram(str1, str2));
