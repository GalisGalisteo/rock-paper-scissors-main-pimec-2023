# Reto JavaScript Pair Programming PIMEC 2023

[URL del challenge](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH)
[Demo de la app](https://yasertarek.github.io/rock-paper-scissors//)

Os adjunto la demo para que veaís fácilmente como funciona la app. No inspeccioneis el código, ni siquiera por que hay _algo_ que no os sale. Prefiero que me llaméis a mi.

1. Escribir con lenguaje natural una idea de lo que tiene que ocurrir en esta aplicación. Podéis escribirlo en el mismo README.md más abajo
2. En principio todo el CSS necesario y maquetación ya está implementado. Pero puedes añadir tus clases CSS, estilos en línea a partir de la propiedad .style, etc.
3. Pensad bien qué variables de estado tiene está aplicación. Codificad previamente la lógica de piedra-papel-tijeras en funciones JavaScript, no lo mezcléis con el DOM - [algoritmo](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)
4. No os preocupéis por las animaciones de la demo, no hay por qué implementarlas en una primera instancia! Aunque el fichero style.css os puede dar una idea de qué clases añadir o eliminar para implementar más fácil la app

## Pregunta 1: Describe con lenguaje natural que tiene que hacer la app.

1. La app tiene que ser capaz de detectar qué opción ha elegido el usuario (piedra, papel o tijeras).
2. La máquina tiene que ofrecer una opción aleatoria, entre las mismas opciones que tiene el usuario.
3. Hay que comparar la opción elegida por el usuario con la de la máquina y decir si ha ganado, empatado o perdido el usuario.
4. Cuando el usuario gana, se tiene que actualizar la puntuacion, añadiendo 3 puntos más cada vez que gane y quitar 1 punto cada vez que pierda. Si empatan, no se suma ni se resta puntuación.
5. Al finalizar una jugada, tiene que aparecer un mensaje diciendo si ha ganado o ha perdido. Mediante un botón se tiene que dar la opción de poder volver a jugar.
6. Cuando se le da al botón "rules", tiene que aparecer una imagen con las normas del juego.