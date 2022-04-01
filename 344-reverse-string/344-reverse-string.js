/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let odd = s.length % 2;
    
    for (let i = 0; i < s.length; i++) {
        let temp = s[s.length - 1 - i];
        if (odd && i === Math.floor(s.length/2)) {
            break;
        } 
        s[s.length - 1 - i] = s[i];
        s[i] = temp;
        if (!odd && i === (s.length/2 - 1)) {
            break;
        }
    }
    return s;
};