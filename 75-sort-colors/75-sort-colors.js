/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // alright sort colors in place, meaning can't use any extra space
    // simple solution that will still sort them in place:
    // count frequency of nums, and log them, then run a sceond loop that changes each value in nums in-place
    // how ever algorithim will be n^2
    let numQuantity = new Map();
    for (const num of nums) {
        if (numQuantity.has(num)) {
            let quantity = numQuantity.get(num) + 1;
            numQuantity.set(num, quantity);
        } else {
            numQuantity.set(num, 1);
        }
    }
    
    let red = numQuantity.get(0) ? numQuantity.get(0) : 0;
    let white = numQuantity.get(1) ? numQuantity.get(1) : 0;
    let blue = numQuantity.get(2) ? numQuantity.get(2) : 0;
    for (let i = 0; i < nums.length; i++) {
        if (red) {
            if (nums[i] !== 0) {
                nums[i] = 0;
            }
            red--;
        } else if (white) {
            if (nums[i] !== 1) {
                nums[i] = 1;
            }
            white--;
        } else {
            if (nums[i] !== 2) {
                nums[i] = 2;
            }
            blue--;
        }
    }
};