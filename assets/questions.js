// start button that includes timer 60 secs 
// main question 
// series of questions
// variable to hold correct answers for highscore / adds 10 points
// function that deducts timer by 10 secs if answer is incorrect
// Navigate to next page once question is answered 
// Feedback mechanism that alerts user if they are correct 
// select all relevant elements

var highscores = document.querySelector('.scores');
var timer = document.querySelector('.timer');
var startButton = document.querySelector('.start');
var questionTitle = document.querySelector('#question-title');
var question = document.querySelector('choices'); 
var endScreen = document.querySelector('end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials'); 
var feedback = document.querySelector('#feedback');

console.log(finalScore);
