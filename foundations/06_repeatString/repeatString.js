const repeatString = function(str, num) {
    let string = "";
    if(num < 0) {
        return "ERROR"
    } else {
        for(let i = num; i > 0; i--) {
            string += str;
        }
    }
    return string;
};
// Do not edit below this line
module.exports = repeatString;
