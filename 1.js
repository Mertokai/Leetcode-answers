//We have two solution for twoSum actually we should focus two thing
//in algorithms MEMORY AND SPEED. My first soliton for memmory we will
//use O(1) space O(n**2) time. In second soliton we will use O(n) time and space

//First solution

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

// var twoSum = function (nums, target) {
//   var hashtable = {};
//   for (var i = 0; i < nums.length; i++) {
//     let currentElemet = nums[i],
//       difference = target - currentElemet;
//   }
//   if (hashtable[currentElemet] != undefined) {
//     return [i, hashtable[target - currentElemet]];
//   } else {
//     hashtable[difference] = i;
//   }
//   return -1;
// };
