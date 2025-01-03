var isPalindrome = function (s) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const string = s.split("").filter(c => (c.toUpperCase() !== c.toLowerCase()) || numbers.includes(c)).join("");
    if (string.length === 0) {
        return true;
    }

    let first = 0;
    let last = string.length - 1;

    do {
        if (string[first].toLowerCase() === string[last].toLowerCase()) {
            first++;
            last--;
        } else {
            return false;
        }
    } while (first < last)

    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true - amanaplanacanalpanama
console.log(isPalindrome("race a car")) // false - raceacar
console.log(isPalindrome(" ")) // true
console.log(isPalindrome("aa")) // true
console.log(isPalindrome("0P")) // false