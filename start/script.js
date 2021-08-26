// Identify variables from html
var timer = document.getElementById('#timer');
var question = document.getElementById('#question');
// Brings in choices as an array
var choices = Array.from(document.getElementById('#.choice-text'));
var time = 60;
// var questions = ["What is JavaScript?, Who founded JavaScript?, Why is JavaScript important?, When was JavaScript first introduced?"];
// var answers = ["A1, A2, A3, A4"];


var currentQuestion = {};
var acceptingAnswers = true;
var questionCounter = 0;
var availableQuestions = [];

// Start Timer
function startTimer() {
    var timer = setInterval(() => {
        timeLeft--
        displayTime.textContent = timeLeft + " seconds remaining..."
    }, 1000);
}

// Creating the questions using objects and arrays
var myQuestions = [
    // question 1 with answer choices and correct answer
    {
        question: "Who?",
        choice1: 'A',
        choice2: 'B',
        choice3: 'C',
        choice4: 'D',
        answer: 1
    },
    // question 2 with answer choices and correct answer
    {
        question: "Who?",
        choice1: 'A',
        choice2: 'B',
        choice3: 'C',
        choice4: 'D',
        answer: 1
    },
    // question 3 with answer choices and correct answer
    {
        question: "Who?",
        choice1: 'A',
        choice2: 'B',
        choice3: 'C',
        choice4: 'D',
        answer: 1
    },
    // question 4 with answer choices and correct answer
    {
        question: "Who?",
        choice1: 'A',
        choice2: 'B',
        choice3: 'C',
        choice4: 'D',
        answer: 1
    },
    // question 5 with answer choices and correct answer
    {
        question: "Who?",
        choice1: 'A',
        choice2: 'B',
        choice3: 'C',
        choice4: 'D',
        answer: 1
    },
];


// Once start button is clicked, start timer and present first question
startQuiz = () => {
    questionCounter = 0
    time = 60
    availableQuestions = [...myQuestions]
    nextQuestion();
}

nextQuestion = () => {
    if(availableQuestions === 0) {
        localStorage.setItem('mostRecentScore', time)
        return window.location.assign('/end.html')
    }

    questionCounter++

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        var number = choice.dataset('number');
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    if(acceptingAnswers) return

    acceptingAnswers = false;

})



    getQuestions() {
        for (var i = 0; i > 0; i--) {
            var element
        }
    }
    // getQuestions();
    // // loop for the questions
    // for (var i = 0; i < myQuestions.length; i++) {
    //     var element = myQuestions[i];
    //     question.textContent = element.question;
    //     // loop for the answers for each question
    //     for (var j = 0; j < answer.length; j++) {
    //         answer[j].textContent = element.answer;
    //     }
    // }
}

function startQuiz() {

    startTimer();
}




// Collect answers and store highscores to localStorage
