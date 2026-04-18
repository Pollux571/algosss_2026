let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

var search = function (nums, target) {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (target < nums[middle]) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};

console.log(search(nums, target));
