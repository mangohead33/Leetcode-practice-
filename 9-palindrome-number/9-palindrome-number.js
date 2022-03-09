/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // pretty easy problem
    // compare index 0 and last index
    // input is of type int so convert to a string first
    // output is a boolean
    let str = x + '';
    if (str.length === 1) {
        return true;
    }
    let index = 0;
    let pal = true;
    while (index < Math.ceil(str.length / 2)) {
        if (str[index] !== str[str.length - 1 - index]) {
            pal = false;
            break;
        }
        index++; 
    }
    return pal;
    
};
1234 
12345