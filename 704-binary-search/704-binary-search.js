/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((nums.length)/2);
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[middle];
        if (num === target) {
            index = middle;
            break;
        } else if (num > target) {
            // start to middle
            if(start === end) {
                break;
            }
            end = middle;
            middle = Math.floor((end + start)/2);
        } else {
            // middle to end
            if(start === end) {
                break;
            }
            start = middle + 1;
            middle = Math.floor((start + end)/2)
        }
        // 0,1,2,3,4, target is 0
    }
    return index;
};