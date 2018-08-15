function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
var questions = [
    new Question("What year was color TV come out?", 
    ["1934", "1975", "1968", "1951"], "1951"),
    new Question("What was the 1st music video on MTV?", 
    ["Bohemian Rhapsody", "Beethoven's 5th", "Video Killed the Radio Star", "Peanut-Butter Jelly Time"], "Video Killed the Radio Star"),
    new Question("What show was supposed to feature the 1st inter-racial kiss?", 
    ["Star Trek", "The Golden Girls", "I Love Lucy", "Family Guy"], "Star Trek"),
    new Question("What year did the 1st feature lenght film come out?", 
    ["1901", "1898", "1912", "1906"], "1906"),
    new Question("In what ciy was televison successfuly demonstrated?", 
    ["San Francisco", "New York City", "Chicago", "Austin"], "San Francisco"),
];
// create quiz
var quiz = new Quiz(questions);
// display quiz
populate();