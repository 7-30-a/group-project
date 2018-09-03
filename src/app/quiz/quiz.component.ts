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

    // Whats your personality type?
    new Question(1, "This trait best decribes me:", ["Outgoing", "Reserved", "Witty", "Bashful"], "Reserved", "../../assets/Images/quizes/1/shy-potato.gif", "You are a... Shy Potato"),
    new Question(1, "When dealing with a conflict I...", ["Avoid it", "Face it head on", "Try and find a diplomatic solution", "Stir the pot, I love drama!"], "Stir the pot, I love drama!", "../../assets/Images/quizes/1/sass-quatch.jpg", "You are a... Sass-quatch"),
    new Question(1, "Which is the best solution for me:", ["The most logical", "The one that makes everyone happy", "The easiest", "No solution.. mwahaha!"], "The most logical", "../../assets/Images/quizes/1/chin-chiller.jpg", "You are a... Chin-chiller"),
    new Question(1, "Do you enjoy talking to people?", ["Yes! Lets chat it up!", "Its alright", "Only in small groups", "I want to live in a cave, alone."], "Yes! Lets chat it up!", "../../assets/Images/quizes/1/turnup-turnip.gif", "You are a... Turnt up Turnip"),
    new Question(1, "How do you approach leadership?", ["I'm always the leader.", "I try not to be a leader but I always end up one.", "I dont lead.", "Im scared to lead."], "I'm always the leader.", "../../assets/Images/quizes/1/extrovert-bear.jpg", "You are a... Extroverted Emily"),
    
    // Who is your perfect match?
    new Question(2, "You wish love was more:", ["Simple.. geez", "Logical", "Kind", "Sensual"], "Simple.. geez", "../../assets/Images/quizes/2/party-animal.jpg", "You need a... Party Animal!"),
    new Question(2, "You secretly want the love of your life to have..", ["Good looks", "Money", "Power", "Similar intrests"], "Good looks", "../../assets/Images/quizes/2/shyguy.jpg", "You need a... Shy Guy!"),
    new Question(2, "Why aren't you married?", ["I dont have time to date", "I pick terrible people", "I find most people mundane.", "I dont want to be married."], "I dont have time to date", "../../assets/Images/quizes/2/smooth-operator.jpg", "You need a... Smooth Operator!"),
    new Question(2, "What do you hope to have the most in common with your partner?", ["Similar music taste", "Similar goals", "Similar sense of humor", "Similar religious beliefs"], "Similar music taste", "../../assets/Images/quizes/2/nerd-velma.jpg", "You need a... Smarty Pants!"),
    new Question(2, "What do you look for in a partner?", ["Adventurous", "Intellegent", "Compassionate", "Passionate"], "Adventurous", "../../assets/Images/quizes/2/adventure-rick.jpg", "You need an... Adventurous Andy!"),

    // How close are you and your bestie?
    new Question(3, "When did you last talk to your best friend?", ["Were talking now!", "Yesterday", "Last week", "Uh.. a month or more ago"], "Were talking now!", "../../assets/Images/quizes/3/best-budz.jpg", "You guys are... Best Buds Fo' Sho'!"),
    new Question(3, "How long have you known them?", ["Since I was born.. almost.", "5+ years", "1-4 years", "Less than a year"], "Less than a year", "../../assets/Images/quizes/3/kinda-cool.png", "You guys are... acquaintances!"),
    new Question(3, "Do you know their birthday?", ["Of course! I know the time too.", "Yup. Month, date and year.", "I know the month, not the date..", "No idea"], "No idea", "../../assets/Images/quizes/3/stalker.png", "You are a... Stalker! Sorry."),
    new Question(3, "Are you friends with their family?", ["I am family.", "Yeah I know a few", "I've heard of them", "What family?"], "Yeah I know a few", "../../assets/Images/quizes/3/crazy-close.jpg", "You guys are... Super BFFs!"),
    new Question(3, "Does he/she consider you to be their best friend?", ["Duh!", "Maybe! I hope so.", "Maybe not.", "Actually, no."], "Actually, no.", "../../assets/Images/quizes/3/not-so-close.png", "You guys are... Not that close! Ouch."),

    //What Kind Of Taco are You?
    new Question(4, "What are the best kind of Tacos?", ["Hard", "Soft", "Naked", "I don't like tacos..."], "Hard", "../../assets/Images/quizes/4/droppedTaco.jpg", "You are a... Dropped Taco"),
    new Question(4, "If tacos gave you super powers, what would it be?", ["Fire Breath", "Epic Flatulents", "To able to Stick your hand in your pocket, and pull out a taco", "To be able to Make the best taco ever"], "Fire Breath", "../../assets/Images/quizes/4/walkingtaco.gif", "You are a... Walking Taco"),
    new Question(4, "Best Taco Topping", ["Cheese", "Tomato", "Sour Cream", "Lettuce"], "Tomato", "../../assets/Images/quizes/4/tacoCat.jpg", "You are a... Ranbow Taco Cat"),
    new Question(4, "If there was a movie about a Taco, what would the name be?", ["Taco Hell", "Attack of the flying tacos", "It's raining tacos", "Sunny with a chance of tacos"], "It's raining tacos", "../../assets/Images/quizes/4/tacoNinja.jpg", "You are a... Taco Ninja"),
    new Question(4, "Who would play the lead role, if the lead role was a taco?", ["Jamie Lee Taco", "Jean-Claude Van Taco", "Robert Downey Taco", "Jennifer Love Taco"], "Jean-Claude Van Taco", "../../assets/Images/quizes/4/TacoRick.jpg", "You are a... Taco Rick!"),

    //What Anime Character are you?
    new Question(5, "What is Naruto's lastname?", ["Leaf", "Kishimoto", "Uzumaki", "Hiro"], "Uzumaki", "../../assets/Images/quizes/5/animeNoob.jpg", "You are a... Anime Noob"),
    new Question(5, "What happens if the fusion dance goes wrong?", ["Your powers fuse with mixed results", "You die", "Nothing happens", "You turn into a fat, powerless blob"], "You turn into a fat, powerless blob", "../../assets/Images/quizes/5/RockLee.jpg", "You are... Rock Lee"),
    new Question(5, "Haruhara hits Naota with what?", ["Guitar", "Her foot", "Eel", "Her fist"], "Guitar", "../../assets/Images/quizes/5/Sinobu.jpg", "You are... Sinobu"),
    new Question(5, "For the Death Note to work, you need the persons name and...?", ["Finger prints", "Scrap of clothing", "Face", "location"], "Face", "../../assets/Images/quizes/5/YourName.jpg", "You are... Mitsuha"),
    new Question(5, "Retsuko, likes to relax after work by going to a karaoke bar and singing?", ["Death Metal", "Pop", "Rock", "Techno"], "Death Metal", "../../assets/Images/quizes/5/FLCL.jpg", "You are... Haruko Haruhara"),

    //Adventure
    new Question(6, "Now deep within a cave, you spot something to your left, you...?", ["Shine your light on it", "Drop everything an run", "Prepare to fight!!!", "Call out"], "Prepare to fight!!!", "../../assets/Images/quizes/6/runAway.jpg", "Nice try... Cowardly Knight"),
    new Question(6, "Just when you do, it leaps forth. Forcing you to...", ["Hit it with your sheild", "Cut it down", "Drop everything an run", "Dodge out of the way"], "Cut it down", "../../assets/Images/quizes/6/PlayerUnknown.jpg", "Nice one... Unknown Hero"),
    new Question(6, "Your swift moves leave you hurt, but alive. You're now at a fork, where do you go...", ["Left", "Right", "Forward", "Drop everything an run"], "Left", "../../assets/Images/quizes/6/TombRaider.jpg", "A true Tomb Raider"),
    new Question(6, "The path leads to an ancient ruine. You make it half way through when the floor begins to crumble. You look back an...", ["Drop everything... AN RUN!", "Go back the way you came and jump it", "Run as fast as you can forward", "Look for a switch, there has to be a switch!"], "Run as fast as you can forward", "../../assets/Images/quizes/6/ShovelKnight.png", "Simi-Text Adventurer"),
    new Question(6, "Your decision saved your life an a large gold chest lays before you. You open it an...", ["Take the treasure", "DROP EVERYTHING AND RUN", "leave the treasure", "Leave a 'I was here' note and close the chest"], "Take the treasure", "../../assets/Images/quizes/6/Dragoon.jpg", "Congrates Brave Adventurer"),

    //What Game Character are you
    new Question(7, "In Zelda, who is the main protagonist?", ["Zelda", "Ganon", "Link", "Majora"], "Link", "../../assets/Images/quizes/7/MooglePoogle.png", "You are a... Moogle Poogle"),
    new Question(7, "Senua is carrying whos head with her?", ["Dillion", "Druth", "Juergens", "Hela"], "Dillion", "../../assets/Images/quizes/7/Kirby.png", "You are ... Kirby"),
    new Question(7, "How do you make a diamon pickaxe?", ["1 Diamond And 4 Wood", "4 Wood And 1 Clay Pot And Lava", "6 Dimonds And Fire", "3 Diamonds And 2 Sticks"], "3 Diamonds And 2 Sticks", "../../assets/Images/quizes/7/Cloud.png", "You are ... Cloud"),
    new Question(7, "MGS1 featured Solid Snake infiltrating which island?", ["Shadow Moses", "Grey Area", "UK", "Alaska"], "Shadow Moses", "../../assets/Images/quizes/7/Senua.png", "You are ... Senua"),
    new Question(7, "Who was the original owner of the Clouds bustor sword?", ["Sephiroth", "Cloud", "Zack", "Pulled it from a stone"], "Zack", "../../assets/Images/quizes/7/Snake.jpg", "You are ... Snake"),

    //What Movie Should you Watch
    new Question(8, "Favorite type of movie?", ["Comedy", "Romance", "Adventure", "Action"], "Adventure", "../../assets/Images/quizes/8/mazeRunner.jpg", "You should watch... Maze Runner"),
    new Question(8, "Which actress would you spend a day with?", ["Anna Kendrick", "Ellen Page", "Cate Blanchett", "Kate Winslet"], "Ellen Page", "../../assets/Images/quizes/8/bladeRunner.jpg", "You should watch... Blade Runner"),
    new Question(8, "What is your favorite kind of weather?", ["Windy and rainy", "Snowy", "Hot and Sunny", "Sunny and breezy"], "Sunny and breezy", "../../assets/Images/quizes/8/Anchorman", "You should watch... Anchorman"),
    new Question(8, "WHich of the following movies is your favorite?", ["The Lord of the Rings", "It's Complicated", "Bridesmaids", "Interstellar"], "Interstellar", "../../assets/Images/quizes/8/harryPotter.jpg", "You should watch... Harry Potter"),
    new Question(8, "Which singer would you love to see in concert?", ["Lady Gaga", "Mariah Carey", "Adele", "Rihanna"], "Lady Gaga", "../../assets/Images/quizes/8/blackPanther.jpg", "You should watch... Black Panther"),

    //What Movie Should you Watch
    new Question(8, "Favorite type of movie?", ["Comedy", "Romance", "Adventure", "Action"], "Adventure", "../../assets/Images/quizes/8/mazeRunner.jpg", "You should watch... Maze Runner"),
    new Question(8, "Which actress would you spend a day with?", ["Anna Kendrick", "Ellen Page", "Cate Blanchett", "Kate Winslet"], "Ellen Page", "../../assets/Images/quizes/8/bladeRunner.jpg", "You should watch... Blade Runner"),
    new Question(8, "What is your favorite kind of weather?", ["Windy and rainy", "Snowy", "Hot and Sunny", "Sunny and breezy"], "Sunny and breezy", "../../assets/Images/quizes/8/Anchorman.jpg", "You should watch... Anchorman"),
    new Question(8, "Which of the following movies is your favorite?", ["The Lord of the Rings", "It's Complicated", "Bridesmaids", "Interstellar"], "Interstellar", "../../assets/Images/quizes/8/harryPotter.jpg", "You should watch... Harry Potter"),
    new Question(8, "Which singer would you love to see in concert?", ["Lady Gaga", "Mariah Carey", "Adele", "Rihanna"], "Lady Gaga", "../../assets/Images/quizes/8/blackPanther.jpg", "You should watch... Black Panther"),

    //How Gamer Are U
    new Question(9, "Favorite Gaming Platform?", ["Console", "PC", "Handheld", "Phone"], "PC", "../../assets/Images/quizes/9/CasualGaming.jpg", "You're a... Casual Gamer"),
    new Question(9, "Best MMO?", ["What's MMO?", "World of Warcraft", "Final Fantasy XIV", "Maple Story"], "Final Fantasy XIV", "../../assets/Images/quizes/9/Lvl1Gamer.png", "You're... Trying..."),
    new Question(9, "Best type of game?", ["MMO", "FPS", "RPG", "Puzzle"], "RPG", "../../assets/Images/quizes/9/GuruGamer.jpg", "You're a... Gaming Guru"),
    new Question(9, "What does MP mean?", ["Magic Power", "Magic", "Mana", "Magic Points"], "Magic Points", "../../assets/Images/quizes/9/RetroGamer.jpg", "You're a... Retro Gamer"),
    new Question(9, "It's dangerous to go alone! Take this...", ["Key", "Shield", "Potion", "Sword"], "Sword", "../../assets/Images/quizes/9/ProGamer.jpg", "You're a... Pro Gamer"),

  ];
  questionNum = 1;
  currentQuestion;
  currentPoints = this.points;
  endCardimage = "";
  endCardResult = "";

  checkChoice(choices) {
    this.questionNum += 1;

    if (this.questionNum == 6) {
      var EndCard = document.getElementById("endCard")
      var questN = document.getElementById("questions")

      EndCard.classList.remove("hidCard");
      questN.classList.add("hidCard");

      this.endCardimage = this.questions[this.points].endCard;
      this.endCardResult = this.questions[this.points].endCardResult;
    }
    else {
      if (this.currentQuestion.checkChoice(choices)) {
        this.points += 1;
        this.currentPoints = this.points * 10;
        this.currentQuestion = this.questions[this.questions.indexOf(this.currentQuestion) + 1]
      }
      else {
        this.currentQuestion = this.questions[this.questions.indexOf(this.currentQuestion) + 1]
      }
    }


  }

  back() {
    this.router.navigate(['/home'])
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.quizId = this.route.snapshot.paramMap.get("id");
      (
        x => x.quizId.toString() === this.quizId
      );
      this.questions = this.allQuestions.filter(x => x.quizId.toString() == this.quizId)
      this.currentQuestion = this.questions[0];
    });
  }
}
