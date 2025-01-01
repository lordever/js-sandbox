/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function (s) {
//     // {'l': [0, 2], 'o': [1, 1], 'v': [2, 1], 'e': [3, 3], ...}

//     const map = new Map()

//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             const currentValue = map.get(s[i])
//             map.set(s[i], [currentValue[0], currentValue[1] + 1])
//             continue;
//         }

//         map.set(s[i], [i, 1]);
//     }

//     for (let [_, v] of map) {
//         if (v[1] === 1) {
//             return v[0]
//         }
//     }

//     return -1;
// };

var firstUniqChar = function (s) {
    // {'l': 2, 'o': 2, 'v': 1, 'e': 4, ...}

    let map = {}

    for (const char of s) {
        map[char] = (map[char] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i
        }
    }

    return -1;
};



console.log(firstUniqChar("loveleetcode"))