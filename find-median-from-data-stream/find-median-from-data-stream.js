
var MedianFinder = function() {
    this.collection = []
    this.lastValue = -Infinity;
    this.firstValue = 0
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (num > this.lastValue) {
        this.collection.push(num)
    }
    else if (num < this.firstValue) {
        this.collection.unshift(num)
        this.firstValue = this.collection[0];
    }
    else {
        this.collection.unshift(num)
        this.collection.sort((a,b) => {
        return a - b;
    })
    }
    this.lastValue = this.collection[this.collection.length - 1];
    this.firstValue = this.collection[0];
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.collection.length === 0) {
        return 0;
    } else if (this.collection.length % 2) {
        // odd length
        const median = Math.floor(this.collection.length/2);
        return this.collection[median];
    } else {
        // even length
        const middle = this.collection.length/2;
        const median = (this.collection[middle] + this.collection[middle - 1])/2;
        return median;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */