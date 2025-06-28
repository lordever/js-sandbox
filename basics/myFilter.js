Array.prototype.myFilter = function (callback) {
    if (!callback) throw new TypeError("Callback is mandatory");

    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (!this.hasOwnProperty(i)) continue;

        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
}

const arr = [1, 2, 3, 4, 5]

const newArr = arr.myFilter()
console.log(newArr) // 3,4,5