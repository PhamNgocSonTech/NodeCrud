function Character(name, hp, atk, defense, speed, counterRate) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.defense = defense;
  this.speed = speed;
  this.counterRate = counterRate;
  this.attack = function (target) {
    const damage = Math.max(this.atk - target.defense, 0);
    target.hp -= damage;
    console.log(
      `${this.name} tấn công ${target.name}, gây ra ${damage} sát thương. ${target.name} còn lại ${target.hp} máu.`
    );
    //   	Xử lý target phản công
    if (target.isAlive() && Math.random() < target.counterRate) {
      const counterDmg = Math.max(target.atk - this.defense, 0);
      //  Trừ HP của kẻ tấn công
      this.hp -= counterDmg;
      console.log(
        `${target.name} tấn công lại ${this.name}, gây ra ${counterDmg} sát thương. ${this.name} còn lại ${this.hp} máu.`
      );
    }
  };

  this.isAlive = function () {
    return this.hp > 0;
  };
}

function battleRound(attacker, defender) {
  attacker.attack(defender);
  if (defender.isAlive() && attacker.isAlive()) {
    defender.attack(attacker);
  }
}
function battle(char1, char2) {
  let round = 1;
  char1.speed = 20;
  char2.speed = 10;

  while (char1.isAlive() && char2.isAlive()) {
    console.log(`Round ${round}:`);

    if (char1.speed > char2.speed) {
      battleRound(char1, char2);
    } else if (char2.speed > char1.speed) {
      battleRound(char2, char1);
    } else {
      if (Math.rạndom() < 0.5) {
        battleRound(char1, char2);
      } else {
        battleRound(char2, char1);
      }
    }

    round++;
  }

  const winner = char1.isAlive() ? char1 : char2;
  console.log(`${winner.name} wins!`);
  return winner;
}

const tom = new Character("Tom", 1000, 50, 5, 30, 0.5);
const jerry = new Character("Jerry", 500, 20, 20, 30, 0.2);

battle(tom, jerry);
