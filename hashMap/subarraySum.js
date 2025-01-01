var getSumOfArray = (arr) => {
    return arr.reduce((acc, val) => acc += val, 0)
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const subarraySumMap = new Map()
    subarraySumMap.set("SUM", [nums[0], [nums[0]]])

    for (let i = 1; i < nums.length; i++) {
        if (subarraySumMap.get("SUM")[0] !== k) {
            subarraySumMap.get("SUM")[1].push(nums[i])
            subarraySumMap.get("SUM")[0] = getSumOfArray(subarraySumMap.get("SUM")[1])
        }

        if (subarraySumMap.get("SUM")[0] === k) {
            return subarraySumMap.get("SUM")[1].length
        }
    }
};

console.log(subarraySum([1,2,1,2,1], 3))

// [ [1,2], [1,2], [2,1], [1,1,1] ]