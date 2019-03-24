
var randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

$(document).ready(function() {


    $(".text-left").on("click", function() {
        alert("Jquery is working!");
    });

    $(".winningNumber").text(randomNumber);

    $(".firstGem").on("click", function() {
        var random = Math.floor(Math.random() * 10) + 1;
        $(".totalScore").text(random);
    });

    $(".secondGem").on("click", function() {
        var random = Math.floor(Math.random() * 12) + 1;
        $(".totalScore").text(random);
    });

    $(".thirdGem").on("click", function() {
        var random = Math.floor(Math.random() * 12) + 1;
        $(".totalScore").text(random);
    });

    $(".fourthGem").on("click", function() {
        var random = Math.floor(Math.random() * 12) + 1;
        $(".totalScore").text(random);
    });

    // if ($(".totalScore") === $(".winningNumber")) {
    //     alert("you win");
    // };

});
