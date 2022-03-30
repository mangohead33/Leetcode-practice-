/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // input m x n matrix of sorted ints, and a target
    // output a boolean denoting whther target exist
    // method check each row mrow[0] - mrow[m.length - 1]
    // verify whether target is within range of nrow[0] to nrow[n.length - 1]
    // if so perform a linear check  or go for the optimal binary search
    let nLength = matrix[0].length - 1;
    let targetFound = false;
    let targetInRange = false;
    let checkRow;
    for (let i = 0; i < matrix.length; i++) {
        checkRow = matrix[i];
        if (checkRow[0] <= target && target <= checkRow[nLength]) {
            targetInRange = true;
            if (checkRow[0] === target || checkRow[nLength] === target) {
                return true;
            }
            break;
        }
    }
    
    if (targetInRange) {
        let start = 0
        let end = nLength;
        let middle = Math.floor((start + end) / 2);
        for (let j = 0, n = matrix[0].length; j < n; j++) {
            if (checkRow[middle] === target) {
                targetFound = true;
                break;
            } else if (checkRow[middle] < target) {
                // less than
                start = middle + 1;
                middle = Math.floor((start + end) / 2);              
            } else {
                //greater than
                end = middle;
                middle = Math.floor((start + end) / 2);
            }
             if (middle === start || middle === end) {
                    if (checkRow[middle] === target) {
                        targetFound = true;
                        break
                    } else {
                        break;
                    }
                }
        }
        
    }
    return targetFound;
    
};