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


var view = {
	displayMessage: function(msg){
		var messageArea = document.getElementById('messageArea');
		messageArea.innerHTML = msg;
	},
	displayHit: function(location){
		var cell = document.getElementById('location');
		cell.setAttribute("class","hit");
	},
	displayMiss: function(location){
		var cell = document.getElementById('location');
		cell.setAttribute("class","miss");
	},

};	
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
		else if(row < 0 || row >6 || coloumn<0 || coloumn >6)
			alert("Think you should read the instructions first");
		else
			return row+coloumn;
	}

	return null;
}

console.log(parseGuess("A0"));
console.log(parseGuess("B7"));
console.log(parseGuess("C3"));
console.log(parseGuess("D4"));