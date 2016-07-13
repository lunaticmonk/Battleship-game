/*var location1,location2,location3;
var guess;
var guesses = 0,hits = 0;
var isSunk = false;

var randomLoc = Math.floor(Math.random() * 5);
location1 = randomLoc;
location2 = location1 + 1;
location3 = location2 + 1;

while(isSunk==false){
	guess = Number(prompt("Make a guess",""));
	if(guess < 0 || guess > 6){
		alert("Enter a valid input");
	}

	else{
		guesses++;

		if(guess==location1 || guess==location2 || guess==location3){
			alert("HIT");
			hits++;
			if(hits==3){
			isSunk = true;
			alert("Your battleship is Sunk");
		}

	}	
		else alert("MISS");
		
	}

}

var stats = "You took " + guesses + " guesses to sink the battleship," + "which means that your shooting accuracy was " + (3/guesses);
alert(stats);
*/

/*var fiat = {
	make:"Fiat",
	started:false,
	fuel: 0,
	start: function(){
		this.started=true;
	},
	stop: function(){
		this.started=false;
	},
	drive : function(){
		if(this.started){
			if(this.fuel>0){
			alert("Zoom Zoom!");
			this.fuel = this.fuel -1;}
			else{
			alert("Uh oh out of fuel! :/");
			this.stop();}
		}
		else{
			alert("Start the engine first.");
		}
	},
	addFuel : function(amount){
		this.fuel = this.fuel + amount;
		alert(amount + " of litres of fuel added successfully");
	}
};
fiat.start();
fiat.addFuel(10);
fiat.drive();
fiat.drive();
	displayHit: function(msg){
		var hit = document.
	}
	
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
*/

function parseGuess(guess){
	var alphabet = ["A","B","C","D","E","F","G"];
	if(guess === null || guess.length!==2){
		alert("Oops you dont seem to be interested!Please enter a letter and a number");
	}
	else
	{
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var coloumn = guess.charAt(1);

		if(isNaN(row) || isNaN(coloumn)){
			alert("Oops,The input isnt on the board");
		}
		else if(row < 0 || row >=model.boardSize || coloumn<0 || coloumn >=model.boardSize)
			alert("Think you should read the instructions first");
		else
			return row+coloumn;
	}

	return null;

}

//View object
var view = {
	displayMessage: function(msg){
		var messageArea = document.getElementById('messageArea');
		messageArea.innerHTML = msg;
	},
	displayHit: function(location){		
		var cell = document.getElementById(location);
		cell.setAttribute("class","hit");
	},
	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class","miss");
	}
	
};
//Model object
var model = {
	boardSize: 7,
	numShips: 3,
	shipLength:3,
	shipSunk: 0,

	ships: [{locations:["06","16","26"],hits:["","",""]},
			{locations:["24","34","44"],hits:["","",""]},
			{locations:["10","11","12"],hits:["","",""]}],

	fire: function(guess){
		for(var i=0;i<this.numShips;i++){
			var ship = this.ships[i];
			locations = ship.locations;
			var index = locations.indexOf(guess);
			if(index>=0){
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT");
				if(this.isSunk(ship)){
					view.displayMessage("You sank my  battleship");
					this.shipSunk++;
				}
				return true; 
			}
		}
		view.displayMiss(guess);
		view.displayMessage("MISS");
		return false;
	},

	isSunk: function(ship){
		for(i=0;i<this.shipLength;i++){
			if(ship.hits[i]!=="hit")
				return false;
		}
		return true;
	}
};

var controller = {
	guesses: 0,
	processGuess: function(guess){
		var location = parseGuess(guess);
		if(location){
			this.guesses++;
			var hit = model.fire(location);
			if(hit && model.shipSunk === model.numShips)
				view.displayMessage("You Sank all my battleships in " + this.guesses + " guesses.");
		}
	}
};

//init and handle
function init(){
	var fireButton = document.getElementById('firebtn');
	fireButton.onclick = handleFireButton;
	
}

function handleFireButton(){
	var guessInput = document.getElementById('guessInput');
	var guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value = "";
}

window.onload = init;