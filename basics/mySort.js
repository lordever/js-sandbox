Array.prototype.mySort = function (compareFn) {
    if (this.length < 2) {
        return this;
    }

    const defaultCallback = (a, b) => a.toString().localeCompare(b.toString())
    const callback = compareFn || defaultCallback;

    for (let i = 0; i < this.length; i++) {
        if (!this.hasOwnProperty(i)) continue;

        for (let j = i + 1; j < this.length; j++) {
            if (!this.hasOwnProperty(j)) continue;

            if (callback(this[i], this[j]) > 0) {
                const temp = this[j];
                this[j] = this[i];
                this[i] = temp
            }
        }
    }

    return this;
};

const arr = [5, 1, 4, 2, 3];

console.log(arr.mySort()); // [1, 2, 3, 4, 5]

const words = ['banana', 'apple', 'cherry'];
console.log(words.mySort((a, b) => a.localeCompare(b)));
// ['apple', 'banana', 'cherry']

const nums = [10, 1, 20, 2];
console.log(nums.mySort((a, b) => a - b));
// [1, 2, 10, 20]