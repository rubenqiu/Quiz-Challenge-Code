//elements
var startbutton=document.querySelector (".startbutton");
var correct= document.querySelector(".correct")
var incorrect= document.querySelector(".incorrect")
var timerElement= document.querySelector(".time-left")

var score=document.querySelector(".Score")

var scoreCounter= 0;

var timer;
var timeCount;

var choices=Array.from(document.querySelector(""));


function init(){
    getScore();
}

//starts quiz when the start quiz button is clicked
function startQuiz(){
   
    timeCount=60;
    startTimer();
    nextQuestion();

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
        if (timerLeft>0){

        }
        if (timerLeft===0){
            endGame
        }

    },1000);
}