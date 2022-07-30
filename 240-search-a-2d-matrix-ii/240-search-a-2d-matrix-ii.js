/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let columnMax;
    let rowMax;
    const findMid = (s, e) => {
        return Math.floor((s + e) / 2);
    }
    for (let i = 0; i < matrix.length; i++) {
        let num = matrix[i][0];
        if (num === target) {
            return true;
        }
        if (num > target) {
            rowMax = i - 1;
            break;
        }
        if (i === matrix.length - 1) {
            rowMax = i;
        }
    }
    if (rowMax < 0) {
        return false;
        // target is too small and does not exist in matrix
    }
    for (let i = 0; i < matrix[0].length; i++) {
        let num = matrix[0][i];
        if (num === target) {
            return true;
        }
        if (num > target) {
            columnMax = i - 1;
            break;
        }
        if (i === matrix[0].length - 1) {
            columnMax = i;
        }
    }
    for (i = 0; i <= rowMax; i++) {
        let num = matrix[i][columnMax];
        if (num === target) {
            return true;
        }
        if (num < target) {
                continue;
            }
        let start = 0;
        let end = matrix[0].length - 1;
        let mid = findMid(start, end);
        while (start <= end) {
            let num2 = matrix[i][mid];
            if (num2 === target) {
                return true;
            } else if (num2 > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
            mid = findMid(start, end);
        }
        }
    return false;
    
};