function Question(text, choices, Answer) {
    this.text = text;
    this.choices = choices;
    this.Answer = Answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.Answer === choice;
}