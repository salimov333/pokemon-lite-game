# Pokemon Lite Game

This is a simplified Pokemon game implemented in JavaScript. It allows you to create Pokemon characters and engage them in battles by using various attack skills.

## Getting Started

To get started with the Pokemon Lite Game, follow these steps:

1. Clone the repository: `git clone https://github.com/salimov333/pokemon-lite-game.git`
2. Open the project folder: `cd pokemon-lite-game`
3. Open the index.js file in a code editor of your choice.

## Usage

### Creating a Pokemon

To create a new Pokemon character, use the `Pokemon` class constructor. Provide the name, health, and magic parameters.

```javascript
let pikachu = new Pokemon("pikachu", 120, 80);
```

### Learning Attack Skills

You can teach your Pokemon attack skills using the `learnAttackSkill()` method. Pass an instance of the `AttackSkill` class to add a new attack skill.

```javascript
let lightning = new AttackSkill("lightning", 40, 30);
pikachu.learnAttackSkill(lightning);
```

### Attacking an Opponent

Use the `attack()` method to make your Pokemon attack an opponent. Provide the skill name and the opponent Pokemon **instance**.

```javascript
pikachu.attack("lightning", bulbasaur);
```

### Healing and Magic Restoration

You can heal your Pokemon or restore its magic using the `heal()` and `restoreMagic()` methods respectively.

```javascript
pikachu.heal(50); // Heal Pikachu by 50 points
bulbasaur.restoreMagic(25); // Restore Bulbasaur's magic by 25 points
```

### Resetting a Pokemon

If you want to reset a Pokemon to its initial state, use the `reset()` method.

```javascript
pikachu.reset(); // Reset Pikachu's state
```

## Contributing

Contributions to the Pokemon Lite Game are welcome! If you find any issues or have ideas for improvements, please submit a pull request or open an issue.