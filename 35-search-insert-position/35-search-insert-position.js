/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end  = nums.length - 1;
    const findMid = (start, end) => {
        return Math.floor((start + end)/2);
    }
    let mid = findMid(start, end);
    let index;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[mid];
        if (num === target) {
            index = mid;
            break;
        } else if (num > target) {
            if (mid === start) {
                index = 0;
                break;
            }
            if (target === nums[mid - 1]) {
                index = mid - 1;
                break;
            }
            if (target > nums[mid - 1]) {
                index = mid;
                break;
            }
            end = mid;
            mid = findMid(start, end);
        } else {
            if (mid === end) {
                index = nums.length;
                break;
            }
            if (target === nums[mid + 1]) {
                index = mid + 1;
                break;
            }
            if (target < nums[mid + 1]) {
                index = mid + 1;
                break;
            }
            start = mid + 1;
            mid = findMid(start, end);
        }
        
    }
    return index;
        
};