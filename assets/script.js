// var choice1 = document.querySelector(".choice1");
// var choice2 = document.querySelector(".choice2");
// var choice3 = document.querySelector(".choice3");
// var choice4 = document.querySelector(".choice4");

var timerEl = document.querySelector(".timer-el");
var scoreEl = document.querySelector(".score-el");
var stateEl = document.querySelector(".answer-state");
var choicesEl = document.querySelector(".choices")

var qBtn = document.querySelector(".btn")


var q1 = [
    {name: "The question goes here!"},
    {ans: "text", truth: false},
    {ans: "text", truth: true},
    {ans: "text", truth: false},
    {ans: "text", truth: false}
]

var q2 = [
    {name: "The question goes here!"},
    {ans: "text", truth: false},
    {ans: "text", truth: false},
    {ans: "text", truth: false},
    {ans: "text", truth: true}
]

var q3 = [
    {name: "The question goes here!"},
    {ans: "text", truth: false},
    {ans: "text", truth: false},
    {ans: "text", truth: false},
    {ans: "text", truth: true}
]

var q4 = [
    {name: "The question goes here!"},
    {ans: "text", truth: false},
    {ans: "text", truth: false},
    {ans: "text", truth: false},
    {ans: "text", truth: true}
]

var qList = [q1, q2, q3, q4];


var index = 0;
var correctAns = 0;
var wrongAns = 0;
var score = 0;
var secondsLeft = 60;

function startQuiz(){
    // do i need to set the choice blocks to become visible?

    qBtn.style.display = 'none';
    scoreEl.style.display = 'block';
    setTime();
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

function checkQuestion(event){
    var element = event.target;
    if (element.getAttribute("truth")){
        correctAns();
        changeQuestion();
    }
    else {
        wrongAns();
        changeQuestion();
    }
}

function changeQuestion(){
    if (index === (qList.length-1)){
        qBtn.style.display = 'initial';
        qBtn.textContent = 'End Quiz';
        // store correct answers, wrong answers, and score in the local storage
        // take the user to the score page
    }
    else {
        index++;
        renderQuestion();
    }
}

function wrong(){
    wrongAns++;
    // update global timer
    var timerInterval = setInterval(function() {
        secondsLeft--;
        stateEl.textContent = 'Wrong!';
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
        // set the element displaying correct to be empty;
        stateEl.textContent = '';
        }
      }, 2000);
}

function correct(){
    correctAns++;
    score = (score * 10);
    scoreEl.textContent = score;
    // set a timer and display correct for a few seconds.
    var timerInterval = setInterval(function() {
        secondsLeft--;
        stateEl.textContent = 'Correct!';
    
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        // set the element displaying correct to be empty;
            stateEl.textContent = '';
        }
      }, 2000);
}

function endQuiz(){
// take user to scoreboard page
}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }


choice1.addEventListener('click', checkQuestion);
choice2.addEventListener('click', checkQuestion);
choice3.addEventListener('click', checkQuestion);
choice4.addEventListener('click', checkQuestion);

qBtn.addEventListener('click', startQuiz);