// Identify variables from html
var quizContainer = document.querySelector('#quiz');
var submitButton = document.querySelector('#submit');
var resultsContainer = document.querySelector('#results');
var timeLeft = 60000;
currentQuestion = 0;
nextQuestion();


// Need to create the quiz
function createQuiz() {
    // for loop to cycle through each question??
};


// Need to display the results of the quiz
function displayResults() {

};

// Need a timer for countdown of duration of game
function timer() {
    var timer = document.querySelector('#timer');
    timer.innerHTML = "This is where the timer goes";

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
            D: "D",
        },
        correctAnswer: 1
    },
    // question 2 with answer choices and correct answer
    {
        question: "What?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
            D: "D",
        },
        correctAnswer: 2
    },
    // question 3 with answer choices and correct answer
    {
        question: "When?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
            D: "D",
        },
        correctAnswer: 3
    },
    // question 4 with answer choices and correct answer
    {
        question: "Where?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
            D: "D",
        },
        correctAnswer: 4
    },
    // question 5 with answer choices and correct answer
    {
        question: "How?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
            D: "D",
        },
        correctAnswer: 3
    },
    // question 6 with answer choices and correct answer
    {
        question: "Why?",
        answer: {
            A: "A",
            B: "B",
            C: "C",
            D: "D",
        },
        correctAnswer: 2
    },
];

