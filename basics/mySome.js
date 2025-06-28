Array.prototype.mySome = function (callback) {
    if (!callback) throw new TypeError('Callback is mandatory')

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true
        }
    }

    return false;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.mySome((n) => n > 3)) // true