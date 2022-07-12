/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.originalArray = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.originalArray;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let copy = this.originalArray.slice();
    let copyLength = copy.length;
    let shuffle = [];
    while (copyLength) {
        let ind = Math.floor(Math.random() * copyLength);
        let num = copy[ind];
        shuffle.push(num);
        copy.splice(ind, 1)
        copyLength--;
    }
    return shuffle;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */