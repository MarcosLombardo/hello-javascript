/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Crea una clase que reciba dos propiedades

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 2. Añade un método a la clase que utilice las propiedades

Person.prototype.saludo = function () {
  return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
};

// 3. Muestra los valores de las propiedades e invoca a la función

const persona = new Person("Marcos", 33);
console.log(persona.saludo());

// 4. Añade un método estático a la primera clase

Person.especie = function () {
  return "Humano";
};

// 5. Haz uso del método estático

console.log(Person.especie());

// 6. Crea una clase que haga uso de herencia

class Clone extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }
}

const clon = new Clone("Marcos", 33, "Male");
console.log(clon);

// 7. Crea una clase que haga uso de getters y setters

class GetSetAnimal {
  #species;
  #gender;
  #age;

  constructor(species, gender, age) {
    this.#species = species;
    this.#gender = gender;
    this.#age = age;
  }

  // Getters
  get species() {
    return this.#species;
  }

  get gender() {
    return this.#gender;
  }

  get age() {
    return this.#age;
  }

  // Setters
  set species(value) {
    this.#species = value;
  }

  set gender(value) {
    this.#gender = value;
  }

  set age(value) {
    this.#age = value;
  }
}

const animal = new GetSetAnimal("Snake", "Female", 4);
console.log(animal);

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

console.log(animal.species); // Snake
console.log(animal.gender); // Female
console.log(animal.age); // 4

animal.species = "Cat";
animal.gender = "Male";
animal.age = 3;

console.log(animal.species); // Cat
console.log(animal.gender); // Male
console.log(animal.age); // 3

// 10. Sobrescribe un método de una clase que utilice herencia

class Animal {
  makeSound() {
    return "Sonido animal";
  }
}

class Dog extends Animal {
  makeSound() {
    return "¡Guau!";
  }
}

const myDog = new Dog();
console.log(myDog.makeSound());
