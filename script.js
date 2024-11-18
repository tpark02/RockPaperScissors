
var arr = ["rock", "papaer", "scissors"];
var humanScore  = 0;
var computerScore  = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
    console.log(humanChoice + ":" + computerChoice);

    if ((humanChoice < computerChoice) || (computerChoice == 0 && humanChoice == 2)) {
        computerScore ++; return;
    }
    if ((humanChoice > computerChoice) || (computerChoice == 2 && humanChoice == 0)) {
        humanScore ++; return;
    }
}

function getHumanChoice() {
    var input = prompt("Enter your choice", "");
    return Number(input);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    return getRandomInt(3);
}

  
for (var i = 0; i < 5; i++)
{
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("human choice : " + arr[humanSelection]);
    console.log("computer choice : " + arr[computerSelection]);
    console.log("human : computer = " + humanScore + ":" + computerScore);
}