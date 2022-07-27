/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // can we assume that each interval is sorted
    // meaning that the end if each interval is greater than the end prior to it?
    // for now assume so
    
    //output is a new array of the merged intervals
    // what constitutes a merge?
    // if interval1E is qithin the range of interval 2 start and end
    
    if (intervals.length === 1) {
        return intervals;
    }
    let sorted = intervals.sort((a,b) => {
        return a[0] - b[0];
    })
    let merge = false;
    let result = [];
    for (let i = 0; i < sorted.length; i++) {
        if (merge) {
            let mergedInt = result[result.length - 1];
            let currentInt = sorted[i];
            if (currentInt[0] > mergedInt[1]) {
                result.push(currentInt);
            } else {
                let start = mergedInt[0] <= currentInt[0] ? mergedInt[0] : currentInt[0];
                let end = currentInt[1] >= mergedInt[1] ? currentInt[1] : mergedInt[1];
                result.pop();
                result.push([start, end]);
            }
        } else {
            let currentInt = sorted[i];
            if (sorted[i + 1] === undefined) {
                result.push(currentInt);
                break;
            }
            let nextInt = sorted[i + 1];
            if (nextInt[0] > currentInt[1]) {
                result.push(currentInt);
            } else {
                let start = currentInt[0] <= nextInt[0] ? currentInt[0] :nextInt[0];
                let end = nextInt[1] >= currentInt[1] ? nextInt[1] : currentInt[1];
                merge = true;
                i++;
                result.push([start,end]);
            }
        }
        
    }
    return result;
};