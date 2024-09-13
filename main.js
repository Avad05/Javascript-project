var humanScore = 0;
var computerScore = 0;
function getComputerChoice(min,max){
    return Math.random() * (max - min) + min; 
}
var result = Math.floor(getComputerChoice(0,3));


if(result === 0){
    console.log("rock");
}
else if(result === 1){
    console.log("paper");
}
else{
    console.log("scissors");
}

function getHumanChoice(){
    let choice = prompt("Enter any between Rock Paper Scissors");
    choice = choice.toLowerCase();
    return choice;
}
var Choice = getHumanChoice();
console.log(Choice);

 //main
function playRound(humanChoice, computerChoice){
    let count = 5;
    while(count>0){
    if(humanChoice === rock && computerChoice === rock){
        console.log("Ohh! That's a Draw!");
        count --;
    }
    else if(humanChoice === paper && computerChoice === paper){
        console.log("Ohh! That's a Draw");
        count --;
    }
    else if(humanChoice === scissors && computerChoice === scissors){
        console.log("Ohh! That's a Draw");
        count --;
    }
    else if(humanChoice === && computerChoice ===){
        console.log("Ohh! That's a Draw");
        count --;
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);