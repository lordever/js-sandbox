Array.prototype.myFlat = function (depth = 1) {
    const result = [];

    const flatten = (arr, currentDepth) => {
        for (let i = 0; i < arr.length; i++) {
            if (!arr.hasOwnProperty(i)) continue;

            const value = arr[i];
            if (Array.isArray(value) && currentDepth > 0) {
                flatten(value, currentDepth);
            } else {
                result.push(value);
            }
        }
    }

    flatten(this, depth);
    return result;
}

console.log([1, [2, 3]].myFlat()); // [1, 2, 3]
console.log([1, [2, [3, [4]]]].myFlat(2)); // [1, 2, 3, [4]]
console.log([1, [2, [3, [4]]]].myFlat(Infinity)); // [1, 2, 3, 4]
console.log([1, , 3, [4]].myFlat()); // missed elements → [1, 3, 4]

Array.prototype.myFlatMap = function (callback) {
    if (typeof callback !== 'function')
        throw new TypeError("Callback is mandatory")

    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (!this.hasOwnProperty(i)) continue;

        const mapped = callback(this[i], i, this);

        if (Array.isArray(mapped)) {
            result.push(...mapped)
        } else {
            result.push(mapped)
        }
    }

    return result;
}


const words = ["hello world", "foo bar"];
console.log(words.myFlatMap(word => word.split(" ")));
// → ['hello', 'world', 'foo', 'bar']

const numbers = [1, 2, 3];
console.log(numbers.myFlatMap(n => [n, n * 10]));
// → [1, 10, 2, 20, 3, 30]