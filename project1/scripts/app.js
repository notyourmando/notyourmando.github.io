//Gets a random number from (0-10)
function getRandom(){
  return Math.round(Math.random() * 10);
};

var rounds  = 1,
    x       = getRandom(),
    y       = getRandom(),
    correct = 0;

// 1. Get x and y on screen as a math problem
$('.problem').text(x + ' + ' + y + ' = ');
// 2. Get input from a text input or form submit
$('input[type="submit"]').click(function(evt) {
  evt.preventDefault();
  var answer = +$('input[name="answer"]').val();
  if (answer === (x + y)){
    // Add pieces to the rocket
    correct++
    rightAnswer(correct);
    $('.scoreboard').text('You have answered ' + correct + ' correctly!')
    $('.alerts').text('')
  } else {
    $('.alerts').text('Nice try, but that answer is not correct. The answer is ' + (x + y))
  } //Resets the value of the answer after a submission has been made.
    $('input[name="answer"]').val('')

  randomEquation();
})

function randomEquation() {
  x = getRandom();
  y = getRandom();
  rounds++;
  $('.problem').text(x + ' + ' + y + ' = ');
};

//Attach the pieces of the rocketship
// Game stops at 5 correct answers

function rightAnswer(numberCorrect) {
  if (numberCorrect === 1) {
    $('.rocketTop').toggle();
  }
  else if (numberCorrect === 2) {
    $('.rocketBody').toggle();
  }
  else if (numberCorrect === 3) {
    $('.rocketBottom').toggle();
  }
  else if (numberCorrect === 4) {
    $('.rocketBurners').toggle();
  }
  else if (numberCorrect >= 5) {
    //call ending function
    $('.alerts').text('Ready for lift-off!');
    $('.launch').toggle();
    return false;
  }
}

///////Rocket Launch
$('.launchoff').click(function(evt) {
  $('.rocketship').animate({
    'marginTop' : '-=800px'
  })
})
