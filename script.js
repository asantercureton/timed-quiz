// Identify variables
var startBtn = document.getElementById('#startBtn');
var startPage = document.getElementById('#startPage');
var questionEl = document.getElementById('#question');
var answerEl = document.getElementById('#answer');
var timer = document.getElementById('#timer');
var timeLeft = 60;
var questions = ["What is JavaScript?, Who founded JavaScript?, Why is JavaScript important?, When was JavaScript first introduced?"];
var answers = ["A1, A2, A3, A4"];

function renderQuestion() {
    var selected = Math.floor(Math.random() * questions.length);
    questionEl.children[0];
}


// // Creating the questions using objects and arrays
// var myQuestions = [
//     // question 1 with answer choices and correct answer
//     {
//         question: "Who?",
//         answer: ["A", "B", "C", "D"],
//         correct: 1
//     },
//     // question 2 with answer choices and correct answer
//     {
//         question: "Who?",
//         answer: ["A", "B", "C", "D"],
//         correct: 2
//     },
//     // question 3 with answer choices and correct answer
//     {
//         question: "Who?",
//         answer: ["A", "B", "C", "D"],
//         correct: 0
//     },
//     // question 4 with answer choices and correct answer
//     {
//         question: "Who?",
//         answer: ["A", "B", "C", "D"],
//         correct: 2
//     },
//     // question 5 with answer choices and correct answer
//     {
//         question: "Who?",
//         answer: ["A", "B", "C", "D"],
//         correct: 3
//     },
// ];


// Once start button is clicked, start timer and present first question
startBtn.addEventListener('click', startQuiz) {
    // Start Timer
    function startTimer() {
        var timer = setInterval(() => {
        timeLeft--
        displayTime.textContent = timeLeft + " seconds remaining..."
        }, 1000);
    }

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
