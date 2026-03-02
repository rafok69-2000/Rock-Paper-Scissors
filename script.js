const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");

btnRock.addEventListener("click", function(){
    if(humanScore < 5 && computerScore < 5){
        playRound("rock", getComputerChoice());
    }else{
        alert("Game over")
    }
});

btnPaper.addEventListener("click", function(){
    if(humanScore < 5 && computerScore < 5){
        playRound("paper", getComputerChoice());
    }else{
        alert("Game over")
    }
});

btnScissor.addEventListener("click", function(){
    if(humanScore < 5 && computerScore < 5){
        playRound("scissor", getComputerChoice());
    }else{
        alert("Game over")
    }    
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
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        whyWin.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        whyWin.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    const win = document.createElement("p");

    if(humanScore == 5){
        win.textContent = `You win`;
    }else if (computerScore == 5){
        win.textContent = `Computers win`;
    }

    const resHuman = document.createElement("p");
    const resComputer = document.createElement("p");

    resHuman.textContent = `Human: ${humanScore}`;
    resComputer.textContent = `Computer: ${computerScore}`;

    resul.appendChild(human);
    resul.appendChild(computer);
    resul.appendChild(whyWin);
    resul.appendChild(resHuman);
    resul.appendChild(resComputer);
    resul.appendChild(win);
    }   


