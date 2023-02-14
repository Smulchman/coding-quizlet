// var choice1 = document.querySelector(".choice1");
// var choice2 = document.querySelector(".choice2");
// var choice3 = document.querySelector(".choice3");
// var choice4 = document.querySelector(".choice4");

var timerEl = document.querySelector(".timer-el");
var scoreEl = document.querySelector(".score-el");

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
var secondsLeft = 0;

function startQuiz(){
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
        document.querySelector(".choice" + i).setAttribute("truth", activeQ[i].truth)
    }
   }
}

function checkQuestion(event){
    var element = event.target;
    if (element.getAttribute("truth")){
    changeQuestion();
    }
    else {
    changeQuestion();
    }
}

function changeQuestion(){
    if (index === (qList.length-1)){
        qBtn.style.display = 'initial';
        qBtn.textContent = 'End Quiz';
        // store correct answers, wrong answers, and score in the local storage
        // take the user to the score page
        // call this at the 
    }
    else {
        index++;
        renderQuestion();
    }
}

function wrong(){
    wrongAns++;
    // set a timer and display wrong for a few seconds.
    // update global timer
}

function correct(){
    correctAns++;
    score = (score * 10);
    scoreEl.textContent = score;
    // set a timer and display correct for a few seconds.
    var timerInterval = setInterval(function() {
        secondsLeft--;
        // set an element to display 'correct'
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
        // set the element displaying correct to be empty;
        }
      }, 2000);
}

function endQuiz(){

}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 60000);
  }


choice1.addEventListener('click', checkQuestion);
choice2.addEventListener('click', checkQuestion);
choice3.addEventListener('click', checkQuestion);
choice4.addEventListener('click', checkQuestion);

qBtn.addEventListener('click', startQuiz);