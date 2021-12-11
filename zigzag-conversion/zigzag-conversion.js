var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    
    if (numRows === 2) {
        let top = '';
        let bottom = '';
        for ( let i = 0; i < s.length; i++) {
            if ( i % 2 === 0) {
             top += s[i]   
            } else {
             bottom += s[i];
            }
    }
        return top + bottom;
    }
    
    let nestedArray = [];
    for (let i = 0; i < numRows; i++) {
        nestedArray.push([]);
    }
    let singleLetterCol = numRows - 2;
    let fillColumn = true;
    let count = 0;
    for (let j = 0; j < s.length; j++) {
        // Fills out a column with letters
        if (fillColumn) {
            nestedArray[count].push(s[j]);
            count++;
            if (count === numRows) {
                count = 0;
                fillColumn = false;
            }
        } else {
            // fills up a single row column to create zigzag pattern
            nestedArray[singleLetterCol].push(s[j]);
            singleLetterCol--;
            if(!singleLetterCol) {
                fillColumn = true;
                singleLetterCol = numRows - 2;
            }
        }
    }
    let result = '';
    for (let i = 0; i < nestedArray.length; i++) {
        result += nestedArray[i].join('')
    }
    return result;
};