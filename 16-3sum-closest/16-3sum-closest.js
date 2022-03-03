/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {    
   
    let result;
    let compareDiff = Infinity;
    for (let a = 0; a < nums.length - 2; a++) {
        // will stop automatically before errors occur
        for (let b = a + 1; b < nums.length - 1; b++) {
            // will stop before errors occur
            for (let c = b + 1; c < nums.length; c++) {
                let sum = nums[a] + nums[b] + nums[c];
                let abDiff = Math.abs(target - sum)
                if (abDiff < compareDiff) {
                    // if the absolute difference between target and sum is less than current compare diff, then do so and so
                    compareDiff = abDiff;
                    result = sum;
                    
                }
                 
            }
        }
    }
    return result;
};