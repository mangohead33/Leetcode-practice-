/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // input an 1-indexed array (count starts at 1). It's already sorted ascending order
    // find two nums of different value. smallest number can be 1 and largest number can be nums.length
    // edge cases: there always is one correct solution
    //output an array containing both the indexes that fulfill the condition
    let result = []
    let start = 0;
    let end = numbers.length - 1;
    // remember, to add 1 to indexes pushed to result
    while (1) {
        let sum = numbers[start] + numbers[end];
        if (sum === target) {
            result.push(start + 1, end + 1);
            break;
        } else if (sum > target) {
            end--;
        } else {
            start++;
        }
    }
    return result;
    
    
};