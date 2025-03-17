function sortNamesByLength(names) {
    var buckets = []

    for (let name of names) {
        if (buckets[name.length] == null) {
            buckets[name.length] = [];
        }

        buckets[name.length].push(name);
    }

    {
        let sortedNames = [];
        for (let bucket of buckets) {
            if (bucket) {
                bucket.sort();

                sortedNames = [
                    ...sortedNames,
                    ...bucket
                ]
            }
        }

        return sortedNames;
    }
}

const sortedNames = sortNamesByLength([
    "Sally",
    "Suzy",
    "Frank",
    "John",
    "Jennifer",
    "Scott"
]);

console.log(sortedNames);