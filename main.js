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
const score = 0;
const choices = ['rock', 'paper', 'scissors'];


// funcion aleatoria
function appChoice() {
    const randomNum = Math.floor(Math.random() * 3); // 0, 1, 2
    return choices[randomNum];
}

function userChoice() {
    const paperChoice = document.querySelector('.game-body__circle-container-paper');
    const rockChoice = document.querySelector('.game-body__circle-container-rock');
    const scissorsChoice = document.querySelector('.game-body__circle-container-scissors');
    const gameBody = document.querySelector('.game-body__circle-container-scissors');

    paperChoice.addEventListener('click', function () {
        console.log( choices[1]);


    })


}
userChoice();
