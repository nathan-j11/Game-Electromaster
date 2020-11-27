class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;      // answer validity control
    }
}

let questions = [
    new Question("Who's invented the light bulb", ["Joseph Henry", "Lewis Latimer","Thomas Edison", "Elon Musk"], "Thomas Edison"),
    new Question("Who's invented the AC electric motor ", ["Michael Faraday", "Charles Steinmetz", "Nikola Tesla","François Hollande"], "Nikola Tesla" ),
    new Question("Who's invented the lead-acid battery", ["Rowan Atkinson", "Johnny English", "Alessandro Volta", "Gaston Planté"], "Gaston Planté"),
    new Question("Who's invented the phone", ["Granville Woods", "sheldon cooper", "Albert Einstein", "Alexander Graham Bell"  ], "Alexander Graham Bell"), 
];

console.log(questions);

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex]     // get the question
    }
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {   // is the response true or false ?
            this.score++;
        }
        this.currentQuestionIndex++;      // following questions
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;   // questions ended
    }
}


// regroup all functions relative to the app display
const display = {
    elementShown: function(id, text) {                    // retrieve id and text
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function() {
        endQuizHTML = `
        <h1>Quiz Over !</h1>
        <h3> Your score is : ${quiz.score} /
        ${quiz.questions.length}</h3>`;
    this.elementShown("question", endQuizHTML);
  },
  question: function() {
    this.elementShown("question", quiz.getCurrentQuestion().text);   // .text allow to retrieve the questions in the array
  },
  choices: function() {
    let choices = quiz.getCurrentQuestion().choices;        // .choices allow to get the four element in the array

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function() {    // retrieve the click value and compare it to the right answer
        quiz.guess(guess);
        quizApp();
      }
    }
    // display choices and handle guess
    for(let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },
  progress: function() {
    let currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.elementShown('progress', "Question " + currentQuestionNumber + " out of " + quiz.questions.length);
  },
};

// Game logic display
quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
  } 
}
// Create Quiz
let quiz = new Quiz(questions);
quizApp();

console.log(quiz);





  



        
    

    
