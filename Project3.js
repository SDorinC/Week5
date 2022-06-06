var arr = ["Rock", "Paper", "Scissors"];

function calculateHand(number) {
    if (number < 0.33) {
        return arr[0];
    } else if (number >= 0.33 && number <= 0.66) {
        return arr[1];
    } else return arr[2];
}

function play() {
    var computer = Math.random();
    var user = Math.random();
    var computerHand = calculateHand(computer);
    var userHand = calculateHand(user);

    console.log("Computer choice: " + computerHand);
    console.log("User choice: " + userHand);

    if ((computerHand === "Rock" && userHand === "Rock") || (computerHand === "Paper" && userHand === "Paper") ||
        (computerHand === "Scissors" && userHand === "Scissors")) {
        console.log("It's a draw");
    } else if ((computerHand === "Rock" && userHand === "Scissors") || (computerHand === "Scissors" && userHand === "Paper") ||
        (computerHand === "Paper" && userHand === "Rock")) {
        console.log("User loses!")
    } else {
        console.log("User wins!")
    }

}

play();