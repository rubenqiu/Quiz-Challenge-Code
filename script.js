//elements
var startbutton = document.querySelector(".startbutton");
// var correct = document.querySelector(".correct")
// var incorrect = document.querySelector(".incorrect")
var timerElement = document.querySelector(".time-left")

var score = document.querySelector(".score")

var scoreCounter = 0;
var question = document.querySelector(".question")
var timer;
var timerCount;

var choices =Array.from(document.querySelector(".choice"));
var correctAnswers=[];
var incorrectAnswer=[];


// if (val===correctAnswers){
//     question
// }


// function askQuestion(question, index){
//     var questions=prompt(question[0],"");
//     if (answer == number[1]) {
//         alert("correct!");
//         score++;
//         correctAnswers=question;
//     } else{
//         incorrectAnswer.push(index);
//         alert("wrong!");
//     }
    
// }
let currentQuestion={}
let acceptingAnswers=true;
let questionCounter=0
let avaiableQuestions=[]

var questions = [{
    question: "1+1=",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        answer: 1

    },
{
    question: "1+2=",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        answer: 1
},
{
    question: "1+2=",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    answer: 1
},
{
    question: "1+2=",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    answer: 1
},
{
    question: "1+2=",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    answer: 1
},
]



function init() {
    getScore();
}

//starts quiz when the start quiz button is clicked
function startQuiz() {

    timerCount = 60;
    startTimer();
    nextQuestion();

}


//the endGame function triggers timer reaches 0
function endGame() {
    wordBlank.textContent = "All Done";
    scoreCounter++;
    setScore();
}



function startTimer() {
    timerCount = setInterval( function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerLeft <= 0) {
            endGame()
            return;
       
    };
}
)
}
