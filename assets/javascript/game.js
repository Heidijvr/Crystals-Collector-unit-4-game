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
    document.getElementById("randomNumber").innerHTML = target;
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("losses").innerHTML = lossCount;
    document.getElementById("currentTotal").innerHTML = total; 
}

resetGame();


document.getElementById("diamond").onclick = function() {
   addCrystalValueToTotal(0);
}

document.getElementById("garnet").onclick = function () {
    addCrystalValueToTotal(1);
}

document.getElementById("peridot").onclick = function () {
    addCrystalValueToTotal(2);
}

document.getElementById("ruby").onclick = function () {
    addCrystalValueToTotal(3);
}

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






