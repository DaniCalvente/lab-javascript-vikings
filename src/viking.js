// Soldier
class Soldier {
  constructor(healthParam, strengthParam) {
    this.health = healthParam;
    this.strength = strengthParam;
  }
  attack () {
    return this.strength
  }
  receiveDamage ( damage ) {
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (nameParam, healthParam, strengthParam ) {
    super (healthParam, strengthParam)
    this.name= nameParam
  }
  receiveDamage (damage) {
    this.health = this.health - damage;
    if ( this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry () {
    return "Odin Owns You All!"
  }
  
}



// Saxon
class Saxon extends Soldier {
  constructor( healthParam, strengthParam ){
    super (healthParam, strengthParam)

  }

  receiveDamage (damage) {
    this.health = this.health - damage;
    if ( this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }

}

// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  newViking = new Viking
  addViking ( newViking ) {
    this.vikingArmy.push (newViking)
  }

  newSaxon = new Saxon
  addSaxon (newSaxon) {
    this.saxonArmy.push (newSaxon)
  }

  vikingAttack ( ) {
    
  }

  saxonAttack ( ) {

  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
