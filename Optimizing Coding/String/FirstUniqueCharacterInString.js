const str = "leetcode";

function firstUniqChar(s) {
  const mapList = {};
  for (let i = 0; i < s.length; i++) {
    if (mapList.hasOwnProperty(s[i])) {
      mapList[s[i]] += 1;
    } else {
      mapList[s[i]] = 1;
    }
  }

  const arrKeys = Object.keys(mapList);
  console.log(arrKeys);
  for (let i = 0; i < arrKeys.length; i++) {
    if (mapList[arrKeys[i]] === 1) {
      return s.indexOf(arrKeys[i]);
    }
  }

  return -1;
}

console.log(firstUniqChar(str));
