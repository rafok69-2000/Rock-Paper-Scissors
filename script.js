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


const resul = document.querySelector("#res");

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    
    const human = document.createElement("p");
    const computer = document.createElement("p");

    human.textContent = `Human says: ${humanChoice}`;
    computer.textContent = `Computer says: ${computerChoice}`;

    const whyWin = document.createElement("p");

    if (humanChoice === computerChoice) {
        whyWin.textContent = `Dead Heat!`
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        whyWin.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        whyWin.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    resul.appendChild(human);
    resul.appendChild(computer);
    resul.appendChild(whyWin);
}   
        
 
    


