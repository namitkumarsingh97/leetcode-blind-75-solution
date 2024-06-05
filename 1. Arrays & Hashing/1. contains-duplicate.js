// 217. Contains Duplicate - Easy Level - Topics: Array, Hash Table, Sorting

var containsDuplicate = function (nums) {
  const newSet = new Set(nums);

  if (newSet.size < nums.length) {
    return true;
  } else {
    return false;
  }
};

Input: nums = [1, 2, 3, 1];
Output: true;
