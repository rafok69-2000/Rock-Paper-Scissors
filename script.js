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



function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    console.log(`Computer says: ${computerChoice}`);
    console.log(`Human says: ${humanChoice}`);

    if (humanChoice === computerChoice) {
        console.log("Dead Heat!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`Computer: ${computerScore}`);
    console.log(`Human: ${humanScore}`);
}   
        
 
    


