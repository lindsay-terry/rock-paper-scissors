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
//Array of options for computer to pick from
let computerOptions = ["R", "P", "S"];

let keepPlaying = true;
//loop until user chooses to stop
//ask user to choose
while (keepPlaying) {
    let userOptions = window.prompt("Enter R, P, or S:");


//if user presses cancel, immediately end function
    if (!userOptions) {
        return;
    }
//check that user has made a valid choice
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
//get random index from array of options
    alert(computerOptions[Math.floor(Math.random() * computerOptions.length)]);

    if (userOptions && computerOptions) {
        window.alert("It's a tie!");
        stats.count.ties++;
    } else if (userOptions === "R" && computerOptions === "S") {
        window.alert("You win!");
        stats.count.wins++;
    } else if (userOptions === "P" && computerOptions === "R") {
        window.alert("You win!");
        stats.count.wins++;
    } else if (userOptions === "S" && computerOptions === "P") {
        window.alert("You win!");
        stats.count.wins++;
    } else {
        window.alert("You lose!");
        stats.count.losses++;
    }

    if (!confirm("Do you want to keep playing?")) {
        keepPlaying = false;
    }
}

userOptions = userOptions.toUpperCase();



}














//if choises are the same, it's a tie

//check every win condition for the player

//if above conditions failed, assume player lost

//ask user to play again

//print stats with line breaks


//run the game
startGameBtn.addEventListener('click', startGame);
startGame();

