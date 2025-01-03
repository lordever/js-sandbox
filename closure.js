function greeting(msg) {
    return function (age) {
        const obj = Object.create(this)

        if (age) {
            obj.age = age
        }

        console.log(msg, this.name, `Are you ${obj.age} years old`)
    }
}


const engGreeting = greeting("Greeting dear: ");
const rusGreeting = greeting("Приветствую дорогой: ")

const engObj = {
    name: "Mark",
    age: 27,
    greeting: engGreeting
}

const rusObj = {
    name: "Петя",
    greeting: rusGreeting
}

engObj.greeting()
rusObj.greeting(21)

const gerObj = {
    name: "Dolf"
}

greeting("Grüße mein Lieber:").call(gerObj, [21])
greeting("Grüße mein Lieber:").apply(gerObj, [21])
greeting("Grüße mein Lieber:").bind(gerObj)(21)