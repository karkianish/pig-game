var scores, roundScore, activePlayer, _btnRoll;


scores = [0, 0];
roundScore = 0;
activePlayer = 0;

_btnRoll = document.getElementById('btn-roll');
var _imgDice = document.getElementById('dice');
_imgDice.style.display = 'none';


_btnRoll.addEventListener('click', function(){
  const rolledNum = Math.floor(Math.random() * 6) + 1;

  _imgDice.style.display = 'block';
  _imgDice.src = `dice-${rolledNum}.png` 
  
})