// Identify variables from html
var timer = document.getElementById('timer');
var question = document.getElementById('question');
//  Need to make choices an array
var choices = document.querySelectorAll('h6');
var timeLeft = 60;
// console.log('Time Left', timeLeft);
// console.log('Choices', choices);


var currentQuestion = {};
var acceptingAnswers = true;
var questionCounter = 0;
var availableQuestions = [];

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
        document.getElementById('timer').innerHTML = timeLeft + " seconds remaining...";

        if (timeLeft > 1) {
            questionCounter = 0;
        } else if (timeLeft == 1) {
            document.getElementById('timer').innerHTML = timeLeft + " second remaining...";
        } else {
            // Stop Timer
            clearInterval(timer);
            document.getElementById('timer').innerHTML = "TIMES UP!";
        }

    }, 1000);

    // Convert Object into Array
    availableQuestions = [...myQuestions];
    currentQuestion = availableQuestions[questionCounter];
    // Display current question
    question.innerHTML = currentQuestion.question;

    // Loop through choice options
    for (let i = 0; i < choices.length; i++) {
        choices[i].innerHTML = currentQuestion.choice[i];
    }

    selectAnswer();
}

// Generate next question
function nextQuestion() {
    // Increase counter to increase the index to move to the next question
    questionCounter++;

    currentQuestion = availableQuestions[questionCounter];
    question.innerText = currentQuestion.question;

    for (let j = 0; j < choices.length; j++) {
        choices[j].innerHTML = currentQuestion.choice[j];
    }
}

function selectAnswer() {
    var chosenChoice = parseInt(e.target.getAttribute('id'));
    var questionAnswer = myQuestions[questionCounter].answer;

    if (chosenChoice === questionAnswer) {
        nextQuestion();
    } else {
        timeLeft -= 5;
    }
}

// Need to append highscores


// if (availableQuestions === 0) {
//     // Save remaining time to localStorage as a score
//     localStorage.setItem('mostRecentScore', JSON.stringify(time))
//     // Display highscore to html
//     return window.location.assign('/highscores.html')
// }

startQuiz();

// Select choice
choices[questionCounter].addEventListener('click', e => {
    // Converting the chosen choice to an Int to compare to answer of question
    var chosenChoice = parseInt(e.target.getAttribute('id'));
    var questionAnswer = myQuestions[questionCounter].answer;

    console.log("target", chosenChoice);
    if (chosenChoice === questionAnswer) {
        // availableQuestions = [myQuestions[i]];
        nextQuestion();
    } else {
        timeLeft -= 5;
    }
});

