const gamePlayer = document.querySelector("#Player");
const computerPlayer = document.querySelector("#computerPlayer");
const textResult = document.querySelector("#textResult");
const gameButtons = document.querySelectorAll(".gameButtons");
let player;
let computer;
let result;

gameButtons.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTry()
    gamePlayer.textContent = "Player:" + player;
    computerPlayer.textContent = "Computer:" + computer;
    textResult.textContent = winnerCheck();

}));

function computerTry(){
   
    const randomNumber = Math.floor(Math.random()*3) + 1;

    switch(randomNumber){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}

function winnerCheck(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "Rock"){
        return (player == "Paper")? "You Win!" : "You Loose!"
    }
    else if(computer == "Paper"){
        return (player == "Scissors")? "You Win!" : "You Loose!"
    }
    else if(computer == "Scissors"){
        return (player == "Rock")? "You Win!" : "You Loose!"
    }
}

