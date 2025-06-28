Array.prototype.myEvery = function (callback) {
    if (!callback) throw new TypeError('Callback is mandatory')

    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false
        }
    }

    return true;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.myEvery((n) => n > 3)) // false
console.log(arr.myEvery((n) => n > 0)) // true