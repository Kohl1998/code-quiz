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


var Questions =  [{
    Question1: "who created Javascript?" , 
    choices: {
        A: "Brendan Eich",
        B: "Bill Gates",
        C: "Elon Musk",
        D: "John Doe"
    }, 
    Answer: 'A', 
    Question2: "How do you write an alert message?", 
    choices: {
        A: "alert();", 
        B: "confirm();",
        C: "prompt();",
        D: "function(){};",
    }, Answer: 'A', 
    Question3: "What does this sign mean ===", 
    choices: {
        A: "Stricly not equal too",
        B: "Equal in value/type", 
        C: "Greater than",
        D: "Less than",
    }, Answer: 'B', 
    Question4: "How do you mean comments in HTML?",
    choices: {
        A: "//",
        B: "/**/",
        C: "<!--->",
    }, Answer: 'C'
} 
]