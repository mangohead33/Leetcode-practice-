/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {    
    // sort the solution first?
    // sorted vs unsorted
    // -4, -1, 1 , 2 target -5
    // 1) -4
    // 2) -3
    // 3) -1
    // 4) 2
    // if you sort first, you can see a pattern where the sums increase
    // with unsorted it's unpredictable
    // both take the same amount of steps and would check each sum to see how far/close it is to the target
    // unsorted would be 0(n^3) 
    // sorted would also be 0(n^3) times 0(nlogn) <-(time due to sorting)
    // however i have a feeling that sorting it first, would allow me to set more conditions or plan more smartly on how to reduce overall processing time for long arrays
    // for example in a sorted array. if target is lets say 10
    // i don't know if thats big or small in respect to the numbers in nums. however if i take the sum of i[0],i[1],i[2]
    // and compare it with the sum of i[end], i [end-1], i[ end - 2]
    //then compare both sums and check which is closer to the target, that could help determine which side of the array i should start with. start to end or end to start. 
    // for larger arrays that would at least cut the amount of iterations needed by half at worst.
    // lets try both methods and see which works out better!
    // unsorted method brute force
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