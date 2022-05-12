/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    return function(n) {
        let start = 0;
        let end = n;
        const findMid = (start, end) => {
            return Math.floor((start + end)/2);
        };
        let mid = findMid(start, end);
        while (n) {
            if (isBadVersion(mid)) {
                if (!isBadVersion(mid - 1)) {
                    return mid;
                }
                end = mid;
                mid = findMid(start, end);
    
            } else {
                start = mid + 1;
                mid = findMid(start, end);
            }

        }

    };
};