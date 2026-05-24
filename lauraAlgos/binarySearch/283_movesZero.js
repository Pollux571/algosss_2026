let nums = [0, 1, 0, 3, 12];
var moveZeroes = function (nums) {
      let j = 0;

      for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                  [nums[i], nums[j]] = [nums[j], nums[i]];
                  j++;
            }
      }

      return console.log(nums);
};

moveZeroes(nums);
