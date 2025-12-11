let randomNum = Math.floor(Math.random() * 10) +1;

function submit() {
    let userGuess = document.getElementById("number").value;

    if(userGuess === "") {
        alert("Please enter a number!");
        return;
    }
    userGuess = Number(userGuess)

    if(userGuess<1 || userGuess >10) {
        alert("Number must be between 1 and 10!")
    return;
    }

    if(userGuess === randomNum) {
        alert("🎉 Congrulations! You guessed it right!")
        resetGame();
    } else if(userGuess < randomNum) {
        alert("📉 Too low! Try again.")
    }else if(userGuess > randomNum) {
        alert("📈 Too high! Try again.")
    }
}

function resetGame() {
    randomNum = Math.floor(Math.random() * 10) + 1;
    document.getElementById("number").value = "";
}