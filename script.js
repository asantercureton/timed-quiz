// Identify variables from html
var quizContainer = document.querySelector('quiz');
var submitButton = document.querySelector('submit');
var resultsContainer = document.querySelector('results');
var timer = document.querySelector('timer');


// Need to create the quiz
function createQuiz() {
    // for loop to cycle through each question??
};


// Need to display the results of the quiz
function displayResults() {

};


// Display the quiz itself
createQuiz();


// Display the results once submit button is clicked
submitButton.addEventListener('click', displayResults);


// Displaying the questions using objects and arrays
// Repeat for the other questions
var myQuestions = [
    // question 1 with answer choices and correct answer
    {
        question: "Who?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
        },
        correctAnswer: "A"
    },
    // question 2 with answer choices and correct answer
    {
        question: "What?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
        },
        correctAnswer: "B"
    },
    // question 3 with answer choices and correct answer
    {
        question: "When?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
        },
        correctAnswer: "C"
    },
    // question 4 with answer choices and correct answer
    {
        question: "Where?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
        },
        correctAnswer: "C"
    },
    // question 5 with answer choices and correct answer
    {
        question: "How?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
        },
        correctAnswer: "B"
    },
    // question 6 with answer choices and correct answer
    {
        question: "Why?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
        },
        correctAnswer: "A"
    },
];

