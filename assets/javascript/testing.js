var randomNumber = Math.floor(Math.random() * 102) + 19;
// var totalNumber = 0;

function updateDisplay() {
    var random = Math.floor(Math.random() * 10) + 1;
    var testNumber = parseInt($(".totalScore").text()) + random;
    if (randomNumber === testNumber) {
        alert("you win");
        console.log(randomNumber);
    }
}


// console.log(randomNumber);


$(document).ready(function() {



    $(".text-left").on("click", function() {
        alert("Jquery is working!");
    });

    $(".winningNumber").text(randomNumber);

    // $(".firstGem").on("click", updateDisplay()) {
    //     // var random = Math.floor(Math.random() * 10) + 1;
    //     // var testNumber = parseInt($(".totalScore").text()) + random;
    // //         if (randomNumber === testNumber) {
    // //     alert("you win");
    // //     console.log(randomNumber);
    // // }
    //     $(".totalScore").text(testNumber);
    // };

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


});
