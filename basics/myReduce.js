Array.prototype.myReduce = function (callback, defaultValue) {
    if (!callback) throw new TypeError("Callback is mandatory");
    if(defaultValue && this.length === 0) throw new TypeError("TypeError")

    let result = defaultValue || this[0];
    let i = defaultValue && this.length > 1 ? 0 : 1;

    for (; i < this.length; i++) {
        result = callback(result, this[i]);
    }

    return result;
}

const users = [
    {name: 'Alex', group: 'user'},
    {name: 'Bob', group: 'admin'},
    {name: 'Martha', group: 'user'},
    {name: 'Stella', group: 'user'},
    {name: 'Mark', group: 'admin'},
]

const groupedUsers = users.myReduce((acc, user) => {
    acc[user.group] = acc[user.group] || []
    acc[user.group].push(user)
    return acc;
}, {})

console.log(groupedUsers);