var field = document.querySelectorAll('.field1');
var btn = document.getElementById('reset');
var btn2 = document.getElementById('reset2');
var dialog = document.getElementById('dialog');
var black = document.getElementById('black');
var origBoard = [0,1,2,3,4,5,6,7,8];
var huPlayer = "O";
var aiPlayer = "X";
var flag = true;
const main_f = () => {
    firstStep();
    for(let i = 0; i < field.length; i++){
        field[i].addEventListener('click', function (){
            if((field[i].textContent == '')&&(flag == true)){
                // field[i].innerHTML = 'X';
                flag = false; 
            }
            if((field[i].textContent == '')&&(flag == false)){
                field[i].innerHTML = 'O';
                origBoard[i] = 'O';
                flag = true;
                bot();
            }
            if((field[0].textContent == 'O' && field[1].textContent == 'O' && field[2].textContent == 'O')||(field[3].textContent == 'O' && field[4].textContent == 'O' && field[5].textContent == 'O')||(field[6].textContent == 'O' && field[7].textContent == 'O' && field[8].textContent == 'O')||(field[0].textContent == 'O' && field[3].textContent == 'O' && field[6].textContent == 'O')||(field[1].textContent == 'O' && field[4].textContent == 'O' && field[7].textContent == 'O')||(field[2].textContent == 'O' && field[5].textContent == 'O' && field[8].textContent == 'O')||(field[0].textContent == 'O' && field[4].textContent == 'O' && field[8].textContent == 'O')||(field[2].textContent == 'O' && field[4].textContent == 'O' && field[6].textContent == 'O')){
                var nolik = parseInt(document.getElementById('nolik').textContent, 10);
                document.getElementById('nolik').innerHTML = `${nolik + 1}`;
                open_modal('Circle');
                reset_field();
            }
            if((field[0].textContent == 'X' && field[1].textContent == 'X' && field[2].textContent == 'X')||(field[3].textContent == 'X' && field[4].textContent == 'X' && field[5].textContent == 'X')||(field[6].textContent == 'X' && field[7].textContent == 'X' && field[8].textContent == 'X')||(field[0].textContent == 'X' && field[3].textContent == 'X' && field[6].textContent == 'X')||(field[1].textContent == 'X' && field[4].textContent == 'X' && field[7].textContent == 'X')||(field[2].textContent == 'X' && field[5].textContent == 'X' && field[8].textContent == 'X')||(field[0].textContent == 'X' && field[4].textContent == 'X' && field[8].textContent == 'X')||(field[2].textContent == 'X' && field[4].textContent == 'X' && field[6].textContent == 'X')){
                var krest = parseInt(document.getElementById('krestik').textContent, 10);
                document.getElementById('krestik').innerHTML = `${krest + 1}`;
                open_modal('Cross');
                reset_field();
            }
            
        })
        console.log('re '+i);
    }
}
main_f();
function bot(){

    if((flag == true)){
        var r = minimax(origBoard, aiPlayer).index;
        field[r].innerHTML = 'X';
        origBoard[r] = 'X';
        flag = false;
    }
    else{
        reset_field();
    }
}

function rand(max) {
    return Math.floor(Math.random() * max);
}

function firstStep(){
    var r = rand(9);
    field[r].innerHTML = 'X';
    origBoard[r] = 'X';
}

btn.addEventListener('click', function (){
    for(let i = 0; i < field.length; i++){
        field[i].innerHTML = '';
    }
    origBoard = [0,1,2,3,4,5,6,7,8];
    flag = true;
    firstStep();
});
btn2.addEventListener('click', function (){
    for(let i = 0; i < field.length; i++){
        field[i].innerHTML = '';
    }
    dialog.style.display = 'none';
    black.style.display = 'none';
    origBoard = [0,1,2,3,4,5,6,7,8];
    flag = true;
    firstStep();
});
function reset_field(){
    for(let i = 0; i < field.length; i++){
        field[j].innerHTML = '';
    }
    flag = true;
    origBoard = [0,1,2,3,4,5,6,7,8];
}
function open_modal(winner){
    document.getElementById('text').innerHTML = 'Winner is ' + winner;
    dialog.style.display = 'flex';
    black.style.display = 'flex';
}

function minimax(newBoard, player){
    
    var availSpots = emptyIndexies(newBoard);
  

    if (winning(newBoard, huPlayer)){
       return {score:-10};
    }
      else if (winning(newBoard, aiPlayer)){
      return {score:10};
      }
    else if (availSpots.length === 0){
        return {score:0};
    }
  

    var moves = [];
  

    for (var i = 0; i < availSpots.length; i++){

      var move = {};
        move.index = newBoard[availSpots[i]];
  

      newBoard[availSpots[i]] = player;
  

      if (player == aiPlayer){
        var result = minimax(newBoard, huPlayer);
        move.score = result.score;
      }
      else{
        var result = minimax(newBoard, aiPlayer);
        move.score = result.score;
      }
  

      newBoard[availSpots[i]] = move.index;
  

      moves.push(move);
    }
  

    var bestMove;
    if(player === aiPlayer){
      var bestScore = -10000;
      for(var i = 0; i < moves.length; i++){
        if(moves[i].score > bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }else{
  

      var bestScore = 10000;
      for(var i = 0; i < moves.length; i++){
        if(moves[i].score < bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
  

    return moves[bestMove];
  }
  

  function emptyIndexies(board){
    return  board.filter(s => s != "O" && s != "X");
  }
  

  function winning(board, player){
   if (
          (board[0] == player && board[1] == player && board[2] == player) ||
          (board[3] == player && board[4] == player && board[5] == player) ||
          (board[6] == player && board[7] == player && board[8] == player) ||
          (board[0] == player && board[3] == player && board[6] == player) ||
          (board[1] == player && board[4] == player && board[7] == player) ||
          (board[2] == player && board[5] == player && board[8] == player) ||
          (board[0] == player && board[4] == player && board[8] == player) ||
          (board[2] == player && board[4] == player && board[6] == player)
          ) {
          return true;
      } else {
          return false;
      }
  }
