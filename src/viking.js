// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength;
  };
  receiveDamage = (damage) => {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage = (damage) => {
    this.health -= damage;

    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  };
  battleCry = () => {
    return 'Odin Owns You All!';
  };
}

// Saxon
class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health -= damage;

    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
  };
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking = (Viking) => {
    this.vikingArmy.push(Viking);
  };
  addSaxon = (Saxon) => {
    this.saxonArmy.push(Saxon);
  };
  vikingAttack = () => {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const resultOfAttack = randomSaxon.receiveDamage(randomViking.attack());

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }

    return resultOfAttack;
  };
  saxonAttack = () => {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const resultOfAttack = randomViking.receiveDamage(randomSaxon.attack());

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }

    return resultOfAttack;
  };
  showStatus = () => {};
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
