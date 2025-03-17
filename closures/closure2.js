//Example 1

//RED SCOPE

function lookupStudent(studentId) {
    // BLUE SCOPE

    const students = [
        {id: 1, name: "Frank Senatra"},
        {id: 2, name: "Derek Banas"},
        {id: 3, name: "Mikel Felps"}
    ]

    return function greetStudent(greeting) {
        // GREEN SCOPE

        var student = students.find(student =>
            //ORANGE SCOPE
            studentId === student.id
        );

        return `${greeting} ${student.name}`
    }
}


var chosenStudent = [
    lookupStudent(1),
    lookupStudent(3),
]

console.log(chosenStudent[0].name)
console.log(chosenStudent[1].name)


console.log(chosenStudent[0]("Hello"))
console.log(chosenStudent[1]("Hi"))

//*************************************
//Example 2
function adder(num1) {
    return function addTo(num2) {
        return num1 + num2
    }
}

var add10To = adder(10)
var add20To = adder(20)

console.log(add10To(5)) //15
console.log(add20To(3)) //23


//*************************************
//Example 3

function makeCounter() {
    var count = 0;

    return function getCurrent() {
        count += 1;
        return count;
    }
}

const hits = makeCounter()

console.log(hits()) // 1
console.log(hits()) // 2
console.log(hits()) // 3

//*************************************
//Example 4

var keeps = []

for (let i = 0; i < 3; i++) {
    let j = i;

    keeps[j] = function keepEachJ() {
        return j
    }
}

console.log(keeps[0]()) //0
console.log(keeps[1]()) //1
console.log(keeps[2]()) //2


//*************************************
//Example 5
function manageStudentGrades(studentRecords) {
    var grades = studentRecords.map(getGrade);

    return addGrade;

    //*************************************

    function getGrade(record) {
        return record.grade
    }

    function sortAndTrimGradesList() {
        // sort by grades, descending
        grades.sort(function desc(g1, g2) {
            return g2 - g1
        });

        // only keep the top 10 grades
        grades = grades.slice(0, 10);
    }

    function addGrade(newGrade) {
        grades.push(newGrade);
        sortAndTrimGradesList();
        return grades;
    }
}


var addNewGrade = manageStudentGrades([
    {id: 14, name: "Kyle", grade: 86},
    {id: 21, name: "Ford", grade: 12},
    {id: 31, name: "Sam", grade: 17},
    {id: 32, name: "Suzy", grade: 76},
    {id: 44, name: "Jack", grade: 88}
]);

addNewGrade({id: 66, name: "Fred", grade: 89})
addNewGrade({id: 53, name: "Martha", grade: 99});






