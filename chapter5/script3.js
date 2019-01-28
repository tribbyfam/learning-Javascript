//section 5 challenge 7
//to make sure all of this code private and doesn't interfere with other programmers code wrap in in (function(){}) and execute it at the end with ().

/*
(function () {
  function Question(question, answers, correct) {
    this.question = question,
      this.answers = answers,
      this.correct = correct
  };

  Question.prototype.displayQuestion =
    function () {
      console.log(this.question);

      for (i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
      }
    };

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');
    } else {
      console.log('Sorry, try again')
    }
  }

  var q1 = new Question('Is the Javascript the coolest?', ['Yes', 'No'], 0);
  var q2 = new Question('Does Javascript icludes CSS and THML?', ['Yes', 'No'], 0);
  var q3 = new Question('What is the name of this course teacher?', ['John', 'Michael', 'Jonas'], 2);
  var q4 = new Question('Do Closures belong to CSS?', ['Yes', 'No'], 1);
  var q5 = new Question('What does best describes programming?', ['Boring', 'Fun', 'Tedious', 'Hard'], 1);

  var questions = [q1, q2, q3, q4, q5];
  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer'));

  questions[n].checkAnswer(answer);
})();
*/


//expert level of this challenge

(function () {
  function Question(question, answers, correct) {
    this.question = question,
      this.answers = answers,
      this.correct = correct
  };

  Question.prototype.displayQuestion =
    function () {
      console.log(this.question);

      for (i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
      }
    };

  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Sorry, try again');
      sc = callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function (score) {
    console.log('Your current score is ' + score);
    console.log('____________________')
  }

  var q1 = new Question('Is the Javascript the coolest?', ['Yes', 'No'], 0);
  var q2 = new Question('Does Javascript icludes CSS and THML?', ['Yes', 'No'], 0);
  var q3 = new Question('What is the name of this course teacher?', ['John', 'Michael', 'Jonas'], 2);
  var q4 = new Question('Do Closures belong to CSS?', ['Yes', 'No'], 1);
  var q5 = new Question('What does best describes programming?', ['Boring', 'Fun', 'Tedious', 'Hard'], 1);

  var questions = [q1, q2, q3, q4, q5];

  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer');

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }

  }
  nextQuestion();

})();