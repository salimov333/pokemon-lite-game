class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = {};
        this.counter = 0;
    }

    learnAttackSkill(newSkill) {
        this.skills[newSkill.attack] = newSkill;
        console.log(`${this.name} has learned the attack skill: ${newSkill.attack}`);
    }

    showStatus() {
        console.log(`${this.name} has ${this.health} health and ${this.magic} magic left`);
        if (this.counter >= 3) {
            console.log(`${this.name} won`);
        }
    }

    getMagics() {
        this.magic += Math.floor(Math.random() * 20);
    }

    hasEnoughMagic(skillName) {
        return this.magic >= this.skills[skillName].magic;
    }

    isAlive() {
        return this.health > 0;
    }

    attack(skillName, opponent) {
        if (!this.skills[skillName]) {
            console.log("Invalid skill name");
            return
        }

        if (!this.isAlive()) {
            console.log(`${this.name} is already dead!`);
            return;
        }

        if (!opponent.isAlive()) {
            console.log(`${opponent.name} is already dead!`);
            return;
        }

        if (!this.hasEnoughMagic(skillName)) {
            console.log(`${this.name} does not have enough magic to launch the attack!`);
            return;
        }

        this.magic -= this.skills[skillName].magic;
        console.log(`${this.name} launched the "${skillName}" attack successfully`);
        const damage = this.skills[skillName].damage
        opponent.health = Math.max(opponent.health - damage, 0);
        console.log(`${opponent.name} got ${damage} damage`);
        console.log(`${this.name} has ${this.magic} magic left`);
        this.counter++;
        this.showStatus();

        if (!opponent.isAlive()) {
            console.log(`${opponent.name} is killed!`);
            this.counter = 0;
            return;
        }
        opponent.showStatus();
    }

    heal(healingPoints) {
        if (this.isAlive()) {
            this.health += healingPoints;
            console.log(`${this.name} has been healed by ${healingPoints} points.`);
        } else {
            console.log(`${this.name} is already dead!`);
        }
    }

    restoreMagic(magicPoints) {
        if (this.isAlive()) {
            this.magic += magicPoints;
            console.log(`${this.name} has restored ${magicPoints} magic points.`);
        } else {
            console.log(`${this.name} is already dead!`);
        }
    }

    reset() {
        this.health = 100;
        this.magic = 100;
        this.skills = {};
        this.counter = 0;
        console.log(`${this.name} has been reset to its initial state.`);
    }
}

class AttackSkill {
    constructor(attack, damage, magic) {
        this.attack = attack;
        this.damage = damage;
        this.magic = magic;
    }
}



//Examples to test the Game:

// Create new Pokemons
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

// Create new skills that Pokemons can learn
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poisonSeed", 20, 20);

// Pikachu learning skills
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(poisonSeed);

// Bulbasaur learning skills
bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

console.log("---round-1");
// Pokemon start attacking each other
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poisonSeed", pikachu);
pikachu.attack("poisonSeed", bulbasaur);
bulbasaur.attack("lightning", pikachu);
pikachu.attack("lightning", bulbasaur);
pikachu.attack("poisonSeed", bulbasaur); // Bulbasaur is already dead!


console.log("---round-2");
//Test Pokemon status
pikachu.showStatus(); //pikachu has 60 health and 0 magic left
bulbasaur.showStatus(); //bulbasaur has 0 health and 55 magic left

// Test additional methods
pikachu.restoreMagic(25); // pikachu has restored 25 magic points.
bulbasaur.heal(50); // bulbasaur is already dead!
bulbasaur.reset(); //bulbasaur has been reset to its initial state.


// Pokemon continue attacking each other
pikachu.attack("lightning", bulbasaur); //pikachu does not have enough magic to launch the attack!
pikachu.restoreMagic(50); // pikachu has restored 50 magic points.
pikachu.attack("lightning", bulbasaur);
/*
pikachu launched the "lightning" attack successfully
bulbasaur got 40 damage
pikachu has 45 magic left
pikachu has 60 health and 45 magic left
bulbasaur has 60 health and 100 magic left 
*/

console.log("---round-3");
bulbasaur.learnAttackSkill(poisonSeed);
bulbasaur.attack("poisonSeed", pikachu);
pikachu.attack("poisonSeed", bulbasaur);
bulbasaur.attack("poisonSeed", pikachu);
pikachu.attack("lightning", bulbasaur); //pikachu does not have enough magic to launch the attack!
bulbasaur.attack("poisonSeed", pikachu); //bulbasaur won

pikachu.showStatus(); //pikachu has 0 health and 25 magic left
bulbasaur.showStatus(); //bulbasaur has 40 health and 40 magic left


console.log(pikachu);