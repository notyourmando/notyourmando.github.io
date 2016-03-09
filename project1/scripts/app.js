//Gets a random number from (0-10)
function getRandom(){
  return Math.round(Math.random() * 10);
};

var rounds  = 1,
    x       = getRandom(),
    y       = getRandom();

// 1. Get x and y on screen as a math problem
$('.problem').text(x + ' + ' + y + ' = ');
// 2. Get input from a text input or form submit
$('input[type="submit"]').click(function(evt) {
  evt.preventDefault();
  var answer = +$('input[name="answer"]').val();
  if (answer === (x + y)){
    alert('You are correct. Great job!')
    // Add pieces to the rocket
  } else {
    alert('Nice try, but that answer is not correct. The answer is ' + (x + y))
  } //Resets the value of the answer after a submission has been made.
  $('input[name="answer"]').val('')

// Nothing else runs if all 5 rounds were played
  if (rounds >= 5) return false;

  x = getRandom();
  y = getRandom();
  rounds++;

  $('.problem').text(x + ' + ' + y + ' = ');
});
