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

//mine
// function range(start, end) {
//     if (start > end) {
//         return []
//     }
//
//     if (start === end) {
//         return [end]
//     }
//
//     function increment(target) {
//         let count = start;
//         let arr = [count]
//
//         do {
//             count++
//             arr.push(count)
//         } while (target > count)
//
//         return arr;
//     }
//
//     if (end) {
//         return increment(end);
//     } else {
//         return increment
//     }
// }

// from the book
function range(start, end) {
    start = Number(start) || 0

    if (end === undefined) {
        return function getEnd(end) {
            return getRange(start, end);
        }
    }

    function getRange(start, end) {
        let res = []
        start = Number(start) || 0;
        end = Number(end) || 0;

        for (let i = start; i <= end; i++) {
            res.push(i)
        }

        return res;
    }

    return getRange(start, end);
}

console.log(range(3, 3)) // [3]
console.log(range(3, 8)) // [3,4,5,6,7,8]
console.log(range(3, 0)) // []

let start3 = range(3)
let start4 = range(4)

console.log(start3(3)) // [3]
console.log(start3(8)) // [3,4,5,6,7,8]
console.log(start3(0)) // []

console.log(start4(6)) // [4,5,6]