const fibonacci = function(num) {
    if(num < 0) return "OOPS"
    let lastNum = 1;
    let newNum = 0;
    let curr = 0;
    for(; num > 0; num--) {
        curr = newNum + lastNum;
        lastNum = newNum;
        newNum = curr;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
