import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Question } from 'src/app/question';
import { Router } from "@angular/router";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId = "";
  points = 0;
    questions = []
   allQuestions = [
     //What Kind Of Taco are You?
    new Question(4, "What are the best kind of Tacos?", ["Hard", "Soft", "Naked", "I don't like tacos..."], "Hard","../../assets/Images/quizes/4/droppedTaco.jpg","You are a... Dropped Taco"),
    new Question(4, "If tacos gave you super powers, what would it be?", ["Fire Breath", "Epic Flatulents", "To able to Stick your hand in your pocket, and pull out a taco", "To be able to Make the best taco ever"], "Fire Breath","../../assets/Images/quizes/4/walkingtaco.gif","You are a... Walking Taco"),
    new Question(4, "Best Taco Topping", ["Cheese", "Tomato", "Sour Cream", "Lettuce"], "Tomato","../../assets/Images/quizes/4/tacoCat.jpg","You are a... Ranbow Taco Cat"),
    new Question(4, "If there was a movie about a Taco, what would the name be?", ["Taco Hell", "Attack of the flying tacos", "It's raining tacos", "Sunny with a chance of tacos"], "It's raining tacos","../../assets/Images/quizes/4/tacoNinja.jpg","You are a... Taco Ninja"),
    new Question(4, "Who would play the lead role, if the lead role was a taco?", ["Jamie Lee Taco", "Jean-Claude Van Taco", "Robert Downey Taco", "Jennifer Love Taco"], "Jean-Claude Van Taco","../../assets/Images/quizes/4/TacoRick.jpg","You are a... Taco Rick!"),

    //What Anime Charecter are you?
    new Question(5, "What is Naruto's lastname?", ["Leaf", "Kishimoto", "Uzumaki", "Hiro"], "Uzumaki","../../assets/Images/quizes/5/animeNoob.jpg","You are a... Anime Noob"),
    new Question(5, "What happens if the fusion dance goes wrong?", ["Your powers fuse with mixed results", "You die", "Nothing happens", "You turn into a fat, powerless blob"], "You turn into a fat, powerless blob","../../assets/Images/quizes/5/RockLee.jpg","You are... Rock Lee"),
    new Question(5, "Haruhara hits Naota with what?", ["Guitar", "Her foot", "Eel", "Her fist"], "Guitar","../../assets/Images/quizes/5/Sinobu.jpg","You are... Sinobu"),
    new Question(5, "For the Death Note to work, you need the persons name and...?", ["Finger prints", "Scrap of clothing", "Face", "location"], "Face","../../assets/Images/quizes/5/YourName.jpg","You are... Mitsuha"),
    new Question(5, "Retsuko, like to relax after work by going to a karaoke bar and singing?", ["Death Metal", "Pop", "Rock", "Techno"], "Death Metal","../../assets/Images/quizes/5/FLCL.jpg","You are... Haruko Haruhara"),
   
    //Adventure?
    new Question(6, "Now deep within a cave, you spot something to your left, you...?", ["Shine your light on it", "Drop everything an run", "Prepare to fight!!!", "Call out"], "Prepare to fight!!!","../../assets/Images/quizes/6/runAway.jpg","Nice try... Cowardly Knight"),
    new Question(6, "Just when you do, it leaps forth. Forcing you to...", ["Hit it with your sheild", "Cut it down", "Drop everything an run", "Dodge out of the way"], "Cut it down","../../assets/Images/quizes/6/PlayerUnknown.jpg","Nice one... Unknown Hero"),
    new Question(6, "Your swift moves leave you hurt, but alive. You're now at a fork, where do you go...", ["Left", "Right", "Forward", "Drop everything an run"], "Left","../../assets/Images/quizes/6/TombRaider.jpg","A true Tomb Raider"),
    new Question(6, "The path leads to an ancient ruine. You make half way through when the floor begins to crumble. You look back an...", ["Drop everything... AN RUN!", "Go back the way you came and jump it", "Run as fast as you can forward", "Look for a switch, there has to be a switch!"], "Run as fast as you can forward","../../assets/Images/quizes/6/ShovelKnight.png","Simi-Text Adventurer"),
    new Question(6, "Your decision saved your life an a large gold chest lays before you. You open it an...", ["Take the treasure", "DROP EVERYTHING AND RUN", "leave the treasure", "Leave a 'I was here' note and close the chest"], "Take the treasure","../../assets/Images/quizes/6/Dragoon.jpg","Congrates Brave Adventurer"),

    
    // new Question(5, "What bird has the longest wingspan?", ["Stork", "Swan", "Condor", "Albatross"], "Albatross","../../assets/Images/tacoNinja.jpg"),
    // new Question(5, "What is the biggest animal that ever lived?", ["Blue Whale", "African Elephant", "Apatosaurus (aka brontosaurus)", "Spinosaurus"], "Blue Whale","../../assets/Images/tacoNinja.jpg"),
    // new Question(5, "What are female elephants called?", ["Mares", "Sows", "Cows", "Dams"], "Cows","../../assets/Images/tacoNinja.jpg"),
    // new Question(5, "Which of the following animals sleep standing up?", ["Gorrillas", "Flamingos", "Camels", "Ravens"], "Flamingos","../../assets/Images/tacoNinja.jpg"),
    // new Question(5, "What is the fastest water animal?", ["Porpoise", "Sailfish", "Flying Fish", "Tuna"], "Sailfish","../../assets/Images/tacoNinja.jpg"),

    // new Question(6, "What bird has the longest wingspan?", ["Stork", "Swan", "Condor", "Albatross"], "Albatross","../../assets/Images/tacoNinja.jpg"),
    // new Question(6, "What is the biggest animal that ever lived?", ["Blue Whale", "African Elephant", "Apatosaurus (aka brontosaurus)", "Spinosaurus"], "Blue Whale","../../assets/Images/tacoNinja.jpg"),
    // new Question(6, "What are female elephants called?", ["Mares", "Sows", "Cows", "Dams"], "Cows","../../assets/Images/tacoNinja.jpg"),
    // new Question(6, "Which of the following animals sleep standing up?", ["Gorrillas", "Flamingos", "Camels", "Ravens"], "Flamingos","../../assets/Images/tacoNinja.jpg"),
    // new Question(6, "What is the fastest water animal?", ["Porpoise", "Sailfish", "Flying Fish", "Tuna"], "Sailfish","../../assets/Images/tacoNinja.jpg"),
];
    questionNum = 1;
    currentQuestion;
    currentPoints = this.points;
    endCardimage = "";
    endCardResult = "";

  checkChoice (choices) {
    this.questionNum +=1;

    if (this.questionNum == 6)
    {
      var EndCard = document.getElementById("endCard")
      var questN = document.getElementById("questions")
      
      EndCard.classList.remove("hidCard");
      questN.classList.add("hidCard");

      this.endCardimage = this.questions[this.points].endCard;
      this.endCardResult = this.questions[this.points].endCardResult;
    }
    else
  {
    if (this.currentQuestion.checkChoice(choices)) {
      this.points+=1;
      this.currentPoints = this.points * 10;
      this.currentQuestion=this.questions[this.questions.indexOf(this.currentQuestion)+1]
    }
    else{
      this.currentQuestion=this.questions[this.questions.indexOf(this.currentQuestion)+1]
    }
  }

  
  }

  back(){
    this.router.navigate(['/home'])
  }

  constructor(private route: ActivatedRoute,private router: Router) {}

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

