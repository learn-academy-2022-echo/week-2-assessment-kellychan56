// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.





// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

//PSEUDO CODE:
    // describe a function by giving it a name
    // explain what the function should do and what it should return
    // give an expected input and output that tests the function

    // describe("divBy3", () => {
    //     it("takes an object and decides if the number is divisible by 3 or not", () => {
    //         expect(divBy3(object1)).toEqual("15 is divisible by three");
    //         expect(divBy3(object2)).toEqual("0 is divisible by three");
    //         expect(divBy3(object3)).toEqual("-7 is not divisible by three")
    //     })
    // })

// b) Create the function that makes the test pass.

//PSEUDO CODE:
    // declare a function named divBy3
    // input: takes an argument of an object that contains a number
    // output: returns a string that describes if the number inside the object is divisible by 3 or not
        // access the number inside the object argument using dot notation
        // use a ternary operator to determine if that number is divisible by 3 or not
        // return a string using string interpolation

        // const divBy3 = (numObj) => {
        //     return numObj.number % 3 === 0 ? `${numObj.number} is divisible by three` : `${numObj.number} is not divisible by three`
        // }





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//PSEUDO CODE:
    // describe a function by giving it a name
    // explain what the function should do and what it should return
    // give an expected input and output that tests the function

    // describe("capitalized", () => {
    //     it("takes an array of words and returns an array with all the words capitalized", () => {
    //         expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    //         expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    //     })
    // })

// b) Create the function that makes the test pass.

//PSEUDO CODE:
    // declare a function named capitalized
    // input: argument in an array of words
    // output: returns an array with each of the words capitalized
        // use .map() to return an array of the same length
        // capitalize each word in the array using the built-in method .toUpperCase() and .slice()

    // const capitalized = (wordArr) => {
    //    return wordArr.map(words => words[0].toUpperCase() + words.slice(1))
    // }





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

//PSEUDO CODE:
    // describe a function by giving it a name
    // explain what the function should do and what it should return
    // give an expected input and output that tests the function

    describe("firstVowelIndex", () => {
        it("takes in a string and logs the index of the first vowel", () => {
            expect(firstVowelIndex(vowelTester1)).toEqual(1)
            expect(firstVowelIndex(vowelTester2)).toEqual(0)
            expect(firstVowelIndex(vowelTester3)).toEqual(2)
        })
    })

// b) Create the function that makes the test pass.

//PSEUDO CODE:
    // declare a function
    // input: an argument that is a string
    // output: returns the index of the first occurrence of a vowel in that string
        // use a for loop to iterate through the characters of the string
        // determine if the character is a vowel or not
            // declare an array variable that contains a list of vowels
            // use .includes() to see if the character is in the vowel array
            // return the index value if true

    const firstVowelIndex = (word) => {
        const vowelArr = ["a", "e", "i", "o", "u"]
        for (let i = 0; i < word.length ; i++) {
            if (vowelArr.includes(word[i]) === true) {
                return i
            }
        }
    }
