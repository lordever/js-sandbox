class HashMap {
    constructor(size) {
        this.size = size;

        this.items = new Array(this.size).fill(null).map(() => [])
    }

    hash(key) {
        let hashValue = 0;

        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }

        return hashValue % this.size;
    }

    set(key, value) {
        const index = this.hash(key);

        //Check element absentence
        for (let i = 0; i < this.items[index].length; i++) {
            const [storedKey] = this.items[index][i]; // [ 0: [ 0: [1, 'test'], 1: [2, 'test'] ] 1: [ 0: [2, 'test'] ]]
            if (storedKey === key) {
                this.items[index][i][1] = value
                return;
            }
        }

        this.items[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);

        for (let i = 0; i < this.items[index].length; i++) {
            const [storedKey, storedValue] = this.items[index][i];

            if (storedKey === key) {
                return storedValue;
            }
        }

        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        for (let i = 0; i < this.items[index].length; i++) {
            const [storedKey] = this.items[index][i];

            if (storedKey === key) {
                this.items[index].splice(i, 1);
            }
        }
    }

    has(key) {
        const index = this.hash(key);
    
        for (let i = 0; i < this.items[index].length; i++) {
            const [storedKey] = this.items[index][i];
            if (storedKey === key) {
                return true;
            }
        }
    
        return false;
    }

    print() {
        if (this.items.length === 0) {
            console.log("HashMap is empty")
            return;
        }

        this.items.forEach((bucket, index) => {
            if (bucket.length === 0) {
                return;
            }

            console.log("Index: ", index);

            bucket.forEach(([key, value]) => {
                console.log("Key: ", key)
                console.log("Value: ", value)
            })

            console.log()
        })
    }
}

var twoSumWithMap = function (nums, target) {
    const hashMap = new HashMap(nums.length);

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const needed = target - current;

        if (hashMap.has(needed)) {
            return [hashMap.get(needed), i]
        }

        hashMap.set(current, i)
    }
};















var twoSum = function (nums, target) {
    const results = {}
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        
        if (Object.isUndefined(results[needed])) {
            return [results[needed], i]
        }

        results[nums[i]] = i
    }

    return []
};

console.log(twoSum([2, 7, 3], 9))
console.log(twoSum([3, 4, 6], 9))


class ShortHashMap {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(this.size).fill(null).map(() => [])
    }

    hash (key) {
        let value = 0

        for (let i=0; i < key.length; i++) {
            value += key[i].chatCodeAt()
        }

        return value % this.size
    }

    set(value) {
        const index = this.hash(value)
        this.buckets[index].push([value])
    }

    getBucketValues() {
        return this.buckets
    }
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashMap = new ShortHashMap(strs.length)
    strs.forEach((s) =>{
        hashMap.set(s)
    });
    

    console.log(hashMap.getBucketValues())
};