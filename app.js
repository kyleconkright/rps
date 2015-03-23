//Set vars
var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var resetBtn = document.getElementById('reset');
var compMove = document.getElementById('compMove');
var playerScore = document.getElementById('playerScore');
var computerScore = document.getElementById('computerScore');
var theResult = document.getElementById('result');


var playerWins = 0;
var computerWins = 0;



function getComputerMove(){
	if(Math.random() < .33) {
		computerMove = 'rock';
	} else if(Math.random() < .66) {
		computerMove = 'paper' 
	} else {
		computerMove = 'scissors'
	}
	return computerMove;
}

function getWinner(playerMove, computerMove) {
	if(
		playerMove === 'rock' && computerMove === 'scissors' ||
		playerMove === 'paper' && computerMove === 'rock' ||
		playerMove === 'scissors' && computerMove === 'paper'
	) {
		return('player wins')
	} else if (playerMove === computerMove) {
		return('a tie') 
	} else {
		return('computer wins')
	}
	compMove.innerHTML = computerMove;
}



function theGame(playerMove) {	

	getComputerMove();
	winner = getWinner(playerMove, computerMove);
	compMove.innerText = computerMove;
	theResult.innerText = winner;
	
		if(winner === 'player wins') {
			playerWins++;
			playerScore.innerText = playerWins;
			if(playerWins === 5 && computerWins <= 2){
				theResult.innerText = 'What a blowout!';
				resetBtn.innerText = 'Do it Again!';	
				resetBtn.style.display = 'inline';
			}
			else if (playerWins === 5 && computerWins === 4) {
				theResult.innerText = 'Wow! You won by 1 point!';	
				resetBtn.innerText = 'Start Again';
				resetBtn.style.display = 'inline';
			}
			else if (playerWins === 5) {
				theResult.innerText = 'You won!';	
				resetBtn.innerText = 'Start Again';
				resetBtn.style.display = 'inline';
			}
		} else if(winner === 'computer wins') {
			computerWins++;
			computerScore.innerText = computerWins;
			if(computerWins === 5 && playerWins === 4) {
				theResult.innerText = 'You lost by 1 point!';
				resetBtn.innerText = 'Try Again';	
				resetBtn.style.display = 'inline';
			}
			else if (computerWins === 5 && playerWins <= 2) {
				theResult.innerText = 'Not Even Close! You should';
				resetBtn.innerText = 'try again, LOSER';	
				resetBtn.style.display = 'inline';
			} else if (computerWins === 5) {
				theResult.innerText = 'Game over. You lost.';
				resetBtn.innerText = 'Try Again Nerd';	
				resetBtn.style.display = 'inline';
			}
		} 

}



rockBtn.addEventListener('click', function() {
	if(playerWins < 5 && computerWins <5) {
		theGame('rock');
	}
});

window.addEventListener('keydown', function(event) {
	if(event.keyCode === 37 || event.keyCode === 82) {
		if(playerWins < 5 && computerWins <5) {
			theGame('rock');
		}
	}
});

paperBtn.addEventListener('click', function() {
	if(playerWins < 5 && computerWins <5) {
		theGame('paper');
	}
});

window.addEventListener('keydown', function(event) {
	if(event.keyCode === 38 || event.keyCode === 80) {
		if(playerWins < 5 && computerWins <5) {
			theGame('paper');
		}
	}
});

scissorsBtn.addEventListener('click', function() {
	if(playerWins < 5 && computerWins <5) {
		theGame('scissors');
	}
});

window.addEventListener('keydown', function(event) {
	if(event.keyCode === 39 || event.keyCode === 83) {
		if(playerWins < 5 && computerWins <5) {
			theGame('scissors');
		}
	}
});

resetBtn.addEventListener('click', function() {
	resetBtn.style.display = 'none';
	theResult.innerText = '';
	compMove.innerText = '';
	playerWins = 0;
	computerWins = 0;
	playerScore.innerText = playerWins;
	computerScore.innerText = playerWins;
});