// Storing references into variables for JS
var quizContainer = document.getElementById('JSquiz');
var resultsContainer = document.getElementById('JSresults');
var submitButton = document.getElementById('submit');

// Functions for JavaScript Quiz
function startQuiz(){}
// Function for showing quiz results at the end
function showResults(){}
// Showing the the quiz right away
buildQuiz();
// Event listener for showing quiz results once user clicks on submit quiz/show results
submitButton.addEventListener('click', showResults);

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