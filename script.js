//elements
var startbutton=document.querySelector (".startbutton button");
var correct= document.querySelector(".correct")
var incorrect= document.querySelector(".incorrect")
var timerElement= document.querySelector(".timerElement")
var wordBlank= document.querySelector(".wordblanks")
var score=document.querySelector(".Score")

var scorecounter= 0;

var timer;
var timerCount;

var choices=["choice1", "choice2", "choice3", "choice4"]


function init(){
    getScore();
}

//starts quiz when the start quiz button is clicked
function startQuiz(){
   
    timerCounter=60;
    renderBlanks()
    startTimer();
}
//the endGame function triggers timer reaches 0
function endGame() {
    wordBlank.textContent="All Done";
    scoreCounter++;
    setScore();
}



function startTimer(){
    timer=setInterval( function{
        timerCount--;
        timerElement.textContent=timerCount;
        if (timerCount>0){

        }
        if (timerCount===0){
            endGame
        }

    },1000);
}