/**
 Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

 Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

 The tests are generated such that there is exactly one solution. You may not use the same element twice.

 Your solution must use only constant extra space.
 */
var twoSum = function (numbers, target) {
    let first = 0;
    let last = numbers.length - 1

    do {
        const currentResult = numbers[first] + numbers[last]
        if (currentResult === target) {
            return [first + 1, last + 1]
        }

        if (currentResult > target) {
            last--;
        }

        if (currentResult < target) {
            first++;
        }

    } while (first !== last)
};

console.log(twoSum([2, 7, 11, 15], 9)) // 1,2
console.log(twoSum([2, 7, 11, 15], 22)) // 2,4
console.log(twoSum([2, 3, 4], 6)) // 1,3
console.log(twoSum([-1, 0], -1)) // 1,2