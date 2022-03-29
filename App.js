// question 1

let text = 'apple, pears # and banana'
newText = text.split("");
let newString = ''
let words;
for (var i = 0; i < newText.length; i++) {
    words = newText[i]
    if (words.indexOf("#" || "/n")) {
        newString += words
    }
}
console.log(newString.toString());

// question 2

function number(value) {
    let num = value
    document.write(num.join(""))
}
number([0, 2, 1, 6, 9, 4, 9, 5, 6, 7])


// question 3

let studentData = [
    {
        id: 1,
        name: 'hassan',
    },
    {
        id: 2,
        name: 'ali',
    },
    {
        id: 3,
        name: 'faizan',
    },
    {
        id: 1,
        name: 'hassan',
    },
]

function student(data) {
    let ids = data.map((elem) => elem.id)
    const filtered = data.filter(({ id }, index) => !ids.includes(id, index + 1))
    console.log(filtered);
}

student(studentData)