/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // use a sliding window for letters in s2
    // sliding window enlarges each time it encounters a matching letter in s1
    // once sliding window reaches same length as s1, return true
    // Sliding window resets in size if some conditions are met
    // 1) if algo encounters  a letter in s2 not native to s1
    // 2) we encounter a amtching letter however it appearnce exceeds the quantity of said letter in s1
    let letterBank = new Map();
    for (const letter of s1) {
        if (letterBank.get(letter) === undefined) {
            letterBank.set(letter, 0);
        }
        letterBank.set(letter, letterBank.get(letter) + 1);
    }
    let s2LetterBank = new Map();
    let start = 0;
    let end = 1;
    for (let i = 0; i < s2.length; i++) {
        let ch = s2[i];
        if(letterBank.get(ch)) {
            // this means we found a letter that matches!
            // now log that letter into s2Bank
            // however if that letter has appeared more than the quantity of that letter in s1
            // change position of start until you encounter the same letter,
            // while decrementing other letters
            if (s2LetterBank.get(ch) === undefined) {
                s2LetterBank.set(ch, 0);
            }
            s2LetterBank.set(ch, s2LetterBank.get(ch) + 1);
            if (s2LetterBank.get(ch) > letterBank.get(ch)) {
                while(1) {
                    let sameCh = s2[start];
                    if (sameCh === ch) {
                        s2LetterBank.set(ch, s2LetterBank.get(ch) - 1)
                        start++;
                        break;   
                    }
                    s2LetterBank.set(sameCh, s2LetterBank.get(sameCh) - 1);
                    start++;
                }
            }
            if ((end - start) === s1.length) {
                return true;
            } 
        } else {
            s2LetterBank.clear()
            start = end;
        }
        end++;
    }
    return false;
};