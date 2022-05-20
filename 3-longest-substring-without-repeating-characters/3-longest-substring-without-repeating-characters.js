/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestString = '';
    let start = 0;
    let end = 1;
    let string = '';
    let dictionary = {}
    for (let i = 0; i < s.length; i++) {
        if(dictionary[s[i]] === undefined) {
            dictionary[s[i]] = i;
        } else { 
            if (!(start > dictionary[s[i]] + 1)) {
                start = dictionary[s[i]] + 1;
            }
            dictionary[s[i]] = i;
        }
        string = s.substring(start,end);
        console.log(string, start, end)
        if (string.length > longestString.length) {
            longestString = string;
        }
        end++;
    }
    
    return longestString.length
};