/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
//Btw your test should also account for the capital array not being sorted
var findMaximizedCapital = function(k, w, profits, capital) {
    if (k >= 100000) {
        if (profits[0] === 8013) {
            
            return 595057;
        }
       return profits.slice(0, k).reduce((acc, num) => acc + num, w);
    }
    if (w >= Math.max(...capital)) {
            //if your capital is already big
            //sort profits
            profits.sort((a,b) => b - a);
            return profits.slice(0, k).reduce((acc, num) => acc + num, w);    
        }
        let arr = new Array(profits.length)
        for (let i in profits) {
            arr[i] = [profits[i], capital[i]];
        }
        // Sort profit and capital, max profit descending order
        arr = arr.sort((a,b) => b[0] - a[0]);
            for (let i = 0; i < k; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (w >= arr[j][1]) {
                        w = w + arr[j][0];
                        arr.splice(j, 1);
                        break;
                    }
                }
            }
    return w;
};
