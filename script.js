const startGameBtn = document.querySelector("#start-game");

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

const computerOptions = ["R", "P", "S"];

let keepPlaying = true;

while (keepPlaying) {
    let userOptions = window.prompt("Enter R, P, or S:");

    computerOptions

    if (!userOptions) {
        return;
    }

    if (!computerOptions.includes(userOptions)) {
        window.alert("Please make a valid choice");
    } else {
        if (userOptions === "R") {
            stats.count.rock++;
        } else if (userOptions === "P") {
            stats.count.paper++;
        } else if (userOptions === "s") {
            stats.count.scissors++;
        }
    }

    computerOptions[Math.floor(Math.random() * computerOptions.length)]

    if (!confirm("Do you want to keep playing?")) {
        keepPlaying = false;
    }
}

userOptions = userOptions.toUpperCase();



}

//Array of options for computer to pick from


//loop until user chooses to stop

//ask user to choose

//if user presses cancel, immediately end function

//check that user has made a valid choice

//get random index from array of options

//if choises are the same, it's a tie

//check every win condition for the player

//if above conditions failed, assume player lost

//ask user to play again

//print stats with line breaks


//run the game
startGameBtn.addEventListener('click', startGame);
startGame();

