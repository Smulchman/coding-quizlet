var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");

var timerEl = document.querySelector(".timer-el");
var scoreEl = document.querySelector(".score-el");
var stateEl = document.querySelector(".answer-state");
var choicesEl = document.querySelector(".choices")

var qBtn = document.querySelector(".btn")


var q1 = [
    {name: "This is question 1!"},
    {ans: "text1", truth: "false"},
    {ans: "text1", truth: "true"},
    {ans: "text1", truth: "false"},
    {ans: "text1", truth: "false"}
]

var q2 = [
    {name: "This is question 2!"},
    {ans: "text2", truth: "false"},
    {ans: "text2", truth: "true"},
    {ans: "text2", truth: "false"},
    {ans: "text2", truth: "false"}
]

var q3 = [
    {name: "This is question 3!"},
    {ans: "text3", truth: "false"},
    {ans: "text3", truth: "false"},
    {ans: "text3", truth: "false"},
    {ans: "text3", truth: "true"}
]

var q4 = [
    {name: "This is question 4"},
    {ans: "text4", truth: "false"},
    {ans: "text4", truth: "false"},
    {ans: "text4", truth: "false"},
    {ans: "text4", truth: "true"}
]

var qList = [q1, q2, q3, q4];


var index = -1;
var correctAns = 0;
var wrongAns = 0;
var score = 0;
var secondsLeft = 60;
var oneSecs = 1;

function startQuiz(){
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

function changeQuestion(){
    if (index === (qList.length-1)){
        // qBtn.style.display = 'initial';
        // qBtn.textContent = 'End Quiz';
        // store correct answers, wrong answers, and score in the local storage
        // take the user to the score page
        endQuiz();
    }
    else {
        index++;
        renderQuestion();
    }
}

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
    // score = (score + (secondsLeft * .1));
    localStorage.setItem("recentScore", JSON.stringify(score));
    window.location.replace("https://smulchman.github.io/coding-quizlet/scoreboard");
    // take user to scoreboard page
}

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


choice1.addEventListener('click', checkQuestion);
choice2.addEventListener('click', checkQuestion);
choice3.addEventListener('click', checkQuestion);
choice4.addEventListener('click', checkQuestion);

qBtn.addEventListener('click', startQuiz);