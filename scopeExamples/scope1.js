// Global scope example
// var cache = {}
//
// function factorial(x) {
//     if (x < 2) {
//         return 1;
//     }
//
//     if (!(x in cache)) {
//         cache[x] = x * factorial(x - 1);
//     }
//
//     return cache[x];
// }
//
// const fact = factorial(6)
//
// console.log(fact)


// Internal scope example (hide the cache from global closure)

// function hideTheCache() {
//     var cache = {}
//
//     return factorial;
//
//     //*************************************************
//     function factorial(x) {
//         if (x < 2) {
//             return 1;
//         }
//
//         if (!(x in cache)) {
//             cache[x] = x * factorial(x - 1);
//         }
//
//         return cache[x];
//     }
// }
//
// const hideCache = hideTheCache()
//
// const fact = hideCache(6)
//
// console.log(fact);

// FP example with hiding the cache from global scope

var factorial = (function hideTheCache() {
    var cache = {};

    function factorial(x) {
        if (x < 2) {
            return 1;
        }

        if (!(x in cache)) {
            cache[x] = x * factorial(x - 1);
        }

        return cache[x];
    }

    return factorial;
})()

const fact = factorial(6)
console.log(fact)