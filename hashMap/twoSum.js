/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // { 2: 0, 7: 1, 11: 2, 15: 3 }

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const needed = target - current;

        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        map.set(current, i)
    }
};

console.log(twoSum([2, 7, 11, 15], 22))