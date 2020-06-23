// változók kijelölése
var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;

// játék logika
while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number of 0-6)");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid  number!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("HIT!");

            if (guess == location1) {
                location1 = -1;
            } else if (guess == location2) {
                location2 = -1;
            } else if (guess == location3) {
                location3 = -1;
            }

            if (hits == 3) {
                isSunk = true;
                alert("HEY! You have sanked my ship!");
            }
        } else {
            alert("MISS");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);

alert(stats);