


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



// main code for game and logic behind it

    let humanScore = 0;
    let computerScore = 0;
    let gameOver = 0;
    

 function playRound(humanSelection){
    const computerSelection = getComputerChoice();
    let result = "";
    if(humanSelection === computerSelection){
        result = "That's a tie.";
        
    }
    else if(humanSelection == 'rock'){
        if(computerSelection == 'paper'){
            result = "You lose! paper beats rock.";
            
            computerScore ++;
        }
        else {
            result = "You win! rock beats scissors.";
            
            humanScore ++;
        }
    }
    else if(humanSelection == 'paper'){
        if(computerSelection == 'rock'){
              result = "You win! paper beats rock.";
            
            humanScore ++;
        }
        else{
            result = "You lose! scissors beat paper.";
            
            computerScore ++;
        }
    }
    else if(humanSelection == 'scissors'){
        if(computerSelection == 'rock'){
            result = "You lose! rock beats scissors.";
            
            computerScore ++;
        }
        else{
            result = "You win! scissors beat paper.";
            
            humanScore ++;
        }
    }
    else{
        result = "Enter a valid input.";
        
    }
    return result;
 }

 const showcase = document.querySelector("#showcase");
showcase.style.marginTop = "10px";
showcase.style.border = "1px solid black";
showcase.style.height = "150px";
showcase.style.width = "400px";
showcase.style.paddingLeft = "20px";

const message = document.createElement("p");
message.setAttribute("id", "messageP");
message.style.color = "blue";
message.textContent = "Choose one option to start!";
showcase.appendChild(message);

const player = document.createElement("p");
player.setAttribute("id", "playerP");
player.textContent = "Player: " + humanScore;
showcase.appendChild(player);

const computer = document.createElement("p");
computer.setAttribute("id", "computerP");
computer.textContent = "Computer: " + computerScore;
showcase.appendChild(computer);
 
  
 function refreshDisplay(result) {
        message.textContent = result;
        player.textContent = "Player: " + humanScore;
        computer.textContent = "Computer: " + computerScore;
      }

      function winningMessage(winner) {
        const oldContent = message.textContent;
      if (winner === 1) {
        message.textContent = oldContent + " You are the winner! Refresh to play again!"
        message.style.color = "green";
      } else {
        message.textContent = oldContent + " Computer is the winner! Refresh to play again!"
        message.style.color = "red";
      }
    }     

function playGame(playerTakes){
    if(gameOver === 0){
        const result = playRound(playerTakes);
        refreshDisplay(result);
    
    if(humanScore === 5){
        gameOver = 1;
        winningMessage(gameOver);
    }
    else if(computerScore === 5){
        gameOver = 2;
        winningMessage(gameOver);
    }
    }
}
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");

button1.addEventListener('click',() =>{
    playGame("rock");
});
button2.addEventListener('click', ()=>{
    playGame("paper");
});
button3.addEventListener('click', ()=>{
    playGame("scissors");
});
