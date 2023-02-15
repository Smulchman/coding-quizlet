// these are the document elements that are referred to throughout the script
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");

var timerEl = document.querySelector(".timer-el");
var scoreEl = document.querySelector(".score-el");
var stateEl = document.querySelector(".answer-state");
var choicesEl = document.querySelector(".choices")

var qBtn = document.querySelector(".btn")

// these are the questions
var q1 = [
    {name: "What was logged in the console when this quiz began?"},
    {ans: "It's time to duel!", truth: "false"},
    {ans: "You'll never defeat me!", truth: "false"},
    {ans: "Good luck, you fool!", truth: "false"},
    {ans: "The game is afoot!", truth: "true"}
]

var q2 = [
    {name: "Which of these is not a primitive data type in Javascript?"},
    {ans: "null", truth: "false"},
    {ans: "boolean", truth: "false"},
    {ans: "string", truth: "false"},
    {ans: "function", truth: "true"}
]

var q3 = [
    {name: "Which of the following comparitors is checking to see if two items are not strictly equal?"},
    {ans: "=!=", truth: "false"},
    {ans: "!==", truth: "true"},
    {ans: "==!", truth: "false"},
    {ans: "!", truth: "false"}
]

var q4 = [
    {name: "One of these items has an attribute value being set to true. Which one is it?"},
    {ans: "This one!", truth: "false"},
    {ans: "Totally this one, for sure!", truth: "false"},
    {ans: "It's not this one, don't waste your time!", truth: "false"},
    {ans: "Here, right here, this one.", truth: "true"}
]

// this array stores the questions
var qList = [q1, q2, q3, q4];


var index = -1;
var correctAns = 0;
var wrongAns = 0;
var score = 0;
var secondsLeft = 60;
var oneSecs = 1;

function startQuiz(){
    console.log("the game is afoot!")
    choicesEl.style.display = 'block';
    qBtn.style.display = 'none';
    scoreEl.style.display = 'block';
    setTime();
    changeQuestion();
}

function renderQuestion(){
var activeQ = qList[index];
for (var i = 0; i < 5; i++) {
    if (i === 0){
        document.querySelector(".questionHere").textContent= activeQ[i].name;
    }
    else{
        document.querySelector(".choice" + i).textContent= activeQ[i].ans;
        document.querySelector(".choice" + i).setAttribute("truth", activeQ[i].truth);
    }
   }
}

// this function checks to see if the user answered correctly and activates any time a user clicks on one of the available answer choices
function checkQuestion(event){
    var element = event.target;
    console.log(element.getAttribute("truth"))
    if (element.getAttribute("truth") === "true"){
        correct();
        changeQuestion();
    }
    else {
        wrong();
        changeQuestion();
    }
}

// this question changes index position unless the user is on the last question
function changeQuestion(){
    if (index === (qList.length-1)){
        endQuiz();
    }
    else {
        index++;
        renderQuestion();
    }
}

// this function activates when the user answers incorrectly
function wrong(){
    wrongAns++;
    secondsLeft -= 10;
    stateEl.textContent = 'Wrong!';
    // update global timer
    var secondInterval = setInterval(function() {
        oneSecs--;
        if(oneSecs === 0) {
            clearInterval(secondInterval);
            // set the element displaying correct to be empty;
            stateEl.textContent = '';
            oneSecs = 1;
        }
      }, 1000);
}

// this function activates when the user answers correctly
function correct(){
    correctAns++;
    score = (correctAns * 10);
    scoreEl.textContent = score;
    stateEl.textContent = 'Correct!';
    // set a timer and display correct for a few seconds.
    var secondInterval = setInterval(function() {
        oneSecs--;
        if(oneSecs === 0) {
            clearInterval(secondInterval);
        // set the element displaying correct to be empty;
            stateEl.textContent = '';
            oneSecs = 1;
        }
      }, 1000);
}

function endQuiz(){
    // I considered having time effect the score: score = (score + (secondsLeft * .1));
    localStorage.setItem("recentScore", JSON.stringify(score));
    window.location.replace("https://smulchman.github.io/coding-quizlet/scoreboard");
    // takes user to the github page for the scoreboard html file
}

// a function to track time over the course of the entire quiz
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }

// populating the event listeners on all the clickable items
choice1.addEventListener('click', checkQuestion);
choice2.addEventListener('click', checkQuestion);
choice3.addEventListener('click', checkQuestion);
choice4.addEventListener('click', checkQuestion);

qBtn.addEventListener('click', startQuiz);