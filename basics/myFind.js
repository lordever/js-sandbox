Array.prototype.myFind = function (callback) {
    if (!callback) throw new TypeError("Callback is mandatory")

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i]
        }
    }
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.myFind((item) => item === 7))