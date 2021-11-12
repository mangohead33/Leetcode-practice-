/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //signed means that -will make this a 31 bit vs 32 but worst case scenario
    const result = [];
   if(x) {
       let stringX = x + '';
       let positive = true;
       if (stringX[0] === '-') {
           positive = false;
           stringX = stringX.slice(1);
       }
       for (let i = 0; i < stringX.length; i++) {
           result.unshift(stringX[i]);
       }
       //  [-2147483648 to 2147483647]
       if (positive) {
           let reverse = parseInt(result.join(''), 10);
           return reverse > 2147483647 ? 0 : reverse;
       } else {
           result.unshift('-');
           let reverse = parseInt(result.join(''), 10);
           return reverse < -2147483648 ? 0 : reverse;
       }
       
   } else {
       return x;
   }
    
};