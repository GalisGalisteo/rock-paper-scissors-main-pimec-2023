function userWins(userChoice, appChoice) {
    const result = {
        won: false,
        lost: false,
        tie: false,
    }
    if (
        userChoice === 'rock' && appChoice === 'scissors' ||
        userChoice === 'paper' && appChoice === 'rock' ||
        userChoice === 'scissors' && appChoice === 'paper'
    ) {
        result.won = true;
        return result;
    } else if (userChoice === appChoice) {
        result.tie = true;
        return result;
    }
    result.lost = true;
    return result;

}

console.log(userWins('paper', 'paper'));
console.log(userWins('paper', 'rock'));
console.log(userWins('paper', 'scissors'));