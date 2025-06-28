Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(this[i]) === false) {
            continue;
        }

        callback(this[i], i, this);
    }
};

const arr = [1, 2, 3, 4, 5]

arr.myForEach((item, index, array) => {
    console.log(item);
})