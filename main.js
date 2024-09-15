// getting computer choice
function getComputerChoice(){
    var choice = Math.floor(Math.random() * (3 - 0) + 0);
    if(choice === 0){
        console.log("Computer's choice - rock");
        return "rock";
        
    }
    else if(choice === 1){
        console.log("Computer's choice - paper");
        return "paper";
        
    }
    else{
        console.log("Computer's choice - scissors");
        return "scissors";
        
    }
}

// getting human choice
function getHumanChoice(){
     var getH = prompt("Enter Rock or Paper or Scissors");
     getH = getH.toLowerCase();
     console.log(`Your choice- ${getH}`);
     return getH;
     
}

// main code for game and logic behind it
function playGame(n){
    let humanScore = 0;
    let computerScore = 0;
    while(n>0){

 function playRound(humanSelection,computerSelection){
    if(humanSelection === computerSelection){
        console.log("That's a tie.");
        
    }
    else if(humanSelection == 'rock'){
        if(computerSelection == 'paper'){
            console.log("You lose! paper beats rock.");
            
            computerScore ++;
        }
        else {
            console.log("You win! rock beats scissors.");
            
            humanScore ++;
        }
    }
    else if(humanSelection == 'paper'){
        if(computerSelection == 'rock'){
            console.log("You win! paper beats rock.");
            
            humanScore ++;
        }
        else{
            console.log("You lose! scissors beat paper.");
            
            computerScore ++;
        }
    }
    else if(humanSelection == 'scissors'){
        if(computerSelection == 'rock'){
            console.log("You lose! rock beats scissors.");
            
            computerScore ++;
        }
        else{
            console.log("You win! scissors beat paper.");
            
            humanScore ++;
        }
    }
    else{
        console.log("Enter a valid input.");
        
    }
 }
 
console.log(`Score- your score ${humanScore}  computer's score ${computerScore}`);
console.log("--------------------------------");

  
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
 
  
  playRound(humanChoice, computerChoice);

  
 
n--;
}
console.log("--------------------------------");
console.log("--------------------------------");
console.log(`Your score- ${humanScore}`);
console.log(`Computer's score- ${computerScore}`);
       if(humanScore > computerScore){
        console.log("Congrats! You beat Computer.");
       }
       else if(computerScore > humanScore){
        console.log("Sorry! you lose better luck next time.");
       }
       else{
        console.log("Lol That's a tie");
       }
}

  playGame(5);
  