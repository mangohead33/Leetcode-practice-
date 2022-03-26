/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let keypad = {
        2: ['a', 'b','c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    // input - a 0 to 4 digit string, with numbers from 2 - 9
    // output - an array of string combinations
    // perhaps you might need to go with an recursive approach
    let result = [];
    if (digits) {
        const recur = (input, digit, str) => {
            if (input[digit]) {
                let letters = keypad[input[digit]];
                for (let i = 0; i < letters.length; i++ ) {
                    let copy = str;
                    let letter = letters[i];
                    copy = copy + letter;
                    if (input[digit + 1]) {
                        recur(input, digit + 1, copy);
                    } else {
                        result.push(copy);
                    }
                }
            }
        }
        recur(digits, 0, '')
    }
    return result;
};