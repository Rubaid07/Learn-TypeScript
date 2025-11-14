class Animal {
  // name: string;
  // species: string;
  // sound: string;

  constructor(public name: string, public species: string, public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}
const dog = new Animal("Dogesh Bhai", "Dog", "Ghew Ghew");

const cat = new Animal("Oggy", "Cat", "Meow Meow");

dog.makeSound(); // Dogesh Bhai is making sound: Ghew Ghew
cat.makeSound(); // Oggy is making sound: Meow Meow
