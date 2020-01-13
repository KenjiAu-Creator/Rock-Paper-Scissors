var pScore = 0;
var cScore = 0;

function computerPlay() {
    var Start = Math.floor(Math.random() * 3);
    if (Start == 0) {
        return 'rock'
    } else if (Start == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection) {
    computerSelection = computerPlay();
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        console.log("DRAW")
        return
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log("Paper beats rock, You Lose")
        cScore++;
        document.getElementById("cScore").innerHTML = cScore;
        return
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log("Rock beats scissors, You win")
        pScore++;
        document.getElementById("pScore").innerHTML = pScore;
        return
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log("Paper beats rock, You win")
        pScore++;
        document.getElementById("pScore").innerHTML = pScore;
        return
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log("DRAW")
        return
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log("Scissors beats paper, You Lose")
        cScore++;
        document.getElementById('cScore').innerHTML = cScore;
        return
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log("Rock beats scissors, You Lose")
        cScore++;
        document.getElementById("cScore").innerHTML = cScore;
        return
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log("Scissors beats paper, You win")
        pScore++;
        document.getElementById("pScore").innerHTML = pScore;
        return
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        console.log("DRAW")
        return
    }
}

var Rock = document.querySelector('#rock');
Rock.addEventListener('click', function(){playRound('rock')}, false);

var Paper = document.querySelector('#paper');
Paper.addEventListener('click', function(){playRound('paper')}, false);

var Scissors = document.querySelector('#scissors');
Scissors.addEventListener('click', function(){playRound('scissors')}, false);

if(pScore == 5) {
    alert("Player has won 5 games");
}