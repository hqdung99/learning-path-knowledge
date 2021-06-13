const arr = [1, 2, 3, 4, 5, 6, 1, 3, 2, 6, 5];

// function singleNumber(nums) {
//   const arr = [];

//   const length = nums.length;
//   for (let i = 0; i < length; i++) {
//     const index = arr.indexOf(nums[i]);

//     if (index === -1) {
//       arr.push(nums[i]);
//     } else {
//       arr.splice(index, 1);
//     }
//   }

//   return arr[0];
// }

function singleNumber(nums) {
  const arr = [];
  const length = nums.length;
  var sum = 0;
  var sum1 = 0;

  for (let i = 0; i < length; i++) {
    sum1 += nums[i];

    if (!arr.includes(nums[i])) {
      sum += nums[i];
      arr.push(nums[i]);
    }
  }

  return 2 * sum - sum1;
}

console.log(singleNumber(arr));
