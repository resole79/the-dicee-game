// Function to give random integer number
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Function to made the face of dicee
function randomFace(player, randomnumber){

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
