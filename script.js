// Identify variables from html
var timer = document.getElementById('timer');
var question = document.getElementById('question');
//  Need to make choices an array
var choices = document.querySelectorAll('h6');
var timeLeft = 10;

var currentQuestion = {};
var questionCounter = 0;
var availableQuestions = [];
var highscoreBoard = [];
let storageLocal;

// Creating the questions using objects and arrays
var myQuestions = [
    // question 1 with answer choices and correct answer
    {
        question: "How can you create a variable in JavaScript?",
        choice: [
            'var userName = "John";',
            'userName = John;',
            'create userName for John;',
            'create userName = "John";'
        ],
        answer: 1
    },
    // question 2 with answer choices and correct answer    
    {
        question: "When was JavaScript's official release year?",
        choice: [
            '1995',
            '1988',
            '2002',
            '2021'
        ],
        answer: 1
    },
    // question 3 with answer choices and correct answer
    {
        question: "What script is JavaScript called?",
        choice: [
            'External JavaScript',
            'Internal JavaScript',
            'Interior JavaScript',
            'Exterior JavaScript'
        ],
        answer: 1
    },
    // question 4 with answer choices and correct answer
    {
        question: "Is JavaScript Front-End or Back-End?",
        choice: [
            'Front-End and Back-End',
            'Back-End',
            'Front-End',
            'Neither'
        ],
        answer: 1
    },
    // question 5 with answer choices and correct answer
    {
        question: "Who developed JavaScript?",
        choice: [
            'Brendan Eich',
            'Bill Gates',
            'James Gosling',
            'Guido van Rossum'
        ],
        answer: 1
    },
];

// start quiz & timer and present first question with choices
function startQuiz() {
    // Start Timer
    var timer = setInterval(() => {
        timeLeft--;

        if (timeLeft > 1) {
            document.getElementById('timer').innerHTML = timeLeft + " seconds remaining...";
        } else if (timeLeft === 1) {
            document.getElementById('timer').innerHTML = timeLeft + " second remaining...";
        } else {
            // Stop Timer
            clearInterval(timer);
            document.getElementById('timer').innerHTML = "TIMES UP!";
            highscoreBoard.push(timeLeft);
            // Display highscore to html
            document.getElementById('scores').innerHTML = highscoreBoard;
        }

    }, 1000);

    // Convert Object into Array
    availableQuestions = [...myQuestions];
    currentQuestion = availableQuestions[questionCounter];
    // Display current question
    question.innerText = currentQuestion.question;

    // Loop through choice options
    for (let i = 0; i < choices.length; i++) {
        choices[i].innerHTML = currentQuestion.choice[i];
    }
}

// Generate next question
function nextQuestion() {


    // Increase counter to increase the index to move to the next question
    questionCounter += 1;

    if (questionCounter < myQuestions.length) {
        currentQuestion = availableQuestions[questionCounter];
        question.innerText = currentQuestion.question;

        for (let j = 0; j < choices.length; j++) {
            choices[j].innerHTML = currentQuestion.choice[j];
        }

    } else {
        // Save remaining time to localStorage as a score
        localStorage.setItem('mostRecentScore', JSON.stringify(timeLeft))
        // Display highscore to html
        document.getElementById('scores').innerHTML = timeLeft;
    }


    // storageLocal = localStorage.setItem('mostRecentScore', JSON.stringify(highscoreBoard));
    // console.log("highscore", storageLocal);


    // Need to append highscores
    // if (currentQuestion === undefined) {

    // return window.location.assign('/highscores.html')
    // }
}

startQuiz();

// Select choice
choices[questionCounter].addEventListener('click', e => {
    // Converting the chosen choice to an Int to compare to answer of question
    var chosenChoice = parseInt(e.target.getAttribute('id'));
    var questionAnswer = myQuestions[questionCounter].answer;

    if (chosenChoice === questionAnswer) {
        nextQuestion();
    } else {
        timeLeft -= 5;
    }
});

