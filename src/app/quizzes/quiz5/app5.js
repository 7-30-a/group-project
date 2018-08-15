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
    new Question("What country did King Aruthur rule?",
     ["Brittan", "France", "Sweden", "Russia"], "Brittan"),
    new Question("Which wizard helped Aruthr?", 
    ["Harry Potter", "Merlin", "Gandalf", "Harry Dresdon"], "Merlin"),
    new Question("What was the name of his sword?",
     ["Joe", "Lancelot", "Excalibur", "Camalot"], "Excalibur"),
    new Question("Which shape was his table?", 
    ["Round", "Square", "Rectalnge", "Pentagram"], "Round"),
    new Question("What was the name of his queen?", 
    ["Morgan", "Circe", "Mordred", "Geniviere"], "Geniviere"),
];
// create quiz
var quiz = new Quiz(questions);
// display quiz
populate();