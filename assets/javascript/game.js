var randomNumber = Math.floor(Math.random() * 20) + 1;
var totalNumber = [];

function sumTotal(total, num) {
    return total + num;
}


// console.log(randomNumber);


$(document).ready(function() {


    $(".text-left").on("click", function() {
        alert("Jquery is working!");
    });

    $(".winningNumber").text(randomNumber);

    $(".firstGem").on("click", function() {
        var random = Math.floor(Math.random() * 10) + 1;
        totalNumber.push(random);
        if (randomNumber == totalNumber) {
            alert("you win");
            console.log(randomNumber);
        }
        $(".totalScore").text(totalNumber.reduce(sumTotal));
    });

    $(".secondGem").on("click", function() {
        var random = Math.floor(Math.random() * 12) + 1;
        totalNumber.push(random);
        $(".totalScore").text(totalNumber.reduce(sumTotal));
    });

    $(".thirdGem").on("click", function() {
        var random = Math.floor(Math.random() * 12) + 1;
        totalNumber.push(random);
        $(".totalScore").text(totalNumber.reduce(sumTotal));
    });

    $(".fourthGem").on("click", function() {
        var random = Math.floor(Math.random() * 12) + 1;
        totalNumber.push(random);
        $(".totalScore").text(totalNumber.reduce(sumTotal));
    });


    if (randomNumber == totalNumber) {
        alert("you win");
        console.log(randomNumber);
    }
});
