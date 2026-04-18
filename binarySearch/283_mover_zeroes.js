var moveZeroes = function (nums) {
  let countZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      countZero++;
      i--;
    }
  }

  while (countZero > 0) {
    nums.push(0);
    countZero--;
  }

  return nums;
};
