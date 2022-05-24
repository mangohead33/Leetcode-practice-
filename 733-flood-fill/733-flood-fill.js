/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let originalColor = image[sr][sc];
    if (originalColor === newColor) {
        return image;
    }
    const recur = (rc, cc) => {
        // rc = row coordinate, cc = column coordinate
        image[rc][cc] = newColor;
        // up
        if (image[rc - 1] !== undefined && image[rc - 1][cc] === originalColor) {
            recur(rc - 1, cc);
        }
        // right
        if (image[rc][cc + 1] !== undefined && image[rc][cc + 1] === originalColor) {
            recur(rc, cc + 1);
        }
        // down
        if (image[rc + 1] !== undefined && image[rc + 1][cc] === originalColor) {
            recur(rc + 1, cc);
        }
        // left
        if (image[rc][cc - 1] !== undefined && image[rc][cc - 1] === originalColor) {
            recur(rc, cc - 1);
        }
        
    }
    recur(sr, sc);
    return image;
};