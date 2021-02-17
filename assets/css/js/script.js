//Set query selector variables
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
var form = document.querySelector("form");
var winnerTitle = document.querySelector("#winner-title");
var userInitials = document.getElementById("high-score");
var submitBtn = document.getElementById("submit");
var userResults = document.getElementById("user-results");
var scoreList = document.getElementById("list-scores");
var noInput = document.getElementById("not-initials");

//Set other variables
var secondsLeft = 75;
var currentQuestion = 0;
var score = 0;
var highScores = [];
var timer;


//Load local storage of previous scores

//Create listener for view highscores button
// winResults.style.display = "none";

//Setting JSON for highscores
// if (JSON.parse(localStorage.getItem("score")) !== null) {
//     highScores = JSON.parse(localStorage.getItem("score"));
// } 

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
    lostResults.style.display = "block";
    gameLoser.textContent = "Game Over You Lose";
    playAgain.textContent = "Play Again?";
}

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

// submitBtn.addEventListener("click", toHighScores);
// function saveScore() {

//     var newScore = {
//         initials: userInitials.nodeValue,
//         highscore: score
//     };
//     console.log(newScore);
//     highScores.push(newScore);
//     console.log(highScores);
//     localStorage.setItem("scores", JSON.stringify(highScores));
// }

function saveScore() {
    var newScore = {
        initials: userInitials.value,
        highscore: score
    };
    console.log(newScore);
    window.localStorage.setItem("newScore", JSON.stringify(newScore));
}

submitBtn.addEventListener("click", function() {
    window.localStorage.href = "highscores.html";
});



function renderScores(){
    scoreList.textContent = userInitials.value + score;

    for (var i = 0; i < highScores.length; i++) {
        var userScore = highScores[i];

        var li = document.createElement("li");
        li.textContent = userScore;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    }
}

    // var storedScores = JSON.parse(localStorage.getItem("highScores"));

    // if (storedScores !== null) {
    //     highScores = storedScores;
    // }



// function saveScore(){
//     userInitials.value = "";

//     enterScore.addEventListener("click", function (){
//         if (userInitials.value === "") {
//             noInput.textContent = "Please Enter Initials";

//         } else {
//            var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
//            var newHighScore = {
//                initials: userInitials.value,
//                score: score
//            };

//            savedScores.push(newHighScore);
//            localStorage.setItem("savedScores", JSON.stringify(savedScores));
//         }
//     });


// }


//How to save highscores
// enterScore.addEventListener("click", function (event){
//     event.preventDefault();

//     var userInput = userInitials.value;
//     score = secondsLeft;





//     localStorage.setItem("newScore", JSON.stringify(newScore));

//     var lastScore = localStorage.getItem("newScore");

//     console.log("lastScore", jSON.parse(lastScore));
// });

// function renderScore() {
//     var lastScore = JSON.parse(localStorage.getItem("newScore"));
//     if (lastScore !== null) {
//         userInitials.textContent = score + userInitials.value;
//     }
// }









