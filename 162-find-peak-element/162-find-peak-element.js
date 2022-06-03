/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // return the index where there's a peak
    // meaning the left and right of the peak are either undefined or smaller than the peak value
    let left = 0;
    let right = nums.length - 1;
    const findMid = (start, end) => {
        return Math.floor((start + end)/ 2);
    }
    let mid = findMid(left, right);
    for (let i = 0; i < nums.length; i++) {
        if (nums[mid - 1] === undefined && nums[mid + 1] === undefined) {
            return mid;
        } else if (nums[mid - 1] === undefined && nums[mid + 1] < nums[mid]) {
            return mid;
        } else if (nums[mid + 1] === undefined && nums[mid - 1] < nums[mid]) {
            return mid;
        } else if (nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid]) {
            return mid;
        } else if (nums[mid + 1] !== undefined && nums[mid + 1] > nums[mid]) {
            left = mid + 1;
            mid = findMid(left, right);
        } else if (nums[mid - 1] !== undefined && nums[mid - 1] > nums[mid]) {
            right = mid - 1;
            mid = findMid(left, right)
        }
    }

    
};