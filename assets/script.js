var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
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
    // qBtn.addEventListener needs to hide until the index reaches the end of the questions or the time runs out.
    // the timer needs to start
    // the scorebug needs to  become visible.
}

function renderQuestion(){
var activeQ = qList[index];
if (index === (qList.length-1)){
    // set the quiz button to visisble
    // store correct answers, wrong answers, and score in the local storage
    // take the user to the score page
}
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
    correctAns++;
    changeQuestion();
    // display right for a few seconds
    }
    else {
    wrongAns++;
    changeQuestion();
    // display wrong for a few seconds
    }
}

function changeQuestion(){
    index++;
    renderQuestion();
}

function wrong(){
    // set a timer and display wrong for a few seconds.
}

function correct(){
    // set a timer and display correct for a few seconds.
}

function endQuiz(){

}


choice1.addEventListener('click', checkQuestion);
choice2.addEventListener('click', checkQuestion);
choice3.addEventListener('click', checkQuestion);
choice4.addEventListener('click', checkQuestion);


// each question needs a name and then 4 possible answers mixed with booleans
// what if they are named one, two, three, etc. Have a 'name' property, and then a series of answers.
// Then i have an iterating number that pulls an items name and the other four properties.
// But where am I storing the text? Can I just pull an objects, like, 3rd property?
// object.keys would give me an array of the property names.
// object.keys would let me print the choices and then I could run their choices against the original object. I'd just have to unshift each array before printing it. 
// make an array of arrays, each array has 4 objects. each object has the questions and the true/false value of that answer. 

// function to change the question when they click on an answer.
// function to render the new question
// function to check their answer against the question and increase their rights or wrongs
// function for the end of the quiz. If time runs out or if they finish the quiz. Change text and layout where necessary and put a button for them to finish the quiz. Use the button that started the quiz but with a different event listener. 
// can I make two variables and then, at the end of the quiz, store those in local storage and after changing the page pull the data from them and use it on the score board.

