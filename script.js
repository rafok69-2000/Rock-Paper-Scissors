function getComputerChoice(){
  let option = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if(option == 1){
    console.log("rock");
  }else if (option == 2){
    console.log("paper");
  }else if (option == 3)
    console.log("scissors");
}

console.log(getComputerChoice());