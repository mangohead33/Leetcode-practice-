/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // we want to sort the output array in an ascending order
    // however if there are negative numbers in nums, they must be rearranged in the array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    return nums.sort((a,b) => a - b)
};