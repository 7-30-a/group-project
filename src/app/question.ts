export class Question {
   
    quizId: number;
    quizTitle: string;
    question: string;
    choices: string[];
    correct: string;
    endCard: string;
    endCardResult: string;
   
    constructor(id,quizTitle, question, choices, correct,endCard,endCardResult){
      this.quizId = id;
      this.quizTitle = quizTitle;
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