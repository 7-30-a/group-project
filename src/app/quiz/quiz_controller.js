// QUIZ 1 FUNCTIONALITY
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(Answer) {
    if(this.getQuestionIndex().isCorrectAnswer(Answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

// QUIZ 2 FUNCTIONALITY
function Quiz2(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz2.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz2.prototype.guess = function(Answer) {
    if(this.getQuestionIndex().isCorrectAnswer(Answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz2.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

// QUIZ 3 FUNCTIONALITY
function Quiz3(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz3.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz3.prototype.guess = function(Answer) {
    if(this.getQuestionIndex().isCorrectAnswer(Answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz3.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

// QUIZ 4 FUNCTIONALITY
function Quiz4(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz4.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz4.prototype.guess = function(Answer) {
    if(this.getQuestionIndex().isCorrectAnswer(Answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz4.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

// QUIZ 5 FUNCTIONALITY
function Quiz5(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz5.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz5.prototype.guess = function(Answer) {
    if(this.getQuestionIndex().isCorrectAnswer(Answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz5.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

// QUIZ 6 FUNCTIONALITY
function Quiz6(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz6.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz6.prototype.guess = function(Answer) {
    if(this.getQuestionIndex().isCorrectAnswer(Answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz6.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

// QUIZ 7 FUNCTIONALITY
function Quiz1(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz7.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz7.prototype.guess = function(Answer) {
    if(this.getQuestionIndex().isCorrectAnswer(Answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz7.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

// QUIZ 8 FUNCTIONALITY
function Quiz8(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz8.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz8.prototype.guess = function(Answer) {
    if(this.getQuestionIndex().isCorrectAnswer(Answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz8.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

// QUIZ 9 FUNCTIONALITY
function Quiz9(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz9.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz9.prototype.guess = function(Answer) {
    if(this.getQuestionIndex().isCorrectAnswer(Answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz9.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}