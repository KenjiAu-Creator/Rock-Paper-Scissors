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
        document.getElementById("Round").innerHTML = "Draw!";
        return
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        document.getElementById("Round").innerHTML = "Paper beats rock, you lose";
        cScore++;
        document.getElementById("cScore").innerHTML = cScore;
        if(cScore == 5) {
            alert("Computer has won");
        }
        return
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        document.getElementById("Round").innerHTML = "Rock beats scissors, you win";
        pScore++;
        document.getElementById("pScore").innerHTML = pScore;
        if(pScore == 5) {
            alert("Player has won");
        }
        return
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        document.getElementById("Round").innerHTML = "Paper beats rock, you win";
        pScore++;
        document.getElementById("pScore").innerHTML = pScore;
        if(pScore == 5) {
            alert("Player has won");
        }
        return
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        document.getElementById("Round").innerHTML = "Draw!";
        return
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        document.getElementById("Round").innerHTML = "Scissors beats paper, you lose";
        cScore++;
        document.getElementById('cScore').innerHTML = cScore;
        if(cScore == 5) {
            alert("Computer has won");
        }
        return
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        document.getElementById("Round").innerHTML = "Rock beats scissors, you lose";
        cScore++;
        document.getElementById("cScore").innerHTML = cScore;
        if(cScore == 5) {
            alert("Computer has won");
        }
        return
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        document.getElementById("Round").innerHTML = "Scissors beats paper, you win";
        pScore++;
        document.getElementById("pScore").innerHTML = pScore;
        if(pScore == 5) {
            alert("Player has won");
        }
        return
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        document.getElementById("Round").innerHTML = "Draw!"
        return
    }
}

var Rock = document.querySelector('#rock');
Rock.addEventListener('click', function(){playRound('rock')}, false);

var Paper = document.querySelector('#paper');
Paper.addEventListener('click', function(){playRound('paper')}, false);

var Scissors = document.querySelector('#scissors');
Scissors.addEventListener('click', function(){playRound('scissors')}, false);

var Reset = document.querySelector("#reset");
Reset.addEventListener("click",() => {
    pScore = 0;
    document.getElementById("pScore").innerHTML = pScore;
    cScore = 0;
    document.getElementById("cScore").innerHTML = cScore;
});