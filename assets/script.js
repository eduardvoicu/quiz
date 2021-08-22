// Storing references into variables for JS
var quizContainer = document.getElementById("JSquiz");
var resultsContainer = document.getElementById("JSresults");
var startButton = document.querySelector(".start_quiz_button");
var startTimer = document.querySelector(".timer");
var rulesTitle = document.querySelector(".rules_title");
var rulesList = document.querySelector(".rules_list");
var quizQ = document.querySelector(".quizQuestions");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var currentQuestion = 0;
var jsQuestions = [
  {
    question: "Question 1?",
    answers: ["1", "2", "3", "4"],
    
    correctAnswer: "1",
  },
  {
    question: "Question 2?",
    answers: ["1", "2", "3", "4"],
    
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

// Functions for JavaScript Quiz
function startQuiz() {
  // Storing HTML output
  startButton.classList.add("hide");
  rulesTitle.classList.add("hide");
  rulesList.classList.add("hide");
  quizQ.classList.remove("hide");
  
  const output = [];
  var question = jsQuestions[currentQuestion];
  questionEl.textContent = question.question
  // Working on adding creating individual question logging
  console.log(question.answers);
  for(var i=0; i<question.answers.length; i++) {
      var buttonAnswersEl = document.createElement("button");
      buttonAnswersEl.textContent = question.answers[i];
      buttonAnswersEl.setAttribute("onClick", "checkAnswers()")
      answersEl.append(buttonAnswersEl);    
 }
}

function checkAnswers() {
    console.log("hello");
}




/* quizContainer.innerHTML = output.join('');
// Function for showing quiz results at the end
function showResults(){
    // This allows me to grab the answer containers
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // The let function will let me track the user's choices
    let numCorrect = 0;

    myQuestion.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
    }
    
    )


    // Now the next 2 sections are about getting each question AND identify the choice the user chose
    myQuestion.forEach((correctQuestion, questionNumber) => {
        var answerContainer = answerContainers
    }
    )};
// Showing the the quiz right away
buildQuiz();
// Event listener for showing quiz results once user clicks on submit quiz/show results
submitButton.addEventListener('click', showResults);










/* let question = [
    {
        "text": "What is 1+10?",
        "options": ["1", "11", "12", "0"],
        "solution": "11"
    },
]

funtion displayQuestion(q) {
    let $text = $('<h3>').text(q["text"]);
    $("#question-div").append($text);

    let opts = q["options"];
    for (let i=0; i<opts.length; i++) {
        let $option = $('<button/>').attr({ value: opts[i], class: 'question-option'});
        $option.text(opts[i])
        $("question-div").append($option);
    }
};

$(document).on("click", ".question-option", function() {
    alert("test")
});

displayQuestion(question[0]); */

// var timeEl = document.querySelector(".time");

// Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();

startButton.addEventListener("click", startQuiz);
