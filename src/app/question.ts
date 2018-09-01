export class Question {
   
    quizId: number;
    question: string;
    choices: string[];
    correct: string;
   
    constructor(id, question, choices, correct){
      this.quizId = id;
      this.question = question;
      this.choices = choices;
      this.correct = correct;
    }
   
    checkChoice(choices) {
      return this.correct === choices;
    }
  }