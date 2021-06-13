const arr = [1, 2, 3, 7, 3, 5];
const target = 9;

// function twoSum(nums, target) {
//   const arr = [];
//   const length = nums.length;

//   for (let i = 0; i < length - 1; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [];
// }

function twoSum(nums, target) {
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const index = nums.indexOf(target - nums[i], i + 1);

    if (index != -1) {
      return [i, index];
    }
  }

  return [];
}

console.log(twoSum(arr, target));
