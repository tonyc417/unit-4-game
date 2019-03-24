var randomNumber = Math.floor(Math.random() * 20) + 1;
var totalNumber = [];

function sumTotal(total, num) {
    return total + num;
}

// console.log(randomNumber);
console.log(totalNumber);



$(document).ready(function() {


    $(".text-left").on("click", function() {
        alert("Jquery is working!");
    });

    $(".winningNumber").text(randomNumber);

    $(".firstGem").on("click", function() {
        var random = Math.floor(Math.random() * 10) + 1;
        totalNumber.push(random);
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

    for (var i = 0; i < totalNumber.length; i++) {
        alert([i]);
    }

    // if (randomNumber === totalNumber) {
    //     alert("you win");
    // }
});
