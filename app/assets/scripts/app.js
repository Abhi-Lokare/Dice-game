/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gameStatus;
init(); //Initialize the game.

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gameStatus){ //to check weather the game is running currently?

      //1.generate Random number.
var dice = Math.floor(Math.random()*6 + 1); //generate a random number between 1 to 6.
      //2.Display the Result.(i.e dice)
var diceDom = document.querySelector('.dice'); 
    diceDom.style.display = 'block';
    diceDom.src = './assets/images/dice-' + dice + '.png';

      //3.Update the round score IF the rolled number was NOT 1.
       if(dice !== 1){
           //1.Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;    
       } else{
          nextplayer();
       }
    }   
       
    });

    document.querySelector('.btn-hold').addEventListener('click', function(){
        
        if(gameStatus){ ////to check weather the game is running currently?

        //1.Current score should be added to the global score.
        scores[activePlayer] += roundScore;

        //2.Update the score in UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //3.Winner of the game.
        if(scores[activePlayer] >= 20){
            //announce the Winner.
            document.querySelector('#name-' + activePlayer).textContent = 'winner!!';
            document.querySelector('.dice').style.display = 'none'; //hide the dice
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gameStatus = false; //when the player is won the game should end and no functionality should be there for-
                                //-the ROLL and HOLD Buttons

        } else{
        //4.Next players turn.
        nextplayer();
        }
    }  
});

    //Implementing the "New Game" button functions

    document.querySelector('.btn-new').addEventListener('click',function(){
        //Start the New Game
        init();
    })


// following DRY principle creating "Next Player's turn" function

function nextplayer(){
    //2.Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //toggle between players
    //make the roundScore zero.
    roundScore = 0;
    //when players roll a 1 then make current scores zero for both.  
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //toggle the "active" class between players.
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //hide the dice
    document.querySelector('.dice').style.display = 'none'
}

//New game
function init(){
scores = [0,0]; // To keep track of the scores.
roundScore = 0;
activePlayer = 0; //to keep track of current player.

gameStatus = true; //declared globally and its a state variable.

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

document.querySelector('.dice').style.display = 'none'; //hide the dice at the start

//assign the players their name back to them from removing "Winner tag"
document.querySelector('#name-0').textContent = 'Player-1';
document.querySelector('#name-1').textContent = 'Player-2';

//remove all the classes from winner and add "active" class to the "player-1"
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}


















