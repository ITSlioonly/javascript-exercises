const sumAll = function(a, b) {
    let sum = 0
    if(typeof(a) !== "number" || typeof(b) !== "number" || a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(a)) {
        return "ERROR"
    }
    if(a < b) {
        for(; b >= a; b--) {
            sum += b;
        }
    } else if(a > b) {
        for(; a >= b; a--) {
            sum += a;
        }
    } else {
        return a;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
