var highScoreEl = document.querySelector("#highscores");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question");
var openerEl = document.querySelector("#opener");
var answerEl = document.querySelector("#answerbutton");
var divContainerEl = document.querySelector("#divcontainer");
var startButtonEl = document.querySelector("#start-btn");
var checkAnswerEl = document.querySelector("#checkanswer");
var buttonA = document.querySelector("#answerbuttona");
var buttonB = document.querySelector("#answerbuttonb");
var buttonC = document.querySelector("#answerbuttonc");
var buttonD = document.querySelector("#answerbuttond");

var shownQuestionIndex = 0;
var score = 0;
var timeLeft = 60;
var correct;

console.log(buttonA)
console.log(questionEl)

var questions = [
    { 
        question: 'What does DOM stand for?', 
        choiceA: 'A. Document Object Manipulation', 
        choiceB: 'B. Dictation Obstacle Manipulation', 
        choiceC: 'C. Document Object Model', 
        choiceD: 'D. Document Object Malfunction',

        correctAnswer: 'C',
    },
    { 
        question: 'Which of the following is NOT a Javascript datatype?', 
        answers: [
                    'A. NaN', 
                    'B. Undefined', 
                    'C. String', 
                    'D. Function'
                ],
        correctAnswer: 'A',
    },
    {
        question: 'Which is NOT a JavaScript Framework?', 
        answers: [
                    'A. Python Script', 
                    'B. Django', 
                    'C. NodeJS', 
                    'D. JQuery'
                ],
        correctAnswer: 'B',
    },
    { 
        question: 'What does HTML stand for?', 
        answers: [
                    'A. HyperText Markup Language', 
                    'B. HyperText Markup Link', 
                    'C. HyperText Marked Language', 
                    'D. None of the Above '
                ],
        correctAnswer: 'A',
    },
    {
        question: 'Which of the options is the correct "for loop" syntax? ', 
        answers: [
                    'A. for ([initialExpression]; [conditionalExpression]) {}', 
                    'B. for ([initialExpression]; [incrementExpression]; [conditional Expression}) {}', 
                    'C. for ([conditionalExpression]; [initialExpression]; [incrementExpression}) {}', 
                    'D. for ([initialExpression]; [conditionalExpression]; [incrementExpression}) {}'
                ],
        correctAnswer: 'D',
    }
];

var showQuestions = function(){
    shownQuestion = questions[shownQuestionIndex];
    questionEl.innerHTML = '<p>' + shownQuestion.question + '</p>';
    buttonA.innerHTML = shownQuestion.choiceA;
    buttonB.innerHTML = shownQuestion.choiceB;
    buttonC.innerHTML = shownQuestion.choiceC;
    buttonD.innerHTML = shownQuestion.choiceD;
}

window.onload = function(){
    divContainerEl.style.display = 'none';
}

startButtonEl.addEventListener("click", function(){
    openerEl.style.display = 'none';
    divContainerEl.style.display = 'initial';
    startTimer();
    showQuestions();
}
)

var startTimer = function (){
    var timeLeft = 60;

    setInterval(function(){ 
        if (timeLeft >= 1) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Times Up!"
            clearInterval();
        }
    }, 1000);
}