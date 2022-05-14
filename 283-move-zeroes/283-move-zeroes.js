/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // input an array of nums
    // modify array so all 0s are at the end
    // method 1; locate indexes of all 0s
    // now check to see if those indexes are a) ascending order and b) they match with the end indexes
    let arrSize = nums.length;
    for (let i = 0; i < arrSize; i++) {
        if (!nums[i]) {
            nums.splice(i, 1);
            nums.push(0);
            arrSize--;
            i--;
        }
    }
};