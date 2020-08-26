let playerPoints = 0, computerPoints = 0;

//click start begins game; click play again resets score
const start = document.querySelector("#playerPrompt")
start.addEventListener("click", (e) => {
    if (start.textContent = "Play Again?"){
        playerPoints = 0;
        computerPoints = 0;
        msg.textContent="";
    }
    start.setAttribute("style", "font: 30px arial;");

    const display = document.querySelector("#display")
    display.setAttribute("style", "background: #a0a0a0")

    const playerChoice = document.createElement("p");
    playerChoice.setAttribute("id", "playerChoice");
    display.appendChild(playerChoice);
    const playerScore = document.createElement("p");
    playerScore.setAttribute("id", "playerScore");
    display.appendChild(playerScore);

    const computerChoice = document.createElement("p");
    computerChoice.setAttribute("id", "computerChoice");
    computerChoice.setAttribute("style", "color: red")
    display.appendChild(computerChoice);
    const computerScore = document.createElement("p");
    computerScore.setAttribute("id", "computerScore");
    computerScore.setAttribute("style", "color: red")
    display.appendChild(computerScore);

    start.textContent = "Make your move!";
});

//player chooses rock paper or scissors
const buttons = document.querySelectorAll("img");
buttons.forEach((button) => {
    button.addEventListener("click", playGame);  
})

function playGame(e){
    if (playerPoints < 5 && computerPoints < 5){
        let playerSelection = `${event.target.id}`;
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        document.querySelector("#msg").textContent = result;

        //winner of round gets point
        switch(result){
            case "You Win! Rock Beats Scissors":
            case "You Win! Paper Beats Rock":
            case "You Win! Scissors Beats Paper":
                playerPoints++;
                getWinner(playerPoints, "player")
                break;
            case "You Lose! Paper Beats Rock":
            case "You Lose! Scissors Beats Paper":
            case "You Lose! Rock Beats Scissors":
                computerPoints++;
                getWinner(computerPoints, "computer")
                break;
        };
    document.querySelector("#playerScore").textContent = `Player: ${playerPoints}`;
    document.querySelector("#computerScore").textContent = `Opponent: ${computerPoints}`;
}
}

//computer chooses rock, paper, or scissors
function computerPlay(){
    const selections = ["Rock", "Paper", "Scissors"];
    return selections[Math.floor(Math.random()*selections.length)];
}

//choose winner of round
function playRound(playerSelection, computerSelection){
    document.querySelector("#playerChoice").textContent = `You chose ${event.target.id}`;
    document.querySelector("#computerChoice").textContent = `Your opponent chose ${computerSelection}`;

    if (playerSelection == "rock"){
        switch(computerSelection){
            case "Rock":
                return "Tie! You Both Chose Rock";
                break;
            case "Paper":
                return "You Lose! Paper Beats Rock";
                break;
            case "Scissors":   
                return "You Win! Rock Beats Scissors";
                break;
            default:
                return "Game Over!";
        }
    }

    else if (playerSelection == "paper"){
        switch(computerSelection){
            case "Rock":
                return "You Win! Paper Beats Rock";
                break;
            case "Paper":
                return "Tie! You Both Chose Paper";
                break;
            case "Scissors":   
                return "You Lose! Scissors Beats Paper";
                break;
            default:
                return "Game Over!";
        }
    }

    else if (playerSelection == "scissors"){
        switch(computerSelection){
            case "Rock":
                return "You Lose! Rock Beats Scissors";
                break;
            case "Paper":
                return "You Win! Scissors Beats Paper";
                break;
            case "Scissors":   
                return "Tie! You Both Chose Scissors";
                break;
            default:
                return "Game Over!";
        }
    }    
}

//first to 5 points wins
function getWinner(currentPoints, player){
    if (currentPoints == 5 && player == "player"){
        let msg = document.querySelector("#msg");
        msg.textContent = "Congratulations! You won the tournament!(• w •)b";
        playerChoice.remove();
        playerScore.remove();
        computerChoice.remove();
        computerScore.remove();
        start.textContent = "Play Again?";
    } else if (currentPoints == 5 && player == "computer"){
        let msg = document.querySelector("#msg");
        msg.textContent = "Sorry.. You lost the tournament...";
        playerChoice.remove();
        playerScore.remove();
        computerChoice.remove();
        computerScore.remove();
        start.textContent = "Play Again?";
    }
}
