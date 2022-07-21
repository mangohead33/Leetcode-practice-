/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // you can use map to log each numbers apperance
    // if it appears twice you can set the return value to duplicate
    // there should be one mapped entry that returns single
    return nums.reduce((a,b) => a^b)
    // ^ is the xor operator, if encounter the same number again it'll subtract it
    // that only works when paired with reduce, something to do with bit manipulation
    
    //find 1 unique values in a set with only 2 of the same duplicates
};