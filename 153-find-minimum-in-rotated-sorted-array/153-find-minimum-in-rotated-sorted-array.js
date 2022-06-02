/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // find the smallest element in nums array
    // how to determine if an element is the smallest?
    // if the element to the left of it is larger
    // also if the sorted array has a rotation of 0 then smallest element will be in index 0
    // use a binary search to slowly find smallest element
    // most importantly we want to find the point of discrepancy where the array shifted
    let left = 0;
    let right = nums.length - 1;
    const findMid = (start, end) => {
        return Math.floor((start + end)/ 2);
    }
    let mid = findMid(left, right);
    for (let i = 0; i < nums.length; i++) {
        if (nums[mid-1] !== undefined && nums[mid - 1] > nums[mid]) {
            // if num to the left is bigger, we found the smallest number
            return nums[mid];
        } else if (nums[mid + 1] !== undefined && nums[mid + 1] < nums[mid]) {
            // if the num to right is smaller, we found the smallest number
            return nums[mid + 1]
        } else if (nums[0] <= nums[nums.length - 1]) {
            // the array has either not rotated or it rotated equal to its length
            return nums[0];
        } else if (nums[mid] > nums[right]) {
            // this interval shows that a shift has occured and the smallest value is somewhere between these values
            left = mid + 1;
            mid = findMid(left, right);
        } else {
            // this would mean we are on an incrementing scale
            right = mid - 1;
            mid = findMid(left, right)
        }
    }
    
};