// 1. Two Sum - Easy Level - Topics: Array, Hash Table

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1];

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i != j) {
        return [i, j];
      }
    }
  }
};
