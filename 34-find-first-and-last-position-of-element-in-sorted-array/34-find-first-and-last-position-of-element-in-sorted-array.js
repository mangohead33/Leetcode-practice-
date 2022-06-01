/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // to accomplish an O log n time complexity use binary search!
    if (!nums) {
        return [-1, -1];
    }
    let start = 0;
    let end = nums.length - 1;
    const findMid = (l, r) => {
        return Math.floor((l + r)/2)
    }
    let mid = findMid(start, end);
    for (let i = 0; i < nums.length; i++) {
        if (nums[mid] === target) {
            // aight this will be where you find start and end positions!
            let sp = mid;
            let ep = mid;
            let decrementer = mid;
            let incrementer = mid;
            let left = true;
            let right = true;
            while (left || right) {
                if (nums[decrementer - 1] === target) {
                    decrementer--;
                    sp = decrementer
                } else {
                    left = false
                }
                if (nums[incrementer + 1] === target) {
                    incrementer++;
                    ep = incrementer;
                } else {
                    right = false;
                }
            }
            return [sp, ep];
        } else if (nums[mid] > target) {
            end = mid;
            mid = findMid(start, end);
        } else {
            start = mid + 1;
            mid = findMid(start, end);
        }  
    }
    
    return [-1, -1];
};