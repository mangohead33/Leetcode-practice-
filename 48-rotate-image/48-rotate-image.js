/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // how does a rotation work?
    // starting from column 1, first row, unshift first value
    // however we must change the matrix in place!
    
    // since we can't use another matrix, perhaps we can store the proper order of the rotated matrixc
    // then modify the matrix in place using that array
    let h = matrix.length; - 1;
    let w = matrix.length - 1;
    let queue = [];
    for (let i = 0; i < matrix.length; i++) {
        //column
        for (let j = w; j >= 0; j--) {
            //row
            queue.push(matrix[j][i]);
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        // row
        for (let j = 0; j < matrix[0].length; j++) {
            // column
            let rotate = queue.shift();
            matrix[i][j] = rotate;
        }
    }
    return matrix;
    
};