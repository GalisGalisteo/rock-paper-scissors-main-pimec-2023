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


let isPlaying = true;

let score = 0;

const main = document.querySelector('main');
const gameBody = document.querySelector('.game-body');
const rockChoice = document.querySelector('#rock');
const paperChoice = document.querySelector('#paper');
const scissorsChoice = document.querySelector('#scissors');

function appChoiceRandom() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function userWins(userChoice, appChoice) {
    if (
        userChoice === 'rock' && appChoice === 'scissors' ||
        userChoice === 'paper' && appChoice === 'rock' ||
        userChoice === 'scissors' && appChoice === 'paper'
    ) {
        return 1;
    } else if (userChoice === appChoice) {
        return 0;
    }
    return -1;

}

function playGame(userChoice, appChoice, nodeEvent) {

    rockChoice.style.display = 'none';
    paperChoice.style.display = 'none';
    scissorsChoice.style.display = 'none';

    nodeEvent.style.display = 'initial';

    if (appChoice === userChoice) {
        const duplicateNode = nodeEvent.cloneNode(true);
        gameBody.appendChild(duplicateNode);
        duplicateNode.classList.add('choosed-item--com', 'choosed-item--com--s4', 'duplicate-item');
    }

    nodeEvent.classList.add('choosed-item--user', 'choosed-item--user--s4');

    const appChoiceNode = document.getElementById(appChoice);
    appChoiceNode.style.display = 'initial';
    appChoiceNode.classList.add('choosed-item--com', 'choosed-item--com--s4');

    const gameOverContainer = document.createElement('div');
    gameOverContainer.classList.add('game-over-container');
    main.appendChild(gameOverContainer);

    const gameOverMessage = document.createElement('h2');
    gameOverContainer.classList.add('game-over__message');
    gameOverContainer.appendChild(gameOverMessage);

    const playAgainBtn = document.createElement('button');
    playAgainBtn.classList.add('btn__play-again');
    playAgainBtn.textContent = 'Play Again';
    gameOverContainer.appendChild(playAgainBtn);

    playAgainBtn.addEventListener('click', () => {
        resetGame();
    })

    const gameResult = userWins(userChoice, appChoice);

    if (gameResult === -1) {
        gameOverMessage.textContent = 'YOU LOST!';
        score--;
        isPlaying = false;
        updateScore()
    } else if (gameResult === 1) {
        gameOverMessage.textContent = 'YOU WON!';
        score += 3;
        isPlaying = false;
        updateScore()
    } else {
        gameOverMessage.textContent = "IT'S A TIE!";
        isPlaying = false;
        updateScore()
    }
}

function updateScore() {
    document.querySelector('span.header__value').textContent = score;
}

function resetGame() {
    isPlaying = true;

    rockChoice.style.display = 'initial';
    paperChoice.style.display = 'initial';
    scissorsChoice.style.display = 'initial';

    const userItems = document.querySelectorAll('.choosed-item--com.choosed-item--com--s4');
    userItems.forEach(element => {
        element.classList.remove('choosed-item--com', 'choosed-item--com--s4');
    });

    const appItems = document.querySelectorAll('.choosed-item--user.choosed-item--user--s4')
    appItems.forEach(element => {
        element.classList.remove('choosed-item--user', 'choosed-item--user--s4');
    });

    const gameOverContainer = document.querySelector('.game-over-container');
    gameOverContainer.remove();

    const duplicateItem = document.querySelector('.duplicate-item');
    if (duplicateItem) {
        duplicateItem.remove();
    }

    setupGame();
}

function showRules() {
    
    const rulesPopup = document.querySelector('.rules-popup');
    const overlay = document.querySelector('.overlay');

    document.querySelector('.rules-btn').addEventListener('click', () => {
        rulesPopup.classList.add('rules-popup--active');
        overlay.classList.add('overlay--active');
        document.querySelector('.close-icon').addEventListener('click', () => {
            rulesPopup.classList.remove('rules-popup--active');
            overlay.classList.remove('overlay--active');
        })
    })
}

function setupGame() {

    rockChoice.addEventListener('click', function () {
        if (isPlaying) {
            const appChoice = appChoiceRandom();
            playGame('rock', appChoice, rockChoice);
        }
    })

    paperChoice.addEventListener('click', function () {
        if (isPlaying) {
            const appChoice = appChoiceRandom();
            playGame('paper', appChoice, paperChoice);
        }
    })

    scissorsChoice.addEventListener('click', function () {
        if (isPlaying) {
            const appChoice = appChoiceRandom();
            playGame('scissors', appChoice, scissorsChoice);
        }
    })

    showRules();
}


window.onload = setupGame;
