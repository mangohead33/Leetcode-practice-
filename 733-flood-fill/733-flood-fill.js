/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    // inputs a nested array, sr/sc are coordinates, newColor change image[sr][sc] into newColor and all adjacent  tiles and those adjacent tiles into newcolor as long as they match the first value's value.
    // output none, you're only modifying original array
    let originalColor = image[sr][sc];
    if (originalColor === newColor) {
        return image;
    }
    // use recursive function to flood fill
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
    // issues with current algo. If original color = newColor i run into inf loops
    // i should also keep track of coordinates that were already modified
    // or logically, if theres no change in colors just return original array
};