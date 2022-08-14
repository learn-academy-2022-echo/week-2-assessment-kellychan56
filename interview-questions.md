# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: Parameters and arguments are both part of functions and essentially refer to the same thing. When declaring a function, the input value is referred to as a parameter. This is the variable that represents whatever input the user enters into the function. We can then use this parameter within the scope of the function code to return a desired output. This allows for a more dynamic function that can be reused. Once the function is declared, the user can then enter exact values into the function parameters, and those exact values of input are called the argument.

    const addOne = (number) => {
        return number + 1
    }

    addOne(3) ---> 4

In the example above, number is the parameter of the function addOne. The number parameter will be assigned to whatever input is entered. So when we do addOne(3), 3 is the argument that we pass through to the function, which will give us the return of 4.

Researched answer: Parameters are the alias/name for the values that are passed to a function. It can be thought of as declaring a variable. A parameter variable is declared within the function, and it is used within the written code to create the function itself. It is a property of the function. Arguments are the actual values passed into the function. It is a property to the call of a function. The argument passed into the function is assigned to the parameter value in the function code. The number of arguments should equal to the number of parameters. If there is no argument that corresponds to a parameter, the parameter will be undefined.


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The method .map() takes in a value, index, and array. The value refers to each element of the array that map will iterate through. The index is the location of each of those elements. Array is the full array that map is being called onto. The only necessary parameter is value. Index and array are optional parameters. When calling on these parameters, it will always be read in the order of value, index, and array. The variable names for these parameters can be anything -- value can be called "index" but it will still be referred to as value in the function code.

array.map((value, index, array) => () => {})

Researched answer: The map method takes in a function as its main parameter, which is why this is a higher order function. For this function, it has the predefined parameters of value, index, and array. The only required parameter is the value. Index and array are optional parameters. If the value is the only parameter being called on, we can use syntactical sugar to simplify the syntax.

array.map(value => {})


3. What is the difference between map and filter?

Your answer: Map and filter are both higher order functions. They are methods that both take in an array and return an array. Map will return an array of the same length, but filter will typically return an array of a shorter length. Map will iterate through the array and do something to the values, returning an array of the changed values. Filter has a built-in conditional statement that will return an array of only the values that are true to the condition.

[1, 2, 3, 4].map(number => number + 1)        ---->    [1, 2, 3, 4]
[1, 2, 3, 4].filter(number => number > 1)     ---->    [2, 3, 4]

Researched answer: Map creates a new array by transforming the elements in an array while filter creates a new array by removing elements from the original array. Map will iterate through the array and apply a function on the element to change the original element. Filter will return an array of elements that are true to a specified conditional statement. It can return an array of the same or shorter length.


4. What is the DOM?

Your answer: I am not exactly sure what the DOM is. I remember a snippet of code that contained the keyword DOM when creating an app with React and HTML. I believe that is connects JavaScript and React with HTML. As I work more with React, I believe I will develop a better understand of what DOM stands for and what it is.

Researched answer: After researching, I realized that I know the concept of DOM but did not know the term for it. DOM stands for Document Object Model. When a webpage is loaded, it has a DOM. This contains the general outline of HTML elements. The page has a layout of empty components that can be changed with JavaScript. An example of this that was used in class is with social media apps such as Instagram. On the feed page of Instagram, we see a bunch of photos from people that we follow. For each of these photos, it has the layout for a user image and username at the top, a photo in the middle, and a like button and caption at the bottom. These are elements of the DOM, and the code that actually puts the photos of people we follow into the DOM is written in another language.


5. What is React? Why would you use it?

Your answer: React is a JavaScript library that allows us to create user interfaces along with our code. Rather than having one main code with thousands of lines of code where we may not know where to find certain elements, it organizes code into things called components. These components each contain code for certain aspects of the main code in a separate file. Then in the main code, we can just have one line of code referring to the component whose code sits in another file. We can also create applications with create react app (CRA), which is the user interface aspect of React. It connects JavaScript code to HTML/CSS and allows for users to interact with an application.

Researched answer: React is a JavaScript library made by Facebook for building user interfaces. It allows for developers to quickly create user interfaces and have the potential for exponential growth with the websites and applications. This is because of the virtual DOM and components framework. The component code that is used for one project can easily be isolated and reused in another project. Because the community for React is so large, there are many solutions, applications, and extensions of React that can be easily found online.


6. STRETCH: What is hoisting in JavaScript?

Your answer: I have heard the term hoisting briefly mentioned in class, but the idea was brushed away and never mentioned again. Based off the term hoisting itself, I assume that it has to do with bringing a written code up in the script. Since code is read from top to bottom, I believe that hoisting breaks that framework a bit by allowing a code to not be written in the top to bottom format but still work.

Researched answer: In JavaScript, hoisting moves all the declarations to the top of the current scope. This allows for variables to be assigned and used before it has been declared. This is the case for declaring variables with var. In the case of let and const, using the variables before it is declared will result in errors.

x = 5
var x
--> will not cause an error

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A user story is a general explanation of software from a user's perspective. It describes the desired end product of what a software should look like when it is being used.

2. Spread operator: The spread operator is represented in JavaScript as an ellipsis (...). It expands and argument into a multiple arguments. For example, a string will be expanded into its separate characters and arrays will be expanded into its multiple values.

3. React props: Props are like the parameters of an object. It allows us to pass information between components and make the components even more dynamic as it can be reused in other situations.

4. Conditional rendering: This is similar to a conditional statement in JavaScript. Conditional rendering determines what components to display depending on the condition that it is written with.

5. DOM events: DOM events are changes that occur in the software in response to user interaction. They are typically used in junction with functions. These functions do not occur until the event or action has occurred. As software developers, when building applications, we want DOM events to correspond accordingly with the action of the user.
