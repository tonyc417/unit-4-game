var randomNumber = Math.floor(Math.random() * 102) + 19;
var win = 1;
var loss = 1;



function updateDisplay() {
    var random = Math.floor(Math.random() * 10) + 1;
    var testNumber = parseInt($(".totalScore").text()) + random;

    $(".totalScore").text(testNumber)
    if (randomNumber === testNumber) {
        $(".wins").html("Wins: " + win++);
        reset();
        console.log(randomNumber);
    } else if (testNumber > randomNumber) {
        $(".losses").text("Losses: " + loss++);
        reset();
    }
}

function reset() {
    $(".totalScore").text("0");
}


$(document).ready(function() {

    $(".text-left").on("click", function() {
        alert("Jquery is working!");
    });

    $(".winningNumber").text(randomNumber);

    $(".firstGem").on("click", updateDisplay);
    $(".secondGem").on("click", updateDisplay);
    $(".thirdGem").on("click", updateDisplay);
    $(".fourthGem").on("click", updateDisplay);

});
