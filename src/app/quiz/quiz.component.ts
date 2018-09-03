import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Question } from 'src/app/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId = "";
    questions = []
   allQuestions = [
    new Question(1, "This trait best decribes me:", ["Outgoing", "Reserved", "Witty", "Bashful"], "Albatross"),
    new Question(1, "When dealing with a conflict I...", ["Avoid it", "Face it head on", "Try and find a diplomatic solution", "Stir the pot, I love drama!"], "Blue Whale"),
    new Question(1, "Which is the best solution for me:", ["The most logical", "The one that makes everyone happy", "The easiest", "No solution.. mwahaha!"], "Cows"),
    new Question(1, "Do you enjoy talking to people?", ["Yes! Lets chat it up!", "Its alright", "Only in small groups", "I want to live in a cave, alone."], "Flamingos"),
    new Question(1, "How do you approach leadership?", ["I'm always the leader.", "I try not to be a leader but I always end up one.", "I dont lead.", "Im scared to lead."], "Sailfish"),

    new Question(2, "You wish love was more:", ["Simple.. geez", "Logical", "Kind", "Sensual"], "Albatross"),
    new Question(2, "You secretly want the love of your life to have..", ["Good looks", "Money", "Power", "Similar intrests"], "Blue Whale"),
    new Question(2, "Why aren't you married?", ["I dont have time to date", "I pick terrible people", "I find most people mundane.", "I dont want to be married."], "Cows"),
    new Question(2, "What do you hope to have the most in common with your partner?", ["Similar music taste", "Similar goals", "Similar sense of humor", "Similar religious beliefs"], "Flamingos"),
    new Question(2, "What do you look for in a partner?", ["Adventurous", "Intellegent", "Compassionate", "Passionate"], "Sailfish"),

    new Question(3, "When did you last talk to your best friend?", ["Were talking now!", "Yesterday", "Last week", "Uh.. a month or more ago"], "Albatross"),
    new Question(3, "How long have you known them?", ["Since I was born.. almost.", "5+ years", "1-4 years", "Less than a year"], "Blue Whale"),
    new Question(3, "Do you know their birthday?", ["Of course! I know the time too.", "Yup. Month, date and year.", "I know the month, not the date..", "No idea"], "Cows"),
    new Question(3, "Are you friends with their family?", ["I am family.", "Yeah I know a few", "I've heard of them", "What family?"], "Flamingos"),
    new Question(3, "Does he/she consider you to be their best friend?", ["Duh!", "Maybe! I hope so.", "Maybe not.", "Actually, no."], "Sailfish"),

];

    currentQuestion;
  
  checkChoice (choices) {
    if (this.currentQuestion.checkChoice(choices)) {
      this.currentQuestion=this.questions[this.questions.indexOf(this.currentQuestion)+1]
    }
    else {
      this.currentQuestion=this.questions[this.questions.indexOf(this.currentQuestion)+1]
      console.log("NOPE")
    }
  }

  

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.quizId = this.route.snapshot.paramMap.get("id");
      (
        x => x.quizId.toString() === this.quizId
      );
      this.questions = this.allQuestions.filter(x=>x.quizId.toString()==this.quizId)
   this.currentQuestion = this.questions[0];
   });
  }
}

