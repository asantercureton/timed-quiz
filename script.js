// Identify variables from html
var timer = document.getElementById('timer');
var question = document.getElementById('question');
//  Need to make choices an array
var choices = document.querySelectorAll('.choice-text');
var timeLeft = 10;
console.log('Time Left', timeLeft);
console.log('Choices', choices);


var currentQuestion = {};
var acceptingAnswers = true;
var questionCounter = 0;
var availableQuestions = [];

// Creating the questions using objects and arrays
var myQuestions = [
    // question 1 with answer choices and correct answer
    {
        question: "How can you create a variable in JavaScript?",
        choice1: 'var userName = "John";',
        choice2: 'userName = John;',
        choice3: 'create userName for John;',
        choice4: 'create userName = "John";',
        answer: 1
    },
    // question 2 with answer choices and correct answer    
    {
        question: "When was JavaScript's official release year?",
        choice1: '1995',
        choice2: '1988',
        choice3: '2002',
        choice4: '2021',
        answer: 1
    },
    // question 3 with answer choices and correct answer
    {
        question: "What script is JavaScript called?",
        choice1: 'External JavaScript',
        choice2: 'Internal JavaScript',
        choice3: 'Interior JavaScript',
        choice4: 'Exterior JavaScript',
        answer: 1
    },
    // question 4 with answer choices and correct answer
    {
        question: "Is JavaScript Front-End or Back-End?",
        choice1: 'Front-End and Back-End',
        choice2: 'Back-End',
        choice3: 'Front-End',
        choice4: 'Neither',
        answer: 1
    },
    // question 5 with answer choices and correct answer
    {
        question: "Who developed JavaScript?",
        choice1: 'Brendan Eich',
        choice2: 'Bill Gates',
        choice3: 'James Gosling',
        choice4: 'Guido van Rossum',
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
            // questionCounter = 0
            // availableQuestions = [...myQuestions]
            // nextQuestion();
        } else if (timeLeft == 1) {
            document.getElementById('timer').innerHTML = timeLeft + " second remaining...";
        } else {
            // Stop Timer
            clearInterval(timer);
            document.getElementById('timer').innerHTML = "TIMES UP!";
        }
    }, 1000);
    
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    questionCounter++
    console.log(questionCounter);

    console.log('LENGTH', availableQuestions.length);


    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion;

}

// Generate next question
// function nextQuestion() {
//     // Increase counter to increase the index to move to the next question
//     questionCounter++
//     console.log(questionCounter);

//     console.log('LENGTH', availableQuestions.length);


//     currentQuestion = availableQuestions[questionsIndex];
//     question.innerText = currentQuestion.value;

//     for (var i = 0; i < choice.length; i++) {
//         var number = choice.dataset.id;
//         choice.innerText = currentQuestion['choice' + number];
//         console.log('NUMBER', number);
//         console.log('INDEX', questionsIndex);
//         availableQuestions.splice(questionsIndex, 1);
//     }

// }

// getAttribute('data-language')
// // Selecting choices
// // Clicks button
// // Grab value of the btn clicked
// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         // Converting the chosen choice to an Int to compare to answer of question
//         var chosenChoice = parseInt(e.target.getAttribute('id'));
//         var questionAnswer = myQuestions[questionCounter].answer;
//         console.log('CHOSEN', chosenChoice);
//         console.log('ANSWER', questionAnswer);

//         if (chosenChoice === questionAnswer) {
//             availableQuestions = [myQuestions[e]];
//             console.log('AVAILABLE', availableQuestions);
//             nextQuestion();
//         } else {
//             timeLeft -= 5;
//         }
//     })
// });


// Need to append highscores


// if (availableQuestions === 0) {
//     // Save remaining time to localStorage as a score
//     localStorage.setItem('mostRecentScore', JSON.stringify(time))
//     // Display highscore to html
//     return window.location.assign('/highscores.html')
// }

startQuiz();
