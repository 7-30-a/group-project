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
    new Question("What was the 1st Disney Princess?",
     ["Sleeping Beauty", "Snow White", "Cinderella", "Mulan"], "Snow White"),
    new Question("What is the longest Disney Movie?", 
    ["Pinoccio", "The Lion King", "Fantasia", "The Little Mermaid"], "Fantasia"),
    new Question("Which is condisered the most popular Disney movie?",
     ["Alice in Wonderland", "Pocahauntes", "Sleeping Beauty", "Aladdin"], "Alice in Wonderland"),
    new Question("Which Disney Princess is the youngest?", 
    ["Jasmine", "Sleeping Beauty", "Cinderella", "Snow White"], "Snow White"),
    new Question("Where does Cinderlla take place?", 
    ["Wales", "England", "France", "Italy"], "France"),
];
// create quiz
var quiz = new Quiz(questions);
// display quiz
populate();