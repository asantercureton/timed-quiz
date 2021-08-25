// Identify variables
var startButton = document.querySelector('#startBtn');
var startPage = document.querySelector('#startPage');
var timer = document.querySelector('#timer');
var currentQuestion = 0;
nextQuestion();
var message = 'HELLO';



// Once start button is clicked, start timer and present first question
startButton.addEventListener('click', currentQuestion) {
    // Timer that counts down from 60
    function countdown() {
        var timeLeft = 60;

        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function () {
            // As long as the `timeLeft` is greater than 1
            if (timeLeft > 1) {
                // Set the `textContent` of `timerEl` to show the remaining seconds
                timerEl.textContent = timeLeft + ' seconds remaining';
                // Decrement `timeLeft` by 1
                timeLeft--;
            } else if (timeLeft === 1) {
                // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
                timerEl.textContent = timeLeft + ' second remaining';
                timeLeft--;
            } else {
                // Once `timeLeft` gets to 0, set `timerEl` to an empty string
                timerEl.textContent = '';
                // Use `clearInterval()` to stop the timer
                clearInterval(timeInterval);
                // Call the `displayMessage()` function
                displayMessage();
            }
        }, 1000);
    }
}



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
