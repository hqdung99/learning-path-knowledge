const arr1 = [1, 2, 3, 4, 5, 5, 6, 2, 3];
const arr2 = [1, 4, 5, 9, 6];

function intersect(nums1, nums2) {
  const arr = [];

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const length1 = nums1.length;
  const length2 = nums2.length;
  var index2 = 0;

  for (let i = 0; i < length1; i++) {
    for (let j = index2; j < length2; j++) {
      if (nums1[i] === nums2[j]) {
        arr.push(nums1[i]);
        index2 = j + 1;
        break;
      }
    }
  }

  return arr;
}

console.log(intersect(arr1, arr2));
