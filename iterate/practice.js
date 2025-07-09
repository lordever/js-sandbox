//Task: 1

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};

// Сделай объект, где ключами будут значения, а значениями — ключи
// → { '#ff0000': 'red', '#00ff00': 'green', '#0000ff': 'blue' }

const inverted = Object
    .entries(colors)
    .reduce((acc, [key, value]) => {
        acc[value] = key;

        return acc;
    }, {})

console.log(inverted)
console.log(colors)

//Task: 2

const data = {
    name: 'John',
    age: 30,
    score: 88,
    city: 'Paris',
};

// Получи объект только с числовыми полями
// → { age: 30, score: 88 }


const onlyDigits = Object
    .entries(data)
    .reduce((acc, [key, value]) => {
        if (typeof value === "number") {
            acc[key] = value
        }

        return acc;
    }, {})

console.log(onlyDigits);

//Task: 3

const params = {
    search: "test",
    page: 2,
    limit: 10,
};

// Сформируй строку: 'search=test&page=2&limit=10'
// (например, для URL запроса)


const query = Object
    .entries(params)
    .map(([key,value]) => `${key}=${value}`)
    .join("&")

console.log(query);


//Task: 4

const user = {
    name: "Alice",
    location: "Paris",
    profession: "Engineer",
};

// → Выведи общее число символов: name.length + location.length + ...

const objSymbolLength = Object
    .entries(user)
    .reduce((acc, [key,value]) => {
        acc += value.length
        return acc;
    }, 0)

console.log(objSymbolLength);

//Task: 5

const record = {
    id: 1,
    name: null,
    age: 28,
    address: null,
    email: "test@example.com",
};

// → получить массив ключей, у которых значение === null -> ['name', 'address']

const emptyKeys = Object
    .keys(record)
    .filter(key => record[key] === null)

console.log(emptyKeys);