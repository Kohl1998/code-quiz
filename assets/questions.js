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


var Questions =  [
    {
    question: "who created Javascript?" , 
    choices: [
         "Brendan Eich",
         "Bill Gates",
         "Elon Musk",
         "John Doe"
    ], 
    Answer: "Brendan Eich"
}, 
    {question: "How do you write an alert message?", 
    choices: [
         "alert();", 
         "confirm();",
         "prompt();",
        "function(){};"
    ],
     Answer: "alert();"
    }, 
    {
    question: "What does this sign mean ===", 
    choices: [
         "Stricly not equal too",
         "Equal in value/type", 
         "Greater than",
         "Less than",
    ], Answer: "Equal in value/type"}, 
    {
    question: "How do you mean comments in HTML?",
    choices: [
         "//",
         "/**/",
         "<!--->",
    ],
    Answer: "<!--->"}
]
