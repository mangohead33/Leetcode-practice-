/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let index = 0;
    let result = [];
    let pBank = new Map();
    for (let  i = 0; i < p.length; i++) {
        if (!pBank.has(p[i])) {
            pBank.set(p[i], 0);
        }
        let count = pBank.get(p[i]) + 1
        pBank.set(p[i], count);
    }
    
    let anagram = new Map();
    let anagramLetterCount = 0;
    let possibleMatch = false;
    for (let i = 0; i < s.length; i++) {
        if (pBank.has(s[i])) {
            if (!possibleMatch) {
                index = i;
                possibleMatch = true;
            }
            if (!anagram.has(s[i])) {
                anagram.set(s[i], 1);
            } else {
                anagram.set(s[i], anagram.get(s[i]) + 1);
            }
            anagramLetterCount++;
            if (anagram.get(s[i]) > pBank.get(s[i])) {
                if (s[i - 1] === s[i]) {
                    index = i;
                    anagram.clear();
                    anagram.set(s[i], 1);
                    anagramLetterCount = 1;
                    if (pBank.get(s[i]) >= 2) {
                        index = i - 1;
                        anagram.set(s[i], 2);
                        anagramLetterCount++;
                    }
                } else {
                    index++;
                    anagram.set(s[i], anagram.get(s[i]) - 1);
                    anagramLetterCount--;
                }
            }
            } else {
                possibleMatch = false;
                anagram.clear();
                anagramLetterCount = 0;
            }
            
            if(anagramLetterCount === p.length) {
                result.push(index);
                anagram.set(s[index], anagram.get(s[index]) - 1);
                index++;
                anagramLetterCount--;
            }         
        }
     return result;
    }