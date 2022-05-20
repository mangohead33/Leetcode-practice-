/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0; 
    let maxLen = 0;
    let dictionary = new Map();
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (dictionary.has(ch)) {
            start = dictionary.get(ch) + 1 > start ? dictionary.get(ch) + 1 : start;
        }
        dictionary.set(ch, i);
        if ( i - start + 1 > maxLen) {
            maxLen = i - start + 1;
        }
    }
    return maxLen;
};