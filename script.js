const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");

btnRock.addEventListener("click", function(){
    playRound("rock", getComputerChoice())
});

btnPaper.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
});

btnScissor.addEventListener("click", function(){
    playRound("scissor", getComputerChoice())
});

function getComputerChoice(){
  let option = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if(option == 1){
    return "rock"
  }else if (option == 2){
    return "paper"
  }else if (option == 3)
    return "scissor"
}

let humanScore = 0;
let computerScore = 0;



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
        
 
    


