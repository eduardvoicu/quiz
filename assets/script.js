// Storing references into variables for JS
var quizContainer = document.getElementById("JSquiz");
var resultsContainer = document.getElementById("JSresults");
var startButton = document.querySelector(".start_quiz_button");
var quitButton = document.querySelector(".quit")
var startTimer = document.querySelector(".timer");
var rulesTitle = document.querySelector(".rules_title");
var rulesList = document.querySelector(".rules_list");
var quizQ = document.querySelector(".quizQuestions");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var showAnswersCorrect = document.querySelector("#showAnswersCorrect");
var showAnswersWrong = document.querySelector(".showAnswersWrong");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var answersTracker = " ";
var currentQuestion = 0;
var correctAnswer = 0;
var score;
var jsQuestions = [
  {
    question: "Question 1?",
    answers: ["ONE", "2", "3", "4"],
    
    correctAnswer: "1",
  },
  {
    question: "Question 2?",
    answers: ["1", "two", "3", "4"],
    
    correctAnswer: "2",
  },
  {
    question: "Question 3?",
    answers: ["1", "2", "3", "4"],
      
    correctAnswer: "3",
},
  {
    question: "Question 4?",
    answers: ["1", "2", "3", "4"],
    
    correctAnswer: "4",
  },
];

choice1.addEventListener("click", checkAnswers);
choice2.addEventListener("click", checkAnswers);
choice3.addEventListener("click", checkAnswers);
choice4.addEventListener("click", checkAnswers);

// Functions for JavaScript Starting Quiz

startButton.addEventListener('click', startQuiz, startTimer); function startQuiz() {

  // Initializing Content. Hide rules, start timer, show first question. We have LIFT OFF!

  startButton.classList.add("hide");
  rulesTitle.classList.add("hide");
  rulesList.classList.add("hide");
  quizQ.classList.remove("hide");
//   startTimer.classList.remove("hide");

  
//   const output = [];
  var question = jsQuestions[currentQuestion];
  questionEl.textContent = question.question
  // Working on adding creating individual question logging
  console.log(question.answers);
// //   for(var i=0; i<question.answers.length; i++) {
//     //   var buttonAnswersEl = document.createElement("button");
//     //   buttonAnswersEl.textContent = question.answers[i];
//     //   buttonAnswersEl.setAttribute("onClick", "checkAnswers()")
//     //   answersEl.append(buttonAnswersEl);
//  }

    
}

// This function will check all the answers, store the user's content and trigger any penalization actions
// for wrong answ÷er.

function checkAnswers() {
       
        if(output == jsQuestions[currentQuestion].answer){
            textContent.showAnswersCorrect="correct"
            updateAnswersTracker("correct")
            score++
        }
        else {
            display.textContent.showAnswersWrong="wrong"
            updateAnswersTracker("wrong")
        }
        disableClick();
    }




//TIME COUNTDOWN TIMER
const startingMinutes = 1;

function startTimer() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      startTimer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      startTimer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      startTimer.textContent = "Time's up!";
      results();
    }
  }, 1000);
}

// Event listener for showing quiz results once user clicks on submit quiz/show results
// submitButton.addEventListener('click', showResults);
// startButton.addEventListener('click', startQuiz, startTimer);
quitButton.addEventListener('click', endQuiz);
