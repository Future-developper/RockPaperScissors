function getComputerChoice() {
    let ratio = Math.floor(Math.random() * 100);
    let answer;
    switch (true) {
        case (ratio < 33):
            answer = "rock";
            break;
        case (ratio < 67):
            answer = "paper";
            break;
        case (ratio < 100):
            answer = "scissors";
            break;
    }
    return answer;
    
}

function getHumanChoice() {
    let answer = prompt("Enter your choice: ");
    if (answer.toLowerCase() === "rock") {
        answer = "rock";
    }
    else if (answer.toLowerCase() === "paper") {
        answer = "paper";

    }
    else if (answer.toLowerCase() === "scissors") {
        answer = "scissors";
        
    }
    else {
        return "The answer is wrong: you must have entered - rock, paper, scissors"
    }
    return answer
}







function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    
    const body = document.querySelector('body');
    const rock = document.createElement("button");
    rock.textContent = 'rock';
    
    const paper = document.createElement("button");
    paper.textContent = 'paper';
    const scissors = document.createElement("button");
    scissors.textContent = 'scissors';
    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanSelection = button.textContent;
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        });
    });
    function playRound(humanChoice, computerChoice) {
        
        loses_to = {
            "rock": "scissors",
            "paper": "rock",
            "scissors": "paper",
        };
        if (humanChoice == loses_to[computerChoice]) {
            computerScore += 1;
            followParagraph.textContent = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}`;
        }
        else if (computerChoice == loses_to[humanChoice]) {
            humanScore += 1;
            followParagraph.textContent = `Computer loses! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
            
        }
        else {
            followParagraph.textContent = `${humanChoice} - ${computerChoice} => draw`;

        }
        refreshTableau();

        if (humanScore == 5 || computerScore == 5) {
            if (humanScore > computerScore) {
                followParagraph.textContent = "";
                score.textContent = `Human wins! Score: ${humanScore}:${computerScore}`;
                getScoresToZero();
            }
            else {
                followParagraph.textContent = "";
                score.textContent = `Computer wins! Score: ${humanScore}:${computerScore} `;
                getScoresToZero();
            }
           
        }
        
        
    }
    function getScoresToZero() {
        humanScore = 0;
        computerScore = 0;
    }
    const tableau = document.createElement('div');
    const score = document.createElement('h1');
    function refreshTableau() {
        score.textContent = `Score - Player: ${humanScore}; Computer: ${computerScore}`;
    }
    refreshTableau();
    score.style.color = 'red';
    const followParagraph = document.createElement("p");
    followParagraph.style.color = "blue";
    tableau.appendChild(followParagraph);
    tableau.appendChild(score);
    body.appendChild(tableau);

    
   
    
}


playGame();
// console.log(playRound(humanSelection, computerSelection));// console.log(getHumanChoice())
// console.log(getComputerChoice())