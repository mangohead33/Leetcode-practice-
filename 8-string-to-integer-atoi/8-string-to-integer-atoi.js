var myAtoi = function(s) {
    let result = '';
    let notNum = true;
    let neg = false;
    let pos = false;
    
    for ( let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i);
        //  if whitespace, continue
        if (char === 32) {
            // whitespace
            if(!notNum || pos || neg) {
                break;
            }
            continue;
        }
        if (char === 45) {
            // negative
            if (neg || pos || !notNum) {
                break;
            }
            neg  = true;
            continue;
        }
        if (char === 43) {
            //positive
            if (pos || neg || !notNum) {
                break;
            }
            pos = true;
            continue;
        }
        if (char > 47 && char < 58) {
            // is a num
            notNum = false;
            result = result + s[i]
        } else {
            break;
        }
    }
    if (notNum) {
        return 0;
    }
    result = parseInt(result, 10);
    if (neg) {
        if (result > 2147483648) {
            return -2147483648;
        }
        return -result
    }
    if (result > 2147483647) {
        return 2147483647;
    }
    return result;
}