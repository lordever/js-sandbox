var greetingName = "Suzy"

function sayHi(greetingName) {
    greetingName = greetingName.toUpperCase()
    console.log(greetingName)
}

sayHi("Holy") //HOLY
sayHi(greetingName) //SUZY

console.log(greetingName) //Suzy


//Code should be ran from browser
var special = 42

function lookingFor(special) {

    function keepLooking() {
        special = 3.123456
        console.log(special)
        console.log(window.special)
    }

    keepLooking()
}

function anotherLookingFor(special) {
    const another = {
        special: special
    }

    function keepLooking() {
        special = 3.123456
        console.log(special)
        console.log(another.special)
        console.log(window.special)
    }

    keepLooking()
}

lookingFor(421235123)
// 3.123456
// 42

anotherLookingFor(421235123);
// 3.123456
// 421235123
// 42


function availableVariableShadowing() {
    var special = 123;

    function showMe() {
        let special = 456
        console.log(special);
    }

    let otherSpecial = 789

    function evenNowShowMe() {
        var special = 0
        console.log(special);
    }

    showMe()
    evenNowShowMe()
}

availableVariableShadowing()
// 456
// 0


function incorrectVariableShadowing() {
    let special = 123;

    {
        var special = 456 // Uncaught SyntaxError: Identifier 'special' has already been declared
        console.log(special);
    }

    showMe()
}

incorrectVariableShadowing()