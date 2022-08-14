// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: ["E", "c", "h", "o", " ", "2", "0", "2", "2"]
// b) Verify and explain: My answer is correct. By calling on the built-in method .split(), it takes in a string and converts it into an array. Inside the parameters of the method, since there are quotation marks, it will split the string by each character and have each be a value inside the returning array. If the method parameters were left empty, the entire string would be returned as a single value in an array. There are multiple ways to split the string depending on where we would want it to be split.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: My answer is correct. All functions need to have a return, but there is not a return for the function greeter. Since there is no return, when we try to log greeter("LEARN Student"), the terminal gives us undefined as a placeholder. By adding return before the string interpolation in greeter, when we run greeter("LEARN Student") again, the terminal will log "Hello, LEARN Student!"


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: My answer is correct. There is firstly a variable declaration of multipliedByTwo. The value assigned to this variable is an array. Using the map method on an array of numbers, the HOF iterates through the array and does something to each value. In this case, each number in the array is being multiplied by 2. Since map takes in an array and returns one of the same length, a new array with each number multiplied by 2 is returned.


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: My answer is correct. The variable onlyOdds is assigned to an array that is shortened using the filter method. The filter method takes in an array and returns an array of a shorter length. It has a built-in conditional statement that will return an array of values that are true to the condition. The condition set in this filter method returns numbers that are odd, so only odd number values are in the returned array.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: My answer is correct. myCodingSkills is an object, and we can access values in objects using dot notation. Because we want to access the key languages in myCodingSkills, we can use myCodingSkills.languages to access the array value assigned to languages. And since languages' value is an array, we can use index notation to access the values of the array. At index 0 of the array, we get "JavaScript".


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: "George", cohort: "Echo", year: 2022}
// b) Verify and explain: My answer is correct; an object was returned. Class is a blueprint for making objects. By using constructor, we can create a list of keys that will be contained in the object. The student key is assigned to the name parameter that should be given when instantiating the class. The keys cohort and year are hard coded to return the corresponding values of "Echo" and 2022. So, when we instantiate Learn with "George", we get the object {student: "George", cohort: "Echo", year: 2022}.
