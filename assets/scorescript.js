// form entry for initials
// objects printed in list items
// make button go away after saving a score
// display their score on the page somewhere
// index stored in local storage that will iterate as users save scores.

var initialBox = document.querySelector("#initials");
var newScoreBox = document.querySelector(".score-new");
var sBtn = document.querySelector(".btn");
var lastScore = JSON.parse(localStorage.getItem("recentScore"));
var index = getIndex();

newScoreBox.textContent = lastScore;

// the index variable is intended to be a value tracking the amount of scores saved that is preserved in the local storage
function getIndex(){
    if (localStorage.getItem("index") === null){
        return 0;
    }
    else {
        var tempIndex = localStorage.getItem("index");
        return tempIndex;
    }
}

// this function is intended to add as many list elements as there are scores saved in the local storage
function renderScores() {
    for (var i = 0; i < index; i++) {
        var score = document.createElement('li');
        score.textContent = JSON.parse(localStorage.getItem("saveScore" + i));
        document.body.div.div.section.ol.appendChild(score)
    }
}



// this function is to 
function saveScore() {
    // add a list element for the new saved score
    var savedScore = {
      initials: initialBox.value.trim(),
      score: lastScore
    };
    // set button and initial box and score box to disappear
    index++;
    localStorage.setItem(("saveScore" + index), JSON.stringify(savedScore));
    localStorage.removeItem("recentScore");
    localStorage.setItem(("index"), index);
    sBtn.style.display = 'none';
    initialBox.style.display = 'none';
    lastScore.textContent = 'Refresh the page to see your score!'
  }

//   event listener for click on btn to run savescore
sBtn.addEventListener('click', saveScore);

// this function exists to populate the score list upon loading the page
function init() {
    renderScores();
  }


init();
