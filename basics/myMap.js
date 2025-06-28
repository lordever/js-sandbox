Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if(!this.hasOwnProperty(i)) continue;

        result[i] = callback(this[i], i, this);
    }

    return result;
}

const arr = [1, 2, 3];
console.log(arr.myMap((item) => item * 2)) // 2, 4, 6

