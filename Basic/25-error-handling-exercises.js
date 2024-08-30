/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Captura una excepción utilizando try-catch

let myExeption;

try {
  console.log(myExeption.name);
  console.log("Se realizó bien el bloque.");
} catch (error) {
  console.log("Se produjo el siguiente error: ", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
  console.log(myExeption.name);
  console.log("Se realizó bien el bloque.");
} catch (error) {
  console.log("Se produjo el siguiente error: ", error.message);
} finally {
  console.log("Se termina el código de todos modos.");
}

// 3. Lanza una excepción genérica

try {
  throw new Error("Esta es una excepcion genérica.");
  console.log("Este código no se ejecurtará porque se lanzó una excepción.");
} catch (error) {
  console.log("Se produjo el siguiente error: ", error.message);
} finally {
  console.log("Se termina el código de todos modos.");
}

// 4. Crea una excepción personalizada

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Excepción personalizada";
  }
}

// 5. Lanza una excepción personalizada

try {
  throw new CustomError("Este es un error personalizado.");
} catch (error) {
  console.log("Se produjo el siguiente error: ", error.message);
}

// 6. Lanza varias excepciones según una lógica definida

function checkNumber(value) {
  if (typeof value !== "number") {
    throw new TypeError("El valor debe ser un número.");
  }
  if (value < 0) {
    throw new RangeError("El número debe ser positivo");
  }
  return value;
}

try {
  console.log(checkNumber("texto"));
  console.log(checkNumber(-5));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error de tipo: ", error.message);
  } else if (error instanceof RangeError) {
    console.log("Error de tipo: ", error.message);
  } else {
    console.log("Error desconocido: ", error.message);
  }
}

// 7. Captura varias excepciones en un mismo try-catch

try {
  throw new RangeError("Este es un error de rango.");
  throw new TypeError("Este es un error de tipo.");
} catch (error) {
  console.log("Se produjo el siguiente error: ", error.message);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const values = ["10", "20", "30", "texto", "40.5"];

for (const value of values) {
  try {
    const floatValue = parseFloat(value);
    if (isNaN(floatValue)) {
      throw new Error("No se puede convertir a float.");
    }
    console.log(`Valor convertido: ${floatValue}`);
  } catch (error) {
    console.log(`Error al convertir "${value}": ${error.message}`);
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function checkProperty(obj, property) {
  if (!obj.hasOwnProperty(property)) {
    throw new CustomError(`El objeto no tiene la propiedad "${property}".`);
  }
  return obj[property];
}

const myObject = { name: "Marcos" };

try {
  console.log(checkProperty(myObject, "age"));
} catch (error) {
  console.log("Se produjo el siguiente error: ", error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function retryOperation(operation, retries = 10) {
  let attempt = 0;

  while (attempt < retries) {
    try {
      return operation();
    } catch (error) {
      attempt++;
      console.log(`Intento ${attempt} fallido: ${error.message}`);
      if (attempt >= retries) {
        throw new Error("Número máximo de intentos alcanzado.");
      }
    }
  }
}

function unreliableOperation() {
  if (Math.random() < 0.7) {
    throw new Error("Error en la operación.");
  }
  return "Operación exitosa.";
}

try {
  console.log(retryOperation(unreliableOperation));
} catch (error) {
  console.log("Se produjo el siguiente error: ", error.message);
}
