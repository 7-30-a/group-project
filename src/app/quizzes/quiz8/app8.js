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
    new Question("What snake is most venomous?",
     ["Cobra", "Rattler", "Belcher's Sea snake", "Egyptain Asp"], "Belcher's Sea Snake"),
    new Question("Largest species of snake?", 
    ["Python", "Anaconda", "Megaboa", "African Python"], "Anaconda"),
    new Question("Smallest type of snake?",
     ["Barbados Threadsnake", "Corn Snake", "Miniature Boa", "Corn Snake"], "Barbados Threadsnake"),
    new Question("What is the most common pet snake?", 
    ["Boa", "Python", "Corn snake", "King Snake"], "Corn snake"),
    new Question("What kind of diet do snake have?", 
    ["Carnivores", "Herbavroies", "Omnivories", "Vegans"], "Carnivores"),
];
// create quiz
var quiz = new Quiz(questions);
// display quiz
populate();