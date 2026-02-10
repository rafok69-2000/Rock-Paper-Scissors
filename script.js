function getComputerChoice(){
  let option = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if(option == 1){
    return "rock"
  }else if (option == 2){
    return "paper"
  }else if (option == 3)
    return "scissors"
}

console.log(getComputerChoice());

function getHumanChoice(){
   let optionHuman = prompt("Rock, paper or scissor");
   return optionHuman
}

console.log(getHumanChoice());
