var crystalValues = [];
var total;
var target;
var winCount = 0;
var lossCount = 0;

var resetGame = function() {
    for (var i = 0; i < 4; i++) {
        crystalValues[i] = Math.floor(Math.random() * 12) + 1;
    }
    total = 0;
    target = Math.floor(Math.random() * 102) + 19;
    $("#randomNumber").text(target);
    $("#wins").text(winCount);
    $("losses").text(lossCount);
    $("currentTotal").text(total); 
}

resetGame();

$(".box").on("click" , function() {
    console.log("Index: ", $(this).index(), "Id: ");
    addCrystalValueToTotal($(this).index());
})

var addCrystalValueToTotal = function(crystalIndex) {
    document.getElementById("youWinLose").innerHTML = "";
    total += crystalValues[crystalIndex];
    document.getElementById("currentTotal").innerHTML = total;
    console.log("totalValue: ", total, "crystal value: ", crystalValues[crystalIndex]);
    if (total === target) {        
        //win
        winCount++;
        document.getElementById("youWinLose").innerHTML = "You Win!"
        resetGame();
    } else if (total > target) {
       //lose 
       lossCount++; 
       document.getElementById("youWinLose").innerHTML = "You Lose!"
       resetGame();
    }

    document.getElementById("currentTotal").innerHTML = total;
}






