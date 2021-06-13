const arr = [0, 1, 2, 0, 3, 4, 0, 4, 5, 0, 0, 9];

function moveZeroes(nums) {
  const length = nums.length;
  var count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) {
      count++;
      nums.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
}

moveZeroes(arr);
console.log(arr);
