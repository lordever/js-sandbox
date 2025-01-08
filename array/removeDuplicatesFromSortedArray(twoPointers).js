/**
 * @param {number[]} nums
 * @return {number}
 */
    var removeDuplicates = function (nums) {
        if (nums.length === 0) {
            return 0;
        }

        let slow = 0;

        for (let fast = 0; fast < nums.length; fast++) {
            if (nums[fast] !== nums[slow]) {
                slow++;
                nums[slow] = nums[fast]
            }
        }

        return slow + 1;
    };

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([1, 2, 3, 3, 3, 4, 4, 5]))