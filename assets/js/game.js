

//Game States
//"WIN" - Player robot has defeated all enemy-robots
//      *Fight all enemy-robots
//      *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less


var fight = function(enemy) {
    //alert players that the round is starting
  while(playerInfo.health > 0 && enemy.health > 0) {
  
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

   // if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
   //confirming the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
   //if yes(true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
   //subtracting money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerMoney", playerInfo.money);
        break;
      }
    }

  // if player chooses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

   //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
    enemy.health = Math.max(0, enemy.health - damage);

    //Log a resulting message to the console so we know that it worked
     console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      break;
    }
    else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack)
    playerInfo.health = Math.max(0, playerInfo.health - damage);

   //Log a resulting message to the console so we know that it worked
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

    if(playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    }

    else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
  }
};

var startGame = function () {
  //resets player stats
  playerInfo.reset();

  for(var i = 0; i < enemyInfo.length; i++) {
   if (playerInfo.health > 0) {
      // lets player know what round they are in, remember that arrays start at 0
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
      
      //picks new enemy to fight based on the index of the enemyNames array
      var pickedEnemyObj = enemyInfo[i];

      //reset enemyHealth before starting a new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyObj);
      // if player is still alive and we are not at the last enemy in the array, offer shop
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to go to the shop
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        //if yes, take them to the shop() function
        if (storeConfirm) {
          shop();
        }
      }
    }
      else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  //play again
  endGame();
};

//function to end the entire game
var endGame = function() {
  //if player is still alive, player wins!
 if ([playerInfo.health > 0]) {
   window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
 } else {
   window.alert("You've lost your robot in battle.");
 }
  //asks the player if they want to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
} 

//Shop function
var shop = function() {
  //ask the player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE": //new case
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
    case "LEAVE": // new case
    case "leave":
      window.alert("Leaving the store.");

      //do nothing, so the function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");

      //call shop() again to force player to picj a valid option
      shop();
      break;
  }
};

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}

//function to set name
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + name);
  return name;
}

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  }
  };
  
  console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
  
  var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14),
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14),

    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14),

    }
  ];

//starts the game when the page loads
startGame();