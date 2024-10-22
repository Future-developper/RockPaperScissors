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

    function playRound(humanChoice, computerChoice) {
        loses_to = {
            "rock": "scissors",
            "paper": "rock",
            "scissors": "paper",
        };
        if (humanChoice == loses_to[computerChoice]) {
            computerScore += 1;
            console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}`);
        }
        else if (computerChoice == loses_to[humanChoice]) {
            humanScore += 1;
            console.log(`Computer lose! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}`);
            
        }
        else {
            console.log("draw");

        }

        
        
    }
    
    
    for (let i=0;i<5;i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        
    }
    
    if (humanScore > computerScore) {
        console.log(`Human wins! Score: ${humanScore}:${computerScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(`Computer wins! Score: ${humanScore}:${computerScore} `);
    }
    else {
        console.log(`Draw! Score: ${humanScore}:${computerScore}`)
    }
}


playGame();
// console.log(playRound(humanSelection, computerSelection));// console.log(getHumanChoice())
// console.log(getComputerChoice())