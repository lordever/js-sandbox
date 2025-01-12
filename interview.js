//Closure
var userService = {
    currentStatus: "active",
    users: [
        {status: "active", name: "Alex"},
        {status: "inactive", name: "Eva"},
        {status: "active", name: "John"}
    ],
    filterUsers: function () {
        console.log(this)
        return this.users.filter(function (user) {
            console.log(this)
            return user.status === this.currentStatus
        })
    }
}

var otherUserService = {
    currentStatus: "inactive",
    users: [
        {status: "inactive", name: "Monica"},
        {status: "inactive", name: "Mira"},
        {status: "active", name: "Tomas"}
    ],
    filterUsers: userService.filterUsers
}

// console.log(userService.filterUsers())
// console.log(otherUserService.filterUsers())


// Promise.all


function promiseAll(promises) {
    let count = 0;
    const res = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            p.then((d) => {
                res.push(d)
                count++;

                if (count === promises.length) {
                    resolve(res);
                }
            }).catch((e) => {
                reject(e)
            })
        });
    });
}

const delayedResolve1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Result from delayedResolve1 (1 сек)");
    }, 1000);
});

const delayedResolve2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Result from delayedResolve2 (300 ms)");
        reject("Error in delayedResolve2");
    }, 300);
});

const delayedResolve3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Result from delayedResolve3 (500 ms)");
    }, 500);
});

promiseAll([delayedResolve1, delayedResolve2, delayedResolve3])
    .then((results) => {
        console.log("Results:", results);
        // Expected:
        // [
        //   "Result from delayedResolve1 (1 сек)",
        //   "Result from delayedResolve2 (300 мс)",
        //   "Result from delayedResolve3 (500 мс)"
        // ]
    })
    .catch((error) => {
        console.error("Promises processing was failed:", error);
    });