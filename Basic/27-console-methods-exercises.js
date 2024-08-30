/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// 1. Crea un función que utilice error correctamente

function errorLog() {
  console.error("Este es un mensaje de error");
}

errorLog();

// 2. Crea una función que utilice warn correctamente

function warnLog() {
  console.warn("Este es un mensaje de advertencia");
}

warnLog();

// 3. Crea una función que utilice info correctamente

function infoLog() {
  console.info("Este es un mensaje de información");
}

infoLog();

// 4. Utiliza table

function tableLog() {
  const users = [
    { name: "Carlos", age: 43 },
    { name: "Juan", age: 40 },
  ];
  console.table(users);
}

tableLog();

// 5. Utiliza group

function groupLog() {
  console.group("Usuario:");
  console.log("Nombre: Marcos");
  console.log("Edad: 33");
  console.groupEnd();
}

groupLog();

// 6. Utiliza time

function timeLog() {
  console.time("Tiempo de ejecución");
  for (let i = 0; i < 1000000; i++) {}
  console.timeEnd("Tiempo de ejecución");
}

timeLog();

// 7. Valida con assert si un número es positivo

let number;
function validateLog(number) {
  console.assert(number > 0, "El número no es positivo");
}

validateLog(10);

// 8. Utiliza count

function countLog() {
  console.count("Conteo");
  console.count("Conteo");
  console.count("Conteo");
}

countLog();

// 9. Utiliza trace

function traceLog() {
  console.trace("Registro de la ejecución");
}

traceLog();

// 10. Utiliza clear

function clearLog() {
  console.clear();
}

clearLog();
