const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const step = 10;

function rotate(nums, k) {
  if (nums.length === 0) return nums;

  const step = k % nums.length;
  for (let j = 0; j < step; j++) {
    nums.unshift(nums.pop());
  }

  return nums;
}

console.log(rotate(array, step));
