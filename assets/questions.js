// start button that includes timer 60 secs 
// main question 
// series of questions
// variable to hold correct answers for highscore / adds 10 points
// function that deducts timer by 10 secs if answer is incorrect
// Navigate to next page once question is answered 
// Feedback mechanism that alerts user if they are correct 
// select all relevant elements

var highscores = document.querySelector('.scores');
var timer = document.querySelector('#time');
var startButton = document.querySelector('.start');
var revealQuestion = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var question = document.getElementById('choices'); 
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials'); 
var feedback = document.querySelector('#feedback');

console.log(finalScore);


// append questions (1)

questionTitle.textContent = "Who created Javascript?"

// append series of questions (2)

Option1 = document.createElement("button"); 
Option1.textContent = "Brendan Eich"

Option2 = document.createElement("button"); 
Option2.textContent = "Bill Gates"

Option3 = document.createElement("button"); 
Option3.textContent = "Elon Musk"

Option4 = document.createElement("button"); 
Option4.textContent = "John Carmack"

// Appends questions to div with Id of 'choices' 
question.appendChild(Option1);
question.appendChild(Option2);
question.appendChild(Option3);
question.appendChild(Option4);




