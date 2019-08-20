/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


class GameObject {
  constructor(gameAttrs) {
    this.createdAt = gameAttrs.createdAt;
    this.name = gameAttrs.name;
    this.dimensions = gameAttrs.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`
  }
}

class CharacterStats extends GameObject {
  constructor(charAttrs) {
    super(charAttrs)
    this.healthPoints = charAttrs.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humanAttrs) {
    super(humanAttrs)
    this.team = humanAttrs.team;
    this.weapons = humanAttrs.weapons;
    this.language = humanAttrs.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

// function Villain(villainAttrs) {
//   Humanoid.call(this, villainAttrs);
// }

// Villain.prototype = Object.create(Humanoid.prototype);
// Villain.prototype.shout = function() {
//   return `${this.name}: FOR THE HORDE!`
// }
// Villain.prototype.attack = function(char) {
//   if (char.healthPoints <= 0) {
//     return `${char.name}'s HP fell below 0. They are dead.`
//   } else {
//     char.healthPoints = char.healthPoints - 7
    
//     if (char.healthPoints <= 0) {
//       return `${char.name}'s HP fell below 0. They are dead.`
//     } else {
//       return `${char.name}'s HP is now ${char.healthPoints}`
//     }
//   }
// }

// function Hero(heroAttrs) {
//   Villain.call(this, heroAttrs);
// }

// Hero.prototype = Object.create(Villain.prototype);
// Hero.prototype.shout = function() {
//   return `${this.name}: FOR THE ALLIANCE!`
// }

// -----------------------------------------------------------------------------------------------------------------
// Created Objects and console.log's

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// const villain = new Villain({
//   healthPoints: 21,
//   name: 'Thrall'
// });

// const hero = new Hero({
//   healthPoints: 16,
//   name: 'Anduin'
// });

// console.log(villain.shout());
// console.log(hero.shout());
// console.log(villain.attack(hero));
// console.log(hero.attack(villain));
// console.log(villain.attack(hero));
// console.log(hero.attack(villain));
// console.log(villain.attack(hero));