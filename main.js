/** 
 * LÓGICA DEL JUEGO
 * 
 * 1- Crear a la máquina. Tenemos que crear una función que devuelva de forma aleatoria un string: "rock", "paper" or "scissors".
 * 
 * 2- Crear función del input del usuario.
 * Tenemos que buscar en el DOM cómo vamos a obtener la opción del ususario
 * 3- Comparar ambas respuestas de las funciones y devolver si ha ganado o perdido
 * 
*/

// variable para controlar la puntuación del usuario
let score = 0;


// funcion aleatoria

function appChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3); // 0, 1, 2
    return choices[randomNum];
}

function userWins(userChoice, appChoice) {
    return (
        userChoice === 'rock' && appChoice === 'scissors' ||
        userChoice === 'paper' && appChoice === 'rock' ||
        userChoice === 'scissors' && appChoice === 'paper'
    )
}

const paperChoice = document.querySelector('#paper');
const rockChoice = document.querySelector('#rock');
const scissorsChoice = document.querySelector('#scissors');
const gameBody = document.querySelector('.game-body');
const main = document.querySelector('main');


rockChoice.addEventListener('click', function () {
    const possibleChoices = ['paper', 'scissors'];

    const userChoice = 'rock';
    let appChoiceVar;

    do {
        appChoiceVar = appChoice();
    }
    while (userChoice === appChoiceVar);

    const possibleChoicesIndex = possibleChoices.indexOf(appChoiceVar);
    possibleChoices.splice(possibleChoicesIndex, 1);

    rockChoice.classList.add('choosed-item--user');
    document.getElementById(appChoiceVar).classList.add('choosed-item--com');
    document.getElementById(possibleChoices[0]).style.display = 'none';

    const gameOverMessage = document.createElement('div');
    gameOverMessage.classList.add('game-over-container');
    main.appendChild(gameOverMessage);

    if (!userWins(userChoice, appChoiceVar)) {
        // devolver mensaje de YOU LOST
        gameOverMessage.innerHTML = '<h2>YOU LOST!</h2>';
        // restar 1 punto al score
        score--;
    } else {
        // devolver mensaje de YOU WON
        gameOverMessage.innerHTML = '<h2>YOU WON!</h2>';
        // sumar 3 puntos al score
        score += 3;
    };
})

// paperChoice.addEventListener('click', function () {
//     const userChoice = 'paper';
//     userWins(userChoice, appChoice());
// })

// scissorsChoice.addEventListener('click', function () {
//     const userChoice = 'scissors';
//     userWins(userChoice, appChoice());
// })






