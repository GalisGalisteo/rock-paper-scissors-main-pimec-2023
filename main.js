/** 
 * LÓGICA DEL JUEGO
 * 
 * 1- Crear a la máquina. Tenemos que crear una función que devuelva de forma aleatoria un string: "rock", "paper" or "scissors".
 * 
 * 2- Crear función del imput del usuario.
 * 
 * 3- Comparar ambas respuestas de las funciones y devolver si ha ganado o perdido
 * 
*/

// variable para controlar la puntuación del usuario
const score = 0;

// funcion aleatoria
function appChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3); // 0, 1, 2/ hola
    return choices[randomNum];
}

function userChoice() {
    
}

