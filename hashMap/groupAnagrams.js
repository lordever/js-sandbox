
class ShortHashMap {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(this.size).fill(null).map(() => [])
    }

    hash (key) {
        return key.split("").sort().join("")
    }

    set(value) {
        const index = this.hash(value)
        
        for (let i=0; i < this.buckets.length; i++) {
            if (this.buckets[i][0] === index) {
                this.buckets[i][1].push(value)
                return;
            }
        }

        this.buckets.push([index, [value] ])
    }

    getBucketValues() {
        return this.buckets.filter((i) => i.length > 0).map((bucket) => bucket[1]);
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

groupAnagrams(["eat","tea","tan","ate","nat","bat"])