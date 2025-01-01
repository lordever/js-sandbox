/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let map = new Map()
    for (const n of nums1) {
        map.set(n, true)
    }

    const set = new Set()
    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i])) {
            set.add(nums2[i])
        }
    }

    return Array.from(set);
};

console.log(intersection([1, 2, 2, 1], [2, 2])) // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])) // [9, 4]