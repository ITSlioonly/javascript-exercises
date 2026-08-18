const palindromes = function (str) {
    let arr = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .split("");

    let rev = arr.toReversed();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== rev[i]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
