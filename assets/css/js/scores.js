//Set id variables
var scoreList = document.getElementById("list-scores");
var userInitials = document.getElementById("high-score");
var clearBtn = document.getElementById("clear-scores");


//Global variables
var highScores = [];

//Possible way to render scores to high scores page
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

//Possilbe way to save score to local storage
function saveScore() {
    var newScore = {
        initials: userInitials.value,
        highscore: score
    };
    console.log(newScore);
    window.localStorage.setItem("newScore", JSON.stringify(newScore));
}

clearBtn.addEventListener("click", function (){
    clearScores();
})

//function to clear scores from local storage
function clearScores() {
    localStorage.clear();
}

//Event listner for clear button to clear high scores


//BELOW* are the different types of ways I tried to get local storage to work, but could not figure it out

//Setting JSON for highscores
// if (JSON.parse(localStorage.getItem("score")) !== null) {
//     highScores = JSON.parse(localStorage.getItem("score"));
// } 

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