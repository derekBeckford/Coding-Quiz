var finaleEl = document.querySelector("#finale");
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
var finalpageEl = document.querySelector("#finalpage");
var finalScoreEl = document.querySelector("#scorefinal");
var submitButtonEl = document.querySelector("#submit");
var initialFieldEl = document.querySelector("#initials")
var resetButtonEl = document.querySelector("#resetbutton");
var highscoresEl = document.querySelector("#highscores");
var highscoreItemEl = document.querySelector("#highscoreitem");


var i = 0;
var score = 0;
var timeLeft = 60;
var correct;
var interval;

var questions = [{
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

var showQuestion = function (i) {
    if (i < questions.length) {
        questionEl.innerHTML = questions[i].question;
        buttonA.innerHTML = questions[i].answers[0];
        buttonB.innerHTML = questions[i].answers[1];
        buttonC.innerHTML = questions[i].answers[2];
        buttonD.innerHTML = questions[i].answers[3];
    } else {
        finaleEl.textContent = "All done!";
        finalScoreEl.textContent = "Your score is " + score;
        finalpageEl.style.display = 'initial';
        clearInterval(interval);
        divContainerEl.style.display = 'none';
    }
}

//checking player answer logic

var checkAnswer = function (choice) {
    buttonA.disabled = true;
    buttonB.disabled = true;
    buttonC.disabled = true;
    buttonD.disabled = true;
    if (choice === questions[i].correctAnswer) {
        //corect anaswer
        score++;
        checkanswer.innerHTML = 'Correct!';
    } else {
        //wrong answer decrease time by 10 seconds for a wrong answer
        timeLeft = timeLeft - 10;
        checkanswer.innerHTML = 'Wrong!';
    }
    //add class when to show if the answer is right or wrong 
    document.querySelector("#line").className = "line";
    document.querySelector("#checkanswer").className = "checkanswer";
    i++;
    setTimeout(function () {
        //remove class
        checkanswer.innerHTML = '';
        document.querySelector("#line").classList.remove("line");
        document.querySelector("#checkanswer").classList.remove("checkanswer");
        buttonA.disabled = false;
        buttonB.disabled = false;
        buttonC.disabled = false;
        buttonD.disabled = false;
        showQuestion(i);
    }, 700);
}

//hiding the question and final page when the page loads 
window.onload = function () {
    divContainerEl.style.display = 'none';
    finalpageEl.style.display = 'none';
    highscoresEl.style.display = 'none';
}

//showing the question and hiding the initial start page 
startButtonEl.addEventListener("click", function () {
    openerEl.style.display = 'none';
    divContainerEl.style.display = 'initial';
    startTimer();
    showQuestion(i);
})

//start timer 
var startTimer = function () {
    interval = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        } else {
            // if player runs out of time
            finaleEl.textContent = "Times up!";
            finalScoreEl.textContent = "Your score is " + score;
            divContainerEl.style.display = 'none';
            finalpageEl.style.display = 'initial';
            clearInterval();
        }
    }, 1000);
}

//store high score

submitButtonEl.addEventListener("click", function () {
    if (initialFieldEl.value.length < 2 || initialFieldEl.value.length > 2) {
        alert("Initials are just two letters! Try again");
    } else if (initialFieldEl.value === "") {
        alert("Initials cannot be blank")
    } else {
        saveHighScore();
    }
})

var saveHighScore = function () {
    var maxHighscores = 10;
    var highscores = JSON.parse(localStorage.getItem("highscores")) ?? [];
    var currentPlayer = initialFieldEl.value.trim().toUpperCase();
    var newScore = {
        currentPlayer,
        score
    }

    highscores.push(newScore);

    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.splice(maxHighscores);

    localStorage.setItem("highscores", JSON.stringify(highscores));

    highscoresEl.style.display = 'initial';
    finalpageEl.style.display = 'none';


    for (var i = 0; i < JSON.parse(localStorage.getItem("highscores")).length; i++) {
        highscoreItemEl.innerHTML += "<li>" + JSON.parse(localStorage.getItem("highscores"))[i].currentPlayer + ': ' + JSON.parse(localStorage.getItem("highscores"))[i].score + "</li>";
    }
}


resetButtonEl.addEventListener("click", function () {
    highscoresEl.style.display = "none";
    openerEl.style.display = "";
    timerEl.innerHTML = "Timer: Press Start";
    i = 0;
    score = 0;
    timeLeft = 60;
})