/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let checkHashSum = (v) => {
        return v.split("").sort().join()
    }

    return checkHashSum(s) === checkHashSum(t)
};

console.log(isAnagram("rat", "car"))