export class Question {
   
    quizId: number;
    question: string;
    choices: string[];
    correct: string;
    endCard: string;
    endCardResult: string;
   
    constructor(id, question, choices, correct,endCard,endCardResult){
      this.quizId = id;
      this.question = question;
      this.choices = choices;
      this.correct = correct;
      this.endCard = endCard;
      this.endCardResult = endCardResult;
    }
   
    checkChoice(choices) {
      return this.correct === choices;
    }
  }