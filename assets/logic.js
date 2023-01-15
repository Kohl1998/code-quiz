// if statements to validate user's answer 
// feedback mechanism to alert user on if answer is correct or incorrect
// variable to hold correct answers for highscore / adds 10 points
// function that deducts timer by 10 secs if answer is incorrect
// Navigate to next page once question is answered 
// Feedback mechanism that alerts user if they are correct 

var pageWrapper = document.querySelector('.start')
var highscores = document.querySelector('.scores');
var timer = document.querySelector('#time');
var startButton = document.querySelector('#start');
var revealQuestion = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var question = document.querySelector('choices'); 
var endScreen = document.querySelector('end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials'); 
var feedback = document.querySelector('#feedback');

var seconds = 60;
timer.textContent = 60;

var userScore = 0;


// create event listener for start button
startButton.addEventListener("click",  function () {
    // removes page wrapper
pageWrapper.setAttribute("style", "display: none;");
showQuestions();
startTimer ();
});


function showQuestions () {

}

function startTimer () {
    
}

// create function for question 
// create function for timer
