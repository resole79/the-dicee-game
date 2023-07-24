/*
var red = document.getElementsByClassName("dicecolor1");
// var red = document.querySelector(".dicecolor1")
console.log(red);
red[0].addEventListener("click", function(){
    
    // document.getElementsByClassName("diceContainer").style.backgroundColor = "#940212";
    document.getElementsByClassName("diceContainer")[0].style.backgroundColor = "#000000";
    document.getElementsByClassName("diceContainer")[0].style.border = "1px solid #000000";
    document.getElementsByClassName("diceContainer")[0].style.borderRadius = "10%";
    
})
*/







// Function to give random integer number
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Function to made the face of dicee
function randomFace(player, randomnumber){
    
    var dicefaces = [["center"],["topRight", "bottomLeft"],["topRight", "center", "bottomLeft"],["topRight", "topLeft", "bottomRight", "bottomLeft"],["topRight", "topLeft", "center", "bottomRight", "bottomLeft"],["topRight", "topLeft", "centerRight", "centerLeft", "bottomRight", "bottomLeft"]];
    var faceconstruct = "<div class='diceContainer'>";
    var face = dicefaces[randomnumber- 1];
    
    for (var i=0; i < face.length; i++){
        faceconstruct += "<p class='number " + face[i] + "'></p>";
    }
    faceconstruct += "<div>";
    
    player.innerHTML = faceconstruct;
    
    /*
    if (randomnumber == 1){
        player.innerHTML = "<div class='diceContainer'><p class='number center'></p></div>"
    } else if (randomnumber == 2){
        player.innerHTML = '<div class="diceContainer"><p class="number topRight"></p><p class="number bottomLeft"></p></div>'
    } else if (randomnumber == 3){
        player.innerHTML = '<div class="diceContainer"><p class="number topRight"></p><p class="number center"></p><p class="number bottomLeft"></p></div>'
    } else if (randomnumber == 4){
        player.innerHTML = '<div class="diceContainer"><p class="number topRight"></p><p class="number topLeft"></p><p class="number bottomRight"></p><p class="number bottomLeft"></p></div>'
    } else if (randomnumber == 5){
        player.innerHTML = '<div class="diceContainer"><p class="number topRight"></p><p class="number topLeft"></p><p class="number center"></p><p class="number bottomRight"></p><p class="number bottomLeft"></p></div>'
    } else if (randomnumber == 6){
        player.innerHTML = '<div class="diceContainer"><p class="number topRight"></p><p class="number topLeft"></p><p class="number centerRight"></p><p class="number centerLeft"></p><p class="number bottomRight"></p><p class="number bottomLeft"></p></div>'
    }
    */
}


// Function to check the winner
function checkWhoWin(playerOne, playerTwo){
    var scoreboard = document.getElementsByClassName("scoreboard")[0];
    if (playerOne == playerTwo) {   
        scoreboard.innerText = "Draw";
    } else if (playerOne <= playerTwo) {
        scoreboard.innerText = "Player Two win";
    } else {
        scoreboard.innerText = "Player One win";
    }
}


function main(){
    
    var playerone = document.getElementById("playerone");
    var playertwo = document.getElementById("playertwo");

    var playeroneface = randomInteger(1,6);
    var playertwoface = randomInteger(1,6);
    
    randomFace(playerone, playeroneface);
    randomFace(playertwo, playertwoface);
    checkWhoWin(playeroneface, playertwoface);
}
