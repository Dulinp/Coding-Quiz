//Set query selector variables
var highScores = document.querySelector("#high-scores");
var timerElm = document.querySelector("#time");
var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#starting-screen");
var questionsDiv = document.querySelector("#questions");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var rightWrong = document.getElementById("right-wrong");
var answerOptions = document.querySelectorAll(".answer-option");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
//Set other variables
var secondsLeft = 75;
var currentQuestion = 0;


//Load local storage of previous scores

//Create listener for view highscores button


//Create function for userHighScores



//Timer Funcgtion
function setTimer() {
    var timerInterval = setInterval(function () {
        if (secondsLeft !== 0) {
        secondsLeft--;
        timerElm.textContent = "time: " + secondsLeft;

        }else {secondsLeft === 0
            clearInterval(timerInterval);

        }
    }, 1000);
    questionStart();
}

//Target start button on click to hide, start quiz, and start timer
startButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    setTimer();
});

//Timer countdown starts

//Function for presenting questions
function questionStart() {
    if (currentQuestion < questions.length) {
        questionTitle.textContent = questions[currentQuestion].title;

        for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
            answerOptions[i].textContent = questions[currentQuestion].choices[i];
            questionChoices.setAttribute("data-id", i);
        }

    } else {questionsDiv.style.display = "none";
    }
}

//Function to go to the next question
function nextQuestion() {
    currentQuestion++;
}

//Function for user to select answer, if wrong deducting time, and going through the questions
function answerOptionSelected(event) {
    event.stopPropagation();

    if (this.textContent === questions[currentQuestion].answer) {
        rightWrong.textContent = "Correct!";
        nextQuestion();
        questionStart();

    }else {this.textContent !== questions[currentQuestion].answer
        rightWrong.textContent = "Wrong!";
        secondsLeft = (secondsLeft - 15);
        nextQuestion();
        questionStart();
    }
}


    //Event listeners for each answer option
    option1.addEventListener("click", answerOptionSelected);
    option2.addEventListener("click", answerOptionSelected);
    option3.addEventListener("click", answerOptionSelected);
    option4.addEventListener("click", answerOptionSelected);

    //Function for game ending for winner
    // function gameOver() {
    //     if(currentQuestion > questions.length{
    //     questionsDiv.style.display = "none";

    //     }else {

    //     }


    // }




