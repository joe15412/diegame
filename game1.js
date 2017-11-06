"use strict"
function randomRollOfSize(numberOfSides) {
	return Math.floor (Math.random() * numberOfSides)+ 1;
}

function rollDice(numOfDice, sidesOfDice) {

	var diceTotal = 0;
	var diceRoll = [];

	for (var x = 0; x < numOfDice; x++) {
		var roll = randomRollOfSize(sidesOfDice);
		diceTotal += roll;
		diceRoll[x] = roll;
	}

	alert("You rolled a " + diceTotal + (diceRoll.length > 1 ? " ["+diceRoll+"]" : ""));

	return diceTotal;
}




function levelOneRoll() {
	var diceRoll = rollDice(2,4);
	
	if (diceRoll % 2 == 0) {
		alert('Strong with you, the Force is')
		window.open("diegame2.html", "_self")

	} else {
		alert("Much to learn you have..");

	}

	return diceRoll;
}



function levelTwoRoll() {

	var diceRoll = rollDice(2,6);
	if (diceRoll % 2 != 0) {
		alert('Strong with you, the Force is')
		window.open("diegame3.html", "_self")

	} else {
		alert("Do you even Jedi?");

	}

	return diceRoll;
}


function levelThreeRoll() {
	var diceRoll = rollDice(1,8);
	if (diceRoll === 1 || diceRoll===8) {
		alert('Strong with you, the Force is')
		window.open("diegame4.html", "_self")

	} else {
		alert("Do you even Jedi?");

	}

	return diceRoll;
}

function levelFourRoll() {
	var diceRoll = rollDice(2,10);
	if (diceRoll === 20) {
		alert('Strong with you, the Force is')
		window.open("diegame5.html", "_self")
	} else {
		alert("Do you even Jedi?");

	}

	return diceRoll;
}


function levelFiveRoll() {
	var diceRoll = rollDice(1,12);
	if (diceRoll === 1 || diceRoll===12) {
		alert('One more challenge, you have!')
		window.open("diegame6.html", "_self")

	} else {
		alert("Do you even Jedi?");

	}

	return diceRoll;
}

function levelSixRoll() {
	var diceRoll = rollDice(1,20);
	if (diceRoll === 20) {
		alert('Congrats, you are now a Jedi')

	} else {
		alert("Do you even Jedi?");

	}

	return diceRoll;
}