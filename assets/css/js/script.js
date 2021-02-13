//Set query selector variables
var highScores = document.querySelector("#high-scores");
var timerElm = document.querySelector("#time");
var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#starting-screen");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices")
//Set other variables
var secondsLeft = 75;
var currentQuestion = 0;
var score = 0;

//Load local storage of previous scores

//Create listener for view highscores button


//Create function for userHighScores



//Timer Funcgtion
function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerElm.textContent = "time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();

        }
    }, 1000);
    questionStart();
}

//Target start button on click to hide, start quiz, and start timer
$(startButton).on("click", function () {
    $(startScreen).hide();
    setTimer();
})

//Timer countdown starts

//Function for questions
function questionStart() {
   if (currentQuestion < questions.length) {
       questionTitle.textContent = questions[currentQuestion].title;
       questionChoices.textContent = questions[currentQuestion].choices;

       for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
         questionChoices = document.createElement("choices");  
       }
} 
}  
        
   

    //Array of questions as objects

    //create function to render the questions


//For answering a question
    //add event listener for click right answer- this leads to alert that is correct and goes to next question

    //if incorrect-this leads to the alert for answer is incorrect and goes to the next question

    //create a function that decreases time by 15 seconds each time an incorrect answer is clicked.

//add function for game over if time runs out before 10 questions are answered
