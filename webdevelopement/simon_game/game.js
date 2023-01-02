var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var started = false;
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("LEVEL " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
$('.btn').click(function() {
  var buttonId = $(this).attr('id');
  var userChosenColour= buttonId;
  playSound(userChosenColour);
  animatePress(userChosenColour);
  if(started){
    userClickedPattern.push(userChosenColour);
    //alert(userClickedPattern);
    
    checkAnswer(userClickedPattern.length-1);
  }
  });
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 50);
}
// game start 
var level = 0;
$(document).keydown(function() {
    if (!started) {
        $("#level-title").text("LEVEL " + level);
        nextSequence();
        started = true;
      }
  });


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
      // wrong answer 
      $('body').addClass('game-over');
      setTimeout(function () {
        $('body').removeClass('game-over');
      }, 10);
      started = false;
      gamePattern = [];
      level=0;
      $("#level-title").text("GAME OVER CLICK ANY BUTTON TO START ");
      console.log("wrong");

    }

}
