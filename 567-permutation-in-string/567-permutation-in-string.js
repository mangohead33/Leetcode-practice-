/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
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