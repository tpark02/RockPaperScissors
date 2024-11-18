
var arr = ["rock", "papaer", "scissors"];
var humanScore  = 0;
var computerScore  = 0;

const div = document.createElement("div");
div.textContent = humanScore + ":" + computerScore;

function playRound() {
    // your code here!
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    //console.log(humanChoice + ":" + computerChoice);
    if ((humanChoice == 0 && computerChoice == 2)
        || (humanChoice == 1 && computerChoice == 0)
        || (humanChoice == 2 && computerChoice == 1)) 
        humanScore++;
    
    if ((humanChoice == 2 && computerChoice == 0)
        || (humanChoice == 0 && computerChoice == 1)
        || (humanChoice == 1 && computerChoice == 2))
        computerScore++;
    
    console.log("human choice : " + arr[humanChoice]);
    console.log("computer choice : " + arr[computerChoice]);
    console.log("human : computer = " + humanScore + ":" + computerScore);
        
    if (computerScore == 5)
        alert("computer wins!");
    if (humanScore == 5)
        alert("human wins!"); 

    div.textContent = humanScore + ":" + computerScore;
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
  
//for (var i = 0; i < 5; i++)
// {
   
//     playRound(humanSelection, computerSelection);
//     console.log("human choice : " + arr[humanSelection]);
//     console.log("computer choice : " + arr[computerSelection]);
//     console.log("human : computer = " + humanScore + ":" + computerScore);
// }

const playbutton = document.createElement("button");
playbutton.addEventListener('click', playRound);
playbutton.textContent = "Play";


document.body.appendChild(playbutton);
document.body.appendChild(div);