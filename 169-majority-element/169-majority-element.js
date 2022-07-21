/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // traverse through the array
    // track the frequency each num 
    // return the num with highest frequency
    // create a map and log each time a number appears
    // 2nd for loop where i cycle through nums til find the num that has appeared most
    let frequency = new Map();
    let nonDuplicateNum = [];
    for (let i = 0; i < nums.length; i++) {
        if (!frequency.has(nums[i])) {
            // not yet recorded
            frequency.set(nums[i], 1);
            nonDuplicateNum.push(nums[i]);
        } else {
            let quantity = frequency.get(nums[i]);
            quantity++;
            frequency.set(nums[i], quantity);
        }
    }
    let majority = 0;
    let result;
    for (let i = 0; i < nonDuplicateNum.length; i++) {
        if (frequency.get(nonDuplicateNum[i]) > majority) {
            majority = frequency.get(nonDuplicateNum[i]);
            result = nonDuplicateNum[i];
        }
    }
    
    return result;
};