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
//  var maxArea = function(height) {
//   let maxWater = 0, leftId=0, rightId=height.length-1;
//   while(leftId<rightId){
//     let leftPole = height[leftId], rightPole = height[rightId];
//     let currWater = Math.min(leftPole, rightPole)*(rightId-leftId);
//     maxWater = Math.max(currWater, maxWater);
//     // skip pole/poles of min hieght
//     if(leftPole<=rightPole) leftId++;
//     if(rightPole<=leftPole) rightId--;
//   }
//   return maxWater;  
// };