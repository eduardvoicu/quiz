// Storing references into variables for JS
var quizContainer = document.getElementById('JSquiz');
var resultsContainer = document.getElementById('JSresults');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');
var jsQuestions = [
    {
        question: "Question 1?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        correctAnswer: "a"
    },
    {
        question: "Question 2?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        correctAnswer: "b"
    },
    {
        question: "Question 3?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        correctAnswer: "c"
    },
    {
        question: "Question 4?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        correctAnswer: "d"
    }
];

// Functions for JavaScript Quiz
function startQuiz(){
    // Storing HTML output
    const output = [];
    // Working on adding creating individual question logging
    myQuestion.forEach(
        (currentQuestion, questionNumber) => {

            // creating variable to store list of possible answers
            var answers = [];
            // creating variable for available answers
            for(letter in currentQuestion.answers){

                answers.push(
                    `<label>
                        <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    )
}
quizContainer.innerHTML = output.join('');
// Function for showing quiz results at the end
function showResults(){
    // This allows me to grab the answer containers
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // The let function will let me track the user's choices
    let numCorrect = 0;

    myQuestion.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const sel
    }
    
    )


    // Now the next 2 sections are about getting each question AND identify the choice the user chose
    myQuestion.forEach(correctQuestion, questionNumber) => {
        var answerContainer = answerContainers
    }
}
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