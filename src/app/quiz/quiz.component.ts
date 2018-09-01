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
    new Question(1, "What bird has the longest wingspan?", ["Stork", "Swan", "Condor", "Albatross"], "Albatross"),
    new Question(1, "What is the biggest animal that ever lived?", ["Blue Whale", "African Elephant", "Apatosaurus (aka brontosaurus)", "Spinosaurus"], "Blue Whale"),
    new Question(2, "What are female elephants called?", ["Mares", "Sows", "Cows", "Dams"], "Cows"),
    new Question(2, "Which of the following animals sleep standing up?", ["Gorrillas", "Flamingos", "Camels", "Ravens"], "Flamingos"),
    new Question(3, "What is the fastest water animal?", ["Porpoise", "Sailfish", "Flying Fish", "Tuna"], "Sailfish"),
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

