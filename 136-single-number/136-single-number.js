/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // you can use map to log each numbers apperance
    // if it appears twice you can set the return value to duplicate
    // there should be one mapped entry that returns single
    return nums.reduce((a,b) => a^b)
};