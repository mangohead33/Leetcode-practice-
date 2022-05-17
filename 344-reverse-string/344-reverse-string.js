/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (s.length === 1) {
        return s;
    }
    let start = 0;
    let end = s.length - 1;
    while (end > start) {
        let swap = s[start];
        s[start] = s[end];
        s[end] = swap;
        start++;
        end--;
    }
    
};