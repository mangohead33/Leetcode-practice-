/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // inputs a num array and a target, assume array is unsorted
    // output an array of two indices
    // there'll always be a solution
    // numbers can repeat
    // there are both positive and negative numbers
    // you can't jsut weed out all the nums greater than target because there is a possibility there might be a negative number that when summed with higher num produces target.
    // right! you can't sort cause you need original indices
    if (nums.length === 2) {
        return [0, 1];
    }
    let ind1 = 0
    let ind2 = nums.length - 1;
    let answerFound = false;
 
    for (let i = 0; i < nums.length; i++) {
        ind1 = i;
        for (let j = i + 1; j < nums.length; j++) {
            ind2 = j;
            let sum = nums[ind1] + nums[ind2];
            if (sum === target) {
                answerFound = true;
                break;
            }
        }
        if (answerFound) {
            break;
        }
    }
    
    let result = [ind1, ind2];
    return result;
    
    
};