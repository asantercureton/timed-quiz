// Identify variables from html
var timer = document.getElementById('timer');
var question = document.getElementById('question');
// JSON.stringify instead??
var choices = Array.from(document.querySelectorAll('.choice-text'));
var timeLeft = 10;
console.log('Time Left', timeLeft);
console.log('Choices', choices);


var currentQuestion = {};
var acceptingAnswers = true;
var questionCounter = 0;
var availableQuestions = [];

// Creating the questions using objects and arrays
var myQuestions = [
    // question 5 with answer choices and correct answer
    {
        question: "How can you create a variable in JavaScript?",
        choice1: 'var userName = "John";',
        choice2: 'userName = John;',
        choice3: 'create userName for John;',
        choice4: 'create userName = "John";',
        answer: 1
    },    
    // question 1 with answer choices and correct answer    
    {
        question: "When was JavaScript's official release year?",
        choice1: '1988',
        choice2: '1995',
        choice3: '2002',
        choice4: '2021',
        answer: 2
    },
    // question 2 with answer choices and correct answer
    {
        question: "What script is JavaScript called?",
        choice1: 'Exterior JavaScript',
        choice2: 'Internal JavaScript',
        choice3: 'Interior JavaScript',
        choice4: 'External JavaScript',
        answer: 4
    },
    // question 3 with answer choices and correct answer
    {
        question: "Is JavaScript Front-End or Back-End?",
        choice1: 'Front-End',
        choice2: 'Back-End',
        choice3: 'Front-End and Back-End',
        choice4: 'Neither',
        answer: 3
    },
    // question 4 with answer choices and correct answer
    {
        question: "Who developed JavaScript?",
        choice1: 'Bill Gates',
        choice2: 'Brendan Eich',
        choice3: 'James Gosling',
        choice4: 'Guido van Rossum',
        answer: 2
    },
];

// setTimeout(startQuiz(), 1000);
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
        }
    }, 1000);
}

// Generate next question
function nextQuestion() {
        // Increase counter to increase the index to move to the next question
    questionCounter++

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        var number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true
}

// Selecting choices
// Clicks button
// Grab value of the btn clicked
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        // if (!acceptingAnswers)
        //     return acceptingAnswers = false

        var chosenChoice = parseInt(e.target.id);
        var questionAnswer = myQuestions[questionCounter].answer;
        console.log('CHOSEN', chosenChoice);
        console.log('ANSWER', questionAnswer);

        if (chosenChoice === questionAnswer) {
            availableQuestions = [...myQuestions]
            nextQuestion();
        } else {
            timeLeft -= 5;
        }
    })
});

        // var classToApply = chosenAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        // if (classToApply === 'incorrect') {
        //     timeLeft = timeLeft - 5;
        // }

        // chosenChoice.parentElement('choice-container').classlist.add(classToApply)

        // setTimeout(() => {
        //     chosenChoice.parentElement.classlist.remove(classToApply);
        //     console.log('CHOSEN', chosenChoice);
        //     newQuestion();
        // }, 1000)

// Need to append highscores
// Stop timer if time runs out


// if (availableQuestions === 0) {
//     // Save remaining time to localStorage as a score
//     localStorage.setItem('mostRecentScore', JSON.stringify(time))
//     // Display highscore to html
//     return window.location.assign('/highscores.html')
// }

startQuiz();
