var randomNumber = Math.floor(Math.random() * 102) + 19;
var win = 1;
var loss = 1;



function updateDisplay() {

    var random = Math.floor(Math.random() * 10) + 1;
    var totalNumber = parseInt($(".totalScore").text()) + random;

    $(".totalScore").text(totalNumber)
    if (randomNumber === totalNumber) {
        $(".wins").html("Wins: " + win++);

        reset();
    } else if (totalNumber > randomNumber) {
        $(".losses").text("Losses: " + loss++);
        reset();
    }
}

function reset() {
    var resetNumber = Math.floor(Math.random() * 102) + 19;

    $(".totalScore").text("0");
    $(".winningNumber").text(resetNumber);
}


$(document).ready(function () {

    $(".winningNumber").text(randomNumber);

    $(".firstGem").on("click", updateDisplay);
    $(".secondGem").on("click", updateDisplay);
    $(".thirdGem").on("click", updateDisplay);
    $(".fourthGem").on("click", updateDisplay);

});
