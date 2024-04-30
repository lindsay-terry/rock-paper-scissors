const startGameBtn = document.querySelector("#start-game");
const statsArray =[];
const startGame = function() {
    //create object to store stats
    const stats = {
        wins: 0,
        losses: 0,
        ties: 0,
        totalChoices: {
            rock: 0,
            paper: 0,
            scissors: 0,
        }
    }
//Array of options for computer to pick from
let computerOptions = ["R", "P", "S"];

let keepPlaying = true;
//loop until user chooses to stop
//ask user to choose
while (keepPlaying) {
    let userOptions = window.prompt("Enter R, P, or S:");
    userOptions = userOptions.toUpperCase();


//if user presses cancel, immediately end function
    if (!userOptions) {
        return;
    }
//check that user has made a valid choice
    if (!computerOptions.includes(userOptions)) {
        window.alert("Please make a valid choice");
    } else {
        if (userOptions === "R") {
            stats.totalChoices.rock++;
        } else if (userOptions === "P") {
            stats.totalChoices.paper++;
        } else if (userOptions === "s") {
            stats.totalChoices.scissors++;
        }
        
        
    }
        

//get random index from array of options
    const random = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    window.alert(`The computer chose ${random}.`)

    if (userOptions === random) {
        window.alert("It's a tie!");
        stats.totalChoices.ties++;
    } else if (userOptions === "R" && random === "S") {
        window.alert("You win!");
        stats.totalChoices.wins++;
    } else if (userOptions === "P" && random === "R") {
        window.alert("You win!");
        stats.totalChoices.wins++;
    } else if (userOptions === "S" && random === "P") {
        window.alert("You win!");
        stats.totalChoices.wins++;
    } else {
        window.alert("You lose!");
        stats.totalChoices.losses++;
    }

    if (!confirm("Do you want to keep playing?")) {
        keepPlaying = false;
    }

    statsArray.push(stats);
}
    return statsArray;
}

const displayResults = function(statsArray) {
    const statsTable = document.querySelector('#stats-table');
    statsTable.innerHTML = '';

    for (let i = 0; i < statsArray.length; i++) {
        const currentStats = statsArray[i];
        const newTableRow = document.createElement("tr");

        const winsCell = document.createElement("td");
        winsCell.textContent = currentStats.stats.wins;
        newTableRow.append(winsCell);

        const lossesCell = document.createElement("td");
        lossesCell.textContent = currentStats.stats.losses;
        newTableRow.append(lossesCell);
    }
}


//run the game
startGameBtn.addEventListener('click', startGame);
// startGame();
displayResults();
