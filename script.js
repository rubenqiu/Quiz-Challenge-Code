//elements
var startbutton=document.querySelector (".startbutton button");
var correct= document.querySelector(".correct")
var correct= document.querySelector(".correct")
var timerElement= document.querySelector(".correct")
var wordBlank= document.querySelector(".wordblanks")

let questions = [
{
    question:"1+1=",
    choice1:"2",
    choice2:"3",
    choice3:"4",
    choice4:"5"
}

]
// startbutton.onclick=(){
//     quizinstbox.classList.remove("startquiz")
//     .classList.add("")
// }

function init(){
    getWins();
    getLosees()
}
function startQuiz(){
    isWin=false
    timerCounter=60;
    renderBlanks()
    startTimer();
}

function endGame() {
    wordBlank.textContent="All Done"
}

function startTimer(){
    timer=setInterval( function{
        timerCount--;
        timerElement.textContent=timerCount

    })
}