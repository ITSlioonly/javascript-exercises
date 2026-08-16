const removeFromArray = function(arr, a, b, c, d) {
    for(let i = 0; i < arr.length;) {
        if(arr[i] === a || arr[i] === b || arr[i] === c || arr[i] === d) {
            arr.splice(i, 1)
        } else {
            i++
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
