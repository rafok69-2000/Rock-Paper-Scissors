
function getComputerChoice(){
  let option = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if(option == 1){
    return "rock"
  }else if (option == 2){
    return "paper"
  }else if (option == 3)
    return "scissor"
}

function getHumanChoice(){
   let optionHuman = prompt("Rock, paper or scissor");
   return optionHuman
}

let humanScore = 0;
let computerScore = 0;


function playGame(){

    for(i = 0; i < 5; i++){

        function playRound(humanChoice, computerChoice){
            humanChoice = humanChoice.toLowerCase();
            console.log("The computer says: " + computerChoice);
            console.log("The human says: " + humanChoice);
            if (humanChoice == computerChoice){
                console.log("Dead Heat!");
                console.log("Computer: " + computerScore);
                console.log("Human " + humanScore);
            }else{
                switch (humanChoice){
                    case "rock":
                        if(computerChoice == "paper"){
                            console.log("You lose! Paper beats Rock");
                            computerScore++;
                        }else if(computerChoice == "scissor"){
                            console.log("You win! Rock beats Scissor");
                            humanScore++;
                        }
                    break; 
                    
                    case "paper":
                        if(computerChoice == "scissor"){
                            console.log("You lose! Scissor beats paper");
                            computerScore++;
                        }else{
                            console.log("You win! Paper beats Rock");
                            humanScore++;
                        }
                    break;

                    case "scissor":
                        if(computerChoice == "rock"){
                            console.log("You lose! Rock beats Scissor");
                            computerScore++;
                        }else{
                            console.log("You win! Scissor beats Paper");
                            humanScore++;
                        }
                }
                console.log("Computer: " + computerScore);
                console.log("Human " + humanScore);
            }

        }   

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
 
    }
}

playGame();

