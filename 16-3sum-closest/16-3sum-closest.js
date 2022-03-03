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
    // then compare both sums and check which is closer to the target, that could help determine which side of the array i should start with. start to end or end to start. 
    // for larger arrays that would at least cut the amount of iterations needed by half at worst.
    // lets try both methods and see which works out better!
    // unsorted 532 ms, 42.4 MB
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
    //sorted attempt
    // I've realized that the code below has faulty break logic. I did not account/realize that even if sorted there are times where the sum results don't always increase or decrease linearly. This holds true when there is a mix of negative and positive numbers.
//     let result;
//     let compareDiff = Infinity;
//     let stop = false;
//     let sortedNums = nums.sort((a, b) => {
//         return a - b;
//     })
//     let startSum = sortedNums[0] + sortedNums[1] + sortedNums[2];
//     let endSum = sortedNums[nums.length - 1] +sortedNums[nums.length - 2] + sortedNums[nums.length - 3];
//     if (Math.abs(target - endSum) > Math.abs(target - startSum)) {
//         // start for loop at beginning
//         // if we start here, our break condition is when we stop updating compareDiff, at a certain point we'll already have arrived at the solution
//         for (let i = 0; i < sortedNums.length - 2; i++) {
//             if (stop) {
//                 break;
//             }
//             for (let j = i + 1; j < sortedNums.length - 1; j++) {
//                 if(stop) {
//                     break;
//                 }
//                 for (let k = j + 1; k < sortedNums.length; k++) {
//                     let sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
//                     let absDiff = Math.abs(target - sum);
//                     if (absDiff <= compareDiff) {
//                         compareDiff = absDiff;
//                         result = sum;
//                     } else {
//                         stop = true;
//                         break;
//                     }
//                 }
//             }
//         }
//     } else {
//         // dry code but it starts at end and stops at start
//         let snl = sortedNums.length - 1
//         for (let i = snl; i > 1; i--) {
//             if (stop) {
//                 break;
//             }
//             for (let j = i - 1; j > 0; j--) {
//                 if(stop) {
//                     break;
//                 }
//                 for (let k = j - 1; k >= 0; k--) {
//                     let sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
//                     let absDiff = Math.abs(target - sum);
//                     if (absDiff <= compareDiff) {
//                         compareDiff = absDiff;
//                         result = sum;
//                     } else {
//                         if (sum === target) {
//                             result = sum;
//                         }
//                         stop = true;
//                         break;
//                     }
//                 }
//             }
//         }
        
//     }
//     return result;
};
