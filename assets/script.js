var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");

// have a variable store the truth of the clicked item. Then, reference that variable when checking a guess?


var question1 = [
    {name: "The question goes here!"},
    {ans: "text", truth: false},
    {ans: "text", truth: true},
    {ans: "text", truth: false},
    {ans: "text", truth: false}
]

var question2 = [
    {name: "The question goes here!"},
    {ans: "text", truth: false},
    {ans: "text", truth: false},
    {ans: "text", truth: false},
    {ans: "text", truth: true}
]

var qList = [question1, question2];

var index = 0;
var correctAns = 0;
var wrongAns = 0;

function renderQuestion(){
var activeQ = qList[index];
for (var i = 0; i < 5; i++) {
    if (i === 0){
        document.querySelector(".questionHere").textContent=activeQ[i].name;
    }
    else{
        document.querySelector(".choice" + i).textContent=activeQ[i].ans;
        document.querySelector(".choice" + i).setAttribute("truth", activeQ[i].truth)
    }
   }
}

function checkQuestion(){
//  I need an event listener for somone clicking on one of the answers. Then when I run checkQuestion I can see the statues of the truth attribute. 
// Maybe I just add the event listener for each choice individually and then run checkQuestion when clicked and see if it's true or false. 
// after they click in one of the boxes, I'll run change question
}

function changeQuestion(){
    index++;
    renderQuestion();
}

function endQuiz(){

}

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

