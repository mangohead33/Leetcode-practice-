/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ");
    let result = '';
    words.forEach((word) => {
        let letters = word.split('')
        let reverse = letters.reverse();
        let newWord = reverse.join('')
        result += newWord + ' ';
    })
    return result.trimEnd();
};