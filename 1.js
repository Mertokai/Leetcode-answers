
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] == target) {
        return [i, k];
      }
    }
  }
};
//Runtime
// 107 ms
// Beats
// 57.11%
// Memory
// 41.7 MB
// Beats
// 96.94%

