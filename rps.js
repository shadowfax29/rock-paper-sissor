let arr = ['rock', 'paper', 'scissors'];
let uInput;
let cInput;
let uPoints = 0;
let cPoints = 0;
for(let i = 0; i < arr.length; i++){
  uInput = prompt("Choose between: Rock, Paper & Scissors");
  cInput = arr[Math.floor(Math.random() * arr.length)];
  if(cInput == "rock" && uInput == "paper"){
    uPoints++;
  }else if (cInput == "paper" && uInput == "rock"){
    cPoints++;
  }else if (cInput == "paper" && uInput == "scissors"){
    uPoints++;
  }else if (cInput == "scissors" && uInput == "rock"){
    uPoints++;
  }else if (cInput == "scissors" && uInput == "paper"){
    cPoints++;
  }else if (cInput == "rock" && uInput == "scissors"){
    cPoints++;
  }
console.log("Compter move: ", cInput);
console.log("User move: ", uInput);
}

  if(uPoints > cPoints){
    console.log("You Won");
  }else if(uPoints < cPoints){
    console.log("You Loss")
  }
else{
  console.log("Match Draw!")
}