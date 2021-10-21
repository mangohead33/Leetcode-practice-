var medianSlidingWindow = function(nums, k) {
    //inputs array of nums and integer k
    //outputs array of medians within the sliding window k
    //constraints k should always be smaller than nums
    // for now assume that nums.length >= k, and that the array is unsorted
    let start = 0;
    let end = k;
    const medians = [];
    let sorted = nums.slice(start, end).sort((a,b) => {
        return a - b;
    })
    // if k === nums.length
    // sort nums, then find median
 
        while (nums.length >= end) {
        const middle = k % 2 === 1 ? sorted[Math.floor(sorted.length/2)] : (sorted[sorted.length/2] + sorted[sorted.length/2 - 1])/2;
        medians.push(middle);
        sorted = binarySearchAndInsert(sorted, nums[end]);
        sorted = binarySearchAndRemove(sorted, nums[start]);
        start++;
        end++;
    }
    return medians;
};

const binarySearchAndRemove = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;
    const middleIndex = (s,e) => {
        return Math.floor((s + e)/2)
    }
    for (let i = 0; i < arr.length; i += 1) {
        const middle = Math.floor(middleIndex(start, end));
        if (arr[middle] === num) {
            index = middle;
            break;
        } else if (arr[middle] > num) {
            end = Math.floor(middleIndex(start, end));
        } else {
            start = Math.ceil(middleIndex(start, end)) + 1;
        }
    }

    arr.splice(index, 1);
    return arr
}

const binarySearchAndInsert = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;
    if ( arr[start] >= num) {
        arr.unshift(num);
        return arr;
    } else if ( arr[end] <= num) {
        arr.push(num);
        return arr;
    }
     const middleIndex = (s,e) => {
        return Math.floor((s + e)/2)
    }
     for (let i = 0; i < arr.length; i += 1) {
        const middle = Math.floor(middleIndex(start, end));
        if (arr[middle] === num) {
            arr.splice(middle, 0 , num);
            break;
        } else if (arr[middle] > num) {
            if(arr[middle - 1] <= num ) {
                arr.splice(middle, 0 , num);
                break;
            } else 
     {       end = Math.floor(middleIndex(start, end));}
        } else {
            if(arr[middle + 1] >= num) {
                arr.splice(middle + 1, 0, num);
                break;

            } else 
            {start = Math.ceil(middleIndex(start, end)) + 1;}
        }
    }
return arr;
}