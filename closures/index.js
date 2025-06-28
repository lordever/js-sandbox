const user = {
    name: "Bob",
    getName: () => {
        const self = user;
        return self.name;
    },
};
console.log(user.getName());