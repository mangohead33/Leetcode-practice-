/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // for palindrom like problems, you should start with the first letter and the last letter;
    // if  s.length = 1, just return it back
    let result = '';
    if (s.length === 1) {
        return s;
    }
    for ( let i = 0; i < s.length; i++) {
        let left = check(i, i, s);
        let right = check(i, i + 1, s)
        let max = right.length > left.length ? right : left;
        result = max.length > result.length ? max : result;
    }
    return result;
};

const check = (left, right, string) => {
    let word = '';
    while(left >= 0 && right < string.length && string[left] === string[right]) {
        word = string.substring(left, right + 1);
        left -= 1;
        right += 1;
    }
    return word;
}