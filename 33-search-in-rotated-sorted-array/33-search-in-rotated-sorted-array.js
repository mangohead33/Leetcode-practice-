/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // once more we use binary search but lets do a careful job of working around this rotated array
    let left = 0;
    let right = nums.length - 1;
    const findMid = (start, end) => {
        return Math.floor((start + end)/2);
    }
    let mid = findMid(left, right);
    while ( left <= right) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[left] <= nums[mid]) {
            // here we can see  there's a range ex 4 to 7
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            mid = findMid(left, right);
        } else {
            if (nums[mid] <= target && target <= nums[right]) {
                // this mean target should not be in range of left and mid
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            mid = findMid(left, right); 
        } 
    }
    return - 1;
    
};