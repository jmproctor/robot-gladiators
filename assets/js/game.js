var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
//"WIN" - Player robot has defeated all enemy-robots
//      *Fight all enemy-robots
//      *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less


var fight = function(enemyName) {
    //alert players that the round is starting
  while(playerHealth > 0 && enemyHealth > 0) {
  
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

   // if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
   //confirming the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
   //if yes(true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
   //subtracting money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    
  // if player chooses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

   //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked
     console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    }
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

   //Log a resulting message to the console so we know that it worked
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    if(playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    }

    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(enemyNames[i])
}