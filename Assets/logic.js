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

var score = 0;
var timeLeft = 60;
var correct;

var questions = [
    { 
        question: 'What does DOM stand for?', 
        answers: [
                    'A. Document Object Manipulation', 
                    'B. Dictation Obstacle Manipulation', 
                    'C. Document Object Model', 
                    'D.Document Object Malfunction'
        ],
        correctAnswer: 2,
    },
    { 
        question: 'Which of the following is NOT a Javascript datatype?', 
        answers: [
                    'A. NaN', 
                    'B. Undefined', 
                    'C. String', 
                    'D. Function'
                ],
        correctAnswer: 0,
    },
    {
        question: 'Which is NOT a JavaScript Framework?', 
        answers: [
                    'A. Python Script', 
                    'B. Django', 
                    'C. NodeJS', 
                    'D. JQuery'
                ],
        correctAnswer: 1,
    },
    { 
        question: 'What does HTML stand for?', 
        answers: [
                    'A. HyperText Markup Language', 
                    'B. HyperText Markup Link', 
                    'C. HyperText Marked Language', 
                    'D. None of the Above '
                ],
        correctAnswer: 0,
    },
    {
        question: 'Which of the options is the correct "for loop" syntax? ', 
        answers: [
                    'A. for ([initialExpression]; [conditionalExpression]) {}',
                    'B. for ([initialExpression]; [incrementExpression]; [conditional Expression}) {}', 
                    'C. for ([conditionalExpression]; [initialExpression]; [incrementExpression}) {}', 
                    'D. for ([initialExpression]; [conditionalExpression]; [incrementExpression}) {}'
        ],
        correctAnswer: 3,
    }
];
var i = 0;
var showQuestion = function(i){
        questionEl.innerHTML = questions[i].question;
        buttonA.innerHTML = questions[i].answers[0];
        buttonB.innerHTML = questions[i].answers[1];
        buttonC.innerHTML = questions[i].answers[2];
        buttonD.innerHTML = questions[i].answers[3];
}


var checkAnswer = function(choice){
    if(choice === questions[i].correctAnswer) {
        score++;
        checkAnswerEl.innerHTML = 'Correct!';
    }
    else {
        checkanswerEl.innerHTML = 'Wrong!';
    }
    document.querySelector("#line").className = "line";
    document.querySelector("#checkanswer").className = "checkanswer";
    i++;
    setTimeout(function() {
        //remove class
        document.querySelector("#line").remove("line");
        document.querySelector("#checkanswer").remove("checkanswer");
        showQuestion(i);
    
    }, 1000);
}



window.onload = function(){
    divContainerEl.style.display = 'none';
}

startButtonEl.addEventListener("click", function(){
    openerEl.style.display = 'none';
    divContainerEl.style.display = 'initial';
    startTimer();
    showQuestion(i);
}
)

var startTimer = function (){
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