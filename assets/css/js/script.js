//Set query selector and element id variables
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
var lostResults = document.querySelector("#loser-results");
var gameLoser = document.querySelector("#loser-screen");
var playAgain = document.querySelector("#play-again");
var winResults = document.querySelector("#winner-results");
var winnerTitle = document.querySelector("#winner-title");
var submitBtn = document.getElementById("submit");
var userResults = document.getElementById("user-results");
var noInput = document.getElementById("not-initials");

//Set other variables
var secondsLeft = 75;
var currentQuestion = 0;
var score = 0;
var timer;


//These hide the winner results, questions, and play again button from the initial page
winResults.style.display = "none";
questionsDiv.style.display = "none";
playAgain.style.display = "none";



//Timer Funcgtion
function setTimer() {
    timer = setInterval(function() {
        if (secondsLeft > 0) {
            secondsLeft--;
            timerElm.textContent = secondsLeft;

        } else if (secondsLeft <= 0) {
            questionsDiv.style.display = "none";
            loserResults();

        } else {
            score = secondsLeft;
            winnerResults();
        }

    }, 1000);
    questionStart();
}

//Target start button on click to hide, start quiz, and start timer
startButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    questionsDiv.style.display = "block";
   
    setTimer();
});

//Function for presenting questions
function questionStart() {
    if (currentQuestion < questions.length) {
        questionTitle.textContent = questions[currentQuestion].title;

        for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
            answerOptions[i].textContent = questions[currentQuestion].choices[i];
            questionChoices.setAttribute("data-id", i);
        }

    } else {
        winnerResults();
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
        score = secondsLeft
        nextQuestion();
        questionStart();

    } else {
        this.textContent !== questions[currentQuestion].answer
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

//Function to show results for game loser
function loserResults() {
    clearInterval(setInterval);
    playAgain.style.display = "block";
    lostResults.style.display = "block";
    gameLoser.textContent = "Game Over You Lose";
    playAgain.textContent = "Play Again?";
}

//Event listener for button click to play quiz again
playAgain.addEventListener("click", function(){
    window.location.href = "index.html";
})

//Event listener for enter button to submint score
submitBtn.addEventListener("click", function() {
    window.localStorage.href = "highscores.html";
});

// Function to show results for winner
function winnerResults() {
    clearInterval(timer);
    questionsDiv.style.display = "none";
    winResults.style.display = "block";
    winnerTitle.textContent = "You Did It!";
    userResults.textContent = "Your score is " + score;

    saveScore();
    // renderScores();
};

















