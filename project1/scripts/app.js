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
    $('.scoreboard').text('You have answered ' + correct + ' correctly!')
  } else {
    $('.alerts').text('Nice try, but that answer is not correct. The answer is ' + (x + y))
  } //Resets the value of the answer after a submission has been made.
  $('input[name="answer"]').val('')

// Game stops at 5 correct answers
  if (correct >= 5) {
    //call ending function
    $('.alerts').text('Ready for launch!')
    $('.launch').toggle();
    return false;
  }

  x = getRandom();
  y = getRandom();
  rounds++;

  $('.problem').text(x + ' + ' + y + ' = ');
});
