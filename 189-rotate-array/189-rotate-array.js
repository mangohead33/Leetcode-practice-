/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let arr = [...nums]; //copy the nums array
  for(let i = 0; i < nums.length; i++) {
      let rotateIndex = (i + k) % nums.length; // this helpful line determines where to place each shifted index.
      // ex [1,2,3,4,5,6] k = 3, 
      /*
      rI = 3
      rI = 4
      rI = 5
      rI = 0
      rI = 1
      rI = 2
      
      */
      nums[rotateIndex] = arr[i]
  }

    
};