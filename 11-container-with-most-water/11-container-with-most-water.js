/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // constraints, n is always min of 2
    let maxWater = 0;
    let endOfArray = height.length - 1;
    
    for (let i = 0; i < height.length; i++) {
        if (height[i] * (endOfArray - i) > maxWater) {
            for (j = endOfArray; j > i; j--) {
                if (height[j] >= height[i]) {
                    let temp = height[i] * (j - i);
                    if (temp > maxWater) {
                        maxWater = temp;
                    }
                    break;
                } else {
                    let temp = height[j] * (j - i);
                    if (temp > maxWater) {
                        maxWater = temp;
                    }
                }
                // height[i] > height[j]
                if (i === (j - 1)) {
                    break;
                }
                // check to see if there's a chance we might reach larger maxwater
                if (height[i] * (j - 1 - i) > maxWater) {
                    continue;
                }
                break;
            }
            
        }
        continue;
    }
    
    return maxWater;
};